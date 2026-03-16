import React, { useState, useEffect } from 'react';

const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    /* 隐藏滚动条 */
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
  `;

  return (
    <div className={`min-h-screen bg-[#070b14] relative overflow-hidden text-slate-200 font-sans transition-opacity duration-1000 flex items-center justify-center p-4 md:p-8 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* --- 液态模糊背景 (Liquid Blobs) --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[45%] h-[60%] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-15%] left-[25%] w-[40%] h-[40%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* 中央：世界地图容器 */}
      <div className="relative z-10 w-full max-w-[1400px] glass-panel rounded-3xl flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden shadow-2xl">
        
        {/* 顶层光晕 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none"></div>

        {/* 地图核心包裹区：强制 2:1 比例以对齐经纬度 */}
        <div className="relative w-full animate-float" style={{ aspectRatio: '2 / 1' }}>
          
          {/* 底图兜底 (防止 mask 跨域失效) */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
            alt="Map Fallback" 
            className="absolute inset-0 w-full h-full opacity-10 invert pointer-events-none"
          />
          
          {/* 绚丽的液态遮罩地图 */}
          <div className="absolute inset-0 map-mask opacity-60"></div>

        </div>
      </div>
    </div>
  );
};

export default App;