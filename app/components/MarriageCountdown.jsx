"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
  const TARGET_DATE = new Date("2026-09-04").getTime();

const [timeLeft, setTimeLeft] = useState({
  days: 14,
  hours: 12,
  minutes: 28,
  seconds: 0, 
});

useEffect(() => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  updateCountdown();

  // Update every second
  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);


    return (
        <>
            <div className="bg-[url('/assets/background_fifth.webp')] bg-cover bg-no-repeat pb-12">
                <div className="flex flex-col items-center h-60 md:h-100 lg:h-150 3xl:h-195 gap-2 md:gap-4 lg:gap-4 3xl:gap-14">
                    <h2 className="parisienne-regular font-normal text-2xl md:text-4xl lg:text-6xl text-center text-[#FFFFFF] pt-10 md:pt-20 lg:pt-30 3xl:pt-40">The Journey Begins</h2>
                    <p className="eb-garamond font-medium text-[#FFFFFF] text-center text-xs md:text-xl lg:text-[28px] px-3 md:px-25 lg:px-70 3xl:px-110">
                        Surrounded by family and friends, we can't wait to celebrate <br />
                        this beautiful moment with you.
                    </p>
                    <hr className="w-42 md:w-66 lg:w-94 border lg:border-2 border-[#FFFFFF] my-1 md:my-1 lg:my-2" />
                    <h2 className="eb-garamond font-normal text-2xl md:text-4xl lg:text-[62px] text-center text-[#FFFFFF]"> {timeLeft.days}D - {timeLeft.hours}H - {timeLeft.minutes}M -  {timeLeft.seconds}S</h2>
                    {/* <div className="flex flex-col-1 gap-0 justify-center items-center mt-2 md:mt-4">
                        <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src="/assets/instagram.webp" alt="instagram" className="w-7.5 h-7.5 lg:w-12 lg:h-12"/></a>                      
                    </div>
                    <p className="eb-garamond font-medium text-[#FFFFFF] text-center text-xs md:text-sm lg:text-base">
                        © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p> */}

                        <div className="flex flex-col justify-center items-center mt-2 md:mt-4 gap-0">
    <a
        href="https://www.instagram.com/theinvitearc/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            src="/assets/instagram.webp"
            alt="instagram"
            className="w-7.5 h-7.5 lg:w-12 lg:h-12"
        />
    </a>

    <p className="eb-garamond font-medium text-[#FFFFFF] text-center text-xs md:text-sm lg:text-base m-0 leading-none mt-4">
        © <a href="https://invitearc.com/" target="_blank" rel="noopener noreferrer">InviteArc</a> 2026
    </p>
</div>
                </div>
            </div>
        </>
    );
} 8