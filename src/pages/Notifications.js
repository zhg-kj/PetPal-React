import { Metric, Subtitle, Card, Button, Divider, Text, Flex } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { EnvelopeIcon, EnvelopeOpenIcon, ArrowTopRightOnSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import { MainLayout } from "../components/MainLayout";
import { listNotification } from "../api/notification/listNotification";
import { readNotification } from "../api/notification/readNotification";
import { deleteNotification } from "../api/notification/deleteNotification";

export default function Notifications({ user }) {
  const navigate = useNavigate()

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notifications = await listNotification();

        notifications.sort((a, b) => {
          const timeA = new Date(a.time);
          const timeB = new Date(b.time);
          
          return timeB - timeA;
        });

        setNotifications(notifications);
      } catch {
        console.log("Unable to fetch notifications");
      }
    }

    fetchNotifications();
  }, [])

  const handleRead = async (notification) => {
    try {
      await readNotification(notification);
      window.location.reload();
    } catch {
      console.log("Unable to read notification");
    }
  }

  const handleDelete = async (notification) => {
    try {
      await deleteNotification(notification);
      window.location.reload();
    } catch {
      console.log("Unable to delete notification");
    }
  }

  return (
    <MainLayout user={user}>
      <Metric>Notifications</Metric>
      <Subtitle>Your notifications.</Subtitle>
      <div className='flex flex-col gap-2 mt-6'>
        {notifications.map((notification) => {
          const url = notification.model_type === "Application" ? '/applications/manage' : '/shelter';
          const state = notification.model_type === "Application" ? {state: {applicationId: notification.model_id}} : {state: {shelterId: notification.model_id}};

          const date = new Date(notification.time);
          const formattedDate = date.toDateString();

          return (
            <Card key={notification.id}>
              <Text>{formattedDate}</Text>
              <Text>{notification.message}</Text>
              <Divider/>
              <Flex justifyContent='end' alignItems='center' className='gap-4'>
                {notification.read ? <Button icon={EnvelopeOpenIcon} variant='light' disabled/> : <Button icon={EnvelopeIcon} variant='light' onClick={() => handleRead(notification.id)}/>}
                <Button icon={ArrowTopRightOnSquareIcon} variant='light' onClick={() => navigate(url, state)}/>
                <Button icon={TrashIcon} variant='light' color='rose' onClick={() => handleDelete(notification.id)}/>
              </Flex>
            </Card>
          )
        })}
      </div>
    </MainLayout>
  );
}