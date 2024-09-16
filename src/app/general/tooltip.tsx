// Tooltip.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TooltipProps {
    text: string;
    position?: "top" | "bottom";
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position = "bottom", children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const parentRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent) => {
        if (parentRef.current) {
            const parentRect = parentRef.current.getBoundingClientRect();
            const x = e.clientX - parentRect.left;
            const y = e.clientY - parentRect.top;
            setTooltipPosition({ x, y });
        }
    };


    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    useEffect(() => {
        if (isHovered) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovered]);

    return (
        <div
            ref={parentRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: "inline-block", position: "relative" }}
        >
            {children}
            {isHovered && (
                <motion.div
                    className="absolute"
                    initial={{ opacity: 0, y: position === "top" ? -10 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: position === "top" ? -10 : 10 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        left: `${tooltipPosition.x - 30}px`,
                        top: position === "top" ? `${tooltipPosition.y - 60}px` : `${tooltipPosition.y + 40}px`,
                        transform: "translateX(-50%)",// Adjust transform to center the tooltip correctly
                        zIndex: 50, // Ensure tooltip is above other content
                        pointerEvents: 'none', // Prevent the tooltip from blocking mouse events
                        position: 'absolute',
                    }}
                >
                    <div className="bg-gray-800 bg-opacity-80 text-white p-2 rounded-md text-sm whitespace-nowrap text-center shadow-lg border border-white">
                        {text}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Tooltip;
