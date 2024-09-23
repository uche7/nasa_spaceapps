// src/app/page.tsx
'use client'
import PdfViewer from './PdfViewer';
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "../general/cloud-particle-bg";
import NavigationBar from "../general/navigation-bar";
const HomePage: React.FC = () => {
  const pdfUrl = 'file.pdf';  // Make sure the PDF file is publicly accessible

  return (
   
    <div className="relative min-h-screen bg-black text-white">
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <CloudParticleBg />
      </Canvas>
    </div>
      <PdfViewer fileUrl={pdfUrl} />
    </div>
  );
};

export default HomePage;
