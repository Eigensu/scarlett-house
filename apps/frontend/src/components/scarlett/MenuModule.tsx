import React from 'react';
import clsx from 'clsx';

export type LayoutType = 'layout-two' | 'layout-five' | 'layout-six' | 'layout-desc';

export interface MenuModuleProps {
  title: string;
  subtitle?: string;
  note?: string;
  footnote?: string;
  align: 'left' | 'right';
  layout: LayoutType;
  items: string[][];
  className?: string;
}

export default function MenuModule({ title, subtitle, note, footnote, align, layout, items, className }: MenuModuleProps) {
  return (
    <section className={clsx("w-full px-5 py-[30px]", className)}>
      <div
        className={clsx(
          "w-full max-w-[800px] flex flex-col",
          align === 'left' ? "mr-auto" : "ml-auto"
        )}
      >
        <h2 className="text-[60px] leading-[60px] uppercase font-serif tracking-normal text-[#FDF0D5] mb-[30px]">
          {title}
          {subtitle && (
            <span className="block text-[20px] leading-[24px] italic normal-case tracking-normal mt-1">
              {subtitle}
            </span>
          )}
        </h2>

        {note && (
          <p className="font-serif text-[16px] leading-[22px] italic text-[#FDF0D5] opacity-70 mb-[20px]">
            {note}
          </p>
        )}

        <div className="w-full flex flex-col font-serif text-[20px] text-[#FDF0D5] tracking-normal leading-[30px]">
          {layout === 'layout-desc' ? items.map((row, rowIndex) => {
            const [name, price, description] = row;

            // Note row: no price, name wrapped in parens
            if (!price && name.startsWith('(')) {
              return (
                <div key={rowIndex} className="w-full text-[15px] italic opacity-70 mb-4">
                  {name}
                </div>
              );
            }

            // Subheading row: no price, no description
            if (!price && !description) {
              return (
                <div key={rowIndex} className="w-full uppercase text-[18px] tracking-wide mt-6 mb-2 first:mt-0">
                  {name}
                </div>
              );
            }

            return (
              <div key={rowIndex} className="w-full flex flex-col mb-5">
                <div className="w-full flex justify-between gap-x-4">
                  <div className="break-words">{name}</div>
                  <div className="text-right shrink-0 ml-4 whitespace-nowrap">{price}</div>
                </div>
                {description && (
                  <div className="text-[14px] leading-[20px] opacity-70 mt-1">
                    {description}
                  </div>
                )}
              </div>
            );
          }) : items.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={clsx(
                "w-full gap-x-4",
                layout === 'layout-two' ? "flex justify-between" :
                layout === 'layout-five' ? "grid grid-cols-[1fr_1fr_auto_auto_auto]" :
                "grid grid-cols-[auto_1fr_1fr_auto_auto_auto]"
              )}
            >
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={clsx(
                    "break-words",
                    layout === 'layout-two' && cellIndex === 1 && "text-right shrink-0 ml-4",
                    layout === 'layout-five' && cellIndex >= 2 && "text-right",
                    layout === 'layout-six' && cellIndex >= 4 && "text-right"
                  )}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>

        {footnote && (
          <p className="font-serif text-[15px] leading-[20px] italic text-[#FDF0D5] opacity-70 mt-[24px]">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
