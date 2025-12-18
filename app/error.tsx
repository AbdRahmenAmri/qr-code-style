"use client";

import { useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-400/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container relative z-10 px-6 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Error Icon */}
        <div className="mb-8 p-6 rounded-3xl bg-red-50 border border-red-100 backdrop-blur-sm shadow-sm">
          <AlertTriangle size={48} className="text-red-500" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Something went wrong
        </h1>

        <p className="text-lg text-black/60 mb-10 leading-relaxed">
          We encountered an unexpected error while processing your request. 
          Don't worry, our team (Amri) has been notified.
        </p>

        {/* Error Details (Only in dev or if helpful) */}
        {process.env.NODE_ENV === 'development' && (
           <div className="w-full max-w-lg mb-10 p-4 rounded-xl bg-black/5 border border-black/10 text-left font-mono text-xs overflow-auto max-h-32 text-red-600/80">
             {error.message || "Unknown error occurred"}
           </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => reset()} 
            size="lg" 
            className="rounded-xl h-12 px-8 bg-black hover:bg-black/90 text-white shadow-lg shadow-black/10"
          >
            <RefreshCw size={18} className="mr-2" />
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl h-12 px-8 bg-white border-black/10 hover:bg-black/5 hover:border-black/20 transition-all">
            <Link href="/">
              <Home size={18} className="mr-2" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-black/30 uppercase tracking-[0.2em] font-medium">
          Amri AbdRahmen • System Error Handler
        </p>
      </div>
    </main>
  );
}

