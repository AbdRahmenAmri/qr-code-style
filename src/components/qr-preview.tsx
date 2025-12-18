"use client";
import { useEffect, useRef, memo } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";


const QrPreview = memo(({ options }: { options: Partial<Options> }) => {
    const ref = useRef<HTMLDivElement>(null);
    const qrCode = useRef<QRCodeStyling | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Options for the actual QR instance
            qrCode.current = new QRCodeStyling(options);
            if (ref.current) {
                qrCode.current.append(ref.current);
            }
        }
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (ref.current) ref.current.innerHTML = '';
        };
    }, [options]);

    useEffect(() => {
        if (qrCode.current) {
            qrCode.current.update(options);
        }
    }, [options]);


    return (
        <div className="flex w-full justify-center items-center overflow-hidden py-4 min-h-70">
            <div 
                className="relative bg-white shadow-xl rounded-xl flex items-center justify-center overflow-hidden border border-border/50"
                style={{ 
                    width: '260px', 
                    height: '260px' 
                }}
            >
                {/* Visual grid background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div 
                    ref={ref} 
                    className="transition-all duration-300 ease-in-out z-10"
                    style={{ 
                        transform: `scale(${Math.min(240 / Math.max(options.width || 300, options.height || 300), 1)})`,
                        transformOrigin: 'center center'
                    }} 
                />
            </div>
        </div>
    );
});

QrPreview.displayName = "QrPreview";

export default QrPreview;