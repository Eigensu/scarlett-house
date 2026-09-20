'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import MenuModule from '@/components/scarlett/MenuModule';

type Location = 'bandra' | 'juhu';

export default function SetMenuPage() {
  const [location, setLocation] = useState<Location>('bandra');

  const bandraVeg = [
    ["Salads", ""],
    ["(Select 1)"],
    ["Avocado Ceviche", ""],
    ["Thai Salad", ""],
    ["Small Plates", ""],
    ["(Select 2)"],
    ["Emerald Avocado Roll", ""],
    ["Jackfruit Taco", ""],
    ["Paneer Thecha", ""],
    ["Jhol Momo", ""],
    ["Large Plates", ""],
    ["(Select 1)"],
    ["Masala Khichdi", ""],
    ["Caramelised Onion Pasta", ""],
    ["Spaghetti Aglio Olio", ""],
    ["Cauliflower Ghee Roast With Parotta", ""],
    ["Dessert", ""],
    ["(Select 1)"],
    ["90's Honey Cake", ""],
    ["Seasonal Cheesecake", ""]
  ];

  const bandraNonVeg = [
    ["Salads", ""],
    ["(Select 1)"],
    ["Avocado Ceviche", ""],
    ["Thai Chicken Salad", ""],
    ["Small Plates", ""],
    ["(Select 2)"],
    ["Chicken Taco", ""],
    ["Chicken Thecha", ""],
    ["Jhol Momo", ""],
    ["Prawn Tempura Roll", ""],
    ["Large Plates", ""],
    ["(Select 1)"],
    ["Spaghetti Aglio Olio With Chicken", ""],
    ["Ghassi Chicken With Rice", ""],
    ["Chicken Chettinad With Rice/Parotta", ""],
    ["Chicken Ghee Roast With Parotta", ""],
    ["Dessert", ""],
    ["(Select 1)"],
    ["90's Honey Cake", ""],
    ["Tiramisu", ""]
  ];

  const bandraDrinks = [
    ["(Choose Any 1)"],
    ["Sangria", ""],
    ["White Wine Sangria", ""],
    ["Red Wine Sangria", ""],
    ["Mocktails", ""],
    ["Berry Fizz", ""],
    ["Passion Fizz", ""],
    ["Elderflower", ""]
  ];

  const juhuVeg = [
    ["Salads/Soups", ""],
    ["(Choose Any 1)"],
    ["Fig and Burrata Bliss Salad", ""],
    ["Mango Gazpacho Soup", ""],
    ["Small Plates", ""],
    ["(Choose Any 2)"],
    ["Paneer Thecha", ""],
    ["Jhol Momo's", ""],
    ["Madras Beetroot Sushi", ""],
    ["Large Plates", ""],
    ["(Choose Any 1)"],
    ["Masala Khichdi", ""],
    ["Caramelised Onion Pasta", ""],
    ["Mizo Curry", ""],
    ["Desserts", ""],
    ["(Choose Any 1)"],
    ["Tiramisu", ""],
    ["Seasonal Cheesecake", ""]
  ];

  const juhuNonVeg = [
    ["Salads/Soups", ""],
    ["(Choose Any 1)"],
    ["Crunchy Thai Chicken Salad", ""],
    ["Vietnamese Pho", ""],
    ["Small Plates", ""],
    ["(Choose Any 2)"],
    ["Chicken Thecha", ""],
    ["Jhol Momo's", ""],
    ["Gambas On Toast", ""],
    ["Large Plates", ""],
    ["(Choose Any 1)"],
    ["White Butter Chicken", ""],
    ["Malabar Chicken Curry", ""],
    ["Chicken Ghassi", ""],
    ["Desserts", ""],
    ["(Choose Any 1)"],
    ["Tiramisu", ""],
    ["Seasonal Cheesecake", ""]
  ];

  const juhuDrinks = [
    ["(Choose Any 1)"],
    ["Sangria", ""],
    ["White Wine Sangria", ""],
    ["Red Wine Sangria", ""],
    ["Mocktails", ""],
    ["Berry Fizz", ""],
    ["Passion Fizz", ""],
    ["Elder Flower", ""]
  ];

  const sections = location === 'bandra'
    ? [
        { title: "Veg Set Menu", items: bandraVeg },
        { title: "Non-Veg Set Menu", items: bandraNonVeg },
        { title: "Drinks", items: bandraDrinks }
      ]
    : [
        { title: "Veg Set Menu", items: juhuVeg },
        { title: "Non-Veg Set Menu", items: juhuNonVeg },
        { title: "Drink", items: juhuDrinks }
      ];

  return (
    <main className="w-full bg-[#47682c] relative z-10 text-[#FDF0D5] min-h-screen">
      <div className="w-full h-[80px] md:h-[90px]" />

      <div className="w-full text-center pb-4">
        <span className="font-serif text-[22px] md:text-[28px] uppercase tracking-[0.2em] opacity-80">
          Set Menu
        </span>
      </div>

      {sections.map((section, i) => (
        <MenuModule
          key={section.title}
          title={section.title}
          align={i % 2 === 0 ? 'left' : 'right'}
          layout="layout-desc"
          items={section.items}
          headerAction={i === 0 ? (
            <div className="flex items-center gap-2 font-serif text-[16px] md:text-[20px] uppercase tracking-wide whitespace-nowrap shrink-0">
              <button
                onClick={() => setLocation('bandra')}
                className={clsx('transition-opacity', location === 'bandra' ? 'opacity-100 underline underline-offset-4' : 'opacity-50 hover:opacity-80')}
              >
                Bandra
              </button>
              <span className="opacity-50">|</span>
              <button
                onClick={() => setLocation('juhu')}
                className={clsx('transition-opacity', location === 'juhu' ? 'opacity-100 underline underline-offset-4' : 'opacity-50 hover:opacity-80')}
              >
                Juhu
              </button>
            </div>
          ) : undefined}
        />
      ))}

      <div className="w-full h-[230px] bg-transparent pointer-events-none" />
    </main>
  );
}
