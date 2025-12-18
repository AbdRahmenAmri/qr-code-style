import QrSheet from "@/src/components/sheet";
import { ExternalLink, Globe, QrCode } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="min-h-screen w-full bg-white relative grid place-items-center overflow-hidden">
        {/* Purple Gradient Grid Right Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      `,
            backgroundSize: "96px 64px, 96px 64px, 100% 100%",
          }}
        />
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        {/* Content Container */}
        <div className="container relative z-10 px-6 py-12 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Project Tag */}
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-black/60 backdrop-blur-sm">
            <QrCode size={14} className="text-black" />
            <span>Professional QR Generator</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6">
            Style Your <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital Signal</span>
          </h1>

          {/* Project Description */}
          <p className="text-lg md:text-xl text-black/60 mb-10 max-w-2xl leading-relaxed">
            A premium, real-time QR code generator designed for creators.
            Customize every detail—from dot shapes and corner styles to brand logos and professional gradients.
          </p>

          {/* Portfolio / Info Section */}
          <div className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-black/5 border border-black/10 backdrop-blur-md mb-12 w-full max-w-lg">
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-2">Developed By</span>
              <h2 className="text-2xl font-bold text-black">Amri AbdRahmen</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://abdrahmen.tn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all group"
              >
                <Globe size={18} className="text-black/60 group-hover:text-black" />
                <span className="font-medium text-black/80 group-hover:text-black">abdrahmen.tn</span>
                <ExternalLink size={14} className="text-black/20 group-hover:text-black/40" />
              </a>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-xs text-black/40 uppercase tracking-widest">
            High-Quality Exports • SVG • PNG • JPEG • WEBP
          </p>
        </div>

        <QrSheet />
      </div>

    </main>
  );
}
