import React, { useState, useRef, useEffect } from 'react';
import { Camera, Download, RotateCcw, Sparkles } from 'lucide-react';

export default function PhotoboothApp() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState('classic');
  const [selectedEffect, setSelectedEffect] = useState('none');
  const [cameraActive, setCameraActive] = useState(false);

  const frames = {
    classic: { name: 'Classic', border: '20px solid #fff', shadow: '0 0 0 5px #000' },
    polaroid: { name: 'Polaroid', border: '20px solid #fff', borderBottom: '60px solid #fff', shadow: '0 10px 30px rgba(0,0,0,0.3)' },
    elegant: { name: 'Elegant', border: '15px solid #d4af37', shadow: '0 0 0 3px #fff, 0 0 0 6px #d4af37' },
    modern: { name: 'Modern', border: '10px solid #000', shadow: 'inset 0 0 0 5px #fff' },
    vintage: { name: 'Vintage', border: '25px solid #8b7355', shadow: '0 0 0 5px #f5e6d3' },
    neon: { name: 'Neon', border: '8px solid #ff00ff', shadow: '0 0 20px #ff00ff, 0 0 40px #00ffff' }
  };

  const effects = {
    none: { name: 'Normal', filter: 'none' },
    grayscale: { name: 'Grayscale', filter: 'grayscale(100%)' },
    sepia: { name: 'Sepia', filter: 'sepia(100%)' },
    vintage: { name: 'Vintage', filter: 'sepia(50%) contrast(120%) brightness(90%)' },
    cool: { name: 'Cool', filter: 'hue-rotate(180deg) saturate(150%)' },
    warm: { name: 'Warm', filter: 'sepia(30%) saturate(150%) hue-rotate(-10deg)' },
    dramatic: { name: 'Dramatic', filter: 'contrast(150%) brightness(90%) saturate(120%)' },
    dreamy: { name: 'Dreamy', filter: 'brightness(110%) saturate(80%) blur(0.5px)' }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: 1280, height: 720 } 
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
      setCameraActive(true);
      setPhoto(null);
    } catch (err) {
      alert('Tidak dapat mengakses kamera. Pastikan Anda memberikan izin kamera.');
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.filter = effects[selectedEffect].filter;
    ctx.drawImage(video, 0, 0);

    setPhoto(canvas.toDataURL('image/png'));
  };

  const downloadPhoto = () => {
    const link = document.createElement('a');
    link.download = `photobooth-${Date.now()}.png`;
    link.href = photo;
    link.click();
  };

  const retakePhoto = () => {
    setPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-2 drop-shadow-lg">
          📸 Photobooth
        </h1>
        <p className="text-white text-center mb-8 text-lg">Ambil foto dengan efek dan frame keren!</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Kolom Kiri - Frame */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              🖼️ Pilih Frame
            </h2>
            <div className="space-y-2">
              {Object.entries(frames).map(([key, frame]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFrame(key)}
                  className={`w-full p-3 rounded-lg text-left font-medium transition-all ${
                    selectedFrame === key
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {frame.name}
                </button>
              ))}
            </div>
          </div>

          {/* Kolom Tengah - Kamera */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <div className="relative">
              {!cameraActive && !photo && (
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <button
                    onClick={startCamera}
                    className="flex flex-col items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Camera size={40} />
                    Aktifkan Kamera
                  </button>
                </div>
              )}

              {cameraActive && !photo && (
                <div>
                  <div 
                    className="relative rounded-lg overflow-hidden"
                    style={{
                      border: frames[selectedFrame].border,
                      borderBottom: frames[selectedFrame].borderBottom,
                      boxShadow: frames[selectedFrame].shadow
                    }}
                  >
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full"
                      style={{ filter: effects[selectedEffect].filter }}
                    />
                  </div>
                  <button
                    onClick={capturePhoto}
                    className="w-full mt-4 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Camera size={24} />
                    Ambil Foto
                  </button>
                </div>
              )}

              {photo && (
                <div>
                  <div 
                    className="relative rounded-lg overflow-hidden"
                    style={{
                      border: frames[selectedFrame].border,
                      borderBottom: frames[selectedFrame].borderBottom,
                      boxShadow: frames[selectedFrame].shadow
                    }}
                  >
                    <img src={photo} alt="Captured" className="w-full" />
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={retakePhoto}
                      className="flex-1 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <RotateCcw size={20} />
                      Ulang
                    </button>
                    <button
                      onClick={downloadPhoto}
                      className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      Download
                    </button>
                  </div>
                </div>
              )}
            </div>
            <canvas ref={canvasRef} className="hidden" />
          </div>

          {/* Kolom Kanan - Efek */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <Sparkles size={28} />
              Pilih Efek
            </h2>
            <div className="space-y-2">
              {Object.entries(effects).map(([key, effect]) => (
                <button
                  key={key}
                  onClick={() => setSelectedEffect(key)}
                  className={`w-full p-3 rounded-lg text-left font-medium transition-all ${
                    selectedEffect === key
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {effect.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
