'use client';

import { useEffect, useRef } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  flush?: boolean;
  lg?: boolean;
}

export default function Section({
  children,
  className = '',
  flush = false,
  lg = false,
  ...props
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    const elements = ref.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-20 border-t-[1.5px] border-brand-red ${flush ? 'pt-0' : ''} ${
        lg ? 'py-28' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
