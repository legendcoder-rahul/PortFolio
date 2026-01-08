import { useId } from "react";

const Contact = () => {
  const nameid = useId();
  const emailid = useId();
  const messageid = useId();
  return (
    <div className="h-140 md:flex md:m-10 md:justify-center">
      <div className="h-[50%] px-5 py-10">
        <h1 className="text-6xl font-semibold md:text-9xl">LET'S GET IN TOUCH</h1>
        <p className="text-[1rem] w-60 pt-5 md:text-2xl md:w-full">
          * AVAILABLE FOR NEW PROJECTS FROM JAN 2026
        </p>
      </div>
      <div className="h-[50%] px-5 md:w-full md:py-15 md:px-10 ">
        <form>
          <div className="grid grid-cols-2 gap-4  ">
            <div>
              <label className="block mb-2" htmlFor={nameid}>
                FULL NAME
              </label>
              <input className="border w-full p-2 md:py-5 rounded" placeholder="Enter Name" type="text" id={nameid} />
            </div>
            <div>
              <label className="block mb-2"  htmlFor={emailid}>
                EMAIL
              </label>
              <input className="border w-full p-2 md:py-5 rounded" placeholder="Enter Email" type="text" id={emailid} />
            </div>
            <div className="col-span-2 md:mt-8">
              <label className="block mb-2" htmlFor={messageid}>
                MESSAGE
              </label>
              <textarea className="border w-full p-2 md:py-10" placeholder="Write your message here..." id={messageid} rows="4" />
            </div>
          </div>
          <button className="border px-4 py-2 rounded mt-2 md:py-3 md:px-10 text-2xl">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
