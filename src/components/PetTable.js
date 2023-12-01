import { Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, Badge, Button } from "@tremor/react"

const pets = [
  {id: 1, name: "Fluffy", type: "Dog", age: 3, size: "Medium", status: "Waitlisted"}
]

const colors = {
  "Waitlisted": "orange",
  "Adopted": "rose",
  "Available": "emerald",
};

export const PetTable = ({ user }) => {
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
          <TableRow key={''}>
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
              <Button size="xs" variant="secondary">
                See details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}