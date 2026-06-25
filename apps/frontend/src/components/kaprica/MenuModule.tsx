import React from 'react';
import clsx from 'clsx';

export type LayoutType = 'layout-two' | 'layout-five' | 'layout-six';

export interface MenuModuleProps {
  title: string;
  align: 'left' | 'right';
  layout: LayoutType;
  items: string[][];
  className?: string;
}

export default function MenuModule({ title, align, layout, items, className }: MenuModuleProps) {
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
        </h2>
        
        <div className="w-full flex flex-col font-serif text-[20px] text-[#FDF0D5] tracking-normal leading-[30px]">
          {items.map((row, rowIndex) => (
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
      </div>
    </section>
  );
}
