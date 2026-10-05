import Image from "next/image";

export const metadata = {
  title: "About — Sahan",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-sm uppercase tracking-[0.22em] text-[#9a4e24]">About</p>
      <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
        A dining room built around the fire.
      </h1>
      <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
        <div className="relative h-[420px] overflow-hidden rounded-[2rem]">
          <Image src="/photos/room.jpg" alt="The Sahan dining room" fill className="object-cover" />
        </div>
        <div className="space-y-5 text-lg leading-8 text-[#5c5348]">
          <p>
            Sahan opened on Lido Road for people who want a bright room, a short menu, and food that comes off the grill while it is still hot.
          </p>
          <p>
            The kitchen starts with bread in the morning and keeps the fire going until late. Ribs take their time. Skewers do not. Tea is poured cold, with lime and mint.
          </p>
          <p>
            Tables are for two or for eight. Come for lunch, or stay after the street outside goes quiet.
          </p>
        </div>
      </div>
    </main>
  );
}
