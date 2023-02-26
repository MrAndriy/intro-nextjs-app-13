"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
