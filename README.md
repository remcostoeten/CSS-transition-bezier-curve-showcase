GitHub Copilot: # EasingExample Feature

This project introduces the `EasingExample` feature, a tool designed to showcase CSS easing styles. 

```jsx
import Link from "next/link";
import React from "react";

export default function Intro() {
    return <>
        <h1 className="text-2xl font-bold mb-4">EasingExample Feature</h1>
        <p> A tool to visualize and understand CSS easing styles. 
            <Link href="https://github.com/remcostoeten/css-transition-easing-showcase" target='_blank'> Code <span className='underline'>here</span></Link>
        </p>
    </>;
}
```
This feature aids in understanding the effects of different easing styles. Users can copy styles to the clipboard for easy experimentation. A version with Framer Motion is in the works.