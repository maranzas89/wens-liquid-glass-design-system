import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  label?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface GlassMapProps {
  markers?: MapMarker[];
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: number | string;
  className?: string;
  onMarkerClick?: (marker: MapMarker) => void;
}

export function GlassMap({
  markers = [],
  center = { lat: 37.7749, lng: -122.4194 }, // San Francisco
  zoom = 12,
  height = 400,
  className = '',
  onMarkerClick
}: GlassMapProps) {
  const [selectedMarker, setSelectedMarker] = React.useState<MapMarker | null>(null);

  // 简化的地图可视化 - 使用SVG创建装饰性地图
  const generateMapPattern = () => {
    const lines = [];
    for (let i = 0; i < 20; i++) {
      lines.push({
        x1: Math.random() * 100,
        y1: Math.random() * 100,
        x2: Math.random() * 100,
        y2: Math.random() * 100
      });
    }
    return lines;
  };

  const mapLines = React.useMemo(() => generateMapPattern(), []);

  const markerSizes = {
    sm: 8,
    md: 12,
    lg: 16
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        className="
          relative overflow-hidden
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          rounded-3xl
        "
        style={{ height }}
      >
        {/* Map Background Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Decorative map lines */}
          {mapLines.map((line, i) => (
            <line
              key={i}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.2"
            />
          ))}
        </svg>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/20 via-[var(--brand-secondary)]/10 to-[var(--brand-accent)]/20" />

        {/* Markers */}
        <div className="absolute inset-0">
          {markers.map((marker) => {
            // 简单的坐标映射（实际应用中需要使用真实的地图投影）
            const x = ((marker.lng + 180) / 360) * 100;
            const y = ((90 - marker.lat) / 180) * 100;
            const size = markerSizes[marker.size || 'md'];

            return (
              <div
                key={marker.id}
                className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group"
                style={{ 
                  left: `${x}%`, 
                  top: `${y}%`
                }}
                onClick={() => {
                  setSelectedMarker(marker);
                  onMarkerClick?.(marker);
                }}
              >
                {/* Marker Pin */}
                <div className="relative">
                  <div 
                    className="
                      backdrop-blur-md backdrop-saturate-150
                      bg-[var(--glass-bg-medium)]
                      border-2 border-white/40
                      rounded-full
                      flex items-center justify-center
                      transition-all duration-200
                      group-hover:scale-110
                      group-hover:bg-[var(--glass-bg-strong)]
                      animate-bounce
                    "
                    style={{
                      width: size * 3,
                      height: size * 3,
                      borderColor: marker.color || 'var(--brand-primary)',
                      boxShadow: `0 4px 12px ${marker.color || 'var(--brand-primary)'}`
                    }}
                  >
                    <MapPin 
                      size={size} 
                      className="text-white"
                      style={{ color: marker.color }}
                    />
                  </div>

                  {/* Pulse Effect */}
                  <div 
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ 
                      backgroundColor: marker.color || 'var(--brand-primary)',
                      animationDuration: '2s'
                    }}
                  />
                </div>

                {/* Label Tooltip */}
                {marker.label && (
                  <div className="
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    px-3 py-1.5 rounded-lg
                    backdrop-blur-md backdrop-saturate-150
                    bg-[var(--glass-bg-medium)]
                    border border-[var(--glass-border-strong)]
                    text-white text-sm whitespace-nowrap
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  ">
                    {marker.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="
            p-3 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-medium)]
            border border-[var(--glass-border-strong)]
            text-white
            hover:bg-[var(--glass-bg-strong)]
            transition-all duration-200
          ">
            <Navigation size={20} />
          </button>
          <button className="
            px-3 py-2 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-medium)]
            border border-[var(--glass-border-strong)]
            text-white text-xl
            hover:bg-[var(--glass-bg-strong)]
            transition-all duration-200
          ">
            +
          </button>
          <button className="
            px-3 py-2 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-[var(--glass-bg-medium)]
            border border-[var(--glass-border-strong)]
            text-white text-xl
            hover:bg-[var(--glass-bg-strong)]
            transition-all duration-200
          ">
            −
          </button>
        </div>

        {/* Selected Marker Info */}
        {selectedMarker && (
          <div className="
            absolute bottom-4 left-4 right-4
            backdrop-blur-xl backdrop-saturate-150
            bg-[var(--glass-bg-medium)]
            border border-[var(--glass-border-strong)]
            rounded-2xl
            p-4
          ">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-1">
                  {selectedMarker.label || 'Location'}
                </h4>
                <p className="text-[var(--text-tertiary)] text-sm">
                  Lat: {selectedMarker.lat.toFixed(4)}, Lng: {selectedMarker.lng.toFixed(4)}
                </p>
              </div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="text-[var(--text-muted)] hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 热力图组件
interface HeatmapPoint {
  lat: number;
  lng: number;
  intensity: number;
}

interface GlassHeatmapProps {
  data: HeatmapPoint[];
  height?: number | string;
  className?: string;
}

export function GlassHeatmap({
  data,
  height = 400,
  className = ''
}: GlassHeatmapProps) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="
          relative overflow-hidden
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          rounded-3xl
        "
        style={{ height }}
      >
        {/* Grid Background */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="heatgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heatgrid)" />
        </svg>

        {/* Heatmap Points */}
        <div className="absolute inset-0">
          {data.map((point, index) => {
            const x = ((point.lng + 180) / 360) * 100;
            const y = ((90 - point.lat) / 180) * 100;
            const size = 50 + (point.intensity * 100);
            const opacity = 0.2 + (point.intensity * 0.6);

            const getColor = (intensity: number) => {
              if (intensity > 0.7) return 'var(--status-error)';
              if (intensity > 0.4) return 'var(--status-warning)';
              return 'var(--status-success)';
            };

            return (
              <div
                key={index}
                className="absolute rounded-full blur-2xl"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: getColor(point.intensity),
                  opacity,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            );
          })}
        </div>

        {/* Legend */}
        <div className="
          absolute bottom-4 right-4
          backdrop-blur-xl backdrop-saturate-150
          bg-[var(--glass-bg-medium)]
          border border-[var(--glass-border-strong)]
          rounded-2xl
          p-4
        ">
          <p className="text-white text-sm mb-2">Intensity</p>
          <div className="flex items-center gap-2">
            <span className="text-[var(--text-muted)] text-xs">Low</span>
            <div className="w-32 h-3 rounded-full bg-gradient-to-r from-[var(--status-success)] via-yellow-400 to-red-400" />
            <span className="text-[var(--text-muted)] text-xs">High</span>
          </div>
        </div>
      </div>
    </div>
  );
}
