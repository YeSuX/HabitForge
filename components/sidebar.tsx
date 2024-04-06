import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn("bg-blue-500 h-full lg:w-[256px] lg:fixed flex flex-col px-4 border-r-2 top-0 left-0", className)}>
      Sidebar
    </div>
  )
}
export default Sidebar
