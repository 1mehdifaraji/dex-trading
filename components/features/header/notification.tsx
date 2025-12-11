"use client";

import useHeaderStore from "@/store/ActiveHeader";
import useUserStore from "@/store/User";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";

const NotificationToggle = () => {
  const user = useUserStore((state) => state.user);
  const setNotification = useHeaderStore((state) => state.setNotification);
  const notificationIsOn = useHeaderStore((state) => state.notificationIsOn);

  const toggleNotification = () => setNotification(!notificationIsOn);

  return user ? (
    <div
      className="min-w-[35px] flex justify-center text-[23px] cursor-pointer"
      onClick={toggleNotification}
    >
      {notificationIsOn ? (
        <IoNotificationsOutline height={32} />
      ) : (
        <IoNotificationsOffOutline height={32} />
      )}
    </div>
  ) : null;
};

export default NotificationToggle;
