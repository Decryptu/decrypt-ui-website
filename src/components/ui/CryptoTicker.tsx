import type React from "react";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface CoinTickerProps {
  cryptoCurrency: string;
  refreshInterval: number;
  displayFormat: "USD" | "EUR";
  displayChart: boolean;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const CoinTicker: React.FC<CoinTickerProps> = ({
  cryptoCurrency,
  refreshInterval,
  displayFormat,
  displayChart = false,
}) => {
  const [price, setPrice] = useState<string>("--");
  const [marketCap, setMarketCap] = useState<string>("--");
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [priceChange, setPriceChange] = useState<number>(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${cryptoCurrency.toLowerCase()}/market_chart`,
        {
          params: {
            vs_currency: displayFormat.toLowerCase(),
            days: "1",
          },
        }
      );
      const { prices, market_caps } = response.data;
      const firstPrice = prices[0][1];
      const lastPrice = prices[prices.length - 1][1];
      const change = ((lastPrice - firstPrice) / firstPrice) * 100;

      setPriceChange(change); // This is always set now, so will not be null
      setChartData({
        labels: prices.map((p: [number, number]) =>
          new Date(p[0]).toLocaleTimeString()
        ),
        datasets: [
          {
            label: `${cryptoCurrency.toUpperCase()} Price`,
            data: prices.map((p: [number, number]) => p[1]),
            borderColor: change >= 0 ? "rgb(20, 199, 132)" : "rgb(234, 57, 67)",
            backgroundColor:
              change >= 0
                ? "rgba(20, 199, 132, 0.1)"
                : "rgba(234, 57, 67, 0.1)",
          },
        ],
      });
      setPrice(
        new Intl.NumberFormat("en-US", {
          minimumFractionDigits: lastPrice < 1 ? 6 : 2,
          maximumFractionDigits: lastPrice < 1 ? 6 : 2,
        }).format(lastPrice)
      );
      setMarketCap(
        new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(market_caps[market_caps.length - 1][1])      
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Consider setting a default or error state for priceChange here
    }
  }, [cryptoCurrency, displayFormat]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, refreshInterval * 1000);
    return () => clearInterval(interval);
  }, [fetchData, refreshInterval]);

  const getCurrencySymbol = (format: string) => {
    return format === "USD" ? "$" : "€";
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        position: "nearest",
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
  };

  return (
    <div className="bg-black text-white max-w-72 border-white/25 py-4 border rounded-xl">
      <div className="flex justify-between font-light px-4 items-center">
        <span className="text-md capitalize">{cryptoCurrency}</span>
        <span
          className={`text-md bg-white/10 rounded-full px-3 py-1 ${
            priceChange >= 0 ? "text-green" : "text-red"
          }`}
        >
          {(priceChange >= 0 ? "+" : "") + priceChange.toFixed(2)}%{" "}
          {priceChange >= 0 ? "↑" : "↓"}
        </span>
      </div>
      <div className="text-4xl font-semibold my-2 px-4">
        <span className={`${priceChange >= 0 ? "text-green" : "text-red"}`}>
          {getCurrencySymbol(displayFormat)}
          {price}
        </span>
      </div>
      <div className="text-white/50 text-sm font-light mb-2 px-4">
        MCap: {getCurrencySymbol(displayFormat)}
        {marketCap}
      </div>
      {displayChart && chartData && (
        <div>
          <Line options={options} data={chartData} className="max-h-32" />
        </div>
      )}
    </div>
  );
};

export default CoinTicker;
