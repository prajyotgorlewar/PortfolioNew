import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface AnimatedBackgroundProps {
  className?: string;
  count?: number;
  color?: string;
  type?: "particles" | "wave" | "grid";
}

export default function AnimatedBackground({
  className = "",
  count = 30,
  color = "primary",
  type = "particles"
}: AnimatedBackgroundProps) {

  if (type === "particles") {
    return <ParticlesAnimation className={className} count={count} color={color} />;
  } else if (type === "wave") {
    return <WaveAnimation className={className} color={color} />;
  } else if (type === "grid") {
    return <GridAnimation className={className} color={color} />;
  }
  
  return null;
}

function ParticlesAnimation({ className, count, color }: {
  className?: string;
  count: number;
  color: string;
}) {
  // Generate random particles
  const particles = Array.from({ length: count }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 0.5 + 0.5,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.5 + 0.1
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-${color}`}
          style={{
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, particle.speedX * 100, 0],
            y: [0, particle.speedY * 100, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

function WaveAnimation({ className, color }: {
  className?: string;
  color: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute bottom-0 left-0 w-full h-56 opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <motion.path 
          initial={{ d: "M0,320L48,282.7C96,245,192,171,288,160C384,149,480,203,576,213.3C672,224,768,192,864,170.7C960,149,1056,139,1152,160C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
          animate={{ 
            d: [
              "M0,320L48,282.7C96,245,192,171,288,160C384,149,480,203,576,213.3C672,224,768,192,864,170.7C960,149,1056,139,1152,160C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,320L48,277.3C96,235,192,149,288,122.7C384,96,480,128,576,149.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,320L48,282.7C96,245,192,171,288,160C384,149,480,203,576,213.3C672,224,768,192,864,170.7C960,149,1056,139,1152,160C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
          fill={`currentColor`}
          className={`text-${color}`}
        />
        <motion.path 
          initial={{ d: "M0,320L60,304C120,288,240,256,360,261.3C480,267,600,309,720,309.3C840,309,960,267,1080,240C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" }}
          animate={{ 
            d: [
              "M0,320L60,304C120,288,240,256,360,261.3C480,267,600,309,720,309.3C840,309,960,267,1080,240C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
              "M0,320L60,288C120,256,240,192,360,160C480,128,600,128,720,149.3C840,171,960,213,1080,229.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
              "M0,320L60,304C120,288,240,256,360,261.3C480,267,600,309,720,309.3C840,309,960,267,1080,240C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
          fill={`currentColor`}
          className={`text-${color} opacity-70`}
        />
      </svg>
    </div>
  );
}

function GridAnimation({ className, color }: {
  className?: string;
  color: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let dots: {x: number, y: number, opacity: number}[] = [];
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };
    
    const initDots = () => {
      const gridSize = 30;
      dots = [];
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          dots.push({
            x,
            y,
            opacity: 0.1 + Math.random() * 0.1
          });
        }
      }
    };
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set color based on the theme
      const rootStyles = getComputedStyle(document.documentElement);
      let dotColor = '#FF6000'; // Default primary color
      
      if (color === 'primary') {
        // Try to get the primary color from CSS variables
        const primaryColor = rootStyles.getPropertyValue('--primary').trim() || 
                            rootStyles.getPropertyValue('--color-primary').trim();
        if (primaryColor) {
          dotColor = primaryColor;
        }
      }
      
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = dot.opacity;
        ctx.fill();
        
        // Slightly change opacity for animation effect
        dot.opacity += Math.random() * 0.01 - 0.005;
        if (dot.opacity < 0.05) dot.opacity = 0.05;
        if (dot.opacity > 0.2) dot.opacity = 0.2;
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [color]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-20"
      />
    </div>
  );
}