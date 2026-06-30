import React from 'react';
import MenuModule from '@/components/scarlett/MenuModule';
import MenuCarousel from '@/components/scarlett/MenuCarousel';

export default function FunctionsPage() {
  const sampleMenu = [
    ["House focaccia, olive oil"],
    ["Mount Zero mixed olives"],
    ["Buffalino caprese"],
    ["Peperonata, Melanzane"],
    ["Salumi"],
    ["Prawns, garlic, chilli"],
    ["Pizze"],
    ["House made gnocchi Sorrentina"],
    ["Rigatoni lamb ragu"],
    ["Green leaves"],
    [""],
    ["*Happy to tweak the menu to suit and assist with dietaries"],
    ["*Drinks as per consumption"]
  ];

  const carousel1 = [
    { src: "https://cdn.sanity.io/images/4asd31jo/production/9b0afe02d78c5e6981807d00ad7aed9d7c52eb76-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/464b825cfd5284350cb766ec5b3fcb3e18a8e785-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/70f2d6d7f59baffdebc9bd75c7f40f5572a90878-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/b58828ffc14528d116231abecb5786566cbfea22-3495x1966.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/a1aae81aea51428268a7ae1e5f73dfbddd530a2a-6989x3931.jpg?w=1200&auto=format" }
  ];

  const carousel2 = [
    { src: "https://cdn.sanity.io/images/4asd31jo/production/8c410883661100a71b8f148e4dc32abc221f6f57-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/53fbd5defc868fbb5f1fb3b6119c1b5c36f2641e-5242x6989.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/30323e09579593db9233a90a4bbb5304c7616dd0-5242x6989.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/194532e8886e03ab37a6d02265029d08740113c5-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/87a527106a878c6be4cceea6cfd4f8dfda412e92-6989x5242.jpg?w=1200&auto=format" },
    { src: "https://cdn.sanity.io/images/4asd31jo/production/9065743d86056fce84334d4702a487ca911ff078-6989x5242.jpg?w=1200&auto=format" }
  ];

  return (
    <main className="w-full bg-[#841F27] relative z-10 text-[#FDF0D5] min-h-screen">
      {/* Top spacer precisely matching Scarlett House's 135px offset */}
      <div className="w-full h-[135px]" />
      
      {/* Custom Hero Text Block */}
      <section className="w-full px-5 py-[30px] flex justify-center">
        <div className="max-w-[800px] text-center font-serif text-[20px] leading-[30px] tracking-normal text-[#FDF0D5]">
          <p className="mb-8">
            For group bookings of more than 14, including private events, please call us at 0447 043 404.
          </p>
          <p>
            Continue scrolling to see Chef’s Menu.
          </p>
        </div>
      </section>

      <MenuModule 
        title="SAMPLE SET MENU" 
        align="left" 
        layout="layout-two" 
        items={sampleMenu} 
      />

      <MenuCarousel 
        images={carousel1} 
        align="left" 
      />

      <MenuCarousel 
        images={carousel2} 
        align="right" 
      />
      
    </main>
  );
}
