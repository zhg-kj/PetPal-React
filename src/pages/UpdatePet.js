import { useState } from "react";
import { Card, Divider, Metric, NumberInput, Select, SelectItem, Subtitle, TextInput, Textarea, Title, Flex, Button } from "@tremor/react";
import { useLocation, useNavigate } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";
import { updatePet } from "../api/pet/updatePet";

export default function UpdatePet({ user }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState(location.state.pet.name);
  const [status, setStatus] = useState(location.state.pet.status);
  const [type, setType] = useState(location.state.pet.type);
  const [age, setAge] = useState(location.state.pet.age);
  const [size, setSize] = useState(location.state.pet.size);
  const [description, setDescription] = useState(location.state.pet.description);
  const [medical, setMedical] = useState(location.state.pet.medical_history);
  const [behavior, setBehavior] = useState(location.state.pet.behavior);
  const [needs, setNeeds] = useState(location.state.pet.needs);
  const [image1, setImage1] = useState(location.state.pet.image1);
  const [image2, setImage2] = useState(location.state.pet.image2);

  const handleSubmit = async () => {
    try {
      const pet = {
        name: name,
        type: type,
        age: age,
        size: size,
        status: status,
        description: description,
        medical_history: medical,
        behavior: behavior,
        needs: needs,
        image1: image1,
        image2: image2,
      }

      await updatePet(location.state.pet.id, pet);
      navigate('/manage/pets');
      window.location.reload();
    } catch {
      console.log("Couldn't create pet.")
    }
  }

  return (
    <MainLayout user={user}>
      <Metric>Update Pet</Metric>
      <Subtitle>Update your pet listing.</Subtitle>
      <Card className='mt-6'>
        <Title>Name</Title>
        <TextInput className='mt-2' onChange={(e) => setName(e.target.value)} value={name} />
        <Title className='mt-2'>Type</Title>
        <Select className='mt-2' enableClear={false} value={type} onValueChange={(type) => setType(type)}>
          <SelectItem value='Dog'>Dog</SelectItem>
          <SelectItem value='Cat'>Cat</SelectItem>
        </Select>
        <Title className='mt-2'>Age</Title>
        <NumberInput className='mt-2' value={age} onValueChange={(age)  => setAge(age)} min={0} />
        <Title className='mt-2'>Size</Title>
        <Select className='mt-2' enableClear={false} value={size} onValueChange={(size) => setSize(size)}>
          <SelectItem value='Small'>Small</SelectItem>
          <SelectItem value='Medium'>Medium</SelectItem>
          <SelectItem value='Large'>Large</SelectItem>
        </Select>
        <Title className='mt-2'>Status</Title>
        <Select className='mt-2' enableClear={false} value={status} onValueChange={(status) => setStatus(status)}>
          <SelectItem value='Available'>Available</SelectItem>
          <SelectItem value='Waitlisted'>Waitlisted</SelectItem>
          <SelectItem value='Adopted'>Adopted</SelectItem>
        </Select>
        <Title className='mt-2'>Description</Title>
        <Textarea className='mt-2' onChange={(e) => setDescription(e.target.value)} value={description} />
        <Title className='mt-2'>Medical History</Title>
        <Textarea className='mt-2' onChange={(e) => setMedical(e.target.value)} value={medical} />
        <Title className='mt-2'>Behavior</Title>
        <Textarea className='mt-2' onChange={(e) => setBehavior(e.target.value)} value={behavior} />
        <Title className='mt-2'>Special Needs</Title>
        <Textarea className='mt-2' onChange={(e) => setNeeds(e.target.value)} value={needs} />
        <Title>Image 1</Title>
        <TextInput className='mt-2' onChange={(e) => setImage1(e.target.value)} value={image1} />
        <Title>Image 2</Title>
        <TextInput className='mt-2' onChange={(e) => setImage2(e.target.value)} value={image2} />
        <Divider />
        <Flex justifyContent='end' alignItems='center'>
          <Button onClick={handleSubmit}>Submit</Button>
        </Flex>
      </Card>
    </MainLayout>
  );
}