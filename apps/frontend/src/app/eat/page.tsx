import React from 'react';
import MenuModule from '@/components/kaprica/MenuModule';
import MenuCarousel from '@/components/kaprica/MenuCarousel';

export default function EatPage() {
  const antipasto = [
    ['House focaccia, olive oil', '5 for 2 pieces'],
    ['Mount Zero mixed olives', '9'],
    ['Pizzetta garlic, mozzarella', '14'],
    ['Caprese buffalo mozzarella', '18'],
    ['Prawns, garlic, chilli', '18'],
    ['Bresaola, rocket, parmesan', '20'],
    ['Mussels, tomato sugo, chili', '18'],
    ['Antipasto plate', '26']
  ];

  const carousel1 = [
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/66c5e12d7136d894262692771d0808b30ff72ce3-5241x2948.jpg?w=1200&auto=format' },
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/885457611387bccf9987c97b905976e7700cffe2-6989x5242.jpg?w=1200&auto=format' },
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/d81b41fca01f6f469ee4e44007e50c6fad5393b4-6989x5242.jpg?w=1200&auto=format' },
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/87a527106a878c6be4cceea6cfd4f8dfda412e92-6989x5242.jpg?w=1200&auto=format' }
  ];

  const pasta = [
    ['Spaghetti, prawns, tomato sugo, chilli', '30'],
    ['Spaghetti vongole, garlic, thyme, chilli', '30'],
    ['Spaghetti veal pork meatballs, tomato sugo', '30'],
    ['Rigatoni, lamb shoulder ragu', '30'],
    ['Gnocchi Sorrentina, tomato sugo, mozzarella, basil', '30'],
    ['Risotto of the day', '30'],
    ['Orecchiette with butternut squash and broccolini', '30']
  ];

  const pizza = [
    ['Margherita - tomato, mozzarella, basil', '25'],
    ['Puttanesca - tomato, mozz, olives, anchovy, capers, cherry tomato, chilli', '30'],
    ['Broccoli - mozzarella, broccoli, chilli, parmesan, lemon', '30'],
    ['Potato - mozzarella, potato, caramelised onions, rosemary', '30'],
    ['Mushroom Deluxe - asiago, swiss brown and trumpet mushrooms', '30'],
    ['Kaprica X - mozzarella, peppers, zucchini, eggplant, olives', '30'],
    ['Capricciosa - tomato, mozz, ham, mushroom, olives, artichoke', '30'],
    ['Hawaiian - tomato, mozz, ham, golden circle pineapple', '30'],
    ['Prosciutto - tomato, mozzarella, basil, prosciutto di parma', '30'],
    ['Pancetta - tomato, mozzarella, pancetta, rocket, parmesan', '30'],
    ['Mario - tomato, mozzarella, red onion, chilli, pancetta, parmesan', '30'],
    ['Mr John - tomato, mozzarella, pesto, hot salami', '30'],
    ['Mr Prawn - tomato, mozz, prawns, chilli, cherry tomato, basil', '30'],
    ['Salmone - tomato, mascarpone, red onion, smoked salmon, roe', '30'],
    ['Additions', '3'],
    ['Green leaves, radicchio, orange', '15'],
    ['Rocket and fennel salad', '13']
  ];

  const carousel2 = [
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/30323e09579593db9233a90a4bbb5304c7616dd0-5242x6989.jpg?w=1200&auto=format' },
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/a8f90e1345197e409dba20884dd415bc6dd54f7b-6989x5242.jpg?w=1200&auto=format' },
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/68990bcc1247d0af9f7df4575cf2ec551d91c045-5042x6723.jpg?w=1200&auto=format' },
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/e841c6c348d1bb34ea6f9441e5e0f60ef7349ff0-5242x6989.jpg?w=1200&auto=format' }
  ];

  const dolci = [
    ['Affogato', '8'],
    ['Affogato with frangelico', '14'],
    ['Tiramisu', '15'],
    ['Ice Cream Trio (Chocolate, Lemon, Raspberry)', '14'],
    ['Crème caramel', '14'],
    ['Chocolate Nemesis Cake, Crème Fraîche', '15'],
    ['Tiramisu Birthday Cake (Serves 8-10)', '24 Hours Notice']
  ];

  const carousel3 = [
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/86930e59c81b442c91f089e7524f8cc7aede8b89-5242x3931.jpg?w=1200&auto=format' },
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/f517548ccd1e9361a6ef028794c1ee88fbab8917-3728x4971.jpg?w=1200&auto=format' },
    { src: 'https://cdn.sanity.io/images/4asd31jo/production/89ce50f7f4b7f68b75e215f01b8bd8284a2b8e14-5242x2949.jpg?w=1200&auto=format' }
  ];

  const digestivi = [
    ['Stove top espresso', '1 cup / 2 cups / 4 cups', '4', '8', '12'],
    ['Espresso Martini', '', '', '', '20'],
    ['McIver’s Peppermint tea', '', '', '', '5'],
    ['Nonino', 'Friuli, 35%', '', '', '12'],
    ['Montenegro', 'Bologna, 23%', '', '', '12'],
    ['Camatti', 'Genova, 20%', '', '', '12'],
    ['Fernet Branca', 'Milano, 39%', '', '', '12'],
    ['Alpe', 'Valle d’Aosta, 38%', '', '', '12'],
    ['Rucolino', 'Ischia Naples, 30%', '', '', '12'],
    ['Averna', 'Venezia, 29%', '', '', '12'],
    ['Braulio', 'Venezia, 29%', '', '', '12'],
    ['Ramazzotti', 'Milano, 30%', '', '', '12']
  ];

  return (
    <main className="w-full bg-[#47682c] relative z-10 text-[#FDF0D5] min-h-screen">
      {/* Top spacer precisely matching Kaprica's 135px offset */}
      <div className="w-full h-[135px]" />
      
      <MenuModule 
        title="ANTIPASTO" 
        align="left" 
        layout="layout-two" 
        items={antipasto} 
      />

      <MenuCarousel 
        images={carousel1} 
        align="right" 
      />

      <MenuModule 
        title="PASTA" 
        align="right" 
        layout="layout-two" 
        items={pasta} 
      />

      <MenuModule 
        title="12” PIZZA" 
        align="left" 
        layout="layout-two" 
        items={pizza} 
      />

      <MenuCarousel 
        images={carousel2} 
        align="right" 
      />

      <MenuModule 
        title="DOLCI" 
        align="left" 
        layout="layout-two" 
        items={dolci} 
      />

      <MenuCarousel 
        images={carousel3} 
        align="left" 
      />

      <MenuModule 
        title="DIGESTIVI/AMARO" 
        align="left" 
        layout="layout-five" 
        items={digestivi} 
      />

      {/* Spacer block to reveal the fixed footer underneath */}
      <div className="w-full h-[230px] bg-transparent pointer-events-none" />
    </main>
  );
}
