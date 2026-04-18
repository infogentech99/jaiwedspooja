"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
    const TARGET_DATE = new Date("2026-06-09").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const diff = TARGET_DATE - now;
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown(); // first run
        const interval = setInterval(updateCountdown, 60000); // every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-[url('/assets/background_fifth.webp')] bg-cover bg-no-repeat pb-12">
                <div className="flex flex-col items-center h-39 md:h-83 lg:h-150 3xl:h-195 gap-1 md:gap-4 lg:gap-6 3xl:gap-14">
                    <h2 className="jacques-francois text-[#FFFFFF] text-center text-xl md:text-3xl lg:text-[52px] pt-4 md:pt-12 lg:pt-32 3xl:pt-40">The countdown begins</h2> 
                      <h2 className="lg:text-[40px] text-2xl text-center text-[#FFFFFF] jacques-francois"> {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M</h2>
                    <p className="jacques-francois text-[#FFFFFF] text-center text-xs md:text-xl lg:text-[32px] px-3 md:px-25 lg:px-70 3xl:px-110">
                        Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
                    </p>
                    <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:mt-4">
                       <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src="/assets/instagram.webp" alt="instagram" className="h-10 w-10"/></a>
                       
                    </div>
                    <p className="jacques-francois text-[#FFFFFF] text-center text-xs md:text-xl lg:text-[32px] ">
                        © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p>
                </div>
            </div>
        </>
    );
} 8