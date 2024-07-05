// import React from 'react';

export default function About() {
  return (
    <>
      <section className="container mx-auto min-h-screen p-4">
        <div className="text-center lg:max-w-[760px] mx-auto px-4 lg:px-0">
          <h1 className="text-orange-500 text-5xl font-semibold">
            <span className="text-blue-800">What is</span> Learn Mode?
          </h1>
          <p className="font-medium text-lg py-10 text-gray-500 leading-loose">
            Learn Mode is a platform that allows educators to create online
            classes where they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-around items-center lg:p-28">
          <div
            className="bg-cover bg-center bg-no-repeat w-full lg:w-[600px] h-[400px] flex flex-col items-center justify-center text-white rounded-xl"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/serious-teacher-checking-assignment-two-students_1262-15174.jpg?t=st=1720008349~exp=1720011949~hmac=261db79774de574b8e00af5c7460194e866304e60ec0b7ed50e878b37484d8c6&w=1380')",
            }}
          >
            <h1 className="font-semibold text-3xl">For Instructors</h1>
            <button className="border mt-6 border-white px-8 py-4 rounded-full text-white font-medium">
              Start a Class Today
            </button>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat w-full lg:w-[600px] h-[400px] flex flex-col items-center justify-center text-white rounded-xl"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/medium-shot-team-leader-explaining-board_23-2148868449.jpg?t=st=1720008813~exp=1720012413~hmac=25bda64bc6affd528943b75d0b40cf8b8609a9db4bbc5f4408a9845490b6ace4&w=1380')",
            }}
          >
            <h1 className="font-semibold text-3xl">For Students</h1>
            <button className="border bg-sky-500/60 mt-6 border-white px-8 py-4 rounded-full text-white font-medium">
              Enter access code
            </button>
          </div>
        </div>
        <div className="p-3 lg:p-16 my-12 lg:mt-32 flex flex-col lg:flex-row items-stretch gap-8">
          <div className="max-w-[700px] mx-auto order-2 lg:order-1">
            <h1 className="text-2xl lg:text-4xl font-semibold text-blue-800">
              Everything you can do in a physical classroom,{" "}
              <span className="text-orange-400">
                you can do with Learnmode.
              </span>
            </h1>
            <p className="text-gray-600 leading-loose py-6 text-lg">
              Learn Mode school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in the secure cloud-based system.
            </p>
            <a
              href="#"
              className="text-gray-600 underline font-medium hover:text-blue-600"
            >
              Learn More
            </a>
          </div>
          <div
            className="mt-8 lg:mt-0 bg-cover bg-center bg-no-repeat w-full lg:h-[400px] h-[230px] rounded-xl order-1 lg:order-2"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/close-up-people-learning-language_23-2149300726.jpg?t=st=1720010040~exp=1720013640~hmac=cf30e3f932ebf2c3e9b2a08afad254d943717eaa3e81bc6cdff73ec6498a0eb5&w=1380')",
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
