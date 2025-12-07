"use client";

import type React from "react";
import { useCallback, useEffect, useState } from "react";

type Props = {
	cryptoList: string[];
	fiatList: string[];
};

const CryptoToFiatConverter: React.FC<Props> = ({ cryptoList, fiatList }) => {
	const [rates, setRates] = useState<Record<string, Record<string, number>>>({});
	const [crypto, setCrypto] = useState<string>(cryptoList[0]);
	const [fiat, setFiat] = useState<string>(fiatList[0]);
	const [cryptoAmount, setCryptoAmount] = useState<string>("1");
	const [fiatAmount, setFiatAmount] = useState<string>("0");
	const [activeInput, setActiveInput] = useState<"crypto" | "fiat">("crypto");

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

	const formatAmount = useCallback((amount: number, threshold = 1) => {
		return amount < threshold ? amount.toFixed(8) : amount.toFixed(2);
	}, []);

	const calculateConversion = useCallback(() => {
		if (rates[crypto]?.[fiat]) {
			const rate = rates[crypto][fiat];
			if (activeInput === "crypto") {
				const result = Number.parseFloat(cryptoAmount) * rate;
				setFiatAmount(formatAmount(result));
			} else if (activeInput === "fiat") {
				const result = Number.parseFloat(fiatAmount) / rate;
				setCryptoAmount(formatAmount(result));
			}
		}
	}, [crypto, fiat, cryptoAmount, fiatAmount, activeInput, rates, formatAmount]);

	useEffect(() => {
		calculateConversion();
	}, [calculateConversion]);

	const handleChangeCrypto = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCryptoAmount(event.target.value);
		setActiveInput("crypto");
	};

	const handleChangeFiat = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFiatAmount(event.target.value);
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
				className="border p2 bg-black text-white"
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
