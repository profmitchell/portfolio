import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Resource } from "@/lib/types";
import Image from "next/image";
import { DownloadForm } from "@/components/DownloadForm";
import { Info } from "lucide-react";

interface ResourceDialogProps {
  resource: Resource;
  isOpen: boolean;
  onClose: () => void;
  relatedResources?: Resource[];
}

export function ResourceDialog({
  resource,
  isOpen,
  onClose,
  relatedResources,
}: ResourceDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{resource.title}</DialogTitle>
          <DialogDescription>{resource.description}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-8 py-4">
          {resource.imageUrl && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={resource.imageUrl}
                alt={resource.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="grid gap-3">
                {resource.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <div className="flex flex-wrap gap-3">
                {resource.formats?.map((format, i) => (
                  <Badge key={i} variant="secondary">{format}</Badge>
                ))}
                {resource.daw && <Badge variant="secondary">{resource.daw}</Badge>}
                {resource.genre && <Badge variant="secondary">{resource.genre}</Badge>}
                {resource.category && <Badge variant="secondary">{resource.category}</Badge>}
                <Badge variant="secondary">{resource.size}</Badge>
                {resource.version && <Badge variant="secondary">v{resource.version}</Badge>}
              </div>
            </div>

            {resource.requirements && (
              <div>
                <h3 className="text-lg font-semibold mb-4">System Requirements</h3>
                <ul className="grid gap-3">
                  {resource.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resource.driveUrl && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Download</h3>
                <DownloadForm
                  resourceId={resource.id}
                  resourceName={resource.title}
                  driveUrl={resource.driveUrl}
                />
              </div>
            )}
          </div>

          {relatedResources && relatedResources.length > 0 && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedResources.map((related) => (
                  <div
                    key={related.id}
                    className="rounded-lg border p-4 hover:bg-accent cursor-pointer hover-lift"
                    onClick={() => {
                      onClose();
                      // Add logic to open the related resource
                    }}
                  >
                    <h4 className="font-medium">{related.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {related.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}