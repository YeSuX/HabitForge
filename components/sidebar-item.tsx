'use client'

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import Link from "next/link"
import Icon from "./Icon"
import { icons } from "lucide-react"

type Props = {
  label: string,
  iconName: keyof typeof icons,
  href: string
}

const SidebarItem = ({
  label,
  iconName,
  href
}: Props) => {
  const pathname = usePathname()
  const active = pathname === href
  console.log(active,pathname,active);
  
  return (
    <Button
      variant={active ? 'default' : 'secondary'}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href} className="gap-4">
        <Icon name={iconName} />
        {label}
      </Link>
    </Button>
  )
}
export default SidebarItem
