"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function send(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2">
      <section>
        <p className="text-sm uppercase tracking-[0.22em] text-[#9a4e24]">Contact</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
          Write, or call the room.
        </h1>
        <dl className="mt-8 space-y-4 text-[#5c5348]">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#9a4e24]">Address</dt>
            <dd className="text-lg text-[#1c1915]">Lido Road, Mogadishu</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#9a4e24]">Phone</dt>
            <dd className="text-lg text-[#1c1915]">+252 61 555 0190</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#9a4e24]">Email</dt>
            <dd className="text-lg text-[#1c1915]">hello@sahan.restaurant</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#9a4e24]">Hours</dt>
            <dd className="text-lg text-[#1c1915]">Every day, 12:00–23:00</dd>
          </div>
        </dl>
      </section>

      <section>
        {sent ? (
          <p className="rounded-3xl bg-white p-6 text-lg">Message received. Sahan will write back.</p>
        ) : (
          <form onSubmit={send} className="grid gap-4">
            <input required name="name" placeholder="Name" className="rounded-2xl border border-[#e4d8c8] bg-white px-4 py-3 outline-none focus:border-[#9a4e24]" />
            <input required type="email" name="email" placeholder="Email" className="rounded-2xl border border-[#e4d8c8] bg-white px-4 py-3 outline-none focus:border-[#9a4e24]" />
            <textarea required name="message" rows={5} placeholder="Message" className="rounded-2xl border border-[#e4d8c8] bg-white px-4 py-3 outline-none focus:border-[#9a4e24]" />
            <button className="rounded-full border border-[#9a4e24] bg-transparent px-5 py-3 text-[#9a4e24] transition hover:-translate-y-0.5 hover:bg-[#9a4e24] hover:text-white">
              Send message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
