import { useState } from "react";
import { Title, Metric, Card, TextInput, Textarea, Subtitle, Divider, Button } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";
import { updateUser } from "../api/account/updateUser";

export default function Profile({ user }) {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [addressLine1, setAddressLine1] = useState(user.address_line_1);
  const [addressLine2, setAddressLine2] = useState(user.address_line_2);
  const [city, setCity] = useState(user.city);
  const [province, setProvince] = useState(user.province);
  const [postalCode, setPostalCode] = useState(user.postal_code);

  const handleSave = async () => {
    try {
      const changes = {
        name: name,
        bio: bio,
        address_line_1: addressLine1,
        address_line_2: addressLine2,
        city: city,
        province: province,
        postal_code: postalCode
      }
  
      await updateUser(changes);
      window.location.reload();
    } catch {
      console.log("Error updating shelter.")
    }
  }

  const handleCancel = () => {
    setName(user.name);
    setBio(user.bio);
    setAddressLine1(user.address_line_1);
    setAddressLine2(user.address_line_2);
    setCity(user.city);
    setProvince(user.province);
    setPostalCode(user.postal_code);
  }

  return (
    <MainLayout user={user}>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4 mb-6">
          <Metric>Profile</Metric>
          <Subtitle>Your PetPal profile.</Subtitle>
        </div>
        <div className="lg:w-4/5 lg:pl-4">
          <Card>
            <Title>Name</Title>
            <TextInput placeholder="First Name" type="text" className="mt-2 mb-3" value={name} onChange={(e) => setName(e.target.value)} />
            <Title>Bio</Title>
            <Textarea placeholder="Last Name" type="text" className="mt-2 mb-3" value={bio} onChange={(e) => setBio(e.target.value)} />
            <Divider/>
            <div className="flex justify-end">
              <Button className="ml-auto" variant="light" onClick={handleCancel}>Cancel</Button>
              <Button className="ml-6" onClick={handleSave}>Save</Button>
            </div>
          </Card>
        </div>
      </div>
      <Divider/>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4 mb-6">
          <Metric>Address</Metric>
          <Subtitle>Where your shelter is.</Subtitle>
        </div>
        <div className="lg:w-4/5 lg:pl-4">
          <Card>
            <Title>Address Line 1</Title>
            <TextInput placeholder="Address Line 1" type="text" className="mt-2 mb-3" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
            <Title>Address Line 2</Title>
            <TextInput placeholder="Address Line 2" type="text" className="mt-2 mb-3" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
            <Title>City</Title>
            <TextInput placeholder="City" type="text" className="mt-2 mb-3" value={city} onChange={(e) => setCity(e.target.value)}/>
            <Title>Province</Title>
            <TextInput placeholder="Province" type="text" className="mt-2 mb-3" value={province} onChange={(e) => setProvince(e.target.value)}/>
            <Title>Postal Code</Title>
            <TextInput placeholder="Postal Code" type="text" className="mt-2 mb-3" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
            <Divider/>
            <div className="flex justify-end">
              <Button className="ml-auto" variant="light" onClick={handleCancel}>Cancel</Button>
              <Button className="ml-6" onClick={handleSave}>Save</Button>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}