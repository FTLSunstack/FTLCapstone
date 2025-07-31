import React from "react";

const AnimatedBackground = ({ language = "English", goDown }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-700 via-violet-600 to-blue-600">
      {/* Animated gradient waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-blue-500/20 animate-wave-1"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-blue-400/25 via-violet-400/20 to-pink-400/25 animate-wave-2"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/15 via-transparent to-purple-500/15 animate-wave-3"></div>
      </div>

      {/* Sparkling particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Floating geometric shapes with trails */}
      <div className="absolute inset-0">
        {/* Squares */}
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-white/30 rotate-45 animate-float-spin"></div>
        <div className="absolute top-60 right-40 w-6 h-6 border border-blue-200/40 rotate-45 animate-float-spin-reverse"></div>
        <div className="absolute bottom-40 left-1/3 w-10 h-10 border-2 border-purple-200/35 rotate-45 animate-float-spin-slow"></div>

        {/* Circles with glowing effect */}
        <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full border-2 border-white/25 animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full border border-pink-200/30 animate-pulse-glow-delayed"></div>

        {/* Triangles */}
        <div className="absolute top-40 right-1/3 w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent border-b-white/25 animate-triangle-dance"></div>
        <div className="absolute bottom-60 left-1/5 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-blue-200/30 animate-triangle-dance-delayed"></div>
      </div>

      {/* Dynamic light beams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent animate-beam-1"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-200/25 via-blue-200/8 to-transparent animate-beam-2"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-purple-200/20 via-purple-200/5 to-transparent animate-beam-3"></div>
      </div>

      {/* Orbiting system */}
      <div className="absolute top-1/4 right-1/5 w-48 h-48">
        <div className="relative w-full h-full animate-orbit-1">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-white/40 rounded-full transform -translate-x-1/2 animate-pulse"></div>
        </div>
        <div className="absolute inset-6 animate-orbit-2">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-300/50 rounded-full transform -translate-x-1/2"></div>
        </div>
        <div className="absolute inset-12 animate-orbit-3">
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-300/60 rounded-full transform -translate-x-1/2"></div>
        </div>
      </div>

      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="mesh"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="white" opacity="0.3" />
              <circle cx="0" cy="0" r="1" fill="white" opacity="0.2" />
              <circle cx="100" cy="0" r="1" fill="white" opacity="0.2" />
              <circle cx="0" cy="100" r="1" fill="white" opacity="0.2" />
              <circle cx="100" cy="100" r="1" fill="white" opacity="0.2" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#mesh)"
            className="animate-mesh-drift"
          />
        </svg>
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shooting-star-1"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent animate-shooting-star-2"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent animate-shooting-star-3"></div>
      </div>

      {/* Content with enhanced glow */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {language === "Español" ? (
          <div>
            <>
              <h1 className="text-white text-6xl font-bold mb-8 animate-title-glow">
                Aprenda a Programar en tu Idioma!
              </h1>
              <h2 className="text-white/95 text-2xl max-w-4xl animate-subtitle-fade">
                Rompe la barrera del idioma en la programación. Obtén
                explicaciones, traducciones y asistencia de IA en tiempo real
                mientras codificas!
              </h2>
            </>
            <div className="flex flex-col justify-end items-center h-full max-h-60">
              <div
                className="bg-white opacity-70 p-5 size-20 flex flex-row justify-center items-center rounded-full animate-bounce cursor-pointer hover:bg-violet-300 transition ease-in-out [animation-duration:1.5s]"
                onClick={goDown}
              >
                <p className="text-gray-500 text-3xl ">&darr;</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <>
              <h1 className="text-white text-6xl font-bold mb-8 animate-title-glow">
                Learn to Code in your Language!
              </h1>
              <h2 className="text-white/95 text-2xl max-w-4xl animate-subtitle-fade">
                Break the language barrier in programming. Get explanations,
                translations, and AI assistance in real-time as you code!
              </h2>
            </>
            <div className="flex flex-col justify-end items-center h-full max-h-60">
              <div
                className="bg-white opacity-70 p-5 size-20 flex flex-row justify-center items-center rounded-full animate-bounce cursor-pointer hover:bg-violet-300 transition ease-in-out [animation-duration:1.5s]"
                onClick={goDown}
              >
                <p className="text-gray-500 text-3xl ">&darr;</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes wave-1 {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(20px) translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateX(-10px) translateY(20px) rotate(-1deg);
          }
          75% {
            transform: translateX(15px) translateY(-5px) rotate(0.5deg);
          }
        }

        @keyframes wave-2 {
          0%,
          100% {
            transform: translateX(0) translateY(0) scale(1);
          }
          33% {
            transform: translateX(-15px) translateY(10px) scale(1.02);
          }
          66% {
            transform: translateX(10px) translateY(-15px) scale(0.98);
          }
        }

        @keyframes wave-3 {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
        }

        @keyframes float-spin {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          25% {
            transform: translateY(-15px) rotate(90deg);
          }
          50% {
            transform: translateY(-25px) rotate(135deg);
          }
          75% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes float-spin-reverse {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(-45deg);
          }
        }

        @keyframes float-spin-slow {
          0%,
          100% {
            transform: translateY(0) rotate(45deg) scale(1);
          }
          50% {
            transform: translateY(-30px) rotate(225deg) scale(1.1);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0.5);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes pulse-glow-delayed {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }

        @keyframes triangle-dance {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
          }
        }

        @keyframes triangle-dance-delayed {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-15px) rotate(360deg) scale(1.2);
          }
        }

        @keyframes beam-1 {
          0%,
          100% {
            opacity: 0.2;
            transform: translateX(0);
          }
          50% {
            opacity: 0.6;
            transform: translateX(10px);
          }
        }

        @keyframes beam-2 {
          0%,
          100% {
            opacity: 0.25;
            transform: translateX(0) scaleY(1);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-5px) scaleY(1.1);
          }
        }

        @keyframes beam-3 {
          0%,
          100% {
            opacity: 0.2;
            transform: translateX(0);
          }
          50% {
            opacity: 0.4;
            transform: translateX(8px);
          }
        }

        @keyframes orbit-1 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-2 {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes orbit-3 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes mesh-drift {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -20px);
          }
        }

        @keyframes shooting-star-1 {
          0% {
            transform: translateX(-100%) scaleX(0);
            opacity: 0;
          }
          20% {
            transform: translateX(-50%) scaleX(1);
            opacity: 1;
          }
          80% {
            transform: translateX(50%) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) scaleX(0);
            opacity: 0;
          }
        }

        @keyframes shooting-star-2 {
          0% {
            transform: translateX(-100%) scaleX(0);
            opacity: 0;
          }
          30% {
            transform: translateX(-30%) scaleX(1);
            opacity: 0.8;
          }
          70% {
            transform: translateX(70%) scaleX(1);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100%) scaleX(0);
            opacity: 0;
          }
        }

        @keyframes shooting-star-3 {
          0% {
            transform: translateX(-100%) scaleX(0);
            opacity: 0;
          }
          25% {
            transform: translateX(-40%) scaleX(1);
            opacity: 0.6;
          }
          75% {
            transform: translateX(60%) scaleX(1);
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%) scaleX(0);
            opacity: 0;
          }
        }

        @keyframes title-glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
              0 0 40px rgba(139, 92, 246, 0.3);
            transform: scale(1);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.8),
              0 0 60px rgba(139, 92, 246, 0.5);
            transform: scale(1.02);
          }
        }

        @keyframes subtitle-fade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-wave-1 {
          animation: wave-1 12s ease-in-out infinite;
        }
        .animate-wave-2 {
          animation: wave-2 15s ease-in-out infinite 3s;
        }
        .animate-wave-3 {
          animation: wave-3 18s ease-in-out infinite 6s;
        }
        .animate-sparkle {
          animation: sparkle linear infinite;
        }
        .animate-float-spin {
          animation: float-spin 8s ease-in-out infinite;
        }
        .animate-float-spin-reverse {
          animation: float-spin-reverse 6s ease-in-out infinite 2s;
        }
        .animate-float-spin-slow {
          animation: float-spin-slow 10s ease-in-out infinite 4s;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 4s ease-in-out infinite 2s;
        }
        .animate-triangle-dance {
          animation: triangle-dance 6s ease-in-out infinite;
        }
        .animate-triangle-dance-delayed {
          animation: triangle-dance-delayed 8s ease-in-out infinite 3s;
        }
        .animate-beam-1 {
          animation: beam-1 8s ease-in-out infinite;
        }
        .animate-beam-2 {
          animation: beam-2 10s ease-in-out infinite 2s;
        }
        .animate-beam-3 {
          animation: beam-3 12s ease-in-out infinite 4s;
        }
        .animate-orbit-1 {
          animation: orbit-1 20s linear infinite;
        }
        .animate-orbit-2 {
          animation: orbit-2 15s linear infinite;
        }
        .animate-orbit-3 {
          animation: orbit-3 25s linear infinite;
        }
        .animate-mesh-drift {
          animation: mesh-drift 20s ease-in-out infinite;
        }
        .animate-shooting-star-1 {
          animation: shooting-star-1 8s ease-in-out infinite 0s;
        }
        .animate-shooting-star-2 {
          animation: shooting-star-2 10s ease-in-out infinite 3s;
        }
        .animate-shooting-star-3 {
          animation: shooting-star-3 12s ease-in-out infinite 6s;
        }
        .animate-title-glow {
          animation: title-glow 4s ease-in-out infinite;
        }
        .animate-subtitle-fade {
          animation: subtitle-fade 1.5s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
