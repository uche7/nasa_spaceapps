import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { data } from "./glimpse.dto";

const imageSwapper = [...data];

export const CardGrid = () => {
    return (
        <div className="overflow-hidden">
            <div className="flex mb-4 gap-6">
                <div className="flex flex-col w-2/5 gap-4">
                    {/* color for flexbox visualization, now just load the content in.*/}
                    <div className="bg-gray-800 h-40"></div>
                    <div className="bg-gray-800 h-40"></div>
                </div>
                <div className="w-3/5 bg-gray-800">
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="w-3/5 bg-gray-800 h-40"></div>
                <div className="w-2/5 bg-gray-800 h-40"></div>
            </div>
        </div>
    );
};
