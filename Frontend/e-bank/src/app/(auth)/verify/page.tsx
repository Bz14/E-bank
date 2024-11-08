"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const VerifyPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const router = useRouter();

  interface HandleChangeEvent {
    target: {
      value: string;
    };
  }

  const handleChange = (e: HandleChangeEvent, index: number): void => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerify = async () => {
    const otpValue = otp.join("");
    console.log(otpValue);

    try {
      const response = await fetch("http://localhost:3000/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otpValue }),
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      console.log("Email verified");
      router.push("/login");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 bg-white">
      <div className="bg-white p-8 rounded shadow-md w-96 text-gray-500">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Verify your email
        </h2>
        <div>
          <p className="text-center">
            We have sent a 6-digit verification code to your email.
          </p>
          <p className="text-center">Please enter it below.</p>
        </div>

        <div className="grid grid-cols-6 gap-6 mt-8 mb-8">
          {otp.map((val, index) => (
            <input
              key={index}
              type="text"
              className="border border-hoverRed p-3 rounded"
              maxLength={1}
              placeholder={(index + 1).toString()}
              value={val}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          className="bg-mainRed hover:bg-hoverRed text-white w-full p-2 rounded mt-4"
        >
          Verify Email
        </button>
      </div>
    </div>
  );
};

export default VerifyPage;
