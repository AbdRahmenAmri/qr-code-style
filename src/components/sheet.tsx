"use client";
import { useCallback, useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { Button } from "./ui/button";
import QRForm from "../form/qr.form";
import QRCodeStyling, { DrawType, FileExtension, Options } from "qr-code-styling";
import { QRCodeMode } from "../type/enum";
import { ScrollArea } from "./ui/scroll-area";
import { QrCode } from "lucide-react";
import QrPreview from "./qr-preview";
import { QrFormData } from "../schema/qr.schema";



export default function QrSheet() {    
  const [isOpen, setIsOpen] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const [options, setOptions] = useState<Options>({
    width: 300,
    height: 300,
    data: url,
    dotsOptions: {
        color: "#000000",
        type: "square"
    },
    backgroundOptions: {
        color: "#ffffff",
    },
    type: 'svg' as DrawType,
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'M'
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0,
      crossOrigin: 'anonymous',
      saveAsBlob: true,
    },
    cornersSquareOptions: {
      type: "square",
      color: "#000000",
    },
    cornersDotOptions: {
      type: "square",
      color: "#000000",
    }
  });

  const onSubmit = useCallback(async (data: QrFormData) => {
    if (!data) return;
    
    try {
        let image: string | undefined = undefined;
        if (data.image) {
          if (typeof data.image === 'string') {
            image = data.image;
          } else if (data.image.file && data.image.file instanceof File) {
            image = URL.createObjectURL(data.image.file);
          } else if (data.image.preview) {
            image = data.image.preview;
          }
        }
        
        let qrData = data.data || " ";
        if (data.mode === QRCodeMode.TEL && qrData.trim()) {
            qrData = `tel:${qrData}`;
        } else if (data.mode === QRCodeMode.EMAIL && qrData.trim()) {
            qrData = `mailto:${qrData}`;
        }

        const newOptions: Options = {
          width: data.width || 300,
          height: data.height || 300,
          type: 'svg' as DrawType,
          data: qrData,
          image: image || undefined,
          margin: data.margin ?? 10,
          qrOptions: {
            typeNumber: 0,
            mode: 'Byte',
            errorCorrectionLevel: data.errorCorrectionLevel || 'M'
          },
          imageOptions: {
            hideBackgroundDots: data.hideBackgroundDots ?? true,
            imageSize: data.imageSize ?? 0.4,
            margin: data.imageMargin ?? 0,
            crossOrigin: 'anonymous',
            saveAsBlob: true,
          },
          dotsOptions: {
            type: data.dotsOptions?.type,
            color: data.dotsOptions?.color || "#000000",
          },
          backgroundOptions: {
            color: data.backgroundOptions?.color || "#ffffff",
          },
          cornersSquareOptions: {
            type: data.cornersSquareOptions?.type,
            color: data.cornersSquareOptions?.color || "#000000",
          },
          cornersDotOptions: {
            type: data.cornersDotOptions?.type,
            color: data.cornersDotOptions?.color || "#000000",
          },
        };

        setOptions(newOptions);
    } catch (error) {
        console.error("Error updating QR code options:", error);
    }
  }, []);

  const handleDownload = useCallback((format: FileExtension ) => {
    const qrCode = new QRCodeStyling({ ...options });
    qrCode.download({
        name: "qr-code-style",
        extension: format || "png"
    });
  }, [options]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button type="button" className="fixed bottom-4 right-4 shadow-xl rounded-l-lg h-12 px-6"> 
                   <QrCode /> Create Custom QR
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col h-full gap-0 overflow-hidden border-l-0 sm:border-l">
                <div className="p-4 sm:p-6 pb-2 bg-background z-10 border-b shadow-sm shrink-0">
                    <SheetHeader className="p-0 mb-4">
                        <SheetTitle className="text-xl sm:text-2xl font-bold">Customize Your QR Code</SheetTitle>
                        <SheetDescription className="text-xs sm:text-sm">
                            Style your QR code and download it when ready.
                        </SheetDescription>
                    </SheetHeader>
                    
                    {isOpen && (
                        <div className="flex w-full justify-center bg-muted/20 rounded-lg p-2 mb-2 items-center overflow-hidden min-h-55 sm:min-h-65">
                            <QrPreview options={options} />
                        </div>
                    )}
                </div>

                <div className="flex-1 min-h-0 w-full overflow-hidden">
                    <ScrollArea className="h-full w-full">
                        <div className="p-4 sm:p-6 pt-2 pb-10">
                            <QRForm onSubmit={onSubmit} onDownload={handleDownload} />
                        </div>
                    </ScrollArea>
                </div>
            </SheetContent>
        </Sheet>
    );
};