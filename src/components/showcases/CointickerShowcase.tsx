import type React from "react";
import { decodeBase64 } from "../../utils/base64";
import CopyableCode from "../CopyableCode";
import CoinTicker from "../ui/CoinTicker";

const CoinTickerShowcase: React.FC = () => {
	// Create the example code
	const exampleUsage = `
	import CoinTicker from "../ui/CoinTicker";
	function MyApp() {
		return (
			<CoinTicker
				cryptoCurrency="bitcoin"
				refreshInterval={10000}
				displayFormat="USD"
				displayChart={true}
			/>
		);
	}
	`;
	// Base64 string - replace this with the actual Base64-encoded TypeScript code
	const base64EncodedCode =
		"aW1wb3J0IGF4aW9zIGZyb20gImF4aW9zIjsKaW1wb3J0IHsKCUNhdGVnb3J5U2NhbGUsCglDaGFydCBhcyBDaGFydEpTLAoJdHlwZSBDaGFydE9wdGlvbnMsCglMaW5lRWxlbWVudCwKCUxpbmVhclNjYWxlLAoJUG9pbnRFbGVtZW50LAoJVG9vbHRpcCwKfSBmcm9tICJjaGFydC5qcyI7CmltcG9ydCB0eXBlIFJlYWN0IGZyb20gInJlYWN0IjsKaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICJyZWFjdCI7CmltcG9ydCB7IExpbmUgfSBmcm9tICJyZWFjdC1jaGFydGpzLTIiOwoKLy8gUmVnaXN0ZXIgcmVxdWlyZWQgY29tcG9uZW50cyBmb3IgQ2hhcnQuanMKQ2hhcnRKUy5yZWdpc3RlcigKCUNhdGVnb3J5U2NhbGUsCglMaW5lYXJTY2FsZSwKCVBvaW50RWxlbWVudCwKCUxpbmVFbGVtZW50LAoJVG9vbHRpcCwKKTsKCmludGVyZmFjZSBDb2luVGlja2VyUHJvcHMgewoJY3J5cHRvQ3VycmVuY3k6IHN0cmluZzsKCXJlZnJlc2hJbnRlcnZhbDogbnVtYmVyOwoJZGlzcGxheUZvcm1hdDogIlVTRCIgfCAiRVVSIjsKCWRpc3BsYXlDaGFydDogYm9vbGVhbjsKfQoKaW50ZXJmYWNlIENoYXJ0RGF0YSB7CglsYWJlbHM6IHN0cmluZ1tdOwoJZGF0YXNldHM6IHsKCQlsYWJlbDogc3RyaW5nOwoJCWRhdGE6IG51bWJlcltdOwoJCWJvcmRlckNvbG9yOiBzdHJpbmc7CgkJYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7Cgl9W107Cn0KCmNvbnN0IENvaW5UaWNrZXI6IFJlYWN0LkZDPENvaW5UaWNrZXJQcm9wcz4gPSAoewoJY3J5cHRvQ3VycmVuY3ksCglyZWZyZXNoSW50ZXJ2YWwsCglkaXNwbGF5Rm9ybWF0LAoJZGlzcGxheUNoYXJ0ID0gZmFsc2UsCn0pID0+IHsKCWNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGU8c3RyaW5nPigiLS0iKTsKCWNvbnN0IFttYXJrZXRDYXAsIHNldE1hcmtldENhcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCItLSIpOwoJY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPENoYXJ0RGF0YSB8IG51bGw+KG51bGwpOwoJY29uc3QgW3ByaWNlQ2hhbmdlLCBzZXRQcmljZUNoYW5nZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApOwoKCWNvbnN0IGZldGNoRGF0YSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHsKCQl0cnkgewoJCQljb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgKCQkJCWBodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy8ke2NyeXB0b0N1cnJlbmN5LnRvTG93ZXJDYXNlKCl9L21hcmtldF9jaGFydGAsCgkJCQl7CgkJCQkJcGFyYW1zOiB7CgkJCQkJCXZzX2N1cnJlbmN5OiBkaXNwbGF5Rm9ybWF0LnRvTG93ZXJDYXNlKCksCgkJCQkJCWRheXM6ICIxIiwKCQkJCQl9LAoJCQkJfSwKCQkJKTsKCQkJY29uc3QgeyBwcmljZXMsIG1hcmtldF9jYXBzIH0gPSByZXNwb25zZS5kYXRhOwoJCQljb25zdCBmaXJzdFByaWNlID0gcHJpY2VzWzBdWzFdOwoJCQljb25zdCBsYXN0UHJpY2UgPSBwcmljZXNbcHJpY2VzLmxlbmd0aCAtIDFdWzFdOwoJCQljb25zdCBjaGFuZ2UgPSAoKGxhc3RQcmljZSAtIGZpcnN0UHJpY2UpIC8gZmlyc3RQcmljZSkgKiAxMDA7CgoJCQlzZXRQcmljZUNoYW5nZShjaGFuZ2UpOyAvLyBUaGlzIGlzIGFsd2F5cyBzZXQgbm93LCBzbyB3aWxsIG5vdCBiZSBudWxsCgkJCXNldENoYXJ0RGF0YSh7CgkJCQlsYWJlbHM6IHByaWNlcy5tYXAoKHA6IFtudW1iZXIsIG51bWJlcl0pID0+CgkJCQkJbmV3IERhdGUocFswXSkudG9Mb2NhbGVUaW1lU3RyaW5nKCksCgkJCQkpLAoJCQkJZGF0YXNldHM6IFsKCQkJCQl7CgkJCQkJCWxhYmVsOiBgJHtjcnlwdG9DdXJyZW5jeS50b1VwcGVyQ2FzZSgpfSBQcmljZWAsCgkJCQkJCWRhdGE6IHByaWNlcy5tYXAoKHA6IFtudW1iZXIsIG51bWJlcl0pID0+IHBbMV0pLAoJCQkJCQlib3JkZXJDb2xvcjogY2hhbmdlID49IDAgPyAicmdiKDIwLCAxOTksIDEzMikiIDogInJnYigyMzQsIDU3LCA2NykiLAoJCQkJCQliYWNrZ3JvdW5kQ29sb3I6CgkJCQkJCQljaGFuZ2UgPj0gMCA/ICJyZ2JhKDIwLCAxOTksIDEzMiwgMC4xKSIgOiAicmdiYSgyMzQsIDU3LCA2NywgMC4xKSIsCgkJCQkJfSwKCQkJCV0sCgkJCX0pOwoJCQlzZXRQcmljZSgKCQkJCW5ldyBJbnRsLk51bWJlckZvcm1hdCgiZW4tVVMiLCB7CgkJCQkJbWluaW11bUZyYWN0aW9uRGlnaXRzOiBsYXN0UHJpY2UgPCAxID8gNiA6IDIsCgkJCQkJbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBsYXN0UHJpY2UgPCAxID8gNiA6IDIsCgkJCQl9KS5mb3JtYXQobGFzdFByaWNlKSwKCQkJKTsKCQkJc2V0TWFya2V0Q2FwKAoJCQkJbmV3IEludGwuTnVtYmVyRm9ybWF0KCJlbi1VUyIsIHsKCQkJCQltaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsCgkJCQkJbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLAoJCQkJfSkuZm9ybWF0KG1hcmtldF9jYXBzW21hcmtldF9jYXBzLmxlbmd0aCAtIDFdWzFdKSwKCQkJKTsKCQl9IGNhdGNoIChlcnJvcikgewoJCQljb25zb2xlLmVycm9yKCJFcnJvciBmZXRjaGluZyBkYXRhOiAiLCBlcnJvcik7CgkJCS8vIENvbnNpZGVyIHNldHRpbmcgYSBkZWZhdWx0IG9yIGVycm9yIHN0YXRlIGZvciBwcmljZUNoYW5nZSBoZXJlCgkJfQoJfSwgW2NyeXB0b0N1cnJlbmN5LCBkaXNwbGF5Rm9ybWF0XSk7CgoJdXNlRWZmZWN0KCgpID0+IHsKCQlmZXRjaERhdGEoKTsKCQljb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZldGNoRGF0YSwgcmVmcmVzaEludGVydmFsICogMTAwMCk7CgkJcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOwoJfSwgW2ZldGNoRGF0YSwgcmVmcmVzaEludGVydmFsXSk7CgoJY29uc3QgZ2V0Q3VycmVuY3lTeW1ib2wgPSAoZm9ybWF0OiBzdHJpbmcpID0+IHsKCQlyZXR1cm4gZm9ybWF0ID09PSAiVVNEIiA/ICIkIiA6ICLigqwiOwoJfTsKCgljb25zdCBvcHRpb25zOiBDaGFydE9wdGlvbnM8ImxpbmUiPiA9IHsKCQlyZXNwb25zaXZlOiB0cnVlLAoJCWVsZW1lbnRzOiB7CgkJCXBvaW50OiB7CgkJCQlyYWRpdXM6IDAsCgkJCX0sCgkJCWxpbmU6IHsKCQkJCXRlbnNpb246IDAuMywKCQkJfSwKCQl9LAoJCXNjYWxlczogewoJCQl4OiB7CgkJCQlkaXNwbGF5OiBmYWxzZSwKCQkJfSwKCQkJeTogewoJCQkJZGlzcGxheTogZmFsc2UsCgkJCX0sCgkJfSwKCQlwbHVnaW5zOiB7CgkJCXRvb2x0aXA6IHsKCQkJCWVuYWJsZWQ6IHRydWUsCgkJCQltb2RlOiAiaW5kZXgiLAoJCQkJaW50ZXJzZWN0OiBmYWxzZSwKCQkJCXBvc2l0aW9uOiAibmVhcmVzdCIsCgkJCX0sCgkJCWxlZ2VuZDogewoJCQkJZGlzcGxheTogZmFsc2UsCgkJCX0sCgkJfSwKCQlpbnRlcmFjdGlvbjogewoJCQltb2RlOiAibmVhcmVzdCIsCgkJCWludGVyc2VjdDogZmFsc2UsCgkJfSwKCX07CgoJcmV0dXJuICgKCQk8ZGl2IGNsYXNzTmFtZT0iYmctYmxhY2sgdGV4dC13aGl0ZSBtYXgtdy03MiBib3JkZXItd2hpdGUvMjUgcHktNCBib3JkZXIgcm91bmRlZC14bCI+CgkJCTxkaXYgY2xhc3NOYW1lPSJmbGV4IGp1c3RpZnktYmV0d2VlbiBmb250LWxpZ2h0IHB4LTQgaXRlbXMtY2VudGVyIj4KCQkJCTxzcGFuIGNsYXNzTmFtZT0idGV4dC1tZCBjYXBpdGFsaXplIj57Y3J5cHRvQ3VycmVuY3l9PC9zcGFuPgoJCQkJPHNwYW4KCQkJCQljbGFzc05hbWU9e2B0ZXh0LW1kIGJnLXdoaXRlLzEwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgJHsKCQkJCQkJcHJpY2VDaGFuZ2UgPj0gMCA/ICJ0ZXh0LWdyZWVuIiA6ICJ0ZXh0LXJlZCIKCQkJCQl9YH0KCQkJCT4KCQkJCQl7KHByaWNlQ2hhbmdlID49IDAgPyAiKyIgOiAiIikgKyBwcmljZUNoYW5nZS50b0ZpeGVkKDIpfSV7IiAifQoJCQkJCXtwcmljZUNoYW5nZSA+PSAwID8gIuKGkSIgOiAi4oaTIn0KCQkJCTwvc3Bhbj4KCQkJPC9kaXY+CgkJCTxkaXYgY2xhc3NOYW1lPSJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIG15LTIgcHgtNCI+CgkJCQk8c3BhbiBjbGFzc05hbWU9e2Ake3ByaWNlQ2hhbmdlID49IDAgPyAidGV4dC1ncmVlbiIgOiAidGV4dC1yZWQifWB9PgoJCQkJCXtnZXRDdXJyZW5jeVN5bWJvbChkaXNwbGF5Rm9ybWF0KX0KCQkJCQl7cHJpY2V9CgkJCQk8L3NwYW4+CgkJCTwvZGl2PgoJCQk8ZGl2IGNsYXNzTmFtZT0idGV4dC13aGl0ZS81MCB0ZXh0LXNtIGZvbnQtbGlnaHQgbWItMiBweC00Ij4KCQkJCU1DYXA6IHtnZXRDdXJyZW5jeVN5bWJvbChkaXNwbGF5Rm9ybWF0KX0KCQkJCXttYXJrZXRDYXB9CgkJCTwvZGl2PgoJCQl7ZGlzcGxheUNoYXJ0ICYmIGNoYXJ0RGF0YSAmJiAoCgkJCQk8ZGl2PgoJCQkJCTxMaW5lIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2NoYXJ0RGF0YX0gY2xhc3NOYW1lPSJtYXgtaC0zMiIgLz4KCQkJCTwvZGl2PgoJCQkpfQoJCTwvZGl2PgoJKTsKfTsKCmV4cG9ydCBkZWZhdWx0IENvaW5UaWNrZXI7Cg==";

	// Decoding the Base64 string to get the original TypeScript code
	const decodedCode = decodeBase64(base64EncodedCode);

	return (
		<div className="space-y-4">
			<section id="seo" className="pb-8">
				<h2 className="text-2xl font-bold text-white pb-4">
					Coin Ticker Component
				</h2>
				<p className="text-decrypt-400">
					This component provides a live display of cryptocurrency information
					including price, market cap, 24-hour change percentage, and an optional
					chart, customizable for various currencies.
				</p>
			</section>

			<section id="visual" className="pb-8">
				<h3 className="text-xl font-semibold pb-4">Showcase</h3>
				<CoinTicker
					cryptoCurrency="bitcoin"
					refreshInterval={10000}
					displayFormat="USD"
					displayChart={true}
				/>
			</section>

			<section id="installation" className="pb-8">
				<h3 className="text-xl font-semibold pb-4">How to Import and Use</h3>
				<CopyableCode code="npm install @decrypt-ui/cryptoticker" />
				<p className="text-decrypt-400">
					Use the <code>CoinTicker</code> component to render a cryptocurrency ticker
					in your application. Here are the props it accepts:
				</p>
			</section>

			<section id="example" className="pb-8">
				<h3 className="text-xl font-semibold pb-4">How to Import and Use</h3>
				<CopyableCode code={exampleUsage} language="typescript" />
				<p className="text-decrypt-400">
					Use the <code>CoinTicker</code> component to render a cryptocurrency ticker
					in your application. Here are the props it accepts:
				</p>
				<div className="overflow-x-auto pt-4">
					<table className="min-w-full divide-y divide-white/25 border rounded-xl border-white/25">
						<thead className="bg-decrypt-800">
							<tr>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Property
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Type
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Description
								</th>
							</tr>
						</thead>
						<tbody className="bg-white/10 divide-y divide-white/25">
							<tr>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									cryptoCurrency
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									string
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									Valid CoinGecko ID of the cryptocurrency
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									refreshInterval
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									number
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									Interval in milliseconds to refresh the data
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									displayFormat
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									"USD" | "EUR"
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									Currency format for displaying the prices
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									displayChart
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									boolean
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-white">
									Whether to display the chart component
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section id="source-code" className="pb-8">
				<h3 className="text-xl font-semibold pb-4">Source Code</h3>
				<div className="relative overflow-x-auto">
					<CopyableCode code={decodedCode} language="typescript" />
				</div>
			</section>
		</div>
	);
};

export default CoinTickerShowcase;
