import React from 'react';
import MenuModule from '@/components/kaprica/MenuModule';
import MenuCarousel from '@/components/kaprica/MenuCarousel';

export default function DrinkPage() {
  const cocktails = [
    ["Gin and tonic: Four Pillars/ MC/ Hendricks/Patient Wolf", "12"],
    ["Spritz: Aperol/ Campari/ Montenegro/ Limoncello", "16"],
    ["Campari Grapefruit", "16"],
    ["Americano", "16"],
    ["Negroni / Negroni Spagliato", "22"],
    ["Espresso Martini", "22"],
    ["Sours: Amaretto/ Whiskey/ Gin", "22"],
    ["Margaritas: Classic/ Spicy/ Italian", "22"],
    ["Manhattan", "22"],
    ["Old Fashioned", "22"],
    ["Martini: Vodka/ Gin", "22"]
  ];

  const carousel1 = [
    { src: "https://cdn.sanity.io/images/4asd31jo/production/3ab91a651aff10a67ed279e43d481dfe92715e6e-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/38a9b1e03cd61cdbabe63d0311fabc234e4e2a11-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/53e49eecbe47ca0dc2d268c9d58041f843e9ba41-5242x2949.jpg?w=1200&auto=format" }
  ];

  const sparkling = [
    ["NV", "Christmont La Zona Prosecco", "King Valley, VIC", "", "12", "55"],
    ["NV", "Lini 910 Lambrusco Rose", "Emiglia Romagne, IT", "", "", "55"],
    ["NV", "Canella DOC Prosecco", "Veneto, IT", "", "", "65"],
    ["2016", "Ghost Rock Zoe Brut Rose", "TAS", "", "", "65"]
  ];

  const petNat = [
    ["2021", "Ghost Rock Supernatural", "TAS", "", "", "65"],
    ["2019", "Ombretta Agricola Vorduzzo Friulano", "Veneto, IT", "", "", "75"]
  ];

  const white = [
    ["2019", "Casa Bianco", "King Valley, VIC", "12", "28", "48"],
    ["2021", "Bollini Pinot Grigio", "Trentino, IT", "15", "40", "60"],
    ["2018", "Umani Rochi Verdicchio", "Abruzzo, IT", "15", "40", "60"],
    ["2022", "Kate Hill Riesling", "TAS", "15", "40", "60"],
    ["2020", "La Morella Cortese il Monte", "Piemonte, IT", "", "", "70"],
    ["2021", "Pieropan Soave Classico", "Veneto, IT", "", "", "75"],
    ["2021", "Cantina Giardino Gaia Fiano", "Campania, IT", "", "", "75"]
  ];

  const carousel2 = [
    { src: "https://cdn.sanity.io/images/4asd31jo/production/73391eb3cdb26b9c0bf9cd6706ebffaba70e0733-5242x2949.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/a1aae81aea51428268a7ae1e5f73dfbddd530a2a-6989x3931.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/417b1607ebdb0317c3b53d31394d988892c7822f-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/2867d8db4cf2d605177623111df47c8c9707c35b-5242x6989.jpg?w=1200&auto=format" }
  ];

  const skinContact = [
    ["2019", "Antonio Camillo tutti i giorni trebbiano", "Tuscany, IT", "15", "40", "1L 70"],
    ["2021", "Nasciri Vin I Casa Macerato", "IT", "", "", "70"],
    ["2018", "Le Coste Ripazzo Bianco", "Lazio, IT", "", "", "75"],
    ["2019", "Caravaglio Occhio Di Terra", "Lazio, IT", "", "", "90"]
  ];

  const rose = [
    ["2021", "Domaine La Pregentiere", "Provence, France", "15", "40", "60"],
    ["2021", "Taschini", "Limestone Coast, SA", "15", "40", "60"],
    ["2021", "Tom Shobbrook Poolside", "Barossa, SA", "", "", "75"],
    ["2020", "Cantina Giardino Volpe Rosa, Rosato", "Campania, IT", "", "", "85"],
    ["2020", "Le Coste 'Litrozzo' Rosato", "Lazio, IT", "", "", "1L 85"]
  ];

  const red = [
    ["2017", "Casa Rosso", "King Valley, VIC", "12", "28", "48"],
    ["2018", "Monte Antico Sangiovese", "Tuscany, IT", "15", "40", "60"],
    ["2021", "Provence Pinot Noir", "Golden Plains, VIC", "15", "40", "60"],
    ["2020", "Speri La Roverina", "Valpolicella, IT", "15", "40", "60"],
    ["2019", "Stella Barbera d'Asti", "Piedmont, IT", "", "", "65"],
    ["2020", "Alberto Oggero Sandro Vino Rosso", "Piedmont, IT", "", "", "65"],
    ["2020", "Pietradolce Etna Rosso", "Sicily, IT", "", "", "70"],
    ["2019", "Anselma Dolcetto d'Alba", "Piedmont, IT", "", "", "75"],
    ["2020", "Criante Nero D'Avola N20", "Sicily, IT", "", "", "80"],
    ["2020", "Poggerino Chianti Classico", "Tuscany, IT", "", "", "80"],
    ["2019", "Le Coste Rosso di Gaetano", "Lazio, IT", "", "", "80"],
    ["2019", "Le Fole Aglianico", "Campania, IT", "", "", "85"],
    ["2017", "Josetta Safirio Barolo", "Piedmont, IT", "", "", "145"]
  ];

  const carousel3 = [
    { src: "https://cdn.sanity.io/images/4asd31jo/production/194532e8886e03ab37a6d02265029d08740113c5-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/b7a31886da2ca5c90b389d2337e9a7642fa761b3-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/5ab4e042cbdddbd00b1c469137753ab3ec434fbb-5242x6989.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/ed24c9d240d457c76d937f64f32f79438f77ef0d-5242x6989.jpg?w=1200&auto=format" }
  ];

  const beer = [
    ["Peroni", "10"]
  ];

  const softDrinks = [
    ["San Bitter", "6"],
    ["Chinotto", "7"],
    ["Lemon Soda", "7"],
    ["Blood orange soda", "7"],
    ["Lemon Lime Bitters", "8"],
    ["Sparkling Water", "10"],
    ["Mocktail: Blood Orange Soda, Fresh Grapefruit Juice, Lime", "12"]
  ];

  return (
    <main className="w-full bg-[#080F0F] relative z-10 text-[#FDF0D5] min-h-screen">
      {/* Top spacer precisely matching Kaprica's 135px offset */}
      <div className="w-full h-[135px]" />
      
      <MenuModule 
        title="COCKTAILS" 
        align="left" 
        layout="layout-two" 
        items={cocktails} 
      />

      <MenuCarousel 
        images={carousel1} 
        align="left" 
      />

      <MenuModule 
        title="SPARKLING" 
        align="right" 
        layout="layout-six" 
        items={sparkling} 
      />

      <MenuModule 
        title="PET-NAT" 
        align="right" 
        layout="layout-six" 
        items={petNat} 
      />

      <MenuModule 
        title="WHITE" 
        align="right" 
        layout="layout-six" 
        items={white} 
      />

      <MenuCarousel 
        images={carousel2} 
        align="right" 
      />

      <MenuModule 
        title="SKIN CONTACT" 
        align="left" 
        layout="layout-six" 
        items={skinContact} 
      />

      <MenuModule 
        title="ROSÉ / CHILLED RED" 
        align="left" 
        layout="layout-six" 
        items={rose} 
      />

      <MenuModule 
        title="RED" 
        align="left" 
        layout="layout-six" 
        items={red} 
      />

      <MenuCarousel 
        images={carousel3} 
        align="right" 
      />

      <MenuModule 
        title="BEER" 
        align="left" 
        layout="layout-two" 
        items={beer} 
      />

      <MenuModule 
        title="SOFT DRINKS" 
        align="left" 
        layout="layout-two" 
        items={softDrinks} 
      />
      
    </main>
  );
}
