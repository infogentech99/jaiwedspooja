"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import MarriageCountdown from "@/app/components/MarriageCountdown";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";

export default function Home() {
  const events = [


    {
      title_ceremony: "Haldi",
      image: "/assets/haldi.webp",
      date: "Friday, September 4th 2026",
      time: "Join Us at 11 Am",
      venue: "The Golden Leaf ",
      venue_address: <>428R +8H5 21, Adarsh colony, <br/> Subhash Nagar,Trimurti Nagar, <br/> Nagpur, Maharashtra</>,
      link: "https://maps.app.goo.gl/GeQ2Le61pRtqNTZUA",
    },

    // {
    //   title_ceremony: "Shaadi",
    //   image: "/assets/shaadi.webp",
    //   date: "Saturday, April 18th 2026",
    //   time: "Join Us at 11 am",
    //   venue: "The Leela Palace, Udaipur",
    //   link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    // },




  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/Marathi_song.mp3" loop preload="auto" playsInline />


      {/* Hero section */}
      <div className="bg-[url('/assets/respo_bg.webp')] lg:bg-[url('/assets/background.webp')]
                      bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden">

        <RoseHeroTemp />
        <div className="pt-12 md:pt-34 lg:pt-64 relative z-10">

          <h2 className="text-[#FFFFFF] text-center leading-tight text-3xl md:text-5xl lg:text-[64px] pb-130 md:pb-220 lg:pb-400
                           3xl:pb-500 flex flex-col items-center gap-y-2 lg:gap-y-5">

            <span className="eb-garamond font-medium">JAY</span>

            <span className="jacques-francois font-normal text-xl md:text-3xl lg:text-5xl tracking-widest">WEDS</span>

            <span className="eb-garamond font-medium">POOJA</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 pt-0 md:pt-30 lg:pt-50">
            <p className="eb-garamond font-normal text-[#FFFFFF] text-xl md:text-2xl lg:text-3xl text-center">ॐ श्री गणेशाय नम</p>
            <img src="/assets/ganesh.webp" alt="ganesh" className="w-30 h-39 md:w-40 md:h-50 lg:w-50 lg:h-65 object-cover" />

            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl">
              With the heavenly blessings of <br />Shrimati Subadra & Shri Vitthal Rao Sontake
            </h2>

            <hr className="w-16 lg:w-24 border-[#FFFFFF] lg:my-6" />

          </div>


          <div className="mt-8 text-center">
            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-3xl md:text-5xl lg:text-[64px] leading-tight lg:tracking-wide
                           tracking-wider">
              INVITE
            </h2>

            <p className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl mt-6">
              You to join us in the wedding celebrations of
            </p>

            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-center mt-6 lg:mt-14 text-3xl md:text-5xl lg:text-[82px] leading-tight">
              JAY
            </h2>
            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl">
              Shrimati Karuna & Late Ashok Sontake
            </h2>
            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-center mt-0 text-3xl md:text-5xl lg:text-[82px] leading-tight">
              <span className="eb-garamond font-medium text-[#FFFFFF] text-center lg:mt-10 mt-0 text-xl md:text-3xl lg:text-5xl leading-tight">
                &
              </span>   <br />
              POOJA
            </h2>

            <p className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl mt-6">
              Daughter of Shrimati Bina  & Shri Raju Singh
            </p>

            <p className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:pt-0 pb-34 3xl:pb-50">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-16 lg:gap-28 3xl:gap-46 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 w-60 md:w-70 h-auto"
                  />

                  <h2 className="eb-garamond font-medium text-[#FFFFFF] text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>



                  <p className="eb-garamond font-medium text-[#FFFFFF] mt-2">
                    <span className="text-base md:text-base lg:text-[15px]">{event.date}</span>  <br />
                    <span className="text-base md:text-base lg:text-[15px]">  {event.time} </span> <br />
                    <span className="text-base md:text-base lg:text-[15px] uppercase"> {event.venue}</span><br/>
                     <span className="text-base md:text-base lg:text-[15px] uppercase"> {event.venue_address}</span>
                  </p>

                  <a
                    href={event.link}
                    className="eb-garamond font-medium text-[#FFFFFF] underline text-[18px] md:text-sm mt-2"
                    target="_blank">
                    View Directions
                  </a>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Second section */}
      <section className="bg-[url('/assets/background_second.webp')] bg-cover bg-no-repeat ">
        <div className="h-95 md:h-181 lg:h-335 3xl:h-424 flex flex-col items-center pt-6 md:pt-16 lg:pt-30 3xl:pt-56">
          <p className="parisienne-regular text-center text-2xl md:text-[40px] lg:text-7xl lg:leading-22 text-[#FFE323]">
            With <br /> Love From Us
          </p>
          <h2 className="text-[10px] md:text-base lg:text-3xl text-center pt-0 md:pt-2 md:leading-6 lg:leading-10">
            <span className="eb-garamond font-normal text-[#F2AD15]">
              Thank you for being part our journey. <br />
              Your presence makes this celebration truly <br />
              meaningful, and we look forward to sharing <br />
              these cherished moments with you.
            </span>
          </h2>
        </div>
      </section>

      {/* Third section */}
      <section className="bg-[url('/assets/respo_third.webp')] md:bg-[url('/assets/background_third.webp')] bg-cover bg-no-repeat bg-top md:bg-center w-full overflow-hidden">

        <div className="h-505 md:h-517 lg:h-956 3xl:h-1182">
          <h1 className="eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center text-[#FFFFFF] lg:pt-40 pt-20">INTRODUCING</h1>
          <h2 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFFFFF] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-24 leading-5 md:leading-tight">
            The Couple
          </h2>
          <div className="relative flex flex-col items-center mt-14 md:mt-16 lg:mt-20 3xl:mt-50">
            <img src="/assets/couple_one.webp" alt="couple_one" className=" absolute lg:top-0 w-32 h-25 md:w-47 md:h-37 lg:w-108 lg:h-76 3xl:w-120 3xl:h-88 z-10" />
            <div className="flex flex-col ">
              <h2 className="flex flex-col items-center text-center text-xl md:text-4xl lg:text-[68px] ml-58 md:ml-92 lg:ml-192 3xl:ml-230 md:mt-2 3xl:mt-6">
                <span className="eb-garamond font-medium text-[#F2AD15] pr-30">JAY</span>
                <span className="eb-garamond font-medium text-[#7CE670] opacity-50 text-5xl md:text-7xl lg:text-[124px] -my-5 md:-my-8 lg:-my-12 pr-8 md:pr-12 lg:pr-30">&</span>
                <span className="eb-garamond font-medium text-[#F2AD15] pr-6 md:pr-10 lg:pr-20">POOJA</span>
              </h2>
            </div>
            <img src="/assets/couple_two.webp" alt="couple_two" className="absolute top-15 left-12 w-28 h-45 md:top-25 md:left-35 md:w-50 md:h-65 
                      lg:top-50 lg:left-50 lg:w-108 lg:h-126 3xl:top-60 3xl:left-70 3xl:w-130 3xl:h-180 z-0" />
            <img src="/assets/flowers.webp" alt="flowers" className="ml-2 mt-2 w-24 h-30 md:w-40 md:h-46 lg:w-58 lg:h-96 3xl:w-90 3xl:h-118 3xl:mt-7 3xl:ml-26 z-40" />
            <img src="/assets/couple_three.webp" alt="couple_three" className="absolute top-17 right-12 w-28 h-48 md:top-25 md:right-40 md:w-50 md:h-75 
                      lg:top-55 lg:right-50 lg:w-108 lg:h-146 3xl:top-60 3xl:right-65 3xl:w-140 3xl:h-200 z-20" />
            <img src="/assets/couple_four.webp" alt="couple_four" className="mt-2 w-33 h-25 md:w-60 md:h-40 lg:w-123 lg:h-96 lg:mt-8 3xl:mt-20 3xl:w-140 3xl:h-108 3xl:mr-15 z-10" />
          </div>
          <div className="lg:mt-5">
            <h1 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[122px] text-center text-[#FFFFFF] pt-10 md:pt-35 lg:pt-30 3xl:pt-80 leading-tight">
              A Guide For <br /> Guests
            </h1>

            <div className="flex justify-center mt-10 md:mt-14 lg:mt-30 3xl:mt-40 pb-10 md:pb-16 lg:pb-24 3xl:pb-34">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-14 md:gap-25 lg:gap-0 3xl:gap-16">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/weather.webp"
                    alt="weather"
                    className="w-30 h-26 md:w-25 md:h-20 lg:w-32 lg:h-27 3xl:w-36 3xl:h-31"
                  />
                  <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2">
                    Weather
                  </h2>
                  <p className="eb-garamond font-medium text-sm lg:text-xl text-[#FFFFFF] mt-1 md:leading-5">
                    A delighful day awaits <br /> with pleasant weather <br /> and mild temperatures.
                  </p>
                </div>
                <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFFFFF] lg:my-28" />
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/staff.webp"
                    alt="drive"
                    className="w-26 h-27 md:w-20 md:h-20 lg:w-21 lg:h-27 3xl:w-26 3xl:h-31"
                  />
                  <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2">
                    Staff
                  </h2>
                  <p className="eb-garamond font-medium text-sm lg:text-xl md:leading-5 text-[#FFFFFF] mt-1">
                    For those traveling from afar, <br /> Royal Orchid Suites offers a <br /> comfortable stay nearby.
                  </p>
                </div>
                <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFFFFF] lg:my-28" />
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/parking.webp"
                    alt="car"
                    className="w-30 h-27 md:w-25 md:h-20 lg:w-30 lg:h-27 3xl:w-34 3xl:h-31"
                  />
                  <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2">
                    Parking
                  </h2>
                  <p className="eb-garamond font-medium text-sm lg:text-xl md:leading-5 text-[#FFFFFF] mt-1">
                    Guests can enjoy hassle <br /> free parking facilities <br /> available at the venue.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="eb-garamond font-normal text-xl md:text-2xl lg:text-[32px] text-center text-[#FFFFFF] px-4 md:px-20 lg:px-56 3xl:px-107 pt-4 md:pt-22 lg:pt-40 3xl:pt-46 mt-2 lg:mt-4 lg:leading-tight">
              Your presence means the world to us. To make your experience <br className="hidden md:block" />
              effortless and enjoyable, we've gathered a few useful details below.
            </h2>
            {/*  */}
          </div>
          <div className="lg:mt-20 3xl:mt-40">
            <h2 className="eb-garamond font-normal text-center text-xl md:text-3xl lg:text-[64px] text-[#FFFFFF] pt-26 md:pt-50 lg:pt-85 3xl:pt-150 leading-6 md:leading-8 lg:leading-19 pr-26 md:pr-66 lg:pr-155">
              Awaiting the Pleasure <br /> of Your Company
            </h2>
            <div className="flex flex-col-1 justify-center items-center md:not-first:mt-2 pr-30 md:pr-70 lg:mr-90">
              <a href="https://wa.me/9561400666" target="_blank">
                <img src="/assets/whatsapp.webp" alt="whatsapp" className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-10.5 lg:h-10.5 3xl:w-15 3xl:h-15 lg:mt-1" />
              </a>
              <h2 className="eb-garamond font-normal text-center text-xs md:text-sm lg:text-[22px] 3xl:text-2xl text-[#FFFFFF]">
                Share Your RSVP
              </h2>
            </div>
          </div>

        </div>

      </section>
      {/* Fourth section */}
      <section className="bg-[url('/assets/background_fourth.webp')] bg-cover bg-no-repeat">
        <div className="h-96 md:h-181 lg:h-338 3xl:h-426 flex justify-center">
          {/* <img src="/assets/couple_name.webp" alt="couple_name" className="mt-8 w-24 h-12 md:mt-15 md:w-50 md:h-25 lg:mt-30 lg:w-80 lg:h-40 3xl:mt-40 3xl:w-105 3xl:h-60" /> */}
        </div>
      </section>

      
      <MarriageCountdown />
    </>
  );
}
