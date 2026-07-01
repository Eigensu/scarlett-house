import React from 'react';
import MenuModule from '@/components/scarlett/MenuModule';
import MenuCarousel from '@/components/scarlett/MenuCarousel';
import { getCloudinaryUrl, ImageMap } from '@/lib/cloudinary';

export default function EatPage() {
  const foodImages = ImageMap.eat.map((id) => ({ src: getCloudinaryUrl(id, { width: 1200 }) }));

  const cheeseProgram = [
    ['Cheese Platter', 'Rs. 2,000/-', '9 Assorted Cheese Truffles: 3 Truffle Cacio E Pepe | 3 Mexican Peri Peri | 3 Basil Pesto, with Marinated Olives | Grapes | 2 Types Of Assorted Crackers'],
    ['Cheese Domes - 80gms', '', ''],
    ['Mexican Peri Peri', 'Rs. 700/-', ''],
    ['Basil Pesto', 'Rs. 700/-', ''],
    ['Truffle Cacio E Pepe', 'Rs. 700/-', ''],
    ['Pecan Cranberry Basil', 'Rs. 700/-', ''],
    ['(Additional Crackers — Rs. 65/-)', '', ''],
    ['Cheese Fondue', 'Rs. 1,500/-', 'Emmental | Konark French Tomme | Oaxaca | Yellow Cheddar | Cherry Tomatoes | Olives | Herbed Croutons | Broccoli | Carrot']
  ];

  const salads = [
    ['Scarlett Glow', 'Rs. 650/-', 'Blueberry | Snap Peas | Arugula | Carrot | Quinoa | Beetroot | Avocado | Blueberry Dressing'],
    ['Fig & Burrata Bliss', 'Rs. 675/-', 'Wild Rocket Leaves | Figs | Pomegranate | Walnuts | Burrata | Sesame Seeds | Balsamic Vinaigrette'],
    ['Caesar Salad (Veg / Chicken / Prawns)', 'Rs. 625 / 650 / 675/-', 'Romaine | Croutons | Shaved Parmesan | Cherry Tomatoes | Kalamata Olives | Caesar Dressing'],
    ['Thai Garden Chicken Salad', 'Rs. 650/-', 'Grilled Chicken | Iceberg Lettuce | Carrots | Red Cabbage | Ripe Mango | Baby Red Radish | Picante Cashew | Peanut Thai Dressing']
  ];

  const wraps = [
    ['Tofu Chilli Wrap', 'Rs. 625/-', 'Carrot | French Beans | Fried Tofu | Spicy Asian Sauce | Chipotle Mayo'],
    ['Paneer Tikka Roll', 'Rs. 625/-', 'Paneer Tikka | Lettuce | Sour Cream | Tomato | Pickled Onion | Cilantro Ranch | Coriander'],
    ['Chicken Shawarma', 'Rs. 650/-', 'Harissa Marinated Chicken | Garlic Toum | French Fries | Pickled Veggies'],
    ['Chicken Franko', 'Rs. 650/-', 'Indian Spiced Shredded Chicken | Coriander | Pickle Onion | Cilantro Ranch']
  ];

  const sandwiches = [
    ['Bombay Masala Toast', 'Rs. 575/-', 'Multigrain Sourdough | Potato Masala | Tomato | Beetroot | Onion | Cheese Slice | Coriander Mint Chutney | Garlic Chutney | Sev | Ketchup | Vegetable Chips'],
    ['Ashwagandha Honey Toast', 'Rs. 575/-', 'Sourdough | Ashwagandha Honey | Cream Cheese | Almond Flakes'],
    ['Avocado Toast', 'Rs. 650/-', 'Multigrain Sourdough | Sundried Tomato Pesto | Avocado | Sour Cream | Almond Flakes | Bubu Arare | Vegetable Chips'],
    ['Chilli Cheese Toast', 'Rs. 650/-', 'Chillies | Gruyere | Mozzarella | Parmesan | Cheddar Cheese | Buttered Bread | Bell Peppers | Jalapeños'],
    ['Truffle & Shroom Toast', 'Rs. 650/-', 'Truffle Cream Cheese | Shitake | King Oyster | Balsamic | Truffle Oil | Multigrain Sourdough | Vegetable Chips'],
    ['Burrata Bellonate', 'Rs. 675/-', 'Baguette | Sundried Tomato | Baby Spinach | Burrata | Pesto | Caramelised Onion | Vegetable Chips'],
    ['Chicken Katsu Sando', 'Rs. 695/-', 'Sliced Bread | Chicken Katsu | Curry Sauce | Red Cabbage Slaw | Cheese | Pickled Jalapeño | Vegetable Chips']
  ];

  const smallPlates = [
    ['Blazing Banana Fries', 'Rs. 575/-', 'Spiced Banana Frites | Cilantro Ranch'],
    ['Arbi Tuk', 'Rs. 575/-', 'Crispy Fried Arbi | Chef Special Spices | House Dip | Tamarind & Dates Chutney'],
    ['Veg Jhol Momos', 'Rs. 575/-', 'Homemade Momos | Homemade Spicy Crispy Chilli Oil'],
    ['Mushroom Asada Tacos', 'Rs. 595/-', 'Portobello Mushroom | Corn Tacos | Spicy Chipotle Sauce | Guacamole | Pickled Onion'],
    ['Trio Hummus', 'Rs. 595/-', 'Classic Hummus | Edamame Hummus | Podi Hummus | Pita | Lavash Olives'],
    ['Scarlett Millet Nachos', 'Rs. 595/-', 'Crispy Millet Nachos | Rich Cheese Sauce | Jalapeños | Pico De Gallo | Velvety Sour Cream'],
    ['Brussels Blaze Tofu', 'Rs. 595/-', 'Crispy Tofu | Brussels Sprouts | Bell Peppers | Spicy Asian Chilli Glaze'],
    ['Crinkle Truffle Fries', 'Rs. 595/-', 'Crispy Crinkle Fries | Truffle Oil | Parmesan Cheese | Fresh Chives'],
    ['Korean Shroom Wings', 'Rs. 650/-', 'Crispy Oyster Mushrooms | Gochujang Glaze | Creamy Labneh'],
    ['Edamame Phyllo Mousse', 'Rs. 650/-', 'Edamame | Olive Oil | Lemon | Sea Salt'],
    ['Buratta Chaat Au Lait', 'Rs. 675/-', 'Burrata | Beet Chips | Dehydrated Okra | Pomegranate | Fresh Jalapeño | Avocado | Onion | Tomato | Parmesan | Sev | Cilantro Ranch | Peanuts'],
    ['Chicken Jhol Momos', 'Rs. 595/-', 'Homemade Momos | Homemade Spicy Crispy Chilli Oil'],
    ['Crispy Chicken', 'Rs. 625/-', 'Hammered Buttermilk Fried Chicken | Chipotle Mayo'],
    ['Pulled Chicken Taco', 'Rs. 650/-', 'Braised Chicken | Cooling Sour Cream | Tucked In Hard Shell Taco'],
    ['Chicken Tunisian', 'Rs. 650/-', 'Spiced Chicken Marinate | Harissa | African Spices'],
    ['Madras Calamari', 'Rs. 695/-', 'Fried Calamari | Homemade Madras Spice | Curry Leaves | Fried Coconut | Dried Chilli | Fried Garlic'],
    ['Gambas Español', 'Rs. 750/-', 'Fresh Prawns | White Wine | Olive Oil | Garlic | Spices | Parsley | Multigrain Sourdough'],
    ['Baked Smoked Salmon', 'Rs. 795/-', 'Smoked Salmon | Cream Cheese | Sour Cream | Dill | Capers | Lemon Zest | Crisp Phyllo | Chilli Jam | Toasted Almonds'],
    ['Thecha', '', ''],
    ['Paneer Thecha', 'Rs. 675/-', 'Cottage Cheese | Spicy Peanut Coriander Thecha Marinade | Cilantro Ranch'],
    ['Chicken Thecha', 'Rs. 695/-', 'Chicken Mince | Spicy Peanut Coriander Thecha Marinade | Cilantro Ranch'],
    ['Prawns Thecha On Toast', 'Rs. 720/-', 'Prawns | Spicy Peanut Coriander Thecha Marinade | Sourdough'],
    ['Chow Mein Thecha', 'Rs. 695/750/-', 'Chicken Mince / Cottage Cheese | Wok Tossed Chowmein | Bold Maharashtrian Thecha']
  ];

  const sushi = [
    ['Tofu Sunset Roll', 'Rs. 675/-', 'Avocado | Spring Onion | Cucumber | Tofu | Togarashi | Teriyaki Sauce | Sesame Seed | Tanuki | Spicy Mayo'],
    ['Madras Beetroot Roll', 'Rs. 675/-', 'Avocado | Pickle Beetroot | Edamame | Coconut Cream Cheese | Togarashi | Madras Sriracha Sauce | Fried Curry Leaves'],
    ['Enoki Truffle Maki', 'Rs. 675/-', 'Truffle Oil | Avocado | Enoki Tempura | Vegan Truffle Cream Cheese | Fried Quinoa | Spicy Mayo'],
    ['Emerald Avocado Roll', 'Rs. 675/-', 'Tempura Tofu | Cream Cheese | Avocado | Spicy Mayo'],
    ['Koyo Umami Futamaki', 'Rs. 675/-', 'Tempura Umami Mushrooms | Avocado | Asparagus | Cucumber | Iceberg Lettuce'],
    ['Prawn Tempura Roll', 'Rs. 695/-', 'Avocado | Prawn Tempura | Lotus Chips | Spicy Mayo | Cream Cheese | Teriyaki'],
    ['Salmon Avocado Roll', 'Rs. 695/-', 'Salmon | Cream Cheese | Togarashi | Avocado | Tanuki | Kewpie Mayo | Tobiko']
  ];

  const largePlates = [
    ['Scarlett Bowl Veg', 'Rs. 795/-', 'Seared Tofu | Garden Greens | Avocado | Broccoli | Bok Choy | Snow Peas | Edamame | Beetroot Rice'],
    ['Mizo Tofu Curry', 'Rs. 795/-', 'Mizoram Style Curry | Black Wild Rice | Zawngtah Raw Salad'],
    ['Cottage Cheese Ghassi', 'Rs. 795/-', 'Spicy Coconut Rich Ghassi | Cottage Cheese | Crispy Mangalorean Kori Roti Or Malabar Paratha'],
    ['Shirataki Noodles', 'Rs. 825/-', 'Low Calorie Shirataki Noodles | Assorted Vegetables | Silken Tofu | Peanut | Sambal Sauce'],
    ['Tofu Mango Curry Bowl', 'Rs. 825/-', 'Tofu | Raw Mango | Coconut Milk | Indrani Rice'],
    ['Millet Aglio Olio', 'Rs. 825/-', 'Millet Pasta | Parmesan Cheese | Herbs'],
    ['Scarlett Mac & Cheese', 'Rs. 850/-', 'Jowar | Macaroni Pasta | Bechamel Sauce | Chives'],
    ['Miso Butter Fettuccine', 'Rs. 850/-', 'Fettuccine Pasta | Miso Butter Sauce | Shitake | Parmesan | Multigrain Sourdough'],
    ['Black Truffle Edamame Risotto', 'Rs. 850/-', 'Risotto Rice | Edamame Puree | Asparagus | Truffle Oil | Truffle Shavings | Crispy Capers | Chilli Oil'],
    ['Spinach Ravioli', 'Rs. 850/-', 'Fresh Ravioli Stuffed With Spinach | Ricotta | Sage Burnt Butter Almond Sauce'],
    ['Beetroot Mascarpone Ravioli', 'Rs. 850/-', 'Fresh Ravioli Filled With Beetroot | Ricotta Cheese | Velvety Mascarpone | Truffle Parmesan Sauce | Walnuts | Basil Oil Drizzle'],
    ['Gnocchi With Porcini Cream', 'Rs. 795/-', 'Sweet Potato Gnocchi | Porcini Mushroom Cream Sauce | Garlic | Thyme | Parmesan | Served With Garlic Bread'],
    ['Scarlett Bowl Chicken', 'Rs. 825/-', 'Chicken | Garden Greens | Avocado | Broccoli | Bok Choy | Snow Peas | Edamame | Beetroot Rice'],
    ['Mizo Curry Chicken', 'Rs. 825/-', 'Mizoram Style Curry | Black Wild Rice | Zawngtah Raw Salad'],
    ['Chicken Ghassi', 'Rs. 825/-', 'Spicy Coconut Rich Ghassi | Chicken | Crispy Mangalorean Kori Roti Or Malabar Paratha'],
    ['White Butter Chicken', 'Rs. 825/-', 'Ludhiana Style Creamy Buttery Chicken Curry | French Baguette | White Butter Spread'],
    ['Grilled Chicken', 'Rs. 850/-', 'Grilled Chicken Breast | Potato Mash | Balsamic Mushroom Sauce | Braised Asparagus'],
    ['Prawn Ghassi', 'Rs. 850/-', 'Spicy Coconut Rich Ghassi | Prawns | Crispy Mangalorean Kori Roti Or Malabar Paratha'],
    ['Malabar Prawn Curry Bowl', 'Rs. 875/-', 'Coconut Base Prawn Curry | Indrani Rice | Fried Curry Leaves | Kadu Manga Achar']
  ];

  const desserts = [
    ['Hazelnut Praline', 'Rs. 450/-', 'Chocolate Sponge | Chocolate Ganache | Hazelnut Praline Paste'],
    ['Seasonal Cheesecake', 'Rs. 450/-', 'Seasonal Fruit Compote | Cream Cheese'],
    ['Gluten-Free Cake', 'Rs. 495/-', '55% Dark Chocolate | Eggs'],
    ['Basque Cheesecake', 'Rs. 495/-', 'Cream Cheese | Caramelised Top'],
    ['Scarlett Fructose Bowl', 'Rs. 550/-', 'Dragon Fruit | Kiwi | Black Grapes | Blueberry | Greek Yoghurt | Citrus Dressing'],
    ['Tiramisu', 'Rs. 550/-', 'Coffee & Rum-Soaked Lady Fingers | Mascarpone Cheese | Cocoa Powder'],
    ['Kunafa French Toast', 'Rs. 625/-', 'Kunafa | Brioche Bread | Pistachio Praline | Hazelnut Praline | Vanilla Ice-Cream'],
    ['Crème Brûlée French Toast', 'Rs. 675/-', 'Cream Brulee | Cream | Honey']
  ];

  return (
    <main className="w-full bg-[#47682c] relative z-10 text-[#FDF0D5] min-h-screen">
      {/* Top spacer precisely matching Scarlett House's 135px offset */}
      <div className="w-full h-[135px]" />

      <MenuModule
        title="Scarlett Cheese Program"
        align="left"
        layout="layout-desc"
        items={cheeseProgram}
      />

      <MenuModule
        title="Salads"
        subtitle="The Pause Between Stories"
        align="right"
        layout="layout-desc"
        items={salads}
      />

      <MenuCarousel images={[foodImages[0]]} align="right" />

      <MenuModule
        title="Gluten Free Wraps"
        subtitle="Hands-On Happiness"
        note="Wraps Are Available In Malabar Paratha. Add On Fresh House Salad For Rs. 145/-"
        align="left"
        layout="layout-desc"
        items={wraps}
      />

      <MenuModule
        title="Sandwiches"
        subtitle="Hands-On Happiness"
        align="right"
        layout="layout-desc"
        items={sandwiches}
      />

      <MenuCarousel images={[foodImages[1]]} align="left" />

      <MenuModule
        title="Small Plates"
        subtitle="Where It All Begins"
        align="left"
        layout="layout-desc"
        items={smallPlates}
      />

      <MenuModule
        title="Sushi"
        subtitle="Wanderlust in a Roll"
        align="right"
        layout="layout-desc"
        items={sushi}
      />

      <MenuCarousel images={[foodImages[2], foodImages[3]]} align="right" />

      <MenuModule
        title="Large Plates"
        subtitle="The Comfort Chapter"
        align="left"
        layout="layout-desc"
        items={largePlates}
      />

      <MenuModule
        title="Desserts"
        subtitle="The Memory Lane"
        align="right"
        layout="layout-desc"
        items={desserts}
      />

      {/* Spacer block to reveal the fixed footer underneath */}
      <div className="w-full h-[230px] bg-transparent pointer-events-none" />
    </main>
  );
}
