import React, { useState, useEffect, useCallback } from "react";

type Props = {
  cryptoList: string[]; // Allowed crypto IDs
  fiatList: string[]; // Allowed fiat currency symbols
};

const CryptoToFiatConverter: React.FC<Props> = ({ cryptoList, fiatList }) => {
  const [rates, setRates] = useState<Record<string, Record<string, number>>>(
    {}
  ); // Rates cached
  const [crypto, setCrypto] = useState<string>(cryptoList[0]);
  const [fiat, setFiat] = useState<string>(fiatList[0]);
  const [cryptoAmount, setCryptoAmount] = useState<string>("1");
  const [fiatAmount, setFiatAmount] = useState<string>("0");
  const [activeInput, setActiveInput] = useState<"crypto" | "fiat">("crypto"); // Tracks which input is actively being edited

  const fetchAllRates = useCallback(async () => {
    const ids = cryptoList.join(",");
    const vs_currencies = fiatList.join(",");
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRates(data);
    } catch (error) {
      console.error("Error fetching all rates:", error);
    }
  }, [cryptoList, fiatList]);

  useEffect(() => {
    fetchAllRates();
  }, [fetchAllRates]);

  const formatAmount = (amount: number, threshold: number = 1) => {
    // Format numbers with different precision based on their value relative to a threshold
    return amount < threshold ? amount.toFixed(8) : amount.toFixed(2);
  };

  const calculateConversion = useCallback(() => {
    if (rates[crypto] && rates[crypto][fiat]) {
      const rate = rates[crypto][fiat];
      if (activeInput === "crypto") {
        const result = parseFloat(cryptoAmount) * rate;
        setFiatAmount(formatAmount(result));
      } else if (activeInput === "fiat") {
        const result = parseFloat(fiatAmount) / rate;
        setCryptoAmount(formatAmount(result));
      }
    }
  }, [crypto, fiat, cryptoAmount, fiatAmount, activeInput, rates]);

  useEffect(() => {
    calculateConversion();
  }, [crypto, fiat, activeInput, calculateConversion]);

  const handleChangeCrypto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCryptoAmount = event.target.value;
    setCryptoAmount(newCryptoAmount);
    setActiveInput("crypto");
  };

  const handleChangeFiat = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiatAmount = event.target.value;
    setFiatAmount(newFiatAmount);
    setActiveInput("fiat");
  };

  return (
    <div className="flex items-center space-x-4">
      <select
        value={crypto}
        onChange={(e) => {
          setCrypto(e.target.value);
          setActiveInput("crypto");
          calculateConversion();
        }}
        className="border p-2 bg-black text-white"
      >
        {cryptoList.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={cryptoAmount}
        onChange={handleChangeCrypto}
        className="border p-2 bg-black text-white"
      />
      <input
        type="number"
        value={fiatAmount}
        onChange={handleChangeFiat}
        className="border p-2 bg-black text-white"
      />
      <select
        value={fiat}
        onChange={(e) => {
          setFiat(e.target.value);
          setActiveInput("fiat");
          calculateConversion();
        }}
        className="border p-2 bg-black text-white"
      >
        {fiatList.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CryptoToFiatConverter;
