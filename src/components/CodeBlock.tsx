import React from "react";

export default function CodeBlock() {
    return (
        <div className="grid gap-4 w-fit">
            <div className="rounded-md bg-black/50 p-6">
                <pre>
                    <code className="grid gap-1 text-sm text-muted-foreground [&_span]:h-4">
                        <span>
                            <span className="text-sky-300">@keyframes bounce</span> 
                        </span>
                        <span>
                            {" "}
                            0%=
                            <span className="text-green-300">{"{ transform: translateY(0); }"}</span>,
                        </span>
                        <span>
                            {" "}
                            50%=
                            <span className="text-amber-300">{"{ transform: translateY(40px); }"}</span>,
                        </span>
                        <span>
                            {" "}
                            100%=
                            <span className="text-amber-300">{"{ transform: translateY(0); }"}</span>,
                        </span>
                    </code>
                </pre>
            </div>
        </div>
    );
}