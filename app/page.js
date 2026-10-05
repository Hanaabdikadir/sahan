import Image from "next/image";
import Link from "next/link";

const plates = [
  {
    name: "Fire grill",
    note: "Skewers, charred pepper, and warm sauces.",
    image: "/photos/hero.jpg",
    price: "$18",
  },
  {
    name: "Slow ribs",
    note: "Glazed ribs with tomato, pickles, and fries.",
    image: "/photos/grill.jpg",
    price: "$22",
  },
  {
    name: "House loaves",
    note: "Seeded bread, baked each morning.",
    image: "/photos/bread.jpg",
    price: "$6",
  },
  {
    name: "Citrus tea",
    note: "Iced tea with lime and mint.",
    image: "/photos/tea.jpg",
    price: "$4",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#9a4e24]">Mogadishu</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight sm:text-7xl">
            A bright table for slow evenings.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#5c5348]">
            Sahan is a modern dining room on Lido Road. We grill over fire, bake bread in the morning, and keep the room open to the light.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/menu"
              className="rounded-full border border-[#9a4e24] px-5 py-3 text-[#9a4e24] transition hover:-translate-y-0.5 hover:bg-[#9a4e24] hover:text-white"
            >
              See the menu
            </Link>
            <Link href="/visit" className="rounded-full border border-[#9a4e24] px-5 py-3 text-[#9a4e24] transition hover:-translate-y-0.5 hover:bg-[#9a4e24] hover:text-white">
              Plan a visit
            </Link>
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] sm:h-[520px]">
          <Image src="/photos/room.jpg" alt="The Sahan dining room" fill className="object-cover" priority />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-4xl">Tonight’s plates</h2>
          <Link href="/menu" className="text-sm text-[#9a4e24]">
            Full menu
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {plates.map((plate) => (
            <article
              key={plate.name}
              className="group overflow-hidden rounded-[1.6rem] border border-transparent bg-white shadow-[0_20px_50px_rgba(28,25,21,0.06)] transition duration-200 hover:-translate-y-2 hover:border-[#9a4e24] hover:shadow-[0_22px_46px_rgba(154,78,36,0.18)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={plate.image}
                  alt={plate.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl">{plate.name}</h3>
                  <p className="mt-1 text-[#5c5348]">{plate.note}</p>
                </div>
                <p className="text-sm">{plate.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
