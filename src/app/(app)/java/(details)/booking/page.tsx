import React from "react";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen overflow-y-hidden">
      <section className="order" id="order">
        <h3 className="sub-heading text-blue-800"> order now </h3>
        <h1 className="heading"> free and fast </h1>
        <form>
          <div className="inputBox">
            <div className="input">
              <span>your name</span>
              <input type="text" placeholder="enter your name" id="name" />
            </div>
            <div className="input">
              <span>your number</span>
              <input type="number" placeholder="enter your number" id="number" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>your order</span>
              <input type="text" placeholder="enter tickets title" id="orders" />
            </div>
            <div className="input">
              <span>additional order</span>
              <input type="test" placeholder="extra order" id="extraOrders" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>numbers of ticket</span>
              <input type="number" placeholder="how many orders" id="tickets" />
            </div>
            <div className="input">
              <span>date and time</span>
              <input type="datetime-local" id="time" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>your address</span>
              <textarea name="" placeholder="enter your address" id="address" cols={30} rows={10}></textarea>
            </div>
            <div className="input">
              <span>your message</span>
              <textarea name="" placeholder="enter your message" id="message" cols={30} rows={10}></textarea>
            </div>
          </div>
          <button type="submit">
            <Link href="https://buy.stripe.com/test_5kAaF4fNGb168PC8ww">
              <span>Pay Now</span>
            </Link>
          </button>
        </form>
        <h3 className="sub-heading text-black">
          <Link href="/details"> back </Link>
        </h3>
      </section>
    </div>
  );
};

export default page;
