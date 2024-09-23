// src/components/PdfViewer.tsx
'use client'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Canvas } from '@react-three/fiber';
import CloudParticleBg from '../general/cloud-particle-bg';
import NavigationBar from '../general/navigation-bar';
interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {


  return (

    <div className="relative min-h-screen bg-black text-white">
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <CloudParticleBg />
      </Canvas>
    </div>

    {/* Main contents */}
    <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
      <NavigationBar />
   
      {/* Make sure the worker URL matches the version */}
      <div className="p-4 bg-black">
      <Worker workerUrl="/pdf.worker.min.js"  >
        <Viewer fileUrl={fileUrl}   />
      </Worker>
      </div>
    </div>
    </div>
  );
};

export default PdfViewer;
