import { useState, useEffect, useCallback } from 'react';

export function useTouchNavigation() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  useEffect(() => {
    // A global click listener to dismiss the active card if a tap occurs outside
    const handleGlobalClick = (e: MouseEvent | TouchEvent) => {
      if (!activeCardId) return;

      const target = e.target as HTMLElement;
      // If the click is inside any touch-nav element, we handle it in handleCardClick instead
      if (!target.closest('[data-touch-nav="true"]')) {
        setActiveCardId(null);
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    document.addEventListener('touchstart', handleGlobalClick, { capture: true });
    
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
      document.removeEventListener('touchstart', handleGlobalClick, { capture: true });
    };
  }, [activeCardId]);

  const handleCardClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, cardId: string) => {
      // Feature detection: Check if device primarily uses touch
      const isTouch =
        (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) ||
        (typeof window !== 'undefined' && 'ontouchstart' in window) ||
        (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);

      // If it's a desktop (hover supported, not touch), let the normal link click happen.
      if (!isTouch) return;

      if (activeCardId !== cardId) {
        // First tap: Set this card as active and prevent navigation
        e.preventDefault();
        e.stopPropagation();
        setActiveCardId(cardId);
      }
      // Second tap on the same card: Let the navigation proceed naturally
    },
    [activeCardId]
  );

  return { activeCardId, handleCardClick };
}
