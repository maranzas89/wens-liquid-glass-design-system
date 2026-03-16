import React from 'react';

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface MultiSeriesData {
  label: string;
  values: { [key: string]: number };
}

interface GlassBarChartProps {
  data: ChartData[];
  height?: number;
  className?: string;
  showValues?: boolean;
  showGrid?: boolean;
}

export function GlassBarChart({ 
  data, 
  height = 300, 
  className = '',
  showValues = true,
  showGrid = true
}: GlassBarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      p-6
      ${className}
    `}>
      <div className="relative" style={{ minHeight: `${height + 40}px` }}>
        {showGrid && (
          <div className="absolute inset-x-0 flex flex-col justify-between" style={{ height: `${height}px` }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-px bg-white/5" />
            ))}
          </div>
        )}
        
        <div className="flex items-end gap-4 px-2" style={{ height: `${height}px` }}>
          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * 100;
            const color = item.color || 'rgba(103, 126, 234, 0.8)';
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                {showValues && (
                  <span className="text-white text-sm font-medium mb-1">
                    {item.value}
                  </span>
                )}
                <div className="w-full flex items-end" style={{ height: `${height - 30}px` }}>
                  <div 
                    className="w-full rounded-t-xl transition-all duration-500 hover:opacity-80 relative overflow-hidden group cursor-pointer"
                    style={{ 
                      height: `${barHeight}%`,
                      background: `linear-gradient(to top, ${color}, ${color}dd)`,
                      backdropFilter: 'blur(8px)',
                      boxShadow: `0 4px 16px ${color}40`,
                      minHeight: '4px'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Labels */}
        <div className="flex gap-4 mt-3 px-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 text-center">
              <span className="text-white/70 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface GlassLineChartProps {
  data: ChartData[];
  height?: number;
  className?: string;
  smooth?: boolean;
  showGrid?: boolean;
  showDots?: boolean;
}

export function GlassLineChart({ 
  data, 
  height = 300, 
  className = '',
  smooth = true,
  showGrid = true,
  showDots = true
}: GlassLineChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;
  
  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((item.value - minValue) / range) * 90 - 5;
    return { x, y, value: item.value, label: item.label };
  });

  const pathD = smooth
    ? points.map((point, i) => {
        if (i === 0) return `M ${point.x} ${point.y}`;
        const prevPoint = points[i - 1];
        const cpX = (prevPoint.x + point.x) / 2;
        return `Q ${cpX} ${prevPoint.y}, ${point.x} ${point.y}`;
      }).join(' ')
    : points.map((point, i) => 
        i === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
      ).join(' ');

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      p-6
      ${className}
    `}>
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ height: `${height}px`, width: '100%' }}
        className="mb-4"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(103, 126, 234, 0.4)" />
            <stop offset="100%" stopColor="rgba(103, 126, 234, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {showGrid && (
          <g opacity="0.1">
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 25}
                x2="100"
                y2={i * 25}
                stroke="white"
                strokeWidth="0.2"
              />
            ))}
          </g>
        )}
        
        <path
          d={`${pathD} L 100 100 L 0 100 Z`}
          fill="url(#lineGradient)"
        />
        
        <path
          d={pathD}
          fill="none"
          stroke="rgba(103, 126, 234, 1)"
          strokeWidth="0.8"
          filter="url(#glow)"
        />
        
        {showDots && points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="1.5"
              fill="white"
              className="transition-all"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="0.8"
              fill="rgba(103, 126, 234, 1)"
            />
          </g>
        ))}
      </svg>
      
      <div className="flex justify-between px-2">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-white/70 text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 新增：面积波浪图
interface GlassAreaChartProps {
  data: MultiSeriesData[];
  height?: number;
  className?: string;
  smooth?: boolean;
  stacked?: boolean;
}

export function GlassAreaChart({ 
  data, 
  height = 300, 
  className = '',
  smooth = true,
  stacked = false
}: GlassAreaChartProps) {
  const series = Object.keys(data[0]?.values || {});
  const colors = [
    { stroke: 'rgba(103, 126, 234, 1)', fill: 'rgba(103, 126, 234, 0.3)' },
    { stroke: 'rgba(250, 112, 154, 1)', fill: 'rgba(250, 112, 154, 0.3)' },
    { stroke: 'rgba(67, 233, 123, 1)', fill: 'rgba(67, 233, 123, 0.3)' }
  ];

  const getMaxValue = () => {
    if (stacked) {
      return Math.max(...data.map(d => 
        series.reduce((sum, key) => sum + d.values[key], 0)
      ));
    }
    return Math.max(...data.flatMap(d => series.map(key => d.values[key])));
  };

  const maxValue = getMaxValue();

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      p-6
      ${className}
    `}>
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ height: `${height}px`, width: '100%' }}
        className="mb-4"
      >
        <defs>
          {colors.map((color, i) => (
            <linearGradient key={i} id={`areaGradient${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color.fill} stopOpacity="0.8" />
              <stop offset="100%" stopColor={color.fill} stopOpacity="0.1" />
            </linearGradient>
          ))}
        </defs>

        {series.map((seriesKey, seriesIndex) => {
          const points = data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            let value = item.values[seriesKey];
            
            if (stacked && seriesIndex > 0) {
              for (let i = 0; i < seriesIndex; i++) {
                value += item.values[series[i]];
              }
            }
            
            const y = 100 - (value / maxValue) * 90;
            return { x, y, value: item.values[seriesKey] };
          });

          const pathD = smooth
            ? points.map((point, i) => {
                if (i === 0) return `M ${point.x} ${point.y}`;
                const prevPoint = points[i - 1];
                const cpX = (prevPoint.x + point.x) / 2;
                return `Q ${cpX} ${prevPoint.y}, ${point.x} ${point.y}`;
              }).join(' ')
            : points.map((point, i) => 
                i === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
              ).join(' ');

          return (
            <g key={seriesIndex}>
              <path
                d={`${pathD} L 100 100 L 0 100 Z`}
                fill={`url(#areaGradient${seriesIndex})`}
              />
              <path
                d={pathD}
                fill="none"
                stroke={colors[seriesIndex].stroke}
                strokeWidth="0.5"
              />
            </g>
          );
        })}
      </svg>

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          {series.map((key, index) => (
            <div key={key} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index].stroke }}
              />
              <span className="text-white/70 text-xs">{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface GlassPieChartProps {
  data: ChartData[];
  size?: number;
  className?: string;
  donut?: boolean;
  showLegend?: boolean;
}

export function GlassPieChart({ 
  data, 
  size = 300, 
  className = '',
  donut = false,
  showLegend = true
}: GlassPieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;

  const slices = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const outerRadius = 45;
    const innerRadius = donut ? 30 : 0;
    
    const x1 = 50 + outerRadius * Math.cos(startRad);
    const y1 = 50 + outerRadius * Math.sin(startRad);
    const x2 = 50 + outerRadius * Math.cos(endRad);
    const y2 = 50 + outerRadius * Math.sin(endRad);
    
    const largeArc = angle > 180 ? 1 : 0;
    
    const pathData = donut
      ? `M ${50 + innerRadius * Math.cos(startRad)} ${50 + innerRadius * Math.sin(startRad)} 
         L ${x1} ${y1} 
         A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} 
         L ${50 + innerRadius * Math.cos(endRad)} ${50 + innerRadius * Math.sin(endRad)} 
         A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${50 + innerRadius * Math.cos(startRad)} ${50 + innerRadius * Math.sin(startRad)} Z`
      : `M 50 50 L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    const colors = [
      'rgba(103, 126, 234, 0.8)',
      'rgba(118, 75, 162, 0.8)',
      'rgba(79, 172, 254, 0.8)',
      'rgba(67, 233, 123, 0.8)',
      'rgba(250, 112, 154, 0.8)'
    ];

    return {
      path: pathData,
      color: item.color || colors[index % colors.length],
      percentage,
      label: item.label,
      value: item.value
    };
  });

  return (
    <div className={`flex ${showLegend ? 'flex-col md:flex-row' : 'flex-col'} items-center gap-8 ${className}`}>
      <div className="relative">
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 100 100"
          className="backdrop-blur-md filter drop-shadow-lg"
        >
          <defs>
            {slices.map((slice, index) => (
              <filter key={index} id={`shadow${index}`}>
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor={slice.color} floodOpacity="0.5"/>
              </filter>
            ))}
          </defs>
          
          {slices.map((slice, index) => (
            <path
              key={index}
              d={slice.path}
              fill={slice.color}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="0.3"
              filter={`url(#shadow${index})`}
              className="hover:opacity-90 transition-all cursor-pointer transform hover:scale-105 origin-center"
            />
          ))}
        </svg>
        
        {donut && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl text-white font-bold">{total}</p>
              <p className="text-white/60 text-sm">Total</p>
            </div>
          </div>
        )}
      </div>
      
      {showLegend && (
        <div className="space-y-3">
          {slices.map((slice, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-pointer">
              <div 
                className="w-4 h-4 rounded transition-transform group-hover:scale-110"
                style={{ backgroundColor: slice.color }}
              />
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{slice.label}</p>
                <p className="text-white/60 text-xs">
                  {slice.value} ({slice.percentage.toFixed(1)}%)
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 新增：仪表盘图
interface GlassGaugeChartProps {
  value: number;
  max?: number;
  size?: number;
  className?: string;
  label?: string;
  showValue?: boolean;
}

export function GlassGaugeChart({
  value,
  max = 100,
  size = 200,
  className = '',
  label,
  showValue = true
}: GlassGaugeChartProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <svg width={size} height={size * 0.65} viewBox="0 0 100 65">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(250, 112, 154, 0.8)" />
            <stop offset="50%" stopColor="rgba(250, 208, 137, 0.8)" />
            <stop offset="100%" stopColor="rgba(67, 233, 123, 0.8)" />
          </linearGradient>
        </defs>
        
        {/* Background arc */}
        <path
          d="M 10 60 A 40 40 0 0 1 90 60"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        
        {/* Progress arc */}
        <path
          d="M 10 60 A 40 40 0 0 1 90 60"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="125.6"
          strokeDashoffset={125.6 - (percentage / 100) * 125.6}
          className="transition-all duration-500"
        />
      </svg>
      
      <div className="text-center -mt-8">
        {showValue && (
          <p className="text-4xl text-white font-bold mb-1">
            {value}
            <span className="text-2xl text-white/60">/{max}</span>
          </p>
        )}
        {label && (
          <p className="text-white/70 text-sm">{label}</p>
        )}
      </div>
    </div>
  );
}