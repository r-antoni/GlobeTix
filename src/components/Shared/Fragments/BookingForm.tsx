"use client";
import Link from "next/link";
import React, {useState} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import axios from "axios";
import {redirect} from "next/navigation";

type Props = {
  tour: string;
};

const BookingForm = ({tour}: Props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");

  const handleForm = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        address,
        email,
        phone,
        date,
        destination,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleForm}>
      {/* Name */}
      <div>
        <label htmlFor="name">Fullname</label>
        <input type="text" placeholder="Fullname" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      {/* Address */}
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {/* Phone Number */}
      <div>
        <label htmlFor="phone">Phone Number</label>
        <PhoneInput country={"us"} value={phone} onChange={(value) => setPhone(value)} />
      </div>
      {/* Date */}
      <div>
        <label htmlFor="date">Departure Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      {/* Selection */}
      <div>
        <label htmlFor="select">Tour Destination</label>
        <select value={destination} onChange={(e) => setDestination(e.target.value)}>
          <option value={tour}>{tour}</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="px-7 py-3 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full inline-flex items-center"
        >
          <Link href="https://buy.stripe.com/test_5kAaF4fNGb168PC8ww">
            <span>Pay Now</span>
          </Link>
        </button>
        <button className="px-7 py-3 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full inline-flex items-center">
          <Link href="/java/monas"> Go Back </Link>
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
