import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "../../config/site"
import { Icons } from "./Icons"

type MainNavProps = {
  items?: {
    title: string
    href?: string
    disabled?: boolean
  }[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
          <Link href="/framer-motion" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Framer motion visualizer.</span></Link>
        </nav>
      ) : null}
    </div>
  )
}       