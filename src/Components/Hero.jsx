// import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="w-full flex justify-between items-center mx-auto">
        <div className="w-full lg:max-w-[600px] leading-relaxed">
          <h1 className="font-semibold text-6xl text-blue-900">
            <span className="text-[#f58d05]">Studying</span> Online is now much
            easier
          </h1>
          <p className="text-xl py-8">
            Learn Mode is an interesting platform that will teach you in more an
            interactive way.
          </p>
          <div className="py-8 flex gap-12 items-center">
            <button className="bg-[#f58d05] text-white px-8 py-4 rounded-full font-semibold">
              Join for free
            </button>
            <div className="flex gap-4 items-center">
              <button className="bg-white rounded-full w-16 h-16 shadow-sm flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="font-medium text-lg text-gray-500">
                Watch How it works
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://knolgo.com/assets/girl.png"
            alt=""
            className="w-full"
          />
        </div>
      </section>
    </>
  );
}
