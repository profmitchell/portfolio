"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Download } from "lucide-react";

interface DownloadFormProps {
  resourceId: string;
  resourceName: string;
  driveUrl: string;
}

export function DownloadForm({ resourceId, resourceName, driveUrl }: DownloadFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/downloads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          resourceId,
        }),
      });

      if (!response.ok) {
        throw new Error("Download request failed");
      }

      // Open the drive URL in a new tab
      window.open(driveUrl, "_blank");
      
      toast({
        title: "Success!",
        description: `Thank you for downloading ${resourceName}. Your download will begin shortly.`,
      });
      
      setFormData({ name: "", email: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your download request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
        />
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        <Download className="mr-2 h-4 w-4" />
        {isLoading ? "Processing..." : "Download Now"}
      </Button>
    </form>
  );
}