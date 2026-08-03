"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({
  value,
  label = "Copy",
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (older browser / insecure context) — no-op.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="mt-auto pt-5 inline-flex items-center gap-1 text-blue-700 font-heading font-semibold text-sm hover:text-blue-800"
    >
      {copied ? (
        <>
          Copied
          <Check className="w-4 h-4" />
        </>
      ) : (
        <>
          {label}
          <Copy className="w-4 h-4" />
        </>
      )}
    </button>
  );
}
