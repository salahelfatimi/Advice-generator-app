// pages/index.js
"use client"
import { useEffect, useState } from "react";
import axios from "@/utils/axios";

export default function Home() {
  const [advice, setAdvice] = useState(null); // Change the initial state to null

  const GetAdvice = async () => {
    try {
      const {
        data: { slip },
      } = await axios.get("/advice");
      setAdvice(slip);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetAdvice();
  }, []);

  return (
    <>
      <div className="bg-[#1f2631] h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-[#313a49] rounded-xl p-6 text-center">
            {advice && ( // Conditionally render the advice content
              <>
                <div className="text-[#73bc9f] space-x-2 pt-6 font-mono">
                  <span>ADVICE</span>
                  <span>&#35;{advice.id}</span>
                </div>
                <h2 className="text-[#d1e0eb] font-semibold font-sans pt-4">
                &quot;{advice.advice}&quot;
                </h2>
              </>
            )}
            <div className="pt-12 flex justify-center items-center">
              <svg
                className="sm:block hidden"
                width="444"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                  <g transform="translate(212)" fill="#CEE3E9">
                    <rect width="4" height="16" rx="3" />
                    <rect x="14" width="4" height="16" rx="3" />
                  </g>
                </g>
              </svg>
              <svg
                className="sm:hidden block"
                width="295"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                  <g transform="translate(138)" fill="#CEE3E9">
                    <rect width="4" height="16" rx="3" />
                    <rect x="14" width="4" height="16" rx="3" />
                  </g>
                </g>
              </svg>
            </div>
            <button
              onClick={() => GetAdvice()}
              className="bg-[#5efaab] rounded-full p-4 relative top-[3.3rem]"
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                  fill="#202733"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
