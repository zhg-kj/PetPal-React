import { Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, Badge, Button } from "@tremor/react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { listPet } from "../api/pet/listPet";

const colors = {
  "Waitlisted": "orange",
  "Adopted": "rose",
  "Available": "emerald",
};

export const PetTable = ({ user }) => {
  const navigate = useNavigate();

  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await listPet(user.id);
        setPets(pets);
      } catch {
        console.log("Couldn't fetch pets.")
      }
    }

    fetchPets();
  }, [user.id])

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Size</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Link</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pets.map((pet) => (
          <TableRow key={pet.id}>
            <TableCell>{pet.name}</TableCell>
            <TableCell>{pet.type}</TableCell>
            <TableCell>{pet.age}</TableCell>
            <TableCell>{pet.size}</TableCell>
            <TableCell>
              <Badge color={colors[pet.status]} size="xs">
                {pet.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Button size="xs" variant="secondary" onClick={() => navigate('/pet/update', {state: {pet: pet}})}>
                Update
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}