export const GA_MEASUREMENT_ID = 'G-CRLYW22DBF';

type EventParams = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const pageview = (url: string) => {
  if (typeof window === 'undefined') return;
  const w = window as any;
  if (!w.gtag) return;
  w.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: EventParams) => {
  if (typeof window === 'undefined') return;
  const w = window as any;
  if (!w.gtag) return;
  w.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export default { GA_MEASUREMENT_ID, pageview, event };
