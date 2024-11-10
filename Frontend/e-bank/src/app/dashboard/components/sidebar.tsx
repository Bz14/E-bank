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
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-mainRed text-white">
      <div className="w-64 bg-mainRed p-6">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="text-2xl font-bold mb-8"
        />
        <ul>
          <li className="mb-4">
            <Link href="/dashboard/user">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdPerson />
                <span>User</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/account">
              <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdDashboard />
                <span>Account</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/transaction">
              <p className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdHistory />
                <span>Transaction</span>
              </p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/send">
              <p className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdSend />
                <span>Send Money</span>
              </p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/setting">
              <p className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdSettings />
                <span>Settings</span>
              </p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/cards">
              <p className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdCreditCard />
                <span>Cards</span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/logout">
              <p className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                <MdLogout />
                <span>Logout</span>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
