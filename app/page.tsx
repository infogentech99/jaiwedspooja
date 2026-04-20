"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import MarriageCountdown from "@/app/components/MarriageCountdown";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";

export default function Home() {
  const events = [
    {
      title_ceremony: "Mehendi",
      image: "/assets/mehendi.webp",
      date: "Tuesday, September 10th 2026",
      venue: "Hyatt Regency Delhi",
      time: "7:00 pm onwards",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Haldi",
      image: "/assets/haldi.webp",
      date: "Friday, September 13th 2026",
      venue: "Golden Gate Banquet",
      time: "4:00pm Onwards",
      link: "https://maps.app.goo.gl/ywMPWwHjbXvqwiWc8",
    },
    {
      title_ceremony: "Kelvan",
      image: "/assets/kelvan.webp",
      date: "Sunday, September 15th 2026",
      venue: "The Ashok Hotel",
      time: "8pm Onwards",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },

    {
      title_ceremony: "Sakhar Puda",
      image: "/assets/sakhar_puda.webp",
      date: "Tuesday, September 10th 2026",
      venue: "Hyatt Regency Delhi",
      time: "7:00 pm onwards",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Shaadi",
      image: "/assets/shaadi.webp",
      date: "Friday, September 13th 2026",
      venue: "The Leela Palace",
      time: "4:00pm Onwards",
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },


    {
      title_ceremony: "Reception",
      image: "/assets/reception.webp",
      date: "Sunday, September 15th 2026",
      venue: "The Ashok Hotel",
      time: "8pm Onwards",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },


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
      <div className="relative bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] bg-cover bg-no-repeat bg-top
                       md:bg-center w-full overflow-hidden">

     <RoseHeroTemp />
        <div className="pt-12 md:pt-34 lg:pt-64 relative z-10">

          <h2 className="text-[#FFFFFF]  text-center leading-tight text-3xl md:text-5xl lg:text-[64px] pb-110 md:pb-200 lg:pb-400
                           3xl:pb-500 flex flex-col items-center gap-y-2 lg:gap-y-5">

            <span className="jacques-francois">SAMPATH</span>

            <span className="jacques-francois text-xl md:text-3xl lg:text-5xl tracking-widest font-cormorant">WEDS</span>

            <span className="jacques-francois">SAYALI</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 pt-0 md:pt-30 lg:pt-50">
            <p className="text-[#FFFFFF] jacques-francois text-xl md:text-2xl lg:text-3xl text-center">ॐ श्री गणेशाय नम</p>
            <img src="/assets/ganesh.webp" alt="ganesh" className="w-30 h-39 md:w-40 md:h-50 lg:w-50 lg:h-65 
                      object-cover"/>

            <h2 className="text-[#FFFFFF] lg:text-[26px] md:text-xl text-sm jacques-francois ">
              With the heavenly blessings of <br /> Shri Rajesh Kulkarni & Shrimati Sunita Kulkarni
            </h2>

            <hr className="w-16 lg:w-24 border-[#FFFFFF] lg:my-6" />
            <h2 className="text-[#FFFFFF] lg:text-[26px] md:text-xl text-sm jacques-francois">
              Shri Amit Deshmukh & Shrimati Vaishali Deshmukh
            </h2>
          </div>


          <div className="mt-8 text-center">
            <h2 className="text-[#FFFFFF] jacques-francois text-3xl sm:text-5xl lg:text-[64px] leading-tight lg:tracking-wide
                             tracking-wider">
              INVITE
            </h2>

            <p className="text-[#FFFFFF] jacques-francois lg:text-[26px] md:text-xl text-sm mt-6">
              You to join us in the wedding celebrations of
            </p>

            <h2 className="text-[#FFFFFF] jacques-francois text-center mt-14
                            text-3xl md:text-5xl lg:text-[64px] leading-tight font-medium">
              SAMPATH
            </h2>

            <h2 className="text-[#FFFFFF] jacques-francois text-center mt-0
                             text-3xl md:text-5xl lg:text-[64px] leading-tight font-medium">
              <span className="text-[#FFFFFF] jacques-francois text-center lg:mt-10 mt-0 
                                 text-xl md:text-3xl lg:text-5xl leading-tight">&</span>   <br />
              SAYALI
            </h2>

            <p className="text-[#FFFFFF] jacques-francois text-sm md:text-xl lg:text-[26px] mt-6">
              Daughter of <br /> Shri Mahesh Joshi & Shrimati Asha Joshi
            </p>

            <p className="text-[#FFFFFF] jacques-francois text-sm md:text-xl lg:text-[26px] mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:pt-0 pb-34 3xl:pb-120">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-28 3xl:gap-46 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 w-60 md:w-70 h-auto"
                  />

                  <h2 className="text-[#FFFFFF] jacques-francois lg:text-[45px] md:text-2xl text-3xl mt-4">
                    {event.title_ceremony}
                  </h2>



                  <p className="text-[#FFFFFF] jacques-francois text-[14px] sm:text-base mt-2">
                    <span className="text-base md:text-base lg:text-[22px]">{event.date}</span>  <br />
                    <span className="text-base md:text-base lg:text-[22px] uppercase"> {event.venue}</span> <br />
                    {/* <span className="text-[14px] md:text-base lg:text-[20px]">{event.venue_address}</span> <br /> */}
                    <span className="text-base md:text-base lg:text-[22px]">  {event.time} </span>
                  </p>

                  <a
                    href={event.link}
                    className="text-[#FFFFFF] underline md:text-sm text-[18px] mt-2 jacques-francois"
                    target="_blank"
                  >
                    See the route
                  </a>


                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Second section */}
      <section className="bg-[url('/assets/background_second.webp')] bg-cover bg-no-repeat ">
        <div className="h-86 md:h-181 lg:h-335 3xl:h-424 flex flex-col items-center pt-8 lg:pt-40 3xl:pt-56">
          <p className="cormorant text-base md:text-3xl lg:text-[38px] text-[#FFE323]">
            MEET THE
          </p>
          <h2 className="text-4xl md:text-7xl lg:text-[130px] text-center text-[#7CE670] lg:pt-12 cormorant-upright lg:leading-14 md:leading-6 leading-4 pt-4">
            <span className="text-[#F2AD15] cormorant-upright font-normal">Bride</span> <br /> & <br /> <span className="text-[#F2AD15] cormorant-upright">Groom</span>
          </h2>
        </div>
      </section>

      {/* Third section */}
      <section className="bg-[url('/assets/respo_third.webp')] md:bg-[url('/assets/background_third.webp')] bg-cover bg-no-repeat bg-top md:bg-center w-full overflow-hidden">

        <div className="h-470 md:h-516 lg:h-957 3xl:h-1182">
          <h1 className="text-xl md:text-2xl lg:text-[36px] text-center text-[#FFFFFF] pt-14 md:pt-22 lg:pt-40 3xl:pt-55 jacques-francois">A message from the couple</h1>
          <h2 className="text-xs md:text-xl lg:text-[32px] text-center text-[#FFFFFF] px-8 md:px-16 lg:px-53 3xl:px-100 mt-8
                         md:mt-16 lg:mt-36 jacques-francois leading-snug md:leading-6 lg:leading-8 3xl:leading-10">
            We are both so delighted that you are able to join us in celebrating what
            we hope will be one of the happiest days of our lives. The affection shown
            to us by so many people since our roka has been incredibly moving, and has
            touched us both deeply. We would like to take this opportunity to thank
            everyone most sincerely for their kindness.We are looking forward to see
            you at the wedding.
          </h2>
          <div className="relative flex flex-col items-center mt-14 md:mt-16 lg:mt-20 3xl:mt-50">
            <img src="/assets/couple_one.webp" alt="couple_one" className=" absolute lg:top-0 w-30 h-25 md:w-47 md:h-37 lg:w-108 lg:h-76 3xl:w-120 3xl:h-88 z-10" />
            <div className="flex flex-col ">
              <h2 className="flex flex-col items-center text-center text-xl md:text-4xl lg:text-[68px] ml-58 md:ml-100 lg:ml-210 3xl:ml-230 md:mt-2 3xl:mt-6">
                <span className="text-[#F2AD15] jacques-francois">SAMPATH</span>
                <span className="text-[#7CE670] opacity-50 text-5xl md:text-7xl lg:text-[150px] lavishly-yours-regular -my-5 md:-my-8 lg:-my-12 pr-8 md:pr-12 lg:pr-30">&</span>
                <span className="text-[#F2AD15] jacques-francois pr-7 md:pr-12 lg:pr-22">SAYALI</span>
              </h2>
            </div>
            <img src="/assets/couple_two.webp" alt="couple_two" className="absolute top-15 left-12 w-28 h-45 md:top-25 md:left-35 md:w-50 md:h-65 
                    lg:top-50 lg:left-50 lg:w-108 lg:h-126 3xl:top-60 3xl:left-70 3xl:w-130 3xl:h-180 z-0" />
            <img src="/assets/flowers.webp" alt="flowers" className="ml-2 mt-2 w-24 h-30 md:w-40 md:h-46 lg:w-58 lg:h-96 3xl:w-90 3xl:h-118 3xl:mt-7 3xl:ml-26 z-40" />
            <img src="/assets/couple_three.webp" alt="couple_three" className="absolute top-17 right-12 w-28 h-48 md:top-25 md:right-40 md:w-50 md:h-75 
                    lg:top-55 lg:right-50 lg:w-108 lg:h-146 3xl:top-60 3xl:right-65 3xl:w-140 3xl:h-200 z-20" />
            <img src="/assets/couple_four.webp" alt="couple_four" className="mt-2 w-33 h-25 md:w-60 md:h-40 lg:w-123 lg:h-96 lg:mt-8 3xl:mt-20 3xl:w-140 3xl:h-108 3xl:mr-15 z-10" />
          </div>
          <div className="lg:mt-50">
            <h1 className=" text-3xl md:text-6xl lg:text-[122px] text-center text-[#FFFFFF] md:pt-29 lg:pt-32 pt-22 jacques-francois">
              Things to <br /> know
            </h1>
            <h2 className="text-xs md:text-xl lg:text-[32px] text-center text-[#FFFFFF] md:pt-6 lg:pt-6 lg:px-60 3xl:px-110 px-6 md:px-30 mt-6 lg:mt-16 3xl:mt-24 jacques-francois">
              To help you feel at ease and enjoy every moment of the celebrations,
              we've gathered a few thoughtful details we'd love for you to know before
              the big day
            </h2>
            <div className="flex justify-center mt-10 md:mt-14 lg:mt-20 3xl:mt-40 pb-10 md:pb-16 lg:pb-24 3xl:pb-34">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-14 md:gap-14 lg:gap-30 3xl:gap-46">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/weather.webp"
                    alt="weather"
                    className="w-30 h-26 md:w-25 md:h-20 lg:w-32 lg:h-27 3xl:w-36 3xl:h-31"
                  />
                  <h2 className="text-2xl md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2 jacques-francois">
                    Weather
                  </h2>
                  <p className="text-xs lg:text-base text-[#FFFFFF] mt-1 jacques-francois md:leading-5">
                    It will be mostly cloudy with <br />
                    temperature reaching up <br />
                    to 22 degrees at the venue
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/staff.webp"
                    alt="drive"
                    className="w-26 h-27 md:w-20 md:h-20 lg:w-21 lg:h-27 3xl:w-26 3xl:h-31"
                  />
                  <h2 className="text-2xl md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2 jacques-francois">
                    Staff
                  </h2>
                  <p className="text-xs lg:text-base md:leading-5 text-[#FFFFFF] mt-1 jacques-francois">
                    We recommend the nearby <br />
                    lodge called VEGA near the <br />
                    venue for the staff members
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/assets/parking.webp"
                    alt="car"
                    className="w-30 h-27 md:w-25 md:h-20 lg:w-30 lg:h-27 3xl:w-34 3xl:h-31"
                  />
                  <h2 className="text-2xl md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2 jacques-francois">
                    Parking
                  </h2>
                  <p className="text-[10px] lg:text-base md:leading-5 text-[#FFFFFF] mt-1 jacques-francois">
                    Valet parking for all our <br />
                    guests will be available <br />
                    at the venue
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="lg:mt-20 3xl:mt-40">
            <h2 className="text-center cormorant-upright text-2xl md:text-3xl lg:text-[64px] 3xl:text-7xl text-[#FFFFFF] md:pt-40 lg:pt-63 3xl:pt-80
                           pt-14 leading-6 md:leading-10 lg:leading-20 pr-30 md:pr-80 lg:pr-170">
              Looking forward to <br /> seeing you
            </h2>
            <div className="flex flex-col-1 md:gap-0 gap-0 lg:gap-0 justify-center items-center md:not-first:mt-4 pr-25 md:pr-70 lg:mr-90">
              <a href="#" target="_blank">
                <img src="/assets/whatsapp.webp" alt="whatsapp" className="h-6 w-6 md:w-10 md:h-10 lg:w-10 lg:h-10 3xl:w-15 3xl:h-15" />
              </a>
              <h2 className="cormorant-upright text-[10px] md:text-xs lg:text-[22px] 3xl:text-2xl text-[#FFFFFF] jacques-francois pr-4 md:pr-10 lg:pr-15">
                Click the Link to RSVP
              </h2>
            </div>
          </div>

        </div>

      </section>
      {/* Fourth section */}
      <section className="bg-[url('/assets/background_fourth.webp')] bg-cover bg-no-repeat">
        <div className="h-96 md:h-182 lg:h-338 3xl:h-426 flex justify-center">
          <img src="/assets/couple_name.webp" alt="couple_name" className="mt-8 w-24 h-12 md:mt-15 md:w-50 md:h-25 lg:mt-30 lg:w-80 lg:h-40 3xl:mt-40 3xl:w-105 3xl:h-60" />
        </div>
      </section>

      {/* Fifth section */}
      <MarriageCountdown />

      {/* <div className="fixed top-5 left-5 z-50">
        <a href="https://invitearc.com/">
          <button className="flex items-center gap-3 border-white border-2 bg-white/0 backdrop-blur text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">
            <span className="text-3xl leading-none">←</span>
            <span className="text-[16px] font-semibold">
              Exit Preview
            </span>

          </button>
        </a>
      </div> */}
    </>
  );
}
