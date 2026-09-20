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
  headerAction?: React.ReactNode;
}

export default function MenuModule({ title, subtitle, note, footnote, align, layout, items, className, headerAction }: MenuModuleProps) {
  return (
    <section className={clsx("w-full px-5 py-[30px] relative", className)}>
      {headerAction && (
        <div className="absolute right-5 top-[30px] flex items-end h-[40px] md:h-[60px]">
          {headerAction}
        </div>
      )}
      <div
        className={clsx(
          "w-full max-w-[800px] flex flex-col",
          align === 'left' ? "mr-auto" : "ml-auto"
        )}
      >
        <h2 className={clsx(
          "text-[40px] md:text-[60px] leading-[40px] md:leading-[60px] uppercase font-serif tracking-normal text-current mb-[30px]",
          headerAction && "pr-[110px] md:pr-0"
        )}>
          {title}
          {subtitle && subtitle.split('\n').map((line, i) => (
            <span key={i} className="block text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] italic normal-case tracking-normal mt-1">
              {line}
            </span>
          ))}
        </h2>

        {note && (
          <p className="font-serif text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] italic text-[#FDF0D5] opacity-70 mb-[20px]">
            {note}
          </p>
        )}

        <div className="w-full flex flex-col font-serif text-[16px] md:text-[20px] text-current tracking-normal leading-[24px] md:leading-[30px]">
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
                <div key={rowIndex} className="w-full uppercase text-[18px] tracking-wide mt-2 mb-2 first:mt-0">
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
                {description && (() => {
                  const leadingMatch = description.match(/^(\([^)]*\))\s*(.*)$/);
                  const trailingMatch = !leadingMatch && description.match(/^(.*?)\s*(\([^)]*\))$/);
                  const lines = leadingMatch
                    ? [leadingMatch[1], leadingMatch[2]]
                    : trailingMatch
                    ? [trailingMatch[1], trailingMatch[2]]
                    : [description];
                  return (
                    <div className="text-[14px] leading-[20px] opacity-70 mt-1">
                      {lines.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  );
                })()}
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
