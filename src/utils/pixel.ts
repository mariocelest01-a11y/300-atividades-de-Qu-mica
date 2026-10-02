export interface PixelEventData {
  event: string;
  data?: Record<string, unknown>;
  timestamp: number;
}

declare global {
  interface Window {
    pixelQueue?: PixelEventData[];
    fbq?: (...args: unknown[]) => void;
    trackPixel?: (event: string, data?: Record<string, unknown>) => void;
  }
}

export function initPixel() {
  if (typeof window === 'undefined') return;

  // Provide trackPixel helper on window
  window.trackPixel = function (event: string, data?: Record<string, unknown>) {
    if (window.fbq) {
      window.fbq('track', event, data);
    }
  };
}

export function trackPixelEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, data);
  }
}
