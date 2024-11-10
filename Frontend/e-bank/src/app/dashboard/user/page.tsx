"use client";
import {
  MdAccountBalance,
  MdAttachMoney,
  MdEdit,
  MdHistory,
  MdSecurity,
  MdSettings,
} from "react-icons/md";
import img from "../../assets/img1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for the transactions
const data = [
  { name: "Jan", transaction: 2400 },
  { name: "Feb", transaction: 1398 },
  { name: "Mar", transaction: 9800 },
  { name: "Apr", transaction: 3908 },
  { name: "May", transaction: 4800 },
  { name: "Jun", transaction: 3800 },
  { name: "Jul", transaction: 4300 },
];

const UserSection = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen mt-2 bg-white sm:p-2 md:p-4 mr-5 md:mr-0">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-hoverRed p-8 flex items-center flex-col sm:flex-row">
          <div className="bg-gray-500 flex justify-center align-middle rounded-full mr-5">
            <Image src={img} alt="user" width={80} height={80} />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Eyerusalem Bezu
            </h2>
            <p className="text-gray-200">Account Number: 123456789</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Account Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-gray-200 p-6 rounded-lg flex items-center space-x-4">
              <MdAccountBalance size={40} className="text-mainRed" />
              <div>
                <p className="text-lg text-gray-800 font-medium">
                  Current Balance
                </p>
                <p className="text-xl font-semibold">$8,245.50</p>
              </div>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg flex items-center space-x-4">
              <MdAttachMoney size={40} className="text-mainRed" />
              <div>
                <p className="text-lg text-gray-800 font-medium">
                  Monthly Income
                </p>
                <p className="text-xl font-semibold">$2,500.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => router.push("/dashboard/send")}
              className="bg-mainRed hover:bg-hoverRed text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <MdAttachMoney size={24} />
              <span> Transfer Funds</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/transaction")}
              className="bg-mainRed hover:bg-hoverRed text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <MdHistory size={24} />
              <span>View Transactions</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/setting")}
              className="bg-mainRed hover:bg-hoverRed text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <MdEdit size={24} />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Transaction Overview
          </h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="transaction" stroke="#750F0F" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
