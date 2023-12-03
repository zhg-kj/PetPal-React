import { useEffect, useState } from "react";
import { Card, Title, Text, TextInput, Flex, Button } from "@tremor/react";

import { listMessage } from "../api/application/listMessage";
import { createMessage } from "../api/application/createMessage";

export default function Chat({ applicationId, user }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const messages = await listMessage(applicationId);
        
        messages.sort((a, b) => {
          const timeA = new Date(a.time);
          const timeB = new Date(b.time);
          
          return timeA - timeB;
        });

        setMessages(messages);
      } catch {
        console.log("Unable to fetch messages");
      }
    }

    fetchMessage();
  }, [])

  const handleSend = async () => {
    try {
      const newMessage = {
        application: applicationId,
        message: message
      }

      await createMessage(newMessage);
      window.location.reload();
    } catch {
      console.log("Unable to send message.");
    }
  }

  return (
    <div className='flex flex-col gap-2 items-start'>
      {messages.map((message) => {
        const date = new Date(message.time);
        const formattedDate = date.toDateString();

        const isUserMessage = message.sender === user.id;
        const cardClasses = `w-auto max-w-lg ${isUserMessage ? 'self-end' : ''}`;

        return (
          <Card key={message.id} className={cardClasses}>
            <Title>{message.sender_name}</Title>
            <Text>{formattedDate}</Text>
            <Text className='mt-2'>{message.message}</Text>
          </Card>
        )
      })}
      <Flex className='mt-4'>
        <TextInput onChange={(e) => setMessage(e.target.value)}/>
        <Button className='ml-2' onClick={handleSend}>Send</Button>
      </Flex>
    </div>
  );
}