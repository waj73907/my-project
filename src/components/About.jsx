import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div class="font-mono space-y-5 h-screen items-center flex flex-col mt-20">
        <div id="mission">
          <div className="text-center">
            <h1 class="font-bold">What is our mission? </h1>
          </div>
          <div className="w-96">
            <p class="break-normal">
              {" "}
              Our missions is to ensure the elderly have safe and effective
              transportation to and from their crucial appointments so they can
              experience safety and comfort.
            </p>
          </div>
        </div>
        <div id="plan" className="w-96">
          <div class="text-center">
            <h1 class="font-bold">How do we plan to accomplish this?</h1>
          </div>
          <p className="break-normal">
            By providing ride sharing specifically for the elderly and others
            that are unable to transport themselves.
          </p>
        </div>
        <div class="w-96">
          <div class="text-center">
            <h1 className="font-bold">Why us?</h1>
          </div>
          <p className="">
            Our drivers are specifically trained to handle the elderly and the
            disabled and ensure they experience the utmost care and comfort.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
