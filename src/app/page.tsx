

import CodeBlock from '@/components/CodeBlock'
import Eaze from '@/components/EaseExamples'
import Intro from '@/components/Intro'
import EasingExample from '@/components/effects/Easing'
import Image from 'next/image'

export default function Home() {
  return (<>
    <div className="flex p-4 flex-col gap-4 w-[1280px] mx-auto">

      <Intro />
      <Eaze />
      <CodeBlock />
      <EasingExample />

    </div>
  </>)
}
