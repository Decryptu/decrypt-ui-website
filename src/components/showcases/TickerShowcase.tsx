import React, { useState } from "react";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CoinTicker from "../ui/CryptoTicker";
import CopyableCode from '../../components/CopyableCode';

// Create a custom theme based on vscDarkPlus
const customStyle = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    fontFamily: 'inherit',
    borderRadius: '0.5rem',
    border: 'solid 1px rgba(255, 255, 255, 0.25)'
  }
};

const CoinTickerShowcase: React.FC = () => {
  // Dummy Base64 string - replace this with your actual Base64-encoded TypeScript code
  const base64EncodedCode =
    "aW1wb3J0IHR5cGUgUmVhY3QgZnJvbSAicmVhY3QiOwppbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gInJlYWN0IjsKaW1wb3J0IGF4aW9zIGZyb20gImF4aW9zIjsKaW1wb3J0IHsgTGluZSB9IGZyb20gInJlYWN0LWNoYXJ0anMtMiI7CmltcG9ydCB7CiAgQ2hhcnQgYXMgQ2hhcnRKUywKICBDYXRlZ29yeVNjYWxlLAogIExpbmVhclNjYWxlLAogIFBvaW50RWxlbWVudCwKICBMaW5lRWxlbWVudCwKICBUb29sdGlwLAogIHR5cGUgQ2hhcnRPcHRpb25zLAp9IGZyb20gImNoYXJ0LmpzIjsKCi8vIFJlZ2lzdGVyIHJlcXVpcmVkIGNvbXBvbmVudHMgZm9yIENoYXJ0LmpzCkNoYXJ0SlMucmVnaXN0ZXIoCiAgQ2F0ZWdvcnlTY2FsZSwKICBMaW5lYXJTY2FsZSwKICBQb2ludEVsZW1lbnQsCiAgTGluZUVsZW1lbnQsCiAgVG9vbHRpcAopOwoKaW50ZXJmYWNlIENvaW5UaWNrZXJQcm9wcyB7CiAgY3J5cHRvQ3VycmVuY3k6IHN0cmluZzsKICByZWZyZXNoSW50ZXJ2YWw6IG51bWJlcjsKICBkaXNwbGF5Rm9ybWF0OiAiVVNEIiB8ICJFVVIiOwogIGRpc3BsYXlDaGFydDogYm9vbGVhbjsKfQoKaW50ZXJmYWNlIENoYXJ0RGF0YSB7CiAgbGFiZWxzOiBzdHJpbmdbXTsKICBkYXRhc2V0czogewogICAgbGFiZWw6IHN0cmluZzsKICAgIGRhdGE6IG51bWJlcltdOwogICAgYm9yZGVyQ29sb3I6IHN0cmluZzsKICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nOwogIH1bXTsKfQoKY29uc3QgQ29pblRpY2tlcjogUmVhY3QuRkM8Q29pblRpY2tlclByb3BzPiA9ICh7CiAgY3J5cHRvQ3VycmVuY3ksCiAgcmVmcmVzaEludGVydmFsLAogIGRpc3BsYXlGb3JtYXQsCiAgZGlzcGxheUNoYXJ0ID0gZmFsc2UsCn0pID0+IHsKICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlPHN0cmluZz4oIi0tIik7CiAgY29uc3QgW21hcmtldENhcCwgc2V0TWFya2V0Q2FwXSA9IHVzZVN0YXRlPHN0cmluZz4oIi0tIik7CiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPENoYXJ0RGF0YSB8IG51bGw+KG51bGwpOwogIGNvbnN0IFtwcmljZUNoYW5nZSwgc2V0UHJpY2VDaGFuZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigwKTsKCiAgY29uc3QgZmV0Y2hEYXRhID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4gewogICAgdHJ5IHsKICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoCiAgICAgICAgYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zLyR7Y3J5cHRvQ3VycmVuY3kudG9Mb3dlckNhc2UoKX0vbWFya2V0X2NoYXJ0YCwKICAgICAgICB7CiAgICAgICAgICBwYXJhbXM6IHsKICAgICAgICAgICAgdnNfY3VycmVuY3k6IGRpc3BsYXlGb3JtYXQudG9Mb3dlckNhc2UoKSwKICAgICAgICAgICAgZGF5czogIjEiLAogICAgICAgICAgfSwKICAgICAgICB9CiAgICAgICk7CiAgICAgIGNvbnN0IHsgcHJpY2VzLCBtYXJrZXRfY2FwcyB9ID0gcmVzcG9uc2UuZGF0YTsKICAgICAgY29uc3QgZmlyc3RQcmljZSA9IHByaWNlc1swXVsxXTsKICAgICAgY29uc3QgbGFzdFByaWNlID0gcHJpY2VzW3ByaWNlcy5sZW5ndGggLSAxXVsxXTsKICAgICAgY29uc3QgY2hhbmdlID0gKChsYXN0UHJpY2UgLSBmaXJzdFByaWNlKSAvIGZpcnN0UHJpY2UpICogMTAwOwoKICAgICAgc2V0UHJpY2VDaGFuZ2UoY2hhbmdlKTsgLy8gVGhpcyBpcyBhbHdheXMgc2V0IG5vdywgc28gd2lsbCBub3QgYmUgbnVsbAogICAgICBzZXRDaGFydERhdGEoewogICAgICAgIGxhYmVsczogcHJpY2VzLm1hcCgocDogW251bWJlciwgbnVtYmVyXSkgPT4KICAgICAgICAgIG5ldyBEYXRlKHBbMF0pLnRvTG9jYWxlVGltZVN0cmluZygpCiAgICAgICAgKSwKICAgICAgICBkYXRhc2V0czogWwogICAgICAgICAgewogICAgICAgICAgICBsYWJlbDogYCR7Y3J5cHRvQ3VycmVuY3kudG9VcHBlckNhc2UoKX0gUHJpY2VgLAogICAgICAgICAgICBkYXRhOiBwcmljZXMubWFwKChwOiBbbnVtYmVyLCBudW1iZXJdKSA9PiBwWzFdKSwKICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNoYW5nZSA+PSAwID8gInJnYigyMCwgMTk5LCAxMzIpIiA6ICJyZ2IoMjM0LCA1NywgNjcpIiwKICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOgogICAgICAgICAgICAgIGNoYW5nZSA+PSAwCiAgICAgICAgICAgICAgICA/ICJyZ2JhKDIwLCAxOTksIDEzMiwgMC4xKSIKICAgICAgICAgICAgICAgIDogInJnYmEoMjM0LCA1NywgNjcsIDAuMSkiLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9KTsKICAgICAgc2V0UHJpY2UoCiAgICAgICAgbmV3IEludGwuTnVtYmVyRm9ybWF0KCJlbi1VUyIsIHsKICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogbGFzdFByaWNlIDwgMSA/IDYgOiAyLAogICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBsYXN0UHJpY2UgPCAxID8gNiA6IDIsCiAgICAgICAgfSkuZm9ybWF0KGxhc3RQcmljZSkKICAgICAgKTsKICAgICAgc2V0TWFya2V0Q2FwKAogICAgICAgIG5ldyBJbnRsLk51bWJlckZvcm1hdCgiZW4tVVMiLCB7CiAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsCiAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAKICAgICAgICB9KS5mb3JtYXQobWFya2V0X2NhcHNbbWFya2V0X2NhcHMubGVuZ3RoIC0gMV1bMV0pICAgICAgCiAgICAgICk7CiAgICB9IGNhdGNoIChlcnJvcikgewogICAgICBjb25zb2xlLmVycm9yKCJFcnJvciBmZXRjaGluZyBkYXRhOiAiLCBlcnJvcik7CiAgICAgIC8vIENvbnNpZGVyIHNldHRpbmcgYSBkZWZhdWx0IG9yIGVycm9yIHN0YXRlIGZvciBwcmljZUNoYW5nZSBoZXJlCiAgICB9CiAgfSwgW2NyeXB0b0N1cnJlbmN5LCBkaXNwbGF5Rm9ybWF0XSk7CgogIHVzZUVmZmVjdCgoKSA9PiB7CiAgICBmZXRjaERhdGEoKTsKICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZmV0Y2hEYXRhLCByZWZyZXNoSW50ZXJ2YWwgKiAxMDAwKTsKICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTsKICB9LCBbZmV0Y2hEYXRhLCByZWZyZXNoSW50ZXJ2YWxdKTsKCiAgY29uc3QgZ2V0Q3VycmVuY3lTeW1ib2wgPSAoZm9ybWF0OiBzdHJpbmcpID0+IHsKICAgIHJldHVybiBmb3JtYXQgPT09ICJVU0QiID8gIiQiIDogIuKCrCI7CiAgfTsKCiAgY29uc3Qgb3B0aW9uczogQ2hhcnRPcHRpb25zPCJsaW5lIj4gPSB7CiAgICByZXNwb25zaXZlOiB0cnVlLAogICAgZWxlbWVudHM6IHsKICAgICAgcG9pbnQ6IHsKICAgICAgICByYWRpdXM6IDAsCiAgICAgIH0sCiAgICAgIGxpbmU6IHsKICAgICAgICB0ZW5zaW9uOiAwLjMsCiAgICAgIH0sCiAgICB9LAogICAgc2NhbGVzOiB7CiAgICAgIHg6IHsKICAgICAgICBkaXNwbGF5OiBmYWxzZSwKICAgICAgfSwKICAgICAgeTogewogICAgICAgIGRpc3BsYXk6IGZhbHNlLAogICAgICB9LAogICAgfSwKICAgIHBsdWdpbnM6IHsKICAgICAgdG9vbHRpcDogewogICAgICAgIGVuYWJsZWQ6IHRydWUsCiAgICAgICAgbW9kZTogImluZGV4IiwKICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLAogICAgICAgIHBvc2l0aW9uOiAibmVhcmVzdCIsCiAgICAgIH0sCiAgICAgIGxlZ2VuZDogewogICAgICAgIGRpc3BsYXk6IGZhbHNlLAogICAgICB9LAogICAgfSwKICAgIGludGVyYWN0aW9uOiB7CiAgICAgIG1vZGU6ICJuZWFyZXN0IiwKICAgICAgaW50ZXJzZWN0OiBmYWxzZSwKICAgIH0sCiAgfTsKCiAgcmV0dXJuICgKICAgIDxkaXYgY2xhc3NOYW1lPSJiZy1ibGFjayB0ZXh0LXdoaXRlIG1heC13LTcyIGJvcmRlci13aGl0ZS8yNSBweS00IGJvcmRlciByb3VuZGVkLXhsIj4KICAgICAgPGRpdiBjbGFzc05hbWU9ImZsZXgganVzdGlmeS1iZXR3ZWVuIGZvbnQtbGlnaHQgcHgtNCI+CiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSJ0ZXh0LW1kIGNhcGl0YWxpemUiPntjcnlwdG9DdXJyZW5jeX08L3NwYW4+CiAgICAgICAgPHNwYW4KICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtbWQgYmctd2hpdGUvMTAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSAkewogICAgICAgICAgICBwcmljZUNoYW5nZSA+PSAwID8gInRleHQtZ3JlZW4iIDogInRleHQtcmVkIgogICAgICAgICAgfWB9CiAgICAgICAgPgogICAgICAgICAgeyhwcmljZUNoYW5nZSA+PSAwID8gIisiIDogIiIpICsgcHJpY2VDaGFuZ2UudG9GaXhlZCgyKX0leyIgIn0KICAgICAgICAgIHtwcmljZUNoYW5nZSA+PSAwID8gIuKGkSIgOiAi4oaTIn0KICAgICAgICA8L3NwYW4+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzTmFtZT0idGV4dC00eGwgZm9udC1zZW1pYm9sZCBteS0yIHB4LTQiPgogICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJpY2VDaGFuZ2UgPj0gMCA/ICJ0ZXh0LWdyZWVuIiA6ICJ0ZXh0LXJlZCJ9YH0+CiAgICAgICAgICB7Z2V0Q3VycmVuY3lTeW1ib2woZGlzcGxheUZvcm1hdCl9CiAgICAgICAgICB7cHJpY2V9CiAgICAgICAgPC9zcGFuPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzc05hbWU9InRleHQtd2hpdGUvNTAgdGV4dC1zbSBmb250LW1lZGl1bSBtYi0yIHB4LTQiPgogICAgICAgIE1DYXA6IHtnZXRDdXJyZW5jeVN5bWJvbChkaXNwbGF5Rm9ybWF0KX0KICAgICAgICB7bWFya2V0Q2FwfQogICAgICA8L2Rpdj4KICAgICAge2Rpc3BsYXlDaGFydCAmJiBjaGFydERhdGEgJiYgKAogICAgICAgIDxkaXY+CiAgICAgICAgICA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtjaGFydERhdGF9IGNsYXNzTmFtZT0ibWF4LWgtMzIiIC8+CiAgICAgICAgPC9kaXY+CiAgICAgICl9CiAgICA8L2Rpdj4KICApOwp9OwoKZXhwb3J0IGRlZmF1bHQgQ29pblRpY2tlcjsK";

  // Decoding the Base64 string to get the original TypeScript code
  const decodedCode = atob(base64EncodedCode);

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(decodedCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <div className="space-y-4">
      <section id="seo" className="pb-8">
        <h2 className="text-2xl font-bold text-white pb-4">Coin Ticker Component</h2>
        <p className="text-decrypt-400">
          This component provides a live display of cryptocurrency information
          including price, market cap, 24-hour change percentage, and an
          optional chart, customizable for various currencies.
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
          Use the <code>CoinTicker</code> component to render a cryptocurrency
          ticker in your application. Here are the props it accepts:
        </p>
      </section>

      <section id="example" className="pb-8">
        <h3 className="text-xl font-semibold pb-4">How to Import and Use</h3>
        <CopyableCode code="import CoinTicker from '../ui/CryptoTicker';" />
        <p className="text-decrypt-400">
          Use the <code>CoinTicker</code> component to render a cryptocurrency
          ticker in your application. Here are the props it accepts:
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
          <SyntaxHighlighter language="typescript" style={customStyle}>
            {decodedCode}
          </SyntaxHighlighter>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
            title="Copy to clipboard"
          >
            {isCopied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </section>
    </div>
  );
};

export default CoinTickerShowcase;
