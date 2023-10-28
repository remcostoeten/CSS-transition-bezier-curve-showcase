'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'sonner';

const easingStyles: Record<string, string> = {
    '--ease-in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    '--ease-out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    '--ease-in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    '--ease-in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    '--ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    '--ease-in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    '--ease-in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    '--ease-out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    '--ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    '--ease-in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    '--ease-out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    '--ease-in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
    '--ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    '--ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    '--ease-in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
    '--ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    '--ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    '--ease-in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
    '--ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    '--ease-out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    '--ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    '--ease-out-bounce': 'cubic-bezier(0.22, 1.45, 0.36, 1)',
};

const codeSnippet = `
<pre class="w-fit language-scss"><code>.animated-class {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(40px); }
  100% { transform: translateY(0); }
}
</code></pre>
`;


const EasingExample: React.FC = () => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success(text + ' copied to clipboard')
    };

    return (
<>
            <div className="flex flex-col gap-4">
                <div className="w-[1280px] mx-auto gap-4 flex flex-col">
                    {Object.entries(easingStyles).map(([name, value]) => (
                        <>
                            <div className="flex gap-3  text-xl items-center">
                                <span>{name}</span>
                                <button onClick={() => copyToClipboard(value)} className="bg-green-500 text-white px-2 py-1 rounded">Copy</button>
                            </div>
                            <div key={name} className="item relative">
                                <div className="bar">
                                    <div
                                        className="h-8 rounded-md shadow-lg  border-none bg-slate-400 border border-slate-700 bar-inner w-full"
                                        style={{
                                            animation: `2s ${value} infinite`,
                                            animationName: 'bounceX',
                                        }} />
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EasingExample;
