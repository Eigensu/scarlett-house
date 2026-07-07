import React from 'react';
import MenuModule from '@/components/scarlett/MenuModule';
import MenuCarousel from '@/components/scarlett/MenuCarousel';
import { getCloudinaryUrl, ImageMap } from '@/lib/cloudinary';

export default function EatPage() {
  const foodImages = ImageMap.eat.map((id) => ({ src: getCloudinaryUrl(id, { width: 1200 }) }));

  const salads = [
    ["Thai Salad", "", "SHIRATAKE, GREENS, SPICY DRESSING. (Add-on: Chicken / Prawn)"],
    ["Pomelo and Betel Leaf Salad", "", "Refreshing, citrusy herbal toss. (Add-on: Prawn / Chicken)"],
    ["Avocado Ceviche", "", "PINEAPPLE, AVACADO, TIGRE DE LECHES"],
    ["Fig and Burrata", "", "Sweet figs, creamy cheese."]
  ];

  const smallPlates = [
    ["Magic Mushroom", "", "Earthy, Spicy savory umami bites."],
    ["Soft Shell Crab", "", "Crispy, delicate fried crab."],
    ["Mushroom Pâté Phyllo Cup", "", "Rich pastry cups, mushroom, leeks."],
    ["Paneer Thecha", "", "Spicy, fiery cottage cheese, chilly."],
    ["Chicken Thecha", "", "Spicy, pounded rustic chicken, chilly."],
    ["Gambas al Ajillo", "", "Garlic, prawn, bread."],
    ["Jackfruit Taco", "", "Jackfruit, sour cream, tortilla."],
    ["Croque Monsieur", "", "Brioche, caramelised onion, cheese. (Note: Served with grated parmesan at the table)"],
    ["Turmeric Fried Squid", "", "Fresh turmeric, squid, sriracha sauce."],
    ["Gujiya cottage cheese", "", "Cottage cheese, pastry, cheese."],
    ["Gujiya Chicken", "", "Chicken, pastry, cheese."],
    ["Corn Croquettes", "", "Corn, cheese, pickle crema."],
    ["Curry Leaf Butter Prawns", "", "Curry leaf butter, prawn, fresh pepper."],
    ["Chicken Taco", "", "Pulled chicken, sour cream, tortilla."],
    ["Chicken Jhol Momo", "", "Dumplings, jhol, fresh herbs."],
    ["Veg Jhol Momo", "", "Dumpling, jhol, fresh greens."],
    ["Scarlett Nachos", "", "Nachos, guacamole, salsa."],
    ["Crispy Chicken", "", "Crispy chicken, toum, peri peri."],
    ["Truffle and Shroom Toast", "", "Sour dough, mushroom, cheese. (Note: Served with grated parmesan at the table)"],
    ["Thecha Baby Shrimp Kulcha", "", "Ambad, thecha, bread. (Note: Served with grated parmesan at the table)"],
    ["Stuffed Chilli with Besan Chutney", "", "Bhavnagri chilli, kadhi, cheese."],
    ["Jackfruit Kulcha with Parmesan", "", "Jackfruit, bread, cheese. (Note: Served with grated parmesan at the table)"],
    ["Chicken Kulcha with Parmesan", "", "Chicken, bread, cheese. (Note: Served with grated parmesan at the table)"],
    ["Katsu Sando", "", "Crispy chicken, brioche, salad."],
    ["Fries", "", "Hand cut potatoes. (Trufflecheese / Peri peri / Salted)"],
    ["Salmon Fillet with Seafood Sauce and Salad", "", "seabass fillet, salad, seafood sauce."]
  ];

  const sushi = [
    ["Enoki Truffle Maki", "", "Earthy mushroom truffle roll."],
    ["Emerald Avocado Roll", "", "Vibrant, creamy avocado roll."],
    ["Koyo Umami Futomaki", "", "Rich, savory signature roll."],
    ["Prawn Tempura Roll", "", "Crunchy fried prawn maki."]
  ];

  const largePlates = [
    ["Ghee Roast Chicken", "", "Chicken, ghee, bread."],
    ["Ghee Roast Cauliflower", "", "Cauliflower, ghee, bread."],
    ["Truffle Pesto Risotto with Kataifi", "", "Pesto/Arborio, truffle. (Add-on: Prawn / Chicken / Halloumi)"],
    ["Scarlet soufle Curry", "", "Egg, coconut, spices. (Options: Chicken / Jackfruit / Crab)"],
    ["Lemon Basil Pasta", "", "Lemon, parmesean, basil. (Add-on: Chicken)"],
    ["Spaghetti Aglio e Olio", "", "Chillies, garlic, olive oil. (Add-on: Chicken / Prawn)"],
    ["Chettinad Smash", "", "Potato smash, chetinad, parmesean. (Options: Mutton / Mushroom / Chicken)"],
    ["Pongal Risotto", "", "Lentil, rice, peper. (Options: Mushroom / Chicken / Mutton)"],
    ["Creamy Corn Thoran", "", "Corn, cheese, aragula."],
    ["Masala Khichdi", "", "Rice, spices, ghee. (Add-on: Chicken / Prawn / Mutton)"],
    ["Caramelized Onion Pasta", "", "Cramelises onion, pasta, parmeasean."],
    ["Miso Fettuccine", "", "Miso, butter, parmesean. (Add-on: Chicken / Prawn)"],
    ["Mac and Cheese", "", "Macroni, cheese, cream. (Add-on: Chicken / Prawn)"],
    ["Ghassi", "", "Tamrind, rice, chillies. (Options: Paneer / Prawn)"]
  ];

  const desserts = [
    ["90's Honey Coconut Cake", "", "Nostalgic sweet coconut sponge. (Eggless)"],
    ["Tiramisu", "", "Classic espresso layered cake. (Contains Egg)"],
    ["Gluten-Free Cake", "", "Rich decadent flourless sponge. (Contains Egg)"],
    ["Hazelnut Praline", "", "Crunchy, nutty chocolate delight. (Eggless)"]
  ];

  return (
    <main className="w-full bg-[#47682c] relative z-10 text-[#FDF0D5] min-h-screen">
      <div className="w-full h-[135px]" />

      <MenuModule
        title="Salads"
        subtitle="The Pause Between Stories"
        align="left"
        layout="layout-desc"
        items={salads}
      />


      <MenuModule
        title="Small Plates"
        subtitle="Where It All Begins"
        align="right"
        layout="layout-desc"
        items={smallPlates}
      />


      <MenuModule
        title="Sushi"
        subtitle="Wanderlust in a Roll"
        align="left"
        layout="layout-desc"
        items={sushi}
      />


      <MenuModule
        title="Large Plates"
        subtitle="The Comfort Chapter"
        align="right"
        layout="layout-desc"
        items={largePlates}
      />

      <MenuModule
        title="Desserts"
        subtitle="The Memory Lane"
        align="left"
        layout="layout-desc"
        items={desserts}
      />

      <div className="w-full h-[230px] bg-transparent pointer-events-none" />
    </main>
  );
}
