"use client";

import Image from "next/image";
import { useEffect } from "react";
import { io } from "socket.io-client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const socket = io(API_URL);

function WebSocket() {
  /* TESTAR SOCKET.IO */
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Conectado ao servidor:", socket.id);
    });

    socket.on("notification", (msg) => {
      alert(msg);
    });

    return () => {
      socket.off("notification");
      socket.disconnect();
    };
  }, []);

  const sendNotification = () => {
    socket.emit("send-notification", "Olá do frontend 🚀");
  };

  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
      <span
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[220px] cursor-pointer"
        onClick={sendNotification}
        rel="noopener noreferrer"
      >
        <Image
          className="dark:invert"
          src="vercel.svg"
          alt="Vercel logomark"
          width={16}
          height={16}
        />
        Testar WebSocket
      </span>
    </div>
  );
}

export default WebSocket;
