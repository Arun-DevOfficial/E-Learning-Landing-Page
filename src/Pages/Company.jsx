import Google from "../assets/Images/Google.png";
import Microsoft from "../assets/Images/Microsoft.png";
import Airbnb from "../assets/Images/Airbnb.png";
import Amazon from "../assets/Images/Amazon.png";
import Facebook from "../assets/Images/Facebook.png";

export default function Company() {
  return (
    <>
      <section className="container mx-auto pt-36 px-5">
        <div className="flex flex-col items-center justify-center text-baseline">
          <h1 className="text-2xl font-bold text-gray-400 capitalize">
            Trusted by 5,000+ companies worldwide
          </h1>
          <div className="grid grid-cols-5 items-center gap-12">
            <img src={Google} className="w-52" />
            <img src={Microsoft} className="w-52" />
            <img src={Airbnb} className="w-52" />
            <img src={Amazon} className="w-52" />
            <img src={Facebook} className="w-52" />
          </div>
        </div>

        <div className="py-36 justify-items-center grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 justify-center">
          <div className="w-full sm:w-96 relative rounded-lg bg-white p-8 text-center shadow-md ring-2 ring-gray-100">
            <div className="h-20 w-20 absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full bg-[#5a70ed] flex items-center justify-center text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 384 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z" />
              </svg>
            </div>
            <div className="mt-10">
              <h1 className="mb-4 text-3xl font-semibold text-blue-800">
                Online Billing, Invoicing, &amp; Contracts
              </h1>
              <p className="text-lg leading-relaxed py-8">
                Simplify and securely manage your organization is financial and
                legal transactions. Send customized invoices and contracts with
                ease.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-96 relative rounded-lg bg-white p-8 text-center shadow-md ring-2 ring-gray-100 mt-6 sm:mt-0">
            <div className="h-20 w-20 absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full bg-[#f58d05] flex items-center justify-center text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 11H9V13H7zM7 15H9V17H7zM11 11H13V13H11zM11 15H13V17H11zM15 11H17V13H15zM15 15H17V17H15z" />
                <path d="M5,22h14c1.103,0,2-0.897,2-2V8V6c0-1.103-0.897-2-2-2h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12 C3,21.103,3.897,22,5,22z M19,8l0.001,12H5V8H19z" />
              </svg>
            </div>
            <div className="mt-10">
              <h1 className="mb-4 text-3xl font-semibold text-blue-800">
                Online Billing, Invoicing, &amp; Contracts
              </h1>
              <p className="text-lg leading-relaxed py-8">
                Simplify and securely manage your organization is financial and
                legal transactions. Send customized invoices and contracts with
                ease.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-96 relative rounded-lg bg-white p-8 text-center shadow-lg ring-2 ring-gray-100 mt-6 sm:mt-0">
            <div className="h-20 w-20 absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full bg-[#2ab8e8] flex items-center justify-center text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 20 20"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <div className="mt-10">
              <h1 className="mb-4 text-3xl font-semibold text-blue-800">
                Online Billing, Invoicing, &amp; Contracts
              </h1>
              <p className="text-lg leading-relaxed py-8">
                Simplify and securely manage your organization is financial and
                legal transactions. Send customized invoices and contracts with
                ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
