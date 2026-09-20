'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import MenuModule from '@/components/scarlett/MenuModule';

type Location = 'bandra' | 'juhu';

export default function BrunchPage() {
  const [location, setLocation] = useState<Location>('bandra');

  const bandraSalads = [
    ["Avocado Ceviche", "", "Pineapple, Avocado, Leche De Tigre"],
    ["Thai Salad", "", "(Veg / Chicken / Prawns) Peanuts, Greens, Spicy Dressing"],
    ["Pomelo & Betel Leaf Salad", "", "(Veg / Chicken / Prawns) Refreshing, Citrusy Herbal Toss"],
    ["Fig & Burrata", "", "Figs, Creamy Cheese, Pesto"]
  ];

  const bandraSmallPlates = [
    ["Podi Masala Peanuts", "", "Spicy Peanut, Podi Spice, Curry Leaf"],
    ["Fries", "", "(Peri Peri / Salted / Truffle Cheese) Hand Cut Potatoes, Seasoning"],
    ["Stuffed Chilli With Besan Chutney", "", "Bhavnagri Chilli, Kadhi, Cheese"],
    ["Corn Ribs Miso Yuzu Butter With Cheddar Foam", "", "Corn Ribs, Yuzu, Cheddar Cheese"],
    ["Jackfruit Kulcha With Parmesan", "", "Jackfruit, Bread, Cheese"],
    ["Corn Croquettes", "", "Corn, Cheese, Pickled Crema"],
    ["Veg Jhol Momo", "", "Dumplings, Jhol, Chilli Oil"],
    ["Jackfruit Taco", "", "Jackfruit, Sour Cream, Tortilla"],
    ["Scarlett Millet Nachos", "", "Nachos, Guacamole, Salsa"],
    ["Mushroom Pâté Phyllo Cup", "", "Rich Pastry Cups, Mushroom, Leeks"],
    ["Croque Monsieur", "", "Brioche, Caramelised Onion, Cheese"],
    ["Truffle & Shroom Toast", "", "Sourdough, Mushroom, Cheese"],
    ["Magic Mushroom", "", "Earthy, Spicy, Savoury Umami Bites"],
    ["Burrata Chaat", "", "Beet Chips, Dehydrated Okra, Cilantro Ranch"],
    ["Paneer Thecha", "", "Spicy Thecha, Cilantro Ranch, Dill Yogurt"],
    ["Chicken Kulcha With Parmesan", "", "Chicken, Bread, Cheese"],
    ["Chicken Jhol Momo", "", "Dumplings, Jhol, Chilli Oil"],
    ["Thecha Baby Shrimp Kulcha", "", "Thecha, Bread, Cheese"],
    ["Crispy Chicken", "", "Crispy Chicken, Toum, Peri Peri"],
    ["Chicken Taco", "", "Pulled Chicken, Sour Cream, Tortilla"],
    ["Curry Leaf Butter Prawns", "", "Curry Leaf Butter, Tempura Prawn, Green Peppercorn"],
    ["Chicken Thecha", "", "Spicy Thecha, Cilantro Ranch, Dill Yogurt"],
    ["Katsu Sando", "", "Crispy Chicken, Brioche, Salad"],
    ["Madras Calamari", "", "Fried Squid, Madras Spice, Coconut"],
    ["Gambas Al Ajillo", "", "Garlic, Prawn, Bread"]
  ];

  const bandraSushi = [
    ["Enoki Truffle Maki", "", "Earthy Mushroom Truffle Roll"],
    ["Emerald Avocado Roll", "", "Vibrant, Creamy Avocado Roll"],
    ["Koyo Umami Futomaki", "", "Rich, Savoury Signature Roll"],
    ["Prawn Tempura Roll", "", "Crunchy Fried Prawn Maki"]
  ];

  const bandraBigBrunch = [
    ["Ghee Roast Cauliflower", "", "Cauliflower, Ghee, Bread"],
    ["Masala Khichdi", "", "Rice, Spices, Ghee (Add-on: Chicken / Prawns / Mutton)"],
    ["Kerala Style Creamy Corn", "", "Corn, Cheese, Arugula"],
    ["Caramelised Onion Pasta", "", "Caramelised Onion, Pasta, Parmesan"],
    ["Ghassi", "", "(Paneer / Chicken / Prawn) Tamarind, Rice, Chillies"],
    ["Pongal Risotto", "", "(Mushroom / Chicken / Mutton) Lentil, Rice, Pepper"],
    ["Lemon Basil Pasta", "", "Lemon, Parmesan, Basil (Add-on: Chicken)"],
    ["Miso Fettuccine", "", "Miso, Butter, Parmesan (Add-on: Chicken / Prawns)"],
    ["Spaghetti Aglio E Olio", "", "Chillies, Garlic, Olive Oil (Add-on: Chicken / Prawns)"],
    ["Mac & Cheese", "", "Macaroni, Cheese, Cream (Add-on: Chicken / Prawns)"],
    ["Chettinad Smash", "", "(Mushroom / Chicken / Mutton) Potato Smash, Chettinad, Parmesan"],
    ["Truffle Pesto Risotto With Kataifi", "", "(Halloumi / Chicken / Prawn) Pesto, Arborio, Truffle"],
    ["Scarlett Soufflé Curry", "", "(Jackfruit / Chicken) Egg, Coconut, Spices"],
    ["Ghee Roast Chicken", "", "Chicken, Ghee, Bread"],
    ["Grilled Chicken", "", "Grilled Chicken Breast, Potato Mash, Balsamic Mushroom Sauce, Braised Asparagus"],
    ["Soft Shell Crab", "", "Crispy, Delicate Fried Crab"],
    ["Seabass Fillet With Seafood Sauce & Salad", "", "Seabass Fillet, Salad, Seafood Sauce"],
    ["Malabar Prawn Curry Bowl", "", "Coconut-Based Prawn Curry, Indrani Rice, Fried Curry Leaves, Kadu Manga Achar"]
  ];

  const bandraDesserts = [
    ["90's Honey Coconut Cake", "", "Nostalgic Sweet Coconut Sponge"],
    ["Hazelnut Praline", "", "Crunchy, Nutty Chocolate Delight"],
    ["Sticky Date Cake", "", "Toffee Sauce, Vanilla Ice Cream"],
    ["Tiramisu", "", "Espresso-Soaked Ladyfingers, Mascarpone, Kahlúa"],
    ["Gluten-Free Cake", "", "With Ice Cream. Rich Decadent Flourless Sponge"]
  ];

  const juhuSalads = [
    ["Scarlet Glow", "", "Citrus, Greens, Toasted Seeds"],
    ["Fig & Burrata Bliss", "", "Fresh Figs, Burrata, Honey"],
    ["Caesar Salad", "", "(Veg / Chicken / Prawns) Romaine, Croutons, Shaved Parmesan, Cherry Tomatoes, Kalamata Olives, Caesar Dressing"],
    ["Thai Garden Chicken Salad", "", "Grilled Chicken, Fresh Greens, Crunchy Veg, House Dressing"]
  ];

  const juhuSmallPlates = [
    ["Crinkle Truffle Fries", "", "Crispy Crinkle Fries, Truffle Oil, Parmesan Cheese, Fresh Chives"],
    ["Trio Hummus", "", "Classic Hummus, Edamame Hummus, Podi Hummus, Pita, Lavash, Olives"],
    ["Blazing Banana Fries", "", "Raw Banana, Chilli Dust, Crisp Curry Leaf"],
    ["Arbi Tuk", "", "Crispy Fried Arbi, Chef Special Spices, House Dip, Tamarind & Dates Chutney"],
    ["Scarlett Millet Nachos", "", "Crispy Millet Nachos, Rich Cheese Sauce, Jalapeños, Pico De Gallo, Velvety Sour Cream"],
    ["Mushroom Asada Tacos", "", "Grilled Mushrooms, Tortilla, Pickled Onion"],
    ["Jhol Momos", "", "(Veg / Chicken) Handmade Momos, Homemade Spicy Crispy Chilli Oil"],
    ["Brussels Blaze Tofu", "", "Crispy Tofu, Brussels Sprouts, Bell Peppers, Spicy Asian Chilli Glaze"],
    ["Korean Shroom Wings", "", "Crispy Oyster Mushrooms, Gochujang Glaze, Creamy Labneh"],
    ["Edamame Phyllo Mousse", "", "Edamame, Olive Oil, Lemon, Sea Salt"],
    ["Buratta Chaat Au Lait", "", "Burrata, Chutney Trio, Masala Crunch"],
    ["Chicken Tunisian", "", "Spiced Chicken Marinate, Harissa, African Spices"],
    ["Pulled Chicken Tacos", "", "Braised Chicken, Cooling Sour Cream, Tucked In Hard Shell Taco"],
    ["Madras Calamari", "", "Calamari, Curry Leaves, Coastal Chilli"],
    ["Crispy Chicken", "", "Chicken, Spiced Batter, House Dip"],
    ["Gambas Español", "", "Prawns, Garlic, Olive Oil, Chilli"],
    ["Baked Smoked Salmon", "", "Smoked Salmon, Cream Cheese, Sour Cream, Dill, Capers, Lemon Zest, Crisp Phyllo, Chilli Jam, Toasted Almonds"]
  ];

  const juhuSushi = [
    ["Tofu Sunset Roll", "", "Tofu, Pickled Veg, Sesame, Sushi Rice"],
    ["Madras Beetroot Roll", "", "Beetroot, Sesame, Spiced Mayo"],
    ["Enoki Truffle Maki", "", "Enoki, Truffle, Sushi Rice"],
    ["Emerald Avocado Roll", "", "Tempura Tofu, Cream Cheese, Avocado, Spicy Mayo"],
    ["Koyo Umami Futamaki", "", "Tempura Umami Mushrooms, Avocado, Asparagus, Cucumber, Iceberg Lettuce"],
    ["Prawn Tempura Roll", "", "Crisp Prawn, Avocado, Nori"],
    ["Salmon Avocado Roll", "", "Salmon, Avocado, Sushi Rice, Nori"]
  ];

  const juhuBigBrunch = [
    ["Cottage Cheese Ghassi", "", "Spicy Coconut Rich Ghassi, Cottage Cheese, Crispy Mangalorean Kori Roti Or Malabar Paratha"],
    ["Scarlett Bowl", "", "(Seared Tofu / Chicken) Garden Greens, Avocado, Broccoli, Bok Choy, Snow Peas, Edamame, Beetroot Rice"],
    ["Millet Aglio Olio", "", "Millet Pasta, Parmesan Cheese, Herbs"],
    ["Mizo Curry", "", "(Tofu / Chicken) Mizoram Style Curry, Black Wild Rice, Zawngtah Raw Salad"],
    ["Shirataki Noodles", "", "Shirataki Noodles, Seasonal Veg, Light Sauce"],
    ["Tofu Mango Curry Bowl", "", "Tofu, Mango, Coconut"],
    ["Spinach Ravioli", "", "Fresh Ravioli Stuffed With Spinach, Ricotta, Sage Burnt Butter Almond Sauce. Jain Option Available."],
    ["Beetroot Mascarpone Ravioli", "", "Fresh Ravioli Filled With Beetroot, Ricotta Cheese, Velvety Mascarpone, Truffle Parmesan Sauce, Walnuts, Basil Oil Drizzle"],
    ["Mac & Cheese", "", "Pasta, Cheese Sauce, Butter, Topped With Herbs Crumble"],
    ["Miso Butter Fettuccine", "", "Fettuccine, Miso, Butter, Parmesan"],
    ["Black Truffle Edamame Risotto", "", "Risotto Rice, Edamame Puree, Asparagus, Truffle Shavings, Crispy Edamame, Chilly Oil"],
    ["Gnocchi With Porcini Cream", "", "Gnocchi, Porcini, Parmesan"],
    ["Prawns / Chicken Ghassi", "", "Coastal Ghassi Prawns / Chicken, Kori Roti Or Malabar Paratha"],
    ["White Butter Chicken", "", "Creamy Tomato, Chicken, Butter"],
    ["Grilled Chicken", "", "Chicken, Marinade, Seasonal Sides"],
    ["Malabar Prawn Curry Bowl", "", "Prawns, Coconut, Tamarind"]
  ];

  const juhuDesserts = [
    ["Seasonal Cheesecake", "", "Seasonal Fruit Compote, Cream Cheese, Roasted Nuts"],
    ["Hazelnut Praline", "", "Chocolate Sponge, Chocolate Ganache, Hazelnut Praline Paste"],
    ["Scarlett Fructose Bowl", "", "Dragon Fruit, Kiwi, Black Grapes, Blueberry, Greek Yoghurt, Citrus Dressing"],
    ["Basque Cheesecake", "", "Cream Cheese, Caramelised Top"],
    ["Gluten-Free Cake", "", "Seasonal Ingredients, Gluten-Free Flour"],
    ["Tiramisu", "", "Coffee, Mascarpone, Cocoa"],
    ["Crème Brulee French Toast", "", "Crème Brulee, Cream, Honey"],
    ["Kunafa French Toast", "", "Kunafa, Cream, Honey"]
  ];

  const sections = location === 'bandra'
    ? [
        { title: "Salads", subtitle: "The Salad Counter", items: bandraSalads },
        { title: "Small Plates", subtitle: "Small Plates", items: bandraSmallPlates },
        { title: "Sushi", subtitle: "From Our Sushi Bar", items: bandraSushi },
        { title: "Big Brunch", subtitle: "The Big Brunch", items: bandraBigBrunch },
        { title: "Desserts", subtitle: "The Sweet Memory Lane", items: bandraDesserts }
      ]
    : [
        { title: "Salads", subtitle: "The Salad Counter", items: juhuSalads },
        { title: "Small Plates", subtitle: "Small Plates", items: juhuSmallPlates },
        { title: "Sushi", subtitle: "From Our Sushi Bar", items: juhuSushi },
        { title: "Big Brunch", subtitle: "The Big Brunch", items: juhuBigBrunch },
        { title: "Desserts", subtitle: "The Sweet Memory Lane", items: juhuDesserts }
      ];

  return (
    <main className="w-full bg-[#47682c] relative z-10 text-[#FDF0D5] min-h-screen">
      <div className="w-full h-[80px] md:h-[90px]" />

      <div className="w-full text-center pb-4">
        <span className="font-serif text-[22px] md:text-[28px] uppercase tracking-[0.2em] opacity-80">
          Brunch Menu
        </span>
      </div>

      {sections.map((section, i) => (
        <MenuModule
          key={section.title}
          title={section.title}
          subtitle={section.subtitle}
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
