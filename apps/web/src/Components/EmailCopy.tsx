import { useState } from "react";
import { ContentCopy, Check } from "@mui/icons-material";

interface EmailCopyProps {
  email: string;
  displayText?: string;
  className?: string;
}

function EmailCopy({ email, displayText, className = "" }: EmailCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`items-center gap-2 py-2 px-3 rounded-lg bg-verde-escuro text-verde-claro hover:bg-opacity-90 transition-all duration-200 ${className}`}
      title={`Copiar email: ${email}`}>
      <span>{displayText || email}</span>
      {copied ? (
        <Check className="text-green-400 ml-2" />
      ) : (
        <ContentCopy className="ml-2" />
      )}
    </button>
  );
}

export default EmailCopy;
