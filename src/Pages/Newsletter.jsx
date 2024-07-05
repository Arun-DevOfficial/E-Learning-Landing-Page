// import React from 'react'

export default function Newsletter() {
  return (
    <section className="container mx-auto py-16">
      <article className="leading-relaxed text-center">
        <h1 className="text-4xl text-blue-700 font-semibold mb-8">
          Latest News and Resources
        </h1>
        <p className="text-gray-500 text-2xl">
          See the developments that have occurred to Learn Mode in the world
        </p>
      </article>
      <div className="grid grid-cols-1 justify-items-center justify-center items-start gap-5 my-7 lg:grid-cols-2 p-5">
        <div className="p-5 lg:p-16 flex flex-col gap-8">
          <img
            src="https://assets.lummi.ai/assets/QmQGn76EHpFibxeRT7YY6ehd4wVSseuu9DxZyHbbf4ZbDP?auto=format&w=1500"
            alt="newsletter"
            className="rounded-xl"
          />
          <button className="bg-[#ff4e21] self-start text-white font-medium text-lg px-12 py-3 rounded-full mt-12">
            News
          </button>
          <h1 className="mt-6 font-semibold text-3xl text-slate-700">
            See the developments that have occurred to Learn Mode in the world
          </h1>
          <p className="text-gray-500 text-2xl leading-normal">
            Teacher is a designation for the office, position, and profession
            for someone who devotes himself in the field of education through
            patterned educational interaction, formal and systematic.
          </p>
          <p className="underline text-lg font-medium text-gray-500 cursor-pointer">
            Learn More
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-16">
          <div className="flex gap-6">
            <div className="bg-[url('https://assets.lummi.ai/assets/QmZhb9gGbjPob2YTg34SMKdPvyS4hMvqudhVp8Cex1qhbU?auto=format&w=1500')] bg-cover bg-center lg:w-[330px] lg:h-[200px] rounded-xl flex justify-end items-end p-5">
              <button className="bg-[#ff4e21] rounded-xl px-3 py-3 text-white">
                Press Release
              </button>
            </div>
            <div className="w-full max-w-[320px]">
              <h1 className="font-medium text-3xl">Online Class</h1>
              <p className="py-4 font-normal text-xl text-gray-500">
                See the developments that have occurred to Learn Mode in the
                world.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="bg-[url('https://assets.lummi.ai/assets/QmRU5TCz3EbVHbwJuFkyp1RCBhvvg1CCefLCuk6c32GDc5?auto=format&w=1500')] bg-cover bg-center lg:w-[330px] lg:h-[200px] rounded-xl flex justify-end items-end p-5">
              <button className="bg-[#ff4e21] rounded-xl px-3 py-3 text-white">
                Press Release
              </button>
            </div>
            <div className="w-full max-w-[320px]">
              <h1 className="font-medium text-3xl">Online Class</h1>
              <p className="py-4 font-normal text-xl text-gray-500">
                See the developments that have occurred to Learn Mode in the
                world.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-[url('https://assets.lummi.ai/assets/QmYJMfPcUrzakNTsk2THyZTPtVDgE1Rnk9Mu8stc39FviG?auto=format&w=1500')] bg-cover bg-center lg:w-[330px] lg:h-[200px] rounded-xl flex justify-end items-end p-5">
              <button className="bg-[#ff4e21] rounded-xl px-3 py-3 text-white">
                Press Release
              </button>
            </div>
            <div className="w-full max-w-[320px]">
              <h1 className="font-medium text-3xl">Online Class</h1>
              <p className="py-4 font-normal text-xl text-gray-500">
                See the developments that have occurred to Learn Mode in the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
