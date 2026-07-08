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
      // Feature detection: only intercept the tap on devices that don't truly support hover.
      // Hybrid laptops (touchscreen + trackpad) can report maxTouchPoints > 0 while still
      // supporting real :hover, so prefer the hover/pointer media query as the source of truth.
      const supportsHover =
        typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

      // If the device supports real hover, let CSS :hover drive the overlay and let the click navigate normally.
      if (supportsHover) return;

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
