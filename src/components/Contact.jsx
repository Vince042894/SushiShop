import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2>Reserve Now!</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <form action="">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label>Full Name:</label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label>Date:</label>
              <input className="w-full border rounded-md p-2" type="date" />
            </div>
            <div>
              <label>No of guest:</label>
              <input className="w-full border rounded-md p-2" type="number" />
            </div>
          </div>
        </div>
        <div>
          <label>Message:</label>
          <textarea
            className="w-full border rounded-md p-2"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="border rounded-md p-2 md:scale-125 mt-4">
          Reserve
        </button>
      </form>
    </div>
  );
};

export default Contact;
