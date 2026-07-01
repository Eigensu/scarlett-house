import React from 'react';
import Image from 'next/image';
import { getCloudinaryUrl, ImageMap } from '@/lib/cloudinary';

interface Category {
  name: string;
  chooseAny: number;
  items: string[];
}

interface SetMenuCardProps {
  title: string;
  price?: string;
  categories: Category[];
}

function SetMenuCard({ title, price, categories }: SetMenuCardProps) {
  return (
    <div className="flex-1 flex flex-col items-center text-center">
      <h3 className="font-serif text-[28px] md:text-[36px] text-[#FDF0D5] mb-2 border-b border-[#FDF0D5]/30 pb-4 inline-block">
        {title}
      </h3>
      {price && (
        <p className="font-sans text-[16px] font-semibold text-[#FDF0D5]/80 mt-2">
          {price}
        </p>
      )}

      <div className="w-full flex flex-col gap-8 mt-8">
        {categories.map((category) => (
          <div key={category.name}>
            <h4 className="font-serif text-[20px] md:text-[24px] leading-tight text-[#FDF0D5]">
              {category.name}
            </h4>
            <p className="font-sans text-[13px] italic text-[#FDF0D5]/50 mb-2">
              (Choose Any {category.chooseAny})
            </p>
            <ul className="flex flex-col gap-1 font-serif text-[16px] md:text-[18px] text-[#FDF0D5]/80">
              {category.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SetMenuPage() {
  const heroImage = getCloudinaryUrl(ImageMap.eat[3] || ImageMap.hero[0]);
  const dividerImage = getCloudinaryUrl(ImageMap.eat[0] || ImageMap.hero[0]);

  const vegMenu: Category[] = [
    { name: 'Salads/Soups', chooseAny: 1, items: ['Fig and Burrata Bliss Salad', 'Mango Gazpacho Soup'] },
    { name: 'Small Plates', chooseAny: 2, items: ["Paneer Thecha", "Jhol Momo's", 'Madras Beetroot Sushi'] },
    { name: 'Large Plates', chooseAny: 1, items: ['Masala Khichdi', 'Caramelised Onion Pasta', 'Mizo Curry'] },
    { name: 'Desserts', chooseAny: 1, items: ['Tiramisu', 'Seasonal Cheesecake'] }
  ];

  const nonVegMenu: Category[] = [
    { name: 'Salads/Soups', chooseAny: 1, items: ['Crunchy Thai Chicken Salad', 'Vietnamese Pho'] },
    { name: 'Small Plates', chooseAny: 2, items: ['Chicken Thecha', "Jhol Momo's", 'Gambas On Toast'] },
    { name: 'Large Plates', chooseAny: 1, items: ['White Butter Chicken', 'Malabar Chicken Curry', 'Chicken Ghassi'] },
    { name: 'Desserts', chooseAny: 1, items: ['Tiramisu', 'Seasonal Cheesecake'] }
  ];

  const drinkMenu: Category[] = [
    { name: 'Sangria', chooseAny: 1, items: ['White Wine Sangria', 'Red Wine Sangria'] },
    { name: 'Mocktails', chooseAny: 1, items: ['Berry Fizz', 'Passion Fizz', 'Elder Flower'] }
  ];

  return (
    <main className="w-full bg-[#080F0F] relative z-10 min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative w-full h-[60svh] md:h-[70svh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Scarlett's Set Menu"
            fill
            unoptimized={true}
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 fade-in">
          <h1 className="font-serif italic text-[60px] md:text-[90px] lg:text-[120px] text-[#FDF0D5] leading-none drop-shadow-xl">
            Set Menu
          </h1>
        </div>
      </section>

      {/* Veg, Non-Veg & Drink Menus */}
      <section className="relative w-full py-24 md:py-32 bg-[#080F0F] flex flex-col items-center px-6">
        <div className="w-full max-w-[1300px] flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
          <SetMenuCard title="Veg Set Menu" price="Rs. 850 ++" categories={vegMenu} />
          <SetMenuCard title="Non-Veg Set Menu" price="Rs. 950 ++" categories={nonVegMenu} />
          <SetMenuCard title="Drink" price="(Choose Any 1)" categories={drinkMenu} />
        </div>
      </section>

      {/* Divider Image */}
      <section className="w-full h-[40vh] md:h-[60vh] relative">
        <Image
          src={dividerImage}
          alt="Scarlett House Ambience"
          fill
          unoptimized={true}
          sizes="100vw"
          className="object-cover"
        />
      </section>

    </main>
  );
}
