'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

type Location = 'juhu' | 'bandra';

interface WinePricing {
  glass?: string;
  bottle: string;
}

interface WineRow {
  name: string;
  juhu?: WinePricing | null;
  bandra?: WinePricing | null;
}

interface WineCategory {
  title: string;
  wines: WineRow[];
}

const categories: WineCategory[] = [
  {
    title: 'Champagne',
    wines: [
      { name: "Moët & Chandon Imperial Rosé, France", juhu: { bottle: 'Rs. 20,900' }, bandra: { bottle: 'Rs. 20,900' } }
    ]
  },
  {
    title: 'Prosecco',
    wines: [
      { name: 'True Nomad, Glera, Italy', juhu: { glass: 'Rs. 1,500', bottle: 'Rs. 6,000' }, bandra: { glass: 'Rs. 1,500', bottle: 'Rs. 6,000' } }
    ]
  },
  {
    title: 'Sweet Wine',
    wines: [
      { name: 'Abbazia Moscato Bianco', juhu: null, bandra: { glass: 'Rs. 1,400', bottle: 'Rs. 6,700' } }
    ]
  },
  {
    title: 'White Wine',
    wines: [
      { name: 'Sensi, Pinot Grigio, Veneto, Italy', juhu: { glass: 'Rs. 1,100', bottle: 'Rs. 5,000' }, bandra: { glass: 'Rs. 1,000', bottle: 'Rs. 5,000' } },
      { name: 'Bush Ballad, Chardonnay, Mornington Peninsula, Australia', juhu: { glass: 'Rs. 1,100', bottle: 'Rs. 5,200' }, bandra: { glass: 'Rs. 1,100', bottle: 'Rs. 5,000' } },
      { name: 'Karl Haidel, Riesling, Württemberg, Germany', juhu: { glass: 'Rs. 1,200', bottle: 'Rs. 5,800' }, bandra: { glass: 'Rs. 1,200', bottle: 'Rs. 5,800' } },
      { name: 'Barton & Guestier, Sauvignon Blanc Sémillon, Languedoc, France', juhu: { glass: 'Rs. 1,250', bottle: 'Rs. 5,900' }, bandra: null },
      { name: 'True Nomad, Chardonnay, Maule Valley, Chile', juhu: { glass: 'Rs. 1,300', bottle: 'Rs. 6,000' }, bandra: { glass: 'Rs. 1,300', bottle: 'Rs. 6,000' } },
      { name: 'Golden Sparrow, Pinot Grigio, Emilia-Romagna, Italy', juhu: { glass: 'Rs. 1,300', bottle: 'Rs. 6,100' }, bandra: { glass: 'Rs. 1,300', bottle: 'Rs. 6,000' } },
      { name: 'Château Goumin, Sauvignon Blanc Sémillon Muscadelle, France', juhu: { glass: 'Rs. 1,600', bottle: 'Rs. 8,000' }, bandra: { glass: 'Rs. 1,600', bottle: 'Rs. 8,000' } },
      { name: 'Yalumba Y Series, Viognier, South Australia', juhu: { glass: 'Rs. 1,600', bottle: 'Rs. 8,000' }, bandra: { glass: 'Rs. 1,600', bottle: 'Rs. 8,000' } },
      { name: 'Donnafugata Anthillia, Sicilia, Italy', juhu: null, bandra: { glass: 'Rs. 1,750', bottle: 'Rs. 8,300' } },
      { name: 'Santa Cristina, Vermentino, Tuscany, Italy', juhu: { glass: 'Rs. 1,750', bottle: 'Rs. 8,400' }, bandra: { glass: 'Rs. 1,750', bottle: 'Rs. 8,400' } }
    ]
  },
  {
    title: 'Rosé Wine',
    wines: [
      { name: 'True Nomad Rosé, Pinot Noir, Chile', juhu: { glass: 'Rs. 1,200', bottle: 'Rs. 4,875' }, bandra: { glass: 'Rs. 1,200', bottle: 'Rs. 4,875' } },
      { name: 'Mateus Rosé, Tinta Barroca, Douro, Portugal', juhu: { glass: 'Rs. 1,300', bottle: 'Rs. 6,000' }, bandra: { glass: 'Rs. 1,300', bottle: 'Rs. 6,000' } }
    ]
  },
  {
    title: 'Red Wine',
    wines: [
      { name: 'Bush Ballad, Shiraz, Mornington Peninsula, Australia', juhu: { glass: 'Rs. 1,100', bottle: 'Rs. 5,000' }, bandra: { glass: 'Rs. 1,100', bottle: 'Rs. 5,000' } },
      { name: "Folonari, Montepulciano D'Abruzzo, Italy", juhu: { glass: 'Rs. 1,050', bottle: 'Rs. 4,900' }, bandra: null },
      { name: "Golden Sparrow, Montepulciano D'Abruzzo, Italy", juhu: null, bandra: { glass: 'Rs. 1,150', bottle: 'Rs. 5,800' } },
      { name: 'Monte Pacífico, Merlot, Rapel Valley, Chile', juhu: { glass: 'Rs. 1,100', bottle: 'Rs. 5,300' }, bandra: null },
      { name: 'True Nomad, Pinot Noir, Maule Valley, Chile', juhu: { glass: 'Rs. 1,150', bottle: 'Rs. 5,400' }, bandra: { glass: 'Rs. 1,150', bottle: 'Rs. 5,400' } },
      { name: 'Sensi, Sangiovese, Chianti Docg, Italy', juhu: { glass: 'Rs. 1,350', bottle: 'Rs. 6,500' }, bandra: { glass: 'Rs. 1,350', bottle: 'Rs. 6,500' } },
      { name: "Albert Bichot, Château D'Orsan, Côtes Du Rhône, France", juhu: null, bandra: { glass: 'Rs. 1,400', bottle: 'Rs. 6,500' } },
      { name: 'Matias Riccitelli, Malbec, Mendoza, Argentina', juhu: { glass: 'Rs. 1,400', bottle: 'Rs. 6,750' }, bandra: { glass: 'Rs. 1,400', bottle: 'Rs. 6,750' } },
      { name: 'Ugly Old Man, Merlot, Maule Valley, Chile', juhu: { glass: 'Rs. 1,500', bottle: 'Rs. 7,300' }, bandra: { glass: 'Rs. 1,500', bottle: 'Rs. 7,300' } },
      { name: "Povero Contrada Maestra, Barbera D'Asti Docg, Piedmont, Italy", juhu: null, bandra: { glass: 'Rs. 1,600', bottle: 'Rs. 7,600' } },
      { name: 'Château Goumin, Cabernet Sauvignon Merlot, Bordeaux, France', juhu: { glass: 'Rs. 1,650', bottle: 'Rs. 8,000' }, bandra: { glass: 'Rs. 1,650', bottle: 'Rs. 8,000' } },
      { name: 'Domaine Barons De Rothschild, Cabernet Sauvignon Merlot, Bordeaux', juhu: { glass: 'Rs. 2,100', bottle: 'Rs. 10,000' }, bandra: null }
    ]
  }
];

export default function WineCellarSection() {
  const [location, setLocation] = useState<Location>('juhu');

  return (
    <section className="w-full px-5 py-[30px]">
      <div className="w-full max-w-[800px] flex flex-col mr-auto">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-[30px]">
          <h2 className="text-[60px] leading-[60px] uppercase font-serif tracking-normal text-[#FDF0D5]">
            Wine Cellar
          </h2>

          <div className="flex gap-2 font-serif text-[16px]">
            {(['juhu', 'bandra'] as Location[]).map((loc) => (
              <button
                key={loc}
                onClick={() => setLocation(loc)}
                className={clsx(
                  'px-4 py-1.5 uppercase tracking-wide border transition-colors',
                  location === loc
                    ? 'bg-[#FDF0D5] text-[#080F0F] border-[#FDF0D5]'
                    : 'border-[#FDF0D5] text-[#FDF0D5] opacity-70 hover:opacity-100'
                )}
              >
                {loc === 'juhu' ? 'Juhu' : 'Bandra'}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col font-serif text-[20px] text-[#FDF0D5] tracking-normal leading-[30px]">
          {categories
            .filter((category) => category.wines.some((wine) => wine[location]))
            .map((category) => (
            <div key={category.title} className="mb-6">
              <div className="w-full uppercase text-[18px] tracking-wide mb-3">
                {category.title}
              </div>

              {category.wines
                .filter((wine) => wine[location])
                .map((wine) => {
                  const pricing = wine[location]!;
                  return (
                    <div key={wine.name} className="w-full flex justify-between gap-x-4 mb-3">
                      <div className="break-words">{wine.name}</div>
                      <div className="text-right shrink-0 ml-4 whitespace-nowrap text-[16px]">
                        {pricing.glass && <span>{pricing.glass} (Glass) / </span>}
                        <span>{pricing.bottle} (Bottle)</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>

        <p className="font-serif text-[15px] leading-[20px] italic text-[#FDF0D5] opacity-70 mt-[8px]">
          Sweet Wine is available exclusively at our Bandra location.
        </p>
      </div>
    </section>
  );
}
