import type React from "react";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface CoinTickerProps {
  cryptoCurrency: string;
  refreshInterval: number;
  displayFormat: "USD" | "EUR";
  displayChart?: boolean;
}

const CoinTicker: React.FC<CoinTickerProps> = ({
  cryptoCurrency,
  refreshInterval,
  displayFormat,
  displayChart = false,
}) => {
  const [price, setPrice] = useState<string>("--");
  const [percentageChange, setPercentageChange] = useState<string>("0");
  const [ticker, setTicker] = useState<string>("");

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: displayFormat.toLowerCase(),
            ids: cryptoCurrency.toLowerCase(),
          },
        }
      );
      const data = response.data[0];
      setPrice(data.current_price.toFixed(2));
      setPercentageChange(data.price_change_percentage_24h.toFixed(2));
      setTicker(data.symbol.toUpperCase());
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, [cryptoCurrency, displayFormat]); // Dependencies for useCallback

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, refreshInterval * 1000);
    return () => clearInterval(interval);
  }, [fetchData, refreshInterval]); // Corrected dependencies for useEffect

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg">{`${cryptoCurrency.toUpperCase()} (${ticker})`}</p>
          <p className="text-sm">
            {price} {displayFormat}
          </p>
          <p
            className={`text-sm ${
              percentageChange.startsWith("-")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {percentageChange}%
          </p>
        </div>
        {displayChart && (
          <div>{/* Chart component integration goes here */}</div>
        )}
      </div>
    </div>
  );
};

export default CoinTicker;
