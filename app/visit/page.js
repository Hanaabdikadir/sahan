"use client";

import Image from "next/image";
import { useState } from "react";

export default function VisitPage() {
  const [sent, setSent] = useState(false);

  function reserve(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#9a4e24]">Visit</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
            Come for lunch or stay past dark.
          </h1>
          <dl className="mt-8 space-y-4 text-[#5c5348]">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-[#9a4e24]">Address</dt>
              <dd className="text-lg text-[#1c1915]">Lido Road, Mogadishu</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-[#9a4e24]">Hours</dt>
              <dd className="text-lg text-[#1c1915]">Every day, 12:00–23:00</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-[#9a4e24]">Phone</dt>
              <dd className="text-lg text-[#1c1915]">+252 61 555 0190</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[2rem]">
          <Image src="/photos/room.jpg" alt="Tables in the dining room" fill className="object-cover" />
        </div>
      </section>

      <section id="reserve" className="mx-auto max-w-xl px-5 pb-20">
        <h2 className="font-[family-name:var(--font-display)] text-4xl">Reserve a table</h2>
        {sent ? (
          <p className="mt-6 rounded-3xl bg-white p-6 text-lg">Your table is noted. We will see you at Sahan.</p>
        ) : (
          <form onSubmit={reserve} className="mt-6 grid gap-4">
            <input required name="name" placeholder="Name" className="rounded-2xl border border-[#e4d8c8] bg-white px-4 py-3 outline-none focus:border-[#9a4e24]" />
            <input required type="date" name="date" className="rounded-2xl border border-[#e4d8c8] bg-white px-4 py-3 outline-none focus:border-[#9a4e24]" />
            <input required type="number" min="1" max="8" name="guests" placeholder="Guests" className="rounded-2xl border border-[#e4d8c8] bg-white px-4 py-3 outline-none focus:border-[#9a4e24]" />
            <button className="rounded-full border border-[#9a4e24] bg-transparent px-5 py-3 text-[#9a4e24] transition hover:-translate-y-0.5 hover:bg-[#9a4e24] hover:text-white">
              Request a table
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
