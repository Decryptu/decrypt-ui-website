import React, { useState } from "react";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";

interface CopyableCodeProps {
  code: string;
}

const CopyableCode: React.FC<CopyableCodeProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-sm font-mono p-1 rounded-md"
      title="Copy to clipboard"
    >
      <code>{code}</code>
      {isCopied ? (
        <CheckIcon className="w-4 h-4 text-green-500" />
      ) : (
        <CopyIcon className="w-4 h-4 text-gray-500" />
      )}
    </button>
  );
};

export default CopyableCode;
