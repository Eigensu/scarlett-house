import React from 'react';
import MenuModule from '@/components/scarlett/MenuModule';
import WineCellarSection from '@/components/scarlett/WineCellarSection';

export default function DrinkPage() {
  const classicCocktails = [
    ['Red Wine Sangria', '', "Jacob's Creek, Cranberry Juice, Fresh Fruit"],
    ['White Wine Sangria', '', 'Jacob\'s Creek, Apple Juice, Orange Juice, Fresh Fruit'],
    ['Whisky Sour', '', 'Ballantines Finest, Sugar, Lime, Egg, Bitters'],
    ['Old Fashioned', '', 'Dewars White Label, Brown Sugar, Bitters'],
    ['Mai Tai', '', 'Bacardi White Rum, Dark Rum, Orgeat, Pineapple Juice, Lime'],
    ['Gin Basil Smash', '', 'Beefeater Gin, Sugar, Lime, Basil'],
    ['Bloody Mary', '', 'Absolut Vodka, Tomato Juice, Spice Mix, Celery'],
    ['Lillet Spritz', '', 'Lillet / Lillet Rosé, Prosecco, Sparkling Water'],
    ['Aperol Spritz', '', 'Aperol, Prosecco, Sparkling Water'],
    ['Godfather', '', 'Dewars 12 Yrs, Amaretto'],
    ['Cosmopolitan', '', 'Ketel One Vodka, Orange Liqueur, Cranberry, Lime'],
    ['Espresso Martini', '', 'Stoli Caramel, Coffee Liqueur, Espresso'],
    ['Manhattan', '', 'JW Double Black Whisky, Sweet Vermouth, Bitters'],
    ['Martini', '', 'Tanqueray Gin/Absolut Vodka, Dry Vermouth (Dirty, Vesper, Corpse Reviver)'],
    ["Tommy's Margarita", '', 'Altos Plata, Agave, Lime'],
    ['Paloma', '', 'Don Angel Silver, Grapefruit, Agave, Lime'],
    ['Picante', '', 'Camino Gold, Agave, Coriander, Jalapeño, Lime'],
    ['Boulevardier', '', 'Jim Beam, Campari, Sweet Vermouth'],
    ['Negroni', '', 'Bombay Sapphire Gin, Campari, Sweet Vermouth'],
    ['Altos Plata Margarita', '', ''],
    ['OG Margarita', '', 'Altos Plata, Orange Liqueur, Lime'],
    ['TD Margarita', '', 'Altos Plata, Orange Liqueur, Bottle Masala, Lime'],
    ['Patrón Picante', '', ''],
    ['Raw Mango Picante', '', 'Patrón Reposado, Tobasco, Raw Mango, Coriander, Agave, Lime'],
    ['Spiced Jamun Picante', '', 'Patrón Reposado, Spiced Jamun, Green Chilli, Agave, Lime'],
    ["Don Julio Paloma", '', ''],
    ['OG Paloma', '', 'Don Julio Blanco, Grapefruit, Agave, Sparkling Water, Lime'],
    ['Picante Paloma', '', 'Don Julio Blanco, Agave, Coriander, Spices, Grapefruit Juice, Sparkling Water, Lime']
  ];

  const spirits = [
    ['Liqueur', '', ''],
    ['Limoncello', '', ''],
    ['Triple Sec', '', ''],
    ['Dry Vermouth', '', ''],
    ['Sweet Vermouth', '', ''],
    ['Campari', '', ''],
    ['Aperol', '', ''],
    ['Baileys', '', ''],
    ['Jägermeister', '', ''],
    ['Lillet Blanc', '', ''],
    ['Lillet Rosé', '', ''],
    ['Pisco', '', ''],
    ['Barsol', '', ''],
    ['Cognac', '', ''],
    ['Martel V.S (France)', '', ''],
    ['Meukow Xpresso (France)', '', ''],
    ['Mezcal', '', ''],
    ['Fandango', '', ''],
    ['Tequila / Agave Spirit', '', ''],
    ['Don Angel Blanco', '', ''],
    ['Dos Flamos Blanco Tequila', '', ''],
    ['Pistola Joven', '', ''],
    ['Pistola Reposado', '', ''],
    ['Altos Plata', '', ''],
    ['1800 Blanco', '', ''],
    ['Patron Silver', '', ''],
    ['1800 Reposado', '', ''],
    ['Don Julio Blanco', '', ''],
    ['Patron Reposado', '', ''],
    ['Don Julio Reposado', '', ''],
    ['Kah Tequila Blanco', '', ''],
    ['Kah Tequila Reposado', '', ''],
    ['1800 Anejo', '', ''],
    ['El Cristiano Silver', '', ''],
    ['El Cristiano Reposado', '', ''],
    ['Patron Anejo', '', ''],
    ['Don Julio Anejo', '', ''],
    ['El Cristiano Extra Anejo', '', ''],
    ['Vodka', '', ''],
    ['Stoli Caramel', '', ''],
    ['Absolut (Sweden)', '', ''],
    ['Absolut Elyx (Sweden)', '', ''],
    ["U'Luvka Vodka (Poland)", '', ''],
    ['Grey Goose (France)', '', ''],
    ['Beluga Transatlantic (Montenegro)', '', ''],
    ['Gin', '', ''],
    ['Bulldog (London)', '', ''],
    ['Beefeater (England)', '', ''],
    ['Stranger & Sons (India)', '', ''],
    ['Bombay Sapphire (England)', '', ''],
    ['Tanqueray (England)', '', ''],
    ['Tanqueray 10 (England)', '', ''],
    ['Hendricks (Scotland)', '', ''],
    ['Kinobi (Japan)', '', ''],
    ['Roku (Japan)', '', ''],
    ['Malfy (Italy)', '', ''],
    ['Monkey 47 (Germany)', '', ''],
    ['Rum', '', ''],
    ['Bacardi Black Rum (Cuba)', '', ''],
    ['Bacardi White Rum (Cuba)', '', ''],
    ['Malibu (Caribbean)', '', ''],
    ['Havana 3 Yrs (Cuba)', '', ''],
    ['Bacardi Ocho (Cuba)', '', ''],
    ['Whiskey', '', ''],
    ['Paul John Brilliance', '', ''],
    ['Ballantines Finest', '', ''],
    ['Jameson (Ireland)', '', ''],
    ['Jameson Black Barrel (Ireland)', '', ''],
    ['Jack Daniels (USA)', '', ''],
    ['Buffalo Trace', '', ''],
    ['Weller Special Reserve Bourbon', '', ''],
    ['Chivas Regal 12 Yrs', '', ''],
    ['Johnnie Walker Black Label', '', ''],
    ['Chivas 15 Yrs', '', ''],
    ['Dewars 12 Yrs', '', ''],
    ['The Glenlivet 12 Yrs', '', ''],
    ['Jura 12 Yrs', '', ''],
    ['Dewars 15 Yrs', '', ''],
    ['Talisker 10 Yrs', '', ''],
    ['Chivas Regal 18 Yrs', '', ''],
    ['Writers Tears Copper Pot', '', ''],
    ['The Irishman Single Malt', '', ''],
    ['Templeton 4 Yrs', '', ''],
    ['Oban 14 Yrs', '', ''],
    ['The Dalmore 12 Yrs', '', ''],
    ['Lagavulin 16 Yrs', '', ''],
    ['Beer (330ml)', '', ''],
    ['Budweiser', '', ''],
    ['Corona', '', ''],
    ['Hoegaarden', '', ''],
    ['Igloo Stout', '', '']
  ];

  const hydrationBar = [
    ['Hydration Bar', '', ''],
    ['Anti-Aging', '', 'Himalayan Water, Collagen, Chlorophyll, Clove, Cucumber, Italian Lime, Ginger'],
    ['Calm Before the Storm', '', 'Veen Water, Lavender, Blue Pea, Italian Lemon Slices'],
    ['Focussed Forest', '', 'Vedica Water, Peppermint, Blueberries, Raspberries, Strawberries, Blackberries'],
    ['Cleanse & Purify', '', 'Ava Water, Wild Orange, Orange Clementine, Rhubarb, Orange Malta, Cinnamon'],
    ['The Healer', '', 'Veen Water, Ossorro Jasmine, Mango Slices, Pineapple Slices, Lime Slices'],
    ['Hangover Remedy', '', 'Ava Water, Oregano, Cherry Tomato, Dill, Raw Mango, Jalapeno, Gherkins, Pickled Onions, Sea Salt'],
    ['Cold Press Juices', '', ''],
    ['Soothe Bloating', '', 'Celery, Cucumber English, Basil Leaves, Green Apple, Ginger, Lime, Moringa Powder'],
    ['Healthy Hair', '', 'Beetroot, Kokum, Pomegranate, Watermelon, Curry Leaves, Lime'],
    ['Immunity Booster', '', 'Orange, Black Pepper, Cayenne Pepper, Amla, Carrots, Ginger, Black Salt'],
    ['Non-Alcoholic Drinks', '', ''],
    ['Breakfast in Bed', '', 'Sober Whisky, Cranberry Juice & Espresso'],
    ['The Elders', '', 'Sober Gin, Elderflower & Passionfruit, Tonic'],
    ['Zero Hero', '', 'Seven Giants (NA) Tequila, Coriander & Jalapeno'],
    ['Hazel Nuts', '', 'Usko (NA) Vodka, Hazelnut & Espresso'],
    ['Jungle Book', '', 'Sober Gin & Everything Green, Soda'],
    ["Oranged'", '', 'Sober Whisky, Orange & Spices'],
    ['Melon, Felon', '', 'Sober Pink Gin, Watermelon, Muskmelon, Gingerale']
  ];

  const coffeeTeaMatcha = [
    ['Milk-Based Coffee (Hot/Iced)', '', ''],
    ['Espresso Macchiato', '', ''],
    ['Cortado/Piccolo', '', ''],
    ['Flat White', '', ''],
    ['Café Latte', '', ''],
    ['Cappuccino', '', ''],
    ['Salted Café Mocha/Classic', '', ''],
    ['Brown Sugar Latte', '', ''],
    ['Vietnamese Iced Coffee', '', ''],
    ['Water-Based Coffee (Hot/Iced)', '', ''],
    ['Espresso', '', ''],
    ['Americano/Long Black', '', ''],
    ['Scarlett Specials', '', ''],
    ['Vanilla Bean Latte', '', ''],
    ['Orange Mocha', '', ''],
    ['Mont Blanc', '', 'Cold brew topped with vegan spiced whipped cream, grated nutmeg and orange'],
    ['Yuzu Tonic', '', 'Natural Yuzu extract + tonic water and espresso'],
    ['Pure Teas', '', ''],
    ['Darjeeling / Assam Black / Green', '', 'Whole leaf teas'],
    ['Artisanal Blends', '', ''],
    ['Sacred Space', '', 'Black Tea, Vana Tulsi, Krishna Tulsi, Star Anise, Rose Petals, Cardamom'],
    ['Ruby Heaven', '', 'Green Tea, Hibiscus, Vana Tulsi, Cinnamon, Peppermint'],
    ['Herbal Teas', '', ''],
    ['Powerhouse', '', 'Peppermint, Nettle Leaf, Krishna Tulsi, Fennel, Rose Petals'],
    ['Breather', '', 'Eucalyptus, Ginger, Fennel, Peppermint, Clove, Licorice Root'],
    ['Matcha Bar', '', ''],
    ['Extra Creamy Matcha Latte', '', 'Baimudan ceremonial grade, oat milk — high caffeine'],
    ['Classic Matcha Latte', '', ''],
    ['Pistachio Matcha Latte', '', ''],
    ['Add-Ons', '', ''],
    ['Plant-Based Milk (Oat/Almond)', '', ''],
    ['Add-On Supplement (Turmeric/Collagen)', '', ''],
    ['Syrup (Vanilla/Roasted Hazelnut)', '', '']
  ];

  const otherBeverages = [
    ['Aerated Beverages (Can)', '', ''],
    ['Schweppes Ginger Ale', '', ''],
    ['Schweppes Soda', '', ''],
    ['Schweppes Tonic Water', '', ''],
    ['Coke/Diet Coke', '', ''],
    ['Red Bull', '', ''],
    ['Refreshers (Glass)', '', ''],
    ['Lime Soda/Water', '', ''],
    ['Virgin Mojito', '', ''],
    ["Bartender's Special", '', ''],
    ['Sparkling Water', '', ''],
    ['Perrier (330ml)', '', ''],
    ['Mineral Water', '', ''],
    ['Ava Still Water (750ml)', '', '']
  ];

  const houseOfFirsts = [
    ['The First Monsoon Bus Ride', '', 'Absolut, Jasmine, Pandan, Tender Coconut Water, Saline'],
    ['The First Kiss', '', 'Don Angel, Strawberry, Fig, Yuzu, Green Grape'],
    ['The First Puff', '', 'Havana Club 7 Yrs, Smoky Tea, Charred Pineapple, Menthe, Lime, Chilli'],
    ["First Jobbers' Vent-Out Sessions", '', 'Five-Spirit Blend, Orange Liqueur, Citric Acid'],
    ['First TV Show at 9PM', '', "Ballantine's Finest, Dry Sherry, Dark Amaro, Almond, Lime"],
    ['First Licensed Bar', '', "Beefeater, Sweet Vermouth, Bitter Orange, Lime, Spiced Jaggery — a tribute to Bombay's Harbour Bar, 1933"],
    ['The Best Of', '', ''],
    ['Nostalgia 2.0', '', 'Johnnie Walker, Apple, Balsamic, Sloe Gin'],
    ['Inspiration', '', 'Don Julio Blanco, Bell Pepper, Marjoram, Citrus'],
    ["Malla's Ritual", '', "A roll-the-dice, build-your-own cocktail — one die picks your flavour profile (Sweet, Floral, Spicy, Sour, Herbal, Tangy), the other picks your base gin (Stranger & Sons, Bombay Sapphire, Monkey 47, Tanqueray, Hendricks, and more)"]
  ];

  return (
    <main className="w-full bg-[#851F27] relative z-10 text-[#FDF0D5] min-h-screen">
      {/* Top spacer precisely matching Scarlett House's 135px offset */}
      <div className="w-full h-[135px]" />

      <MenuModule
        title="House of Firsts"
        subtitle="Signature Cocktail Menu"
        note="Remember the time your firsts felt bigger than life itself? At The Scarlett House, those moments now live on through our new cocktail menu that turns memory into mixology."
        align="left"
        layout="layout-desc"
        items={houseOfFirsts}
      />

      <MenuModule
        title="Classic Cocktails"
        subtitle="Juhu & Bandra"
        align="left"
        layout="layout-desc"
        items={classicCocktails}
        footnote="We levy 10% service charge. Govt taxes as applicable."
      />

      <MenuModule
        title="Spirits"
        subtitle="Juhu & Bandra"
        note="All spirits priced per 30ml, except where noted."
        align="right"
        layout="layout-desc"
        items={spirits}
      />

      <WineCellarSection />

      <MenuModule
        title="Zero Proof"
        align="left"
        layout="layout-desc"
        items={hydrationBar}
        footnote="Hydration Bar & Cold Press Juices priced Bottle / Shot."
      />

      <MenuModule
        title="Coffee, Tea & Matcha"
        align="right"
        layout="layout-desc"
        items={coffeeTeaMatcha}
      />

      <MenuModule
        title="Other Beverages"
        align="left"
        layout="layout-desc"
        items={otherBeverages}
      />
    </main>
  );
}
