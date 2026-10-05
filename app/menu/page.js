import Image from "next/image";

const groups = [
  {
    title: "From the fire",
    items: [
      ["Fire grill", "Chicken, lamb, potato, and three sauces", "18"],
      ["Lamb chop", "Charred chop with herbs and salt", "24"],
      ["Chicken skewer", "Two sticks, pepper, and garlic sauce", "14"],
      ["Beef skewer", "Cubed beef, onion, and chili oil", "16"],
      ["Charred vegetables", "Pepper, eggplant, and herbs", "11"],
      ["Roast potato", "Hot potato with butter and salt", "5"],
    ],
    image: "/photos/hero.jpg",
    alt: "Grilled skewers and sauces",
  },
  {
    title: "Slow plates",
    items: [
      ["Slow ribs", "Glazed ribs, tomato, pickles, and fries", "22"],
      ["Half rack", "A smaller rack with the same glaze", "16"],
      ["Ribs for two", "Full board, two sauces, and fries", "38"],
      ["Crisp fries", "Salted fries in a paper cone", "5"],
      ["Tomato side", "Sliced tomato, oil, and parsley", "4"],
    ],
    image: "/photos/grill.jpg",
    alt: "Glazed ribs with tomato and pickles",
  },
  {
    title: "Bread",
    items: [
      ["House loaves", "Three seeded breads, baked this morning", "6"],
      ["Sunflower loaf", "A round loaf thick with seeds", "4"],
      ["Warm bread board", "Loaf, butter, and salt", "8"],
      ["Bread and butter", "Two slices and soft butter", "3"],
    ],
    image: "/photos/bread.jpg",
    alt: "Fresh seeded loaves",
  },
  {
    title: "Tea and cool drinks",
    items: [
      ["Citrus tea", "Iced tea, lime, and mint", "4"],
      ["Mint tea", "The same glass, extra mint", "4"],
      ["Lime soda", "Fresh lime, ice, and sparkling water", "4"],
      ["Still water", "A cold bottle for the table", "2"],
    ],
    image: "/photos/tea.jpg",
    alt: "Iced tea with lime and mint",
  },
];

export const metadata = {
  title: "Menu — Sahan",
};

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-sm uppercase tracking-[0.22em] text-[#9a4e24]">Menu</p>
      <h1 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
        A longer table. Still cooked to order.
      </h1>
      <div className="mt-12 space-y-16">
        {groups.map((group) => (
          <section key={group.title} className="grid items-start gap-8 md:grid-cols-2">
            <div className="group relative h-80 overflow-hidden rounded-[1.8rem]">
              <Image
                src={group.image}
                alt={group.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl">{group.title}</h2>
              <ul className="mt-6 grid gap-3">
                {group.items.map(([name, note, price]) => (
                  <li
                    key={name}
                    className="flex items-start justify-between gap-6 rounded-2xl border border-transparent bg-white px-4 py-4 shadow-[0_12px_30px_rgba(28,25,21,0.04)] transition duration-200 hover:-translate-y-2 hover:border-[#9a4e24] hover:bg-[#fff6ee] hover:shadow-[0_18px_40px_rgba(154,78,36,0.18)]"
                  >
                    <div>
                      <p className="text-lg">{name}</p>
                      <p className="text-sm text-[#5c5348]">{note}</p>
                    </div>
                    <p>${price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
