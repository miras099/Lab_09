import { useMemo } from "react";

interface AnalyticsChartProps {
  items: string[];
}

function calculateAnalytics(items: string[]): number {
  console.log("Calculating analytics...");
  // Симуляция дорогих вычислений
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i);
  }
  return result + items.length;
}

export function AnalyticsChart({ items }: AnalyticsChartProps) {
  // Без useMemo — вычисление выполняется на каждом рендере
  // const analytics = calculateAnalytics(items);

  // С useMemo — вычисление выполняется только при изменении items
  const analytics = useMemo(() => calculateAnalytics(items), [items]);

  console.log("AnalyticsChart render");
  return (
    <div className="chart">
      <h3>Analytics</h3>
      <p>Calculated value: {analytics}</p>
      <p>Items: {items.length}</p>
    </div>
  );
}