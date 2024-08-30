// Tooltip.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        setTooltipPosition({ x, y });
        console.log(tooltipPosition);
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: "inline-block" }}
        >
            {children}
            {isHovered && (
                <motion.div
                    className="absolute"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        left: `${tooltipPosition.x}px`,
                        top: `${tooltipPosition.y + 15}px`,
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
