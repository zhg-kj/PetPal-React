import { useEffect, useState } from "react";
import { Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, Badge, Button } from "@tremor/react"
import { useNavigate } from "react-router-dom";

import { listApplication } from "../api/application/listApplication";

const colors = {
  "Pending": "orange",
  "Rejected": "rose",
  "Accepted": "emerald",
};

export const ApplicationTable = ({ user }) => {
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const applications = await listApplication();
        setApplications(applications);
      } catch {
        console.log("Couldn't fetch pets.")
      }
    }

    fetchApplications();
  }, [])

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>{user.is_seeker ? 'Shelter' : 'Seeker'}</TableHeaderCell>
          <TableHeaderCell>Pet</TableHeaderCell>
          <TableHeaderCell>Created At</TableHeaderCell>
          <TableHeaderCell>Updated At</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {applications.map((application) => {
          const created = new Date(application.created_at);
          const formattedCreated = created.toDateString();

          const updated = new Date(application.updated_at);
          const formattedUpdated = updated.toDateString();

          return (
            <TableRow key={application.id}>
              <TableCell>{user.is_seeker ? application.shelter_name : application.seeker_name}</TableCell>
              <TableCell>{application.pet_name}</TableCell>
              <TableCell>{formattedCreated}</TableCell>
              <TableCell>{formattedUpdated}</TableCell>
              <TableCell>
                <Badge color={colors[application.status]} size="xs">
                  {application.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button size="xs" variant="secondary" onClick={() => navigate('/applications/manage', {state: {applicationId: application.id}})}>
                  Manage
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}