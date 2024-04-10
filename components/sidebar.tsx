import { cn } from "@/lib/utils"
import Image from 'next/image'
import Link from "next/link"
import SidebarItem from "./sidebar-item"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"

type Props = {
  className?: string
}

const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn("h-full lg:w-[256px] lg:fixed flex flex-col px-4 border-r-2 top-0 left-0", className)}>
      <Link href={'/learn'}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image alt="habit forge" src={'/logo.svg'} width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-orange-500 tracking-wide">
            Habit Forge
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem iconName="Home" label="LEARN" href="/learn"/>
        <SidebarItem iconName="Users" label="LEADERBOARD" href="/leaderbord"/>
        <SidebarItem iconName="Target" label="QUESTS" href="/quests"/>
        <SidebarItem iconName="Store" label="SHOP" href="/shop"/>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/"/>
        </ClerkLoaded>
      </div>
    </div>
  )
}
export default Sidebar
