import { useState } from "react";
import { Card, Title, Text, TextInput, Flex, Button } from "@tremor/react";

const chats = [
  {sender: 1, message: "Test 1"},
  {sender: 2, message: "Test 2"},
  {sender: 1, message: "Test 3"},
  {sender: 2, message: "Test 4"},
]

export default function Chat({ user }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {

  }

  return (
    <div className='flex flex-col gap-2'>
      {chats.map((chat) => {
        return (
          <Card>
            <Title>{chat.sender}</Title>
            <Text>{chat.message}</Text>
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