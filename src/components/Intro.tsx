import Link from "next/link";
import React from "react";

export default function Intro() {
    return <>
        <h1 className="text-2xl font-bold mb-4">EasingExample Feature</h1>
<p>            I developed the EasingExample feature to display CSS easing styles. It offers a list of styles, each with an animation. Users can copy styles to the clipboard for easy experimentation. This feature aids in understanding the effects of different easing styles. A version with Framer Motion is in the works.
            <Link href="https://github.com/remcostoeten/css-transition-easing-showcase" target='_blank'> Code <span className='underline'>here</span></Link>
        </p>
    </>;
}
