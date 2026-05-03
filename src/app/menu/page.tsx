// app/page.js
"use client";

import Image from "next/image";
import {
  Fish,
  Pizza,
  Coffee,
  Soup,
  Salad,
  IceCream,
  UtensilsCrossed,
  Sandwich,
} from "lucide-react";

const menuData = [
  {
    title: "Salades",
    icon: Salad,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    items: [
      ["Salade marocaine S", "25 DH"],
      ["Salade marocaine M", "40 DH"],
      ["Salade marocaine G", "50 DH"],
      ["Salade russe", "10 DH"],
      ["Salade espagnole", "30 DH"],
      ["Salade avocat & crevette", "40 DH"],
      ["Salade tropical", "60 DH"],
      ["Salade fruit mer", "70 DH"],
    ],
  },
  {
    title: "Tacos",
    icon: Sandwich,
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
    items: [
      ["Tacos thon", "35 DH"],
      ["Tacos poulet", "40 DH"],
      ["Tacos viande haché", "45 DH"],
      ["Tacos poisson", "50 DH"],
      ["Tacos mixte", "50 DH"],
      ["Tacos crevette", "50 DH"],
    ],
  },
  {
    title: "Pizzas",
    icon: Pizza,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    items: [
      ["Pizza margherita", "40 DH"],
      ["Pizza champignon", "40 DH"],
      ["Pizza verte", "45 DH"],
      ["Pizza thon", "50 DH"],
      ["Pizza royale", "60 DH"],
    ],
  },
  {
    title: "Soupes",
    icon: Soup,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    items: [
      ["Soupe normal", "20 DH"],
      ["Soupe spécial", "40 DH"],
    ],
  },
  {
    title: "Boissons",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    items: [
      ["Café Lavazza", "5 DH"],
      ["Thé P", "10 DH"],
      ["Thé G", "15 DH"],
      ["Jus d'orange", "14 DH"],
      ["Orangina", "16 DH"],
    ],
  },
  {
    title: "Desserts",
    icon: IceCream,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    items: [
      ["Flan oeuf", "12 DH"],
      ["Tiramisu", "17 DH"],
      ["Panna cotta", "17 DH"],
      ["Tarte citron", "17 DH"],
    ],
  },
];

function MenuCard({ category }: {category : any) { 
  const Icon = category.icon;

  return (
    <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100 hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
            <Icon size={32} />
          </div>
          <h2 className="text-4xl font-light tracking-[0.3em] uppercase">
            {category.title}
          </h2>
        </div>
      </div>

      <div className="p-8">
        <div className="space-y-4">
          {category.items.map(([name, price], index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-dotted border-amber-300 pb-3"
            >
              <span className="text-gray-700 text-lg">{name}</span>
              <span className="font-semibold text-amber-700">
                {price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-blue-50">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center opacity-10" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl">
              <Fish className="w-14 h-14 text-white" />
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-light tracking-[0.35em] text-slate-900 mb-6">
            MERICAN
          </h1>

          <p className="text-2xl tracking-[0.6em] text-amber-700 mb-4">
            RESTAURANT
          </p>

          <p className="text-slate-600 text-xl tracking-[0.25em]">
            SAVEURS DE LA MER
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {menuData.map((category, index) => (
            <MenuCard key={index} category={category} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pb-16">
        <UtensilsCrossed className="mx-auto mb-6 text-amber-700" size={42} />
        <p className="text-slate-600 tracking-[0.3em] text-lg">
          MERCI ET À BIENTÔT
        </p>
      </footer>
    </main>
  );
}