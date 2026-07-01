import React from 'react';
import MenuModule from '@/components/scarlett/MenuModule';
import MenuCarousel from '@/components/scarlett/MenuCarousel';
import WineCellarSection from '@/components/scarlett/WineCellarSection';
import { getCloudinaryUrl, ImageMap } from '@/lib/cloudinary';

export default function DrinkPage() {
  const drinkImages = ImageMap.drink.map((id) => ({ src: getCloudinaryUrl(id, { width: 1200 }) }));

  const classicCocktails = [
    ['Red Wine Sangria', 'Rs. 750', "Jacob's Creek, Cranberry Juice, Fresh Fruit"],
    ['White Wine Sangria', 'Rs. 750', 'Jacob\'s Creek, Apple Juice, Orange Juice, Fresh Fruit'],
    ['Whisky Sour', 'Rs. 850', 'Ballantines Finest, Sugar, Lime, Egg, Bitters'],
    ['Old Fashioned', 'Rs. 850', 'Dewars White Label, Brown Sugar, Bitters'],
    ['Mai Tai', 'Rs. 850', 'Bacardi White Rum, Dark Rum, Orgeat, Pineapple Juice, Lime'],
    ['Gin Basil Smash', 'Rs. 850', 'Beefeater Gin, Sugar, Lime, Basil'],
    ['Bloody Mary', 'Rs. 850', 'Absolut Vodka, Tomato Juice, Spice Mix, Celery'],
    ['Lillet Spritz', 'Rs. 950', 'Lillet / Lillet Rosé, Prosecco, Sparkling Water'],
    ['Aperol Spritz', 'Rs. 950', 'Aperol, Prosecco, Sparkling Water'],
    ['Godfather', 'Rs. 950', 'Dewars 12 Yrs, Amaretto'],
    ['Cosmopolitan', 'Rs. 950', 'Ketel One Vodka, Orange Liqueur, Cranberry, Lime'],
    ['Espresso Martini', 'Rs. 950', 'Stoli Caramel, Coffee Liqueur, Espresso'],
    ['Manhattan', 'Rs. 950', 'JW Double Black Whisky, Sweet Vermouth, Bitters'],
    ['Martini', 'Rs. 950', 'Tanqueray Gin/Absolut Vodka, Dry Vermouth (Dirty, Vesper, Corpse Reviver)'],
    ["Tommy's Margarita", 'Rs. 950', 'Altos Plata, Agave, Lime'],
    ['Paloma', 'Rs. 950', 'Don Angel Silver, Grapefruit, Agave, Lime'],
    ['Picante', 'Rs. 950', 'Camino Gold, Agave, Coriander, Jalapeño, Lime'],
    ['Boulevardier', 'Rs. 1,050', 'Jim Beam, Campari, Sweet Vermouth'],
    ['Negroni', 'Rs. 1,050', 'Bombay Sapphire Gin, Campari, Sweet Vermouth'],
    ['Altos Plata Margarita', '', ''],
    ['OG Margarita', 'Rs. 1,200', 'Altos Plata, Orange Liqueur, Lime'],
    ['TD Margarita', 'Rs. 1,200', 'Altos Plata, Orange Liqueur, Bottle Masala, Lime'],
    ['Patrón Picante', '', ''],
    ['Raw Mango Picante', 'Rs. 1,800', 'Patrón Reposado, Tobasco, Raw Mango, Coriander, Agave, Lime'],
    ['Spiced Jamun Picante', 'Rs. 1,800', 'Patrón Reposado, Spiced Jamun, Green Chilli, Agave, Lime'],
    ["Don Julio Paloma", '', ''],
    ['OG Paloma', 'Rs. 1,800', 'Don Julio Blanco, Grapefruit, Agave, Sparkling Water, Lime'],
    ['Picante Paloma', 'Rs. 1,800', 'Don Julio Blanco, Agave, Coriander, Spices, Grapefruit Juice, Sparkling Water, Lime']
  ];

  const spirits = [
    ['Liqueur', '', ''],
    ['Limoncello', 'Rs. 600', ''],
    ['Triple Sec', 'Rs. 600', ''],
    ['Dry Vermouth', 'Rs. 600', ''],
    ['Sweet Vermouth', 'Rs. 600', ''],
    ['Campari', 'Rs. 600', ''],
    ['Aperol', 'Rs. 600', ''],
    ['Baileys', 'Rs. 600', ''],
    ['Jägermeister', 'Rs. 700', ''],
    ['Lillet Blanc', 'Rs. 700', ''],
    ['Lillet Rosé', 'Rs. 700', ''],
    ['Pisco', '', ''],
    ['Barsol', 'Rs. 650', ''],
    ['Cognac', '', ''],
    ['Martel V.S (France)', 'Rs. 750', ''],
    ['Meukow Xpresso (France)', 'Rs. 1,350', ''],
    ['Mezcal', '', ''],
    ['Fandango', 'Rs. 1,000', ''],
    ['Tequila / Agave Spirit', '', ''],
    ['Don Angel Blanco', 'Rs. 600', ''],
    ['Dos Flamos Blanco Tequila', 'Rs. 700', ''],
    ['Pistola Joven', 'Rs. 700', ''],
    ['Pistola Reposado', 'Rs. 800', ''],
    ['Altos Plata', 'Rs. 900', ''],
    ['1800 Blanco', 'Rs. 1,100', ''],
    ['Patron Silver', 'Rs. 1,100', ''],
    ['1800 Reposado', 'Rs. 1,200', ''],
    ['Don Julio Blanco', 'Rs. 1,200', ''],
    ['Patron Reposado', 'Rs. 1,250', ''],
    ['Don Julio Reposado', 'Rs. 1,600', ''],
    ['Kah Tequila Blanco', 'Rs. 1,700', ''],
    ['Kah Tequila Reposado', 'Rs. 1,950', ''],
    ['1800 Anejo', 'Rs. 2,000', ''],
    ['El Cristiano Silver', 'Rs. 2,000', ''],
    ['El Cristiano Reposado', 'Rs. 2,200', ''],
    ['Patron Anejo', 'Rs. 2,800', ''],
    ['Don Julio Anejo', 'Rs. 2,800', ''],
    ['El Cristiano Extra Anejo', 'Rs. 3,500', ''],
    ['Vodka', '', ''],
    ['Stoli Caramel', 'Rs. 600', ''],
    ['Absolut (Sweden)', 'Rs. 600', ''],
    ['Absolut Elyx (Sweden)', 'Rs. 650', ''],
    ["U'Luvka Vodka (Poland)", 'Rs. 750', ''],
    ['Grey Goose (France)', 'Rs. 800', ''],
    ['Beluga Transatlantic (Montenegro)', 'Rs. 900', ''],
    ['Gin', '', ''],
    ['Bulldog (London)', 'Rs. 600', ''],
    ['Beefeater (England)', 'Rs. 600', ''],
    ['Stranger & Sons (India)', 'Rs. 500', ''],
    ['Bombay Sapphire (England)', 'Rs. 600', ''],
    ['Tanqueray (England)', 'Rs. 600', ''],
    ['Tanqueray 10 (England)', 'Rs. 650', ''],
    ['Hendricks (Scotland)', 'Rs. 700', ''],
    ['Kinobi (Japan)', 'Rs. 900', ''],
    ['Roku (Japan)', 'Rs. 900', ''],
    ['Malfy (Italy)', 'Rs. 950', ''],
    ['Monkey 47 (Germany)', 'Rs. 1,100', ''],
    ['Rum', '', ''],
    ['Bacardi Black Rum (Cuba)', 'Rs. 500', ''],
    ['Bacardi White Rum (Cuba)', 'Rs. 500', ''],
    ['Malibu (Caribbean)', 'Rs. 500', ''],
    ['Havana 3 Yrs (Cuba)', 'Rs. 500', ''],
    ['Bacardi Ocho (Cuba)', 'Rs. 650', ''],
    ['Whiskey', '', ''],
    ['Paul John Brilliance', 'Rs. 600', ''],
    ['Ballantines Finest', 'Rs. 600', ''],
    ['Jameson (Ireland)', 'Rs. 600', ''],
    ['Jameson Black Barrel (Ireland)', 'Rs. 600', ''],
    ['Jack Daniels (USA)', 'Rs. 700', ''],
    ['Buffalo Trace', 'Rs. 700', ''],
    ['Weller Special Reserve Bourbon', 'Rs. 700', ''],
    ['Chivas Regal 12 Yrs', 'Rs. 750', ''],
    ['Johnnie Walker Black Label', 'Rs. 750', ''],
    ['Chivas 15 Yrs', 'Rs. 800', ''],
    ['Dewars 12 Yrs', 'Rs. 900', ''],
    ['The Glenlivet 12 Yrs', 'Rs. 950', ''],
    ['Jura 12 Yrs', 'Rs. 1,050', ''],
    ['Dewars 15 Yrs', 'Rs. 1,100', ''],
    ['Talisker 10 Yrs', 'Rs. 1,200', ''],
    ['Chivas Regal 18 Yrs', 'Rs. 1,400', ''],
    ['Writers Tears Copper Pot', 'Rs. 1,450', ''],
    ['The Irishman Single Malt', 'Rs. 1,500', ''],
    ['Templeton 4 Yrs', 'Rs. 1,750', ''],
    ['Oban 14 Yrs', 'Rs. 1,900', ''],
    ['The Dalmore 12 Yrs', 'Rs. 2,000', ''],
    ['Lagavulin 16 Yrs', 'Rs. 2,400', ''],
    ['Beer (330ml)', '', ''],
    ['Budweiser', 'Rs. 550', ''],
    ['Corona', 'Rs. 550', ''],
    ['Hoegaarden', 'Rs. 550', ''],
    ['Igloo Stout', 'Rs. 590', '']
  ];

  const hydrationBar = [
    ['Hydration Bar', '', ''],
    ['Anti-Aging', 'Rs. 350 / Rs. 120', 'Himalayan Water, Collagen, Chlorophyll, Clove, Cucumber, Italian Lime, Ginger'],
    ['Calm Before the Storm', 'Rs. 350 / Rs. 120', 'Veen Water, Lavender, Blue Pea, Italian Lemon Slices'],
    ['Focussed Forest', 'Rs. 350 / Rs. 120', 'Vedica Water, Peppermint, Blueberries, Raspberries, Strawberries, Blackberries'],
    ['Cleanse & Purify', 'Rs. 350 / Rs. 120', 'Ava Water, Wild Orange, Orange Clementine, Rhubarb, Orange Malta, Cinnamon'],
    ['The Healer', 'Rs. 350 / Rs. 120', 'Veen Water, Ossorro Jasmine, Mango Slices, Pineapple Slices, Lime Slices'],
    ['Hangover Remedy', 'Rs. 350 / Rs. 120', 'Ava Water, Oregano, Cherry Tomato, Dill, Raw Mango, Jalapeno, Gherkins, Pickled Onions, Sea Salt'],
    ['Cold Press Juices', '', ''],
    ['Soothe Bloating', 'Rs. 420 / Rs. 120', 'Celery, Cucumber English, Basil Leaves, Green Apple, Ginger, Lime, Moringa Powder'],
    ['Healthy Hair', 'Rs. 450 / Rs. 130', 'Beetroot, Kokum, Pomegranate, Watermelon, Curry Leaves, Lime'],
    ['Immunity Booster', 'Rs. 500 / Rs. 150', 'Orange, Black Pepper, Cayenne Pepper, Amla, Carrots, Ginger, Black Salt'],
    ['Non-Alcoholic Drinks', '', ''],
    ['Breakfast in Bed', 'Rs. 650', 'Sober Whisky, Cranberry Juice & Espresso'],
    ['The Elders', 'Rs. 700', 'Sober Gin, Elderflower & Passionfruit, Tonic'],
    ['Zero Hero', 'Rs. 700', 'Seven Giants (NA) Tequila, Coriander & Jalapeno'],
    ['Hazel Nuts', 'Rs. 700', 'Usko (NA) Vodka, Hazelnut & Espresso'],
    ['Jungle Book', 'Rs. 700', 'Sober Gin & Everything Green, Soda'],
    ["Oranged'", 'Rs. 700', 'Sober Whisky, Orange & Spices'],
    ['Melon, Felon', 'Rs. 700', 'Sober Pink Gin, Watermelon, Muskmelon, Gingerale']
  ];

  const coffeeTeaMatcha = [
    ['Milk-Based Coffee (Hot/Iced)', '', ''],
    ['Espresso Macchiato', 'Rs. 250', ''],
    ['Cortado/Piccolo', 'Rs. 250', ''],
    ['Flat White', 'Rs. 280', ''],
    ['Café Latte', 'Rs. 280', ''],
    ['Cappuccino', 'Rs. 280', ''],
    ['Salted Café Mocha/Classic', 'Rs. 300', ''],
    ['Brown Sugar Latte', 'Rs. 250', ''],
    ['Vietnamese Iced Coffee', 'Rs. 300', ''],
    ['Water-Based Coffee (Hot/Iced)', '', ''],
    ['Espresso', 'Rs. 250', ''],
    ['Americano/Long Black', 'Rs. 250', ''],
    ['Scarlett Specials', '', ''],
    ['Vanilla Bean Latte', 'Rs. 300', ''],
    ['Orange Mocha', 'Rs. 350', ''],
    ['Mont Blanc', 'Rs. 350', 'Cold brew topped with vegan spiced whipped cream, grated nutmeg and orange'],
    ['Yuzu Tonic', 'Rs. 350', 'Natural Yuzu extract + tonic water and espresso'],
    ['Pure Teas', '', ''],
    ['Darjeeling / Assam Black / Green', 'Rs. 250', 'Whole leaf teas'],
    ['Artisanal Blends', '', ''],
    ['Sacred Space', 'Rs. 250', 'Black Tea, Vana Tulsi, Krishna Tulsi, Star Anise, Rose Petals, Cardamom'],
    ['Ruby Heaven', 'Rs. 250', 'Green Tea, Hibiscus, Vana Tulsi, Cinnamon, Peppermint'],
    ['Herbal Teas', '', ''],
    ['Powerhouse', 'Rs. 250', 'Peppermint, Nettle Leaf, Krishna Tulsi, Fennel, Rose Petals'],
    ['Breather', 'Rs. 250', 'Eucalyptus, Ginger, Fennel, Peppermint, Clove, Licorice Root'],
    ['Matcha Bar', '', ''],
    ['Extra Creamy Matcha Latte', 'Rs. 400', 'Baimudan ceremonial grade, oat milk — high caffeine'],
    ['Classic Matcha Latte', 'Rs. 350', ''],
    ['Pistachio Matcha Latte', 'Rs. 450', ''],
    ['Add-Ons', '', ''],
    ['Plant-Based Milk (Oat/Almond)', 'Rs. 80', ''],
    ['Add-On Supplement (Turmeric/Collagen)', 'Rs. 100', ''],
    ['Syrup (Vanilla/Roasted Hazelnut)', 'Rs. 50', '']
  ];

  const otherBeverages = [
    ['Aerated Beverages (Can)', '', ''],
    ['Schweppes Ginger Ale', 'Rs. 200', ''],
    ['Schweppes Soda', 'Rs. 200', ''],
    ['Schweppes Tonic Water', 'Rs. 200', ''],
    ['Coke/Diet Coke', 'Rs. 200', ''],
    ['Red Bull', 'Rs. 300', ''],
    ['Refreshers (Glass)', '', ''],
    ['Lime Soda/Water', 'Rs. 250', ''],
    ['Virgin Mojito', 'Rs. 400', ''],
    ["Bartender's Special", 'Rs. 400', ''],
    ['Sparkling Water', '', ''],
    ['Perrier (330ml)', 'Rs. 380', ''],
    ['Mineral Water', '', ''],
    ['Ava Still Water (750ml)', 'Rs. 220', '']
  ];

  const houseOfFirsts = [
    ['The First Monsoon Bus Ride', 'Rs. 995', 'Absolut, Jasmine, Pandan, Tender Coconut Water, Saline'],
    ['The First Kiss', 'Rs. 995', 'Don Angel, Strawberry, Fig, Yuzu, Green Grape'],
    ['The First Puff', 'Rs. 995', 'Havana Club 7 Yrs, Smoky Tea, Charred Pineapple, Menthe, Lime, Chilli'],
    ["First Jobbers' Vent-Out Sessions", 'Rs. 995', 'Five-Spirit Blend, Orange Liqueur, Citric Acid'],
    ['First TV Show at 9PM', 'Rs. 995', "Ballantine's Finest, Dry Sherry, Dark Amaro, Almond, Lime"],
    ['First Licensed Bar', 'Rs. 995', "Beefeater, Sweet Vermouth, Bitter Orange, Lime, Spiced Jaggery — a tribute to Bombay's Harbour Bar, 1933"],
    ['The Best Of', '', ''],
    ['Nostalgia 2.0', 'Rs. 995', 'Johnnie Walker, Apple, Balsamic, Sloe Gin'],
    ['Inspiration', 'Rs. 995', 'Don Julio Blanco, Bell Pepper, Marjoram, Citrus'],
    ["Malla's Ritual", 'Rs. 995', "A roll-the-dice, build-your-own cocktail — one die picks your flavour profile (Sweet, Floral, Spicy, Sour, Herbal, Tangy), the other picks your base gin (Stranger & Sons, Bombay Sapphire, Monkey 47, Tanqueray, Hendricks, and more)"]
  ];

  return (
    <main className="w-full bg-[#080F0F] relative z-10 text-[#FDF0D5] min-h-screen">
      {/* Top spacer precisely matching Scarlett House's 135px offset */}
      <div className="w-full h-[135px]" />

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

      <MenuCarousel images={[drinkImages[0]]} align="left" />

      <WineCellarSection />

      <MenuModule
        title="Zero Proof"
        align="left"
        layout="layout-desc"
        items={hydrationBar}
        footnote="Hydration Bar & Cold Press Juices priced Bottle / Shot."
      />

      <MenuCarousel images={[drinkImages[1], drinkImages[2]]} align="right" />

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

      <MenuModule
        title="House of Firsts"
        subtitle="Signature Cocktail Menu"
        note="Remember the time your firsts felt bigger than life itself? At The Scarlett House, those moments now live on through our new cocktail menu that turns memory into mixology."
        align="left"
        layout="layout-desc"
        items={houseOfFirsts}
        className="bg-[#851F27] mt-[30px]"
      />
    </main>
  );
}
