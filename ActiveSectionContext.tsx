"use client";

import React, { useState, createContext, useContext, ReactNode } from "react";

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type SectionName = "Home" | "Framer motion" | "CSS bezier curve" | "Github";

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection?: React.Dispatch<React.SetStateAction<SectionName | string>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
``
export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}
