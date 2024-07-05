// import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#242540] p-16 flex flex-col items-center justify-center text-white">
        <div className="divide divide-x divide-slate-100 flex gap-4 p-4">
          <h1 className="text-4xl font-semibold">
            <span className="text-orange-400">Learn</span> Mode
          </h1>
          <p className="pl-4 text-2xl font-medium">
            Virutal Class <br /> for zoom
          </p>
        </div>
        <div className="text-center my-12 flex flex-col">
          <h1 className=" text-[#b2b3cf] capitalize font-semibold text-3xl">
            Subscribe to get our news letter
          </h1>
          <div className="flex gap-5 p-6">
            <input
              type="text"
              placeholder="Your Email"
              className="bg-transparent border rounded-full placeholder:pl-5 placeholder:font-semibold focus:outline-none pl-4 border-gray-500 w-[250px] lg:w-[400px]"
            />
            <button className="bg-gradient-to-r from-[#5358e6] to-[#3a3fcf] px-8 rounded-full py-4 font-semibold text-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center">
          <div className="flex gap-2 divide-x divie-gray-200 text-[#b2b3cf]/60">
            <h1 className="text-2xl font-semibold text-center">Careers</h1>
            <h1 className="text-2xl font-semibold text-center pl-3">
              Privacy Policy
            </h1>
            <h1 className="text-2xl font-semibold text-center pl-3">
              Terms & Condition
            </h1>
          </div>
          <p className="font-semibold text-[#b2b3cf]/60 text-2xl py-4">@ 2024 Learn Mode Technologies</p>
        </div>
      </footer>
    </>
  );
}
