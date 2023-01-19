import React from "react";

//* Images *//
import envelope from "../assets/envelope.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import arrow from "../assets/arrow-form.png";

const Informaion = () => {
  return (
    <div className="md:col-span-2">
      <h4 className="text-center mb-5">Talk to me</h4>

      <div className="flex flex-col gap-4">
        <div className="w-[90%] mx-auto bg-white rounded-md flex flex-col gap-3 p-3 py-5">
          <div className="flex flex-col items-center">
            <img src={envelope} alt="envelope icon" className="w-5 h-5" />
            <p className="capitalize mt-1">Email</p>
            <p className="text-slate-400 text-sm">alifazlolahi2000@gmail.com</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alifazlolahi2000@gmail.com"
              className="text-slate-400 text-xs  mt-4 flex items-center gap-1"
              target='_blank'
            >
              Write me
              <img src={arrow} alt="arrow icon" className="" />
            </a>
          </div>
        </div>

        <div className="w-[90%] mx-auto bg-white rounded-md flex flex-col gap-3 p-3 py-5">
          <div className="flex flex-col items-center">
            <img src={whatsapp} alt="whatsapp icon" className="w-5 h-5" />
            <p className="capitalize mt-1">WhatsApp</p>
            <p className="text-slate-400 text-sm">0905-816-4-815</p>
            <a
              href="https://api.whatsapp.com/send?phone=09058164815"
              className="text-slate-400 text-xs  mt-4 flex items-center gap-1"
              target='_blank'
            >
              Write me
              <img src={arrow} alt="arrow icon" className="" />
            </a>
          </div>
        </div>

        <div className="w-[90%] mx-auto bg-white rounded-md flex flex-col gap-3 p-3 py-5">
          <div className="flex flex-col items-center">
            <img src={whatsapp} alt="whatsapp icon" className="w-5 h-5" />
            <p className="capitalize mt-1">Whatsapp</p>
            <p className="text-slate-400 text-sm">0905-816-4-815</p>
            <a
              href="#"
              className="text-slate-400 text-xs  mt-4 flex items-center gap-1"
            >
              Write me
              <img src={arrow} alt="arrow icon" className="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informaion;
