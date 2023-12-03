import { useState } from "react";
import { Card, Divider, Metric, NumberInput, Select, SelectItem, Subtitle, TextInput, Textarea, Title, Flex, Button } from "@tremor/react";
import { useNavigate } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";
import { createPet } from "../api/pet/createPet";

export default function AddPet({ user }) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [age, setAge] = useState(0);
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [medical, setMedical] = useState('');
  const [behavior, setBehavior] = useState('');
  const [needs, setNeeds] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');

  const handleSubmit = async () => {
    try {
      const pet = {
        name: name,
        type: type,
        age: age,
        size: size,
        status: "Available",
        description: description,
        medical_history: medical,
        behavior: behavior,
        needs: needs,
        image1: image1,
        image2: image2,
      }

      await createPet(pet);
      navigate('/manage/pets');
      window.location.reload();
    } catch {
      console.log("Couldn't create pet.")
    }
  }

  return (
    <MainLayout user={user}>
      <Metric>Add Pet</Metric>
      <Subtitle>Register a new pet to the shelter.</Subtitle>
      <Card className='mt-6'>
        <Title>Name</Title>
        <TextInput className='mt-2' onChange={(e) => setName(e.target.value)} />
        <Title className='mt-2'>Type</Title>
        <Select className='mt-2' enableClear={false} value={type} defaultValue='Dog' onValueChange={(type) => setType(type)}>
          <SelectItem value='Dog'>Dog</SelectItem>
          <SelectItem value='Cat'>Cat</SelectItem>
        </Select>
        <Title className='mt-2'>Age</Title>
        <NumberInput className='mt-2' value={age} onValueChange={(age)  => setAge(age)} min={0} />
        <Title className='mt-2'>Size</Title>
        <Select className='mt-2' enableClear={false} value={size} defaultValue='Small' onValueChange={(size) => setSize(size)}>
          <SelectItem value='Small'>Small</SelectItem>
          <SelectItem value='Medium'>Medium</SelectItem>
          <SelectItem value='Large'>Large</SelectItem>
        </Select>
        <Title className='mt-2'>Description</Title>
        <Textarea className='mt-2' onChange={(e) => setDescription(e.target.value)}/>
        <Title className='mt-2'>Medical History</Title>
        <Textarea className='mt-2' onChange={(e) => setMedical(e.target.value)}/>
        <Title className='mt-2'>Behavior</Title>
        <Textarea className='mt-2' onChange={(e) => setBehavior(e.target.value)}/>
        <Title className='mt-2'>Special Needs</Title>
        <Textarea className='mt-2' onChange={(e) => setNeeds(e.target.value)}/>
        <Title>Image 1</Title>
        <TextInput className='mt-2' onChange={(e) => setImage1(e.target.value)} />
        <Title>Image 2</Title>
        <TextInput className='mt-2' onChange={(e) => setImage2(e.target.value)} />
        <Divider />
        <Flex justifyContent='end' alignItems='center'>
          <Button onClick={handleSubmit}>Submit</Button>
        </Flex>
      </Card>
    </MainLayout>
  );
}