"use client";

import { useShaderStore } from "@/lib/stores/shader-store";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { generateShaderCode } from "../utils/codeGenerator";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function CodePanel() {
  const elements = useShaderStore((state) => state.elements);
  const { toast } = useToast();

  const code = generateShaderCode(elements);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: "Shader code copied to clipboard",
    });
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-sm font-semibold">Generated Code</h2>
        <Button variant="ghost" size="sm" onClick={copyCode}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <pre className="p-4 text-sm">
          <code>{code}</code>
        </pre>
      </ScrollArea>
    </div>
  );
}