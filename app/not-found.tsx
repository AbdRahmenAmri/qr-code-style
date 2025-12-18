"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Home, MoveLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Dynamic Background Elements (Matching Home) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container relative z-10 px-6 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-8 p-4 rounded-2xl bg-black/5 border border-black/10 backdrop-blur-sm">
          <Search size={48} className="text-black/20" />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-black/5 mb-4 select-none">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Page Not Found
        </h2>

        <p className="text-lg text-black/60 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track to generating some stunning QR codes.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="rounded-xl h-12 px-8">
            <Link href="/" className="flex items-center gap-2">
              <Home size={18} />
              Return Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-xl h-12 px-8 bg-white" onClick={() => window.history.back()}>
            <MoveLeft size={18} className="mr-2" />
            Go Back
          </Button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-black/30 uppercase tracking-[0.2em] font-medium">
          Amri AbdRahmen • Portfolio Project
        </p>
      </div>
    </main>
  );
}

