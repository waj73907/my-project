import Navbar from "./Navbar";
import React from "react";
import { useNavigate } from "react-router";

function Schedule() {
  const nav = useNavigate();

  function handleClick() {
    alert("Ride booked!");

    nav("/about");
  }
  return (
    <>
      <Navbar />
      <form>
        <div className=" space-y-3 items-center flex flex-col mt-20">
          <label for="firstNameInput" className="form-label">
            First Name
          </label>

          <input
            type="text"
            className="w-52 form-control text-sm border-black border-solid border-2 rounded-lg p-1"
            id="firstNameInput"
            placeholder="ex: John"
          ></input>
          <label for="lastNameInput" className="form-label">
            Last Name
          </label>

          <input
            type="text"
            className="w-52 form-control text-sm border-black border-solid border-2 rounded-lg p-1"
            placeholder="ex: Doe"
          ></input>
          <label for="pickupAddress" className="form-label">
            Pick-up Address
          </label>
          <input
            type="text"
            className="w-52 form-control text-sm border-black border-solid border-2 rounded-lg p-1"
            id="pickupAddress"
            placeholder="123 Main St, Athens GA, 30605"
          ></input>
          <label for="dropoffAddress" className="form-label">
            Drop-off Address
          </label>
          <input
            type="text"
            className="w-52 form-control text-sm border-black border-solid border-2 rounded-lg p-1"
            id="dropoffAddress"
            placeholder="123 Main St, Athens GA, 30605"
          ></input>
          <div className="flex items-center flex-row">
            <input className="" type="checkbox"></input>
            <label className="text-xs">Return to pick up address?</label>
          </div>
          <button
            className="bg-green-200 rounded border p-0.5"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Schedule;
