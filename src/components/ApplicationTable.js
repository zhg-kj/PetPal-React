import { Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, Badge, Button } from "@tremor/react"
import { useNavigate } from "react-router-dom";

const applications = [
  {name: "Fluffy", date: "Monday", status: "Pending"}
]

const colors = {
  "Pending": "orange",
  "Rejected": "rose",
  "Accepted": "emerald",
};

export const ApplicationTable = () => {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={''}>
            <TableCell>{application.name}</TableCell>
            <TableCell>{application.date}</TableCell>
            <TableCell>
              <Badge color={colors[application.status]} size="xs">
                {application.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Button size="xs" variant="secondary" onClick={() => navigate('/applications/manage', {state: {application: application}})}>
                Manage
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}