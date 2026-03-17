import React, { useState, useEffect, useRef } from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassUSMap } from '../components/glass-us-map';
import { MapPin, ZoomIn, ZoomOut, RotateCcw, Maximize2, X } from 'lucide-react';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface USMapSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function USMapSection({ addToast }: USMapSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<typeof locationMarkers[0] | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  const customStyles = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
      33% { transform: translate(30px, -50px) scale(1.1) rotate(10deg); }
      66% { transform: translate(-20px, 20px) scale(0.9) rotate(-10deg); }
      100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
    }
    .animate-blob {
      animation: blob 15s infinite alternate;
    }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }

    /* 液态玻璃核心属性 */
    .glass-panel {
      background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: 0 8px 32px 0 rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2);
    }
    
    .glass-panel-hover:hover {
      background: linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%);
      border: 1px solid rgba(255,255,255,0.2);
    }

    /* SVG 地图遮罩，制造液态渐变底图 */
    .map-mask {
      -webkit-mask-image: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
      mask-image: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: center;
      mask-position: center;
      background: radial-gradient(circle at center, rgba(6, 182, 212, 0.5) 0%, rgba(59, 130, 246, 0.2) 60%, rgba(168, 85, 247, 0.3) 100%);
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }

    @keyframes pulse-marker {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.7; }
    }
    .animate-pulse-marker {
      animation: pulse-marker 2s ease-in-out infinite;
    }

    @keyframes ripple {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(2.5); opacity: 0; }
    }
    .animate-ripple {
      animation: ripple 2s ease-out infinite;
    }
  `;

  // Location markers data (major cities)
  const locationMarkers = [
    { id: 1, name: 'New York', left: '74%', top: '35%', color: 'rgba(59, 130, 246, 0.9)' },
    { id: 2, name: 'London', left: '49.5%', top: '30%', color: 'rgba(168, 85, 247, 0.9)' },
    { id: 3, name: 'Tokyo', left: '87%', top: '40%', color: 'rgba(236, 72, 153, 0.9)' },
    { id: 4, name: 'Sydney', left: '90%', top: '68%', color: 'rgba(34, 197, 94, 0.9)' },
    { id: 5, name: 'Dubai', left: '58%', top: '43%', color: 'rgba(251, 146, 60, 0.9)' },
    { id: 6, name: 'São Paulo', left: '28%', top: '60%', color: 'rgba(6, 182, 212, 0.9)' },
  ];

  // Heatmap data points
  const heatmapPoints = [
    { id: 1, left: '75%', top: '36%', intensity: 0.9 },
    { id: 2, left: '50%', top: '31%', intensity: 0.8 },
    { id: 3, left: '87%', top: '41%', intensity: 1.0 },
    { id: 4, left: '58%', top: '44%', intensity: 0.7 },
    { id: 5, left: '28%', top: '61%', intensity: 0.6 },
    { id: 6, left: '90%', top: '69%', intensity: 0.75 },
    { id: 7, left: '15%', top: '38%', intensity: 0.65 },
    { id: 8, left: '80%', top: '48%', intensity: 0.7 },
  ];

  // Map Controls
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleFullscreen = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - pan.x,
      y: e.clientY - pan.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-8">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
          Interactive Maps
        </h2>
        <p className="text-white/70 text-lg">
          Location markers and heatmap visualizations
        </p>
      </div>

      {/* World Map with Liquid Glass Effect */}
      <div className={`relative overflow-hidden rounded-3xl transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* 液态模糊背景 (Liquid Blobs) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[120px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[45%] h-[60%] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[140px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-15%] left-[25%] w-[40%] h-[40%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        {/* 中央：世界地图容器 */}
        <div
          className="relative z-10 w-full glass-panel rounded-3xl flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden"
        >
          
          {/* 顶层光晕 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none"></div>

          {/* Zoom Controls */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <button
              onClick={handleZoomIn}
              className="
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                hover:bg-white/20
                transition-all duration-200
                flex items-center justify-center
                text-white
              "
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={handleZoomOut}
              className="
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-[var(--glass-bg-light)]
                border border-[var(--glass-border)]
                hover:bg-white/20
                transition-all duration-200
                flex items-center justify-center
                text-white
              "
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={handleReset}
              className="
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-cyan-500/20
                border border-cyan-400/40
                hover:bg-cyan-500/30
                transition-all duration-200
                flex items-center justify-center
                text-cyan-300
              "
              title="Reset View"
            >
              <RotateCcw size={18} />
            </button>
            <div className="h-px bg-[var(--glass-bg-light)] my-1"></div>
            <button
              onClick={handleFullscreen}
              className="
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-emerald-500/20
                border border-emerald-400/40
                hover:bg-emerald-500/30
                transition-all duration-200
                flex items-center justify-center
                text-emerald-300
              "
              title="Fullscreen"
            >
              <Maximize2 size={20} />
            </button>
          </div>

          {/* 地图核心包裹区：强制 2:1 比例以对齐经纬度 */}
          <div 
            ref={mapRef}
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: '2 / 1' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className={`relative w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {/* 底图兜底 (防止 mask 跨域失效) */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                alt="Map Fallback" 
                className="absolute inset-0 w-full h-full opacity-10 invert pointer-events-none"
              />
              
              {/* 绚丽的液态遮罩地图 */}
              <div className="absolute inset-0 map-mask opacity-60"></div>

              {/* Location Markers */}
              {locationMarkers.map((marker) => (
                <div
                  key={marker.id}
                  className="absolute cursor-pointer group"
                  style={{ left: marker.left, top: marker.top, transform: 'translate(-50%, -50%)' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToast('info', `Location: ${marker.name}`);
                    setSelectedMarker(marker);
                  }}
                >
                  {/* Ripple effect */}
                  <div 
                    className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple"
                    style={{ backgroundColor: marker.color }}
                  ></div>
                  
                  {/* Marker pin */}
                  <div 
                    className="relative w-8 h-8 flex items-center justify-center animate-pulse-marker"
                  >
                    <MapPin 
                      size={28} 
                      className="drop-shadow-lg"
                      style={{ color: marker.color }}
                      fill={marker.color}
                    />
                  </div>

                  {/* Tooltip on hover */}
                  <div className="
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    px-3 py-1.5 rounded-lg
                    bg-black/80 backdrop-blur-sm
                    border border-[var(--glass-border)]
                    text-white text-sm whitespace-nowrap
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  ">
                    {marker.name}
                  </div>
                </div>
              ))}

              {/* Heatmap Points */}
              {heatmapPoints.map((point) => {
                const size = 80 + (point.intensity * 60); // 80-140px based on intensity
                const opacity = 0.3 + (point.intensity * 0.4); // 0.3-0.7 opacity
                const color = point.intensity > 0.8 
                  ? `rgba(239, 68, 68, ${opacity})` // Red for high intensity
                  : point.intensity > 0.6 
                  ? `rgba(251, 146, 60, ${opacity})` // Orange for medium
                  : `rgba(234, 179, 8, ${opacity})`; // Yellow for low

                return (
                  <div
                    key={point.id}
                    className="absolute rounded-full blur-lg md:blur-2xl mix-blend-screen pointer-events-none md:animate-pulse"
                    style={{
                      left: point.left,
                      top: point.top,
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: color,
                      transform: 'translate(-50%, -50%)',
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Selected Location Info Card */}
      {selectedMarker && (
        <div className="relative z-10">
          <div className="
            backdrop-blur-xl backdrop-saturate-150
            bg-[var(--glass-bg-light)]
            border border-[var(--glass-border)]
            rounded-2xl
            p-6
            shadow-2xl
            transition-all duration-300
            animate-float
          ">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: selectedMarker.color }}
                  />
                  <h3 className="text-white text-xl">
                    {selectedMarker.name}
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white/70 text-sm">
                    Position: {selectedMarker.left} / {selectedMarker.top}
                  </p>
                  <p className="text-white/60 text-sm">
                    Click to view location details
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="
                  text-white/60 hover:text-white 
                  transition-colors
                  p-2 rounded-lg
                  hover:bg-[var(--glass-bg-light)]
                "
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-8">
          {/* 液态模糊背景 (Liquid Blobs) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[120px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[45%] h-[60%] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[140px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-15%] left-[25%] w-[40%] h-[40%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[40px] md:blur-[100px] animate-blob animation-delay-4000"></div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleCloseFullscreen}
            className="
              absolute top-6 right-6 z-50
              w-12 h-12 rounded-full
              backdrop-blur-xl bg-[var(--glass-bg-light)]
              border border-[var(--glass-border)]
              hover:bg-white/20
              transition-all duration-200
              flex items-center justify-center
              text-white
            "
            title="Close"
          >
            <X size={24} />
          </button>

          {/* Map Container */}
          <div
            className="relative w-full h-full max-w-[95vw] max-h-[90vh] glass-panel rounded-3xl flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            
            {/* 顶层光晕 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none"></div>

            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-[var(--glass-bg-light)]
                  border border-[var(--glass-border)]
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                "
                title="Zoom In"
              >
                <ZoomIn size={24} />
              </button>
              <button
                onClick={handleZoomOut}
                className="
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-[var(--glass-bg-light)]
                  border border-[var(--glass-border)]
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                "
                title="Zoom Out"
              >
                <ZoomOut size={24} />
              </button>
              <button
                onClick={handleReset}
                className="
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-[var(--glass-bg-light)]
                  border border-[var(--glass-border)]
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                "
                title="Reset View"
              >
                <RotateCcw size={20} />
              </button>
            </div>

            {/* 地图核心包裹区 */}
            <div 
              className="relative w-full h-full overflow-hidden rounded-2xl"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className={`relative w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
              >
                {/* 底图兜底 (防止 mask 跨域失效) */}
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                  alt="Map Fallback" 
                  className="absolute inset-0 w-full h-full opacity-10 invert pointer-events-none object-contain"
                />
                
                {/* 绚丽的液态遮罩地图 */}
                <div className="absolute inset-0 map-mask opacity-60" style={{ aspectRatio: '2 / 1', margin: 'auto' }}></div>

                {/* Location Markers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full" style={{ aspectRatio: '2 / 1' }}>
                    {locationMarkers.map((marker) => (
                      <div
                        key={marker.id}
                        className="absolute cursor-pointer group"
                        style={{ left: marker.left, top: marker.top, transform: 'translate(-50%, -50%)' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          addToast('info', `Location: ${marker.name}`);
                          setSelectedMarker(marker);
                        }}
                      >
                        {/* Ripple effect */}
                        <div 
                          className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple"
                          style={{ backgroundColor: marker.color }}
                        ></div>
                        
                        {/* Marker pin */}
                        <div 
                          className="relative w-8 h-8 flex items-center justify-center animate-pulse-marker"
                        >
                          <MapPin 
                            size={28} 
                            className="drop-shadow-lg"
                            style={{ color: marker.color }}
                            fill={marker.color}
                          />
                        </div>

                        {/* Tooltip on hover */}
                        <div className="
                          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                          px-3 py-1.5 rounded-lg
                          bg-black/80 backdrop-blur-sm
                          border border-[var(--glass-border)]
                          text-white text-sm whitespace-nowrap
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-200
                          pointer-events-none
                        ">
                          {marker.name}
                        </div>
                      </div>
                    ))}

                    {/* Heatmap Points */}
                    {heatmapPoints.map((point) => {
                      const size = 80 + (point.intensity * 60);
                      const opacity = 0.3 + (point.intensity * 0.4);
                      const color = point.intensity > 0.8 
                        ? `rgba(239, 68, 68, ${opacity})`
                        : point.intensity > 0.6 
                        ? `rgba(251, 146, 60, ${opacity})`
                        : `rgba(234, 179, 8, ${opacity})`;

                      return (
                        <div
                          key={point.id}
                          className="absolute rounded-full blur-lg md:blur-2xl mix-blend-screen pointer-events-none md:animate-pulse"
                          style={{
                            left: point.left,
                            top: point.top,
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor: color,
                            transform: 'translate(-50%, -50%)',
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}