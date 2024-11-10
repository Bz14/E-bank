"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";
import {
  MdPerson,
  MdDashboard,
  MdHistory,
  MdSend,
  MdSettings,
  MdCreditCard,
  MdLogout,
  MdMenu,
} from "react-icons/md";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-mainRed text-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-6">
          {isSidebarOpen && (
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="text-2xl font-bold"
            />
          )}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <MdMenu size={24} />
          </button>
        </div>

        <ul className="ml-4">
          <li className="mb-4">
            <Link href="/dashboard/user">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdPerson size={24} />
                {isSidebarOpen && <span>User</span>}
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/account">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdDashboard size={24} />
                {isSidebarOpen && <span>Account</span>}
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/transaction">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdHistory size={24} />
                {isSidebarOpen && <span>Transaction</span>}
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/send">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdSend size={24} />
                {isSidebarOpen && <span>Send Money</span>}
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/setting">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdSettings size={24} />
                {isSidebarOpen && <span>Settings</span>}
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/cards">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdCreditCard size={24} />
                {isSidebarOpen && <span>Cards</span>}
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/logout">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdLogout size={24} />
                {isSidebarOpen && <span>Logout</span>}
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{/* Main content goes here */}</div>
    </div>
  );
};

export default Sidebar;
