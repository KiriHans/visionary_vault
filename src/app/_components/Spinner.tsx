import { twMerge } from "tailwind-merge";

export const Spinner = ({ radius = 56, stroke = "#000", className = "" }: { radius?: number, stroke?: string, className?: string }) => {
    const newClassName = twMerge('dark:stroke-white', className);

    const css = `
    .spinner_V8m1 {
      transform-origin: center;
      animation: spinner_zKoa 2s linear infinite;
    }
    
    .spinner_V8m1 circle {
      stroke-linecap: round;
      animation: spinner_YpZS 1.5s ease-in-out infinite;
    }
    
    @keyframes spinner_zKoa {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes spinner_YpZS {
      0% {
        stroke-dasharray: 0 150;
        stroke-dashoffset: 0;
      }
    
      47.5% {
        stroke-dasharray: 42 150;
        stroke-dashoffset: -16;
      }
    
      95%,
      100% {
        stroke-dasharray: 42 150;
        stroke-dashoffset: -59
      }
    }`

    return (
        <svg width={radius} height={radius} stroke={stroke} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`${newClassName}`}>
            <style>
                {css}
            </style>
            <g className="spinner_V8m1">
                <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
            </g>
        </svg>
    )
}
