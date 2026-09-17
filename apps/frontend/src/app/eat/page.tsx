'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import MenuModule from '@/components/scarlett/MenuModule';
import MenuCarousel from '@/components/scarlett/MenuCarousel';
import { getCloudinaryUrl, ImageMap } from '@/lib/cloudinary';

type Location = 'bandra' | 'juhu';

export default function EatPage() {
  const [location, setLocation] = useState<Location>('bandra');
  const foodImages = ImageMap.eat.map((id) => ({ src: getCloudinaryUrl(id, { width: 1200 }) }));

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

  const bandraLargePlates = [
    ["Ghee Roast Cauliflower", "", "Cauliflower, Ghee, Bread"],
    ["Masala Khichdi", "", "Rice, Spices, Ghee. (Add-on: Chicken / Prawns / Mutton)"],
    ["Kerala Style Creamy Corn", "", "Corn, Cheese, Arugula"],
    ["Caramelised Onion Pasta", "", "Caramelised Onion, Pasta, Parmesan"],
    ["Ghassi", "", "(Paneer / Chicken / Prawn) Tamarind, Rice, Chillies"],
    ["Pongal Risotto", "", "(Mushroom / Chicken / Mutton) Lentil, Rice, Pepper"],
    ["Lemon Basil Pasta", "", "Lemon, Parmesan, Basil. (Add-on: Chicken)"],
    ["Miso Fettuccine", "", "Miso, Butter, Parmesan. (Add-on: Chicken / Prawns)"],
    ["Spaghetti Aglio E Olio", "", "Chillies, Garlic, Olive Oil. (Add-on: Chicken / Prawns)"],
    ["Mac & Cheese", "", "Macaroni, Cheese, Cream. (Add-on: Chicken / Prawns)"],
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
    ["Scarlet Glow", "", "Blueberry, Snap Peas, Arugula, Carrot, Quinoa, Beetroot, Avocado, Blueberry Dressing"],
    ["Fig & Burrata Bliss", "", "Wild Rocket Leaves, Figs, Pomegranate, Walnuts, Burrata, Sesame Seeds, Balsamic Vinaigrette"],
    ["Caesar Salad", "", "(Veg / Chicken / Prawns) Romaine, Croutons, Shaved Parmesan, Cherry Tomatoes, Kalamata Olives, Caesar Dressing"],
    ["Thai Garden Chicken Salad", "", "Grilled Chicken, Iceberg Lettuce, Carrots, Red Cabbage, Ripe Mango, Baby Red Radish, Picante Cashew, Peanut Thai Dressing"]
  ];

  const juhuWraps = [
    ["Tofu Chilli Wrap", "", "Carrot, French Beans, Fried Tofu, Spicy Asian Sauce, Chipotle Mayo"],
    ["Paneer Tikka Roll", "", "Paneer Tikka, Lettuce, Sour Cream, Tomato, Pickled Onion, Cilantro Ranch, Coriander"],
    ["Chicken Shawarma", "", "Harissa Marinated Chicken, Garlic Toum, French Fries, Pickled Veggies"],
    ["Chicken Franko", "", "Indian Spiced Shredded Chicken, Coriander, Pickle Onion, Cilantro Ranch"]
  ];

  const juhuSandwiches = [
    ["Bombay Masala Toast", "", "Multigrain Sourdough, Potato Masala, Tomato, Beetroot, Onion, Cheese Slice, Coriander Mint Chutney, Garlic Chutney, Sev, Ketchup, Vegetable Chips"],
    ["Ashwagandha Honey Toast", "", "Sourdough, Ashwagandha Honey, Cream Cheese, Almond Flakes"],
    ["Avocado Toast", "", "Multigrain Sourdough, Sundried Tomato Pesto, Avocado, Sour Cream, Almond Flakes, Bubu Arare, Vegetable Chips"],
    ["Chilli Cheese Toast", "", "Chillies, Gruyere, Mozzarella, Parmesan, Cheddar Cheese, Buttered Bread, Bell Peppers, Jalapeños"],
    ["Truffle & Shroom Toast", "", "Truffle Cream Cheese, Shitake, King Oyster, Balsamic, Truffle Oil, Multigrain Sourdough, Vegetable Chips"],
    ["Burrata Bellonate", "", "Baguette, Sundried Tomato, Baby Spinach, Burrata, Pesto, Caramelised Onion, Vegetable Chips"],
    ["Chicken Katsu Sando", "", "Sliced Bread, Chicken Katsu, Curry Sauce, Red Cabbage Slaw, Cheese, Pickled Jalapeño, Vegetable Chips"]
  ];

  const juhuSmallPlates = [
    ["Blazing Banana Fries", "", "Spiced Banana Frites, Cilantro Ranch"],
    ["Arbi Tuk", "", "Crispy Fried Arbi, Chef Special Spices, House Dip, Tamarind & Dates Chutney"],
    ["Veg Jhol Momos", "", "Homemade Momos, Homemade Spicy Crispy Chilli Oil"],
    ["Mushroom Asada Tacos", "", "Portobello Mushroom, Corn Tacos, Spicy Chipotle Sauce, Guacamole, Pickled Onion"],
    ["Trio Hummus", "", "Classic Hummus, Edamame Hummus, Podi Hummus, Pita, Lavash Olives"],
    ["Scarlett Millet Nachos", "", "Crispy Millet Nachos, Rich Cheese Sauce, Jalapeños, Pico De Gallo, Velvety Sour Cream"],
    ["Brussels Blaze Tofu", "", "Crispy Tofu, Brussels Sprouts, Bell Peppers, Spicy Asian Chilli Glaze"],
    ["Crinkle Truffle Fries", "", "Crispy Crinkle Fries, Truffle Oil, Parmesan Cheese, Fresh Chives"],
    ["Korean Shroom Wings", "", "Crispy Oyster Mushrooms, Gochujang Glaze, Creamy Labneh"],
    ["Edamame Phyllo Mousse", "", "Edamame, Olive Oil, Lemon, Sea Salt"],
    ["Burrata Chaat Au Lait", "", "Burrata, Beet Chips, Dehydrated Okra, Pomegranate, Fresh Jalapeño, Avocado, Onion, Tomato, Parmesan, Sev, Cilantro Ranch, Peanuts"],
    ["Paneer Thecha", "", "Cottage Cheese, Spicy Peanut Coriander Thecha Marinade, Cilantro Ranch"],
    ["Chicken Thecha", "", "Chicken Mince, Spicy Peanut Coriander Thecha Marinade, Cilantro Ranch"],
    ["Prawns Thecha On Toast", "", "Prawns, Spicy Peanut Coriander Thecha Marinade, Sourdough"],
    ["Chow Mein Thecha", "", "(Chicken Mince / Cottage Cheese) Wok Tossed Chowmein, Bold Maharashtrian Thecha"],
    ["Chicken Jhol Momos", "", "Homemade Momos, Homemade Spicy Crispy Chilli Oil"],
    ["Crispy Chicken", "", "Hammered Buttermilk Fried Chicken, Chipotle Mayo"],
    ["Pulled Chicken Taco", "", "Braised Chicken, Cooling Sour Cream, Tucked In Hard Shell Taco"],
    ["Chicken Tunisian", "", "Spiced Chicken Marinate, Harissa, African Spices"],
    ["Madras Calamari", "", "Fried Calamari, Homemade Madras Spice, Curry Leaves, Fried Coconut, Dried Chilli, Fried Garlic"],
    ["Gambas Español", "", "Fresh Prawns, White Wine, Olive Oil, Garlic, Spices, Parsley, Multigrain Sourdough"],
    ["Baked Smoked Salmon", "", "Smoked Salmon, Cream Cheese, Sour Cream, Dill, Capers, Lemon Zest, Crisp Phyllo, Chilli Jam, Toasted Almonds"]
  ];

  const juhuSushi = [
    ["Tofu Sunset Roll", "", "Avocado, Spring Onion, Cucumber, Tofu, Togarashi, Teriyaki Sauce, Sesame Seed, Tanuki, Spicy Mayo"],
    ["Madras Beetroot Roll", "", "Avocado, Pickle Beetroot, Edamame, Coconut Cream Cheese, Togarashi, Madras Sriracha Sauce, Fried Curry Leaves"],
    ["Enoki Truffle Maki", "", "Truffle Oil, Avocado, Enoki Tempura, Vegan Truffle Cream Cheese, Fried Quinoa, Spicy Mayo"],
    ["Emerald Avocado Roll", "", "Tempura Tofu, Cream Cheese, Avocado, Spicy Mayo"],
    ["Koyo Umami Futamaki", "", "Tempura Umami Mushrooms, Avocado, Asparagus, Cucumber, Iceberg Lettuce"],
    ["Prawn Tempura Roll", "", "Avocado, Prawn Tempura, Lotus Chips, Spicy Mayo, Cream Cheese, Teriyaki"],
    ["Salmon Avocado Roll", "", "Salmon, Cream Cheese, Togarashi, Avocado, Tanuki, Kewpie Mayo, Tobiko"]
  ];

  const juhuLargePlates = [
    ["Scarlett Bowl Veg", "", "Seared Tofu, Garden Greens, Avocado, Broccoli, Bok Choy, Snow Peas, Edamame, Beetroot Rice"],
    ["Mizo Tofu Curry", "", "Mizoram Style Curry, Black Wild Rice, Zawngtah Raw Salad"],
    ["Cottage Cheese Ghassi", "", "Spicy Coconut Rich Ghassi, Cottage Cheese, Crispy Mangalorean Kori Roti Or Malabar Paratha"],
    ["Shirataki Noodles", "", "Low Calorie Shirataki Noodles, Assorted Vegetables, Silken Tofu, Peanut, Sambal Sauce"],
    ["Tofu Mango Curry Bowl", "", "Tofu, Raw Mango, Coconut Milk, Indrani Rice"],
    ["Millet Aglio Olio", "", "Millet Pasta, Parmesan Cheese, Herbs"],
    ["Scarlett Mac & Cheese", "", "Jowar, Macaroni Pasta, Bechamel Sauce, Chives"],
    ["Miso Butter Fettuccine", "", "Fettuccine Pasta, Miso Butter Sauce, Shitake, Parmesan, Multigrain Sourdough"],
    ["Black Truffle Edamame Risotto", "", "Risotto Rice, Edamame Puree, Asparagus, Truffle Oil, Truffle Shavings, Crispy Capers, Chilli Oil"],
    ["Spinach Ravioli", "", "Fresh Ravioli Stuffed With Spinach, Ricotta, Sage Burnt Butter Almond Sauce"],
    ["Beetroot Mascarpone Ravioli", "", "Fresh Ravioli Filled With Beetroot, Ricotta Cheese, Velvety Mascarpone, Truffle Parmesan Sauce, Walnuts, Basil Oil Drizzle"],
    ["Gnocchi With Porcini Cream", "", "Sweet Potato Gnocchi, Porcini Mushroom Cream Sauce, Garlic, Thyme, Parmesan, Served With Garlic Bread"],
    ["Scarlett Bowl Chicken", "", "Chicken, Garden Greens, Avocado, Broccoli, Bok Choy, Snow Peas, Edamame, Beetroot Rice"],
    ["Mizo Curry Chicken", "", "Mizoram Style Curry, Black Wild Rice, Zawngtah Raw Salad"],
    ["Chicken Ghassi", "", "Spicy Coconut Rich Ghassi, Chicken, Crispy Mangalorean Kori Roti Or Malabar Paratha"],
    ["White Butter Chicken", "", "Ludhiana Style Creamy Buttery Chicken Curry, French Baguette, White Butter Spread"],
    ["Grilled Chicken", "", "Grilled Chicken Breast, Potato Mash, Balsamic Mushroom Sauce, Braised Asparagus"],
    ["Prawn Ghassi", "", "Spicy Coconut Rich Ghassi, Prawns, Crispy Mangalorean Kori Roti Or Malabar Paratha"],
    ["Malabar Prawn Curry Bowl", "", "Coconut Base Prawn Curry, Indrani Rice, Fried Curry Leaves, Kadu Manga Achar"]
  ];

  const juhuDesserts = [
    ["Hazelnut Praline", "", "Chocolate Sponge, Chocolate Ganache, Hazelnut Praline Paste"],
    ["Seasonal Cheesecake", "", "Seasonal Fruit Compote, Cream Cheese"],
    ["Gluten-Free Cake", "", "55% Dark Chocolate, Eggs"],
    ["Basque Cheesecake", "", "Cream Cheese, Caramelised Top"],
    ["Scarlett Fructose Bowl", "", "Dragon Fruit, Kiwi, Black Grapes, Blueberry, Greek Yoghurt, Citrus Dressing"],
    ["Tiramisu", "", "Coffee & Rum-Soaked Lady Fingers, Mascarpone Cheese, Cocoa Powder"],
    ["Kunafa French Toast", "", "Kunafa, Brioche Bread, Pistachio Praline, Hazelnut Praline, Vanilla Ice-Cream"],
    ["Crème Brulee French Toast", "", "Cream Brulee, Cream, Honey"]
  ];

  const sections = location === 'bandra'
    ? [
        { title: "Salads", subtitle: "The Pause Between Stories", items: bandraSalads },
        { title: "Small Plates", subtitle: "Where It All Begins", items: bandraSmallPlates },
        { title: "Sushi", subtitle: "Wanderlust in a Roll", items: bandraSushi },
        { title: "Large Plates", subtitle: "The Comfort Chapter", items: bandraLargePlates },
        { title: "Desserts", subtitle: "The Memory Lane", items: bandraDesserts }
      ]
    : [
        { title: "Salads", subtitle: "The Pause Between Stories", items: juhuSalads },
        { title: "Gluten Free Wraps", subtitle: "Hands-On Happiness", items: juhuWraps },
        { title: "Sandwiches", subtitle: "Hands-On Happiness", items: juhuSandwiches },
        { title: "Small Plates", subtitle: "Where It All Begins", items: juhuSmallPlates },
        { title: "Sushi", subtitle: "Wanderlust in a Roll", items: juhuSushi },
        { title: "Large Plates", subtitle: "The Comfort Chapter", items: juhuLargePlates },
        { title: "Desserts", subtitle: "The Memory Lane", items: juhuDesserts }
      ];

  return (
    <main className="w-full bg-[#47682c] relative z-10 text-[#FDF0D5] min-h-screen">
      <div className="w-full h-[70px]" />

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
