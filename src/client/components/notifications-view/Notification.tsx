import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

import { MdDeleteForever } from "react-icons/md";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../../../components/ui/card';

type NotificationProps = {
  notif: {
    id: number;
    message: string;
    send_time: Date;
    User_Notification: {
      seen: boolean;
    };
  };
  getNotifications: () => void;
};

function Notification({ notif, getNotifications }: NotificationProps) {
  const deleteNotification = () => {
    axios
      .delete(`/api/notifications/${notif.id}/delete`)
      .then(getNotifications)
      .catch((err: unknown) => {
        console.error('Failed to deleteNotification:', err);
      });
  };

  return (
    <Card
      className={`ml-4 mr-4 mb-4 ${notif.User_Notification.seen ? '' : ' bg-cyan-100'}`}
    >
      <CardHeader>
        <CardTitle>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-11">{notif.message}</div>
            <MdDeleteForever size={20} onClick={deleteNotification} />
          </div>
        </CardTitle>
        <CardDescription>
          {dayjs(notif.send_time).format('h:mm a, MMM. D')}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default Notification;
