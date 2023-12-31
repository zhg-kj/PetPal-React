import { useState } from "react";
import { Metric, Card, TextInput, Subtitle, Divider, Button, Title } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";

export default function SeekerProfile({ user }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <MainLayout user={user}>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4 mb-6">
          <Metric>Profile</Metric>
          <Subtitle>Your PetPal profile.</Subtitle>
        </div>
        <div className="lg:w-4/5 lg:pl-4">
          <Card>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <TextInput placeholder="First Name" type="text" className="mt-2 mb-3" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <TextInput placeholder="Last Name" type="text" className="mt-2 mb-3" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <TextInput placeholder="Email" type="text" className="mt-2 mb-3" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Divider/>
            <div className="flex justify-end">
              <Button className="ml-auto" variant="light" onClick={() => {}}>Cancel</Button>
              <Button className="ml-6" onClick={() => {}}>Save</Button>
            </div>
          </Card>
        </div>
      </div>
      <Divider/>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4 mb-6">
          <Metric>Address</Metric>
          <Subtitle>Where you're located.</Subtitle>
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
              <Button className="ml-auto" variant="light" onClick={() => {}}>Cancel</Button>
              <Button className="ml-6" onClick={() => {}}>Save</Button>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}