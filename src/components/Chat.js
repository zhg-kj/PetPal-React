import { useEffect, useState } from "react";
import { Card, Title, Text, TextInput, Flex, Button } from "@tremor/react";

import { listMessage } from "../api/application/listMessage";
import { createMessage } from "../api/application/createMessage";
import { createNotification } from "../api/notification/createNotification";

export default function Chat({ application, user }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const messages = await listMessage(application.id);
        
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
  }, [application])

  const handleSend = async () => {
    try {
      const newMessage = {
        application: application.id,
        message: message
      }

      const newNotification = {
        user: user.is_seeker ? application.shelter : application.seeker,
        message: `New message in application for ${application.pet_name}.`,
        model_type: "Application",
        model_id: application.id
      }

      await createMessage(newMessage);
      await createNotification(newNotification);
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