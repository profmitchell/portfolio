"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Play, Pause, Info, Package, FileAudio } from "lucide-react";
import { Product } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  relatedProducts: Product[];
}

export function ProductModal({ product, onClose, relatedProducts }: ProductModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/products/${product.id}/download`, {
        method: "POST",
      });
      
      if (!response.ok) throw new Error("Download failed");
      
      const data = await response.json();
      
      // Start the download
      window.location.href = data.downloadUrl;
      
      toast({
        title: "Download Started",
        description: "Your download will begin shortly.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error starting your download.",
        variant: "destructive",
      });
    }
  };

  const toggleAudioPreview = () => {
    if (product.previewAudio) {
      // Toggle audio playback logic here
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column - Media */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              {product.images?.[currentImageIndex] ? (
                <Image
                  src={product.images[currentImageIndex]}
                  alt={`${product.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Package className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative aspect-square rounded-md overflow-hidden ${
                      currentImageIndex === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Audio Preview */}
            {product.previewAudio && (
              <Button
                variant="outline"
                className="w-full"
                onClick={toggleAudioPreview}
              >
                {isPlaying ? (
                  <><Pause className="mr-2 h-4 w-4" /> Stop Preview</>
                ) : (
                  <><Play className="mr-2 h-4 w-4" /> Play Preview</>
                )}
              </Button>
            )}
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-muted-foreground mt-2">{product.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-secondary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Category</div>
                  <div>{product.category}</div>
                  <div className="text-muted-foreground">Format</div>
                  <div>{product.format}</div>
                  <div className="text-muted-foreground">Size</div>
                  <div>{product.size}</div>
                  <div className="text-muted-foreground">Version</div>
                  <div>{product.version}</div>
                  <div className="text-muted-foreground">Downloads</div>
                  <div>{product.downloads.toLocaleString()}</div>
                </div>
              </TabsContent>

              <TabsContent value="specs" className="space-y-4">
                <div className="text-sm space-y-2">
                  {product.specifications?.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>{spec}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-4">
                <div className="text-sm space-y-2">
                  {product.requirements?.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>{req}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Download Button */}
            <Button className="w-full" size="lg" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              {product.price ? `Download for $${product.price}` : "Download Free"}
            </Button>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold">Related Products</h3>
                <div className="grid gap-4">
                  {relatedProducts.map((related) => (
                    <Card
                      key={related.id}
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <CardHeader>
                        <CardTitle className="text-base">{related.title}</CardTitle>
                        <CardDescription>{related.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}