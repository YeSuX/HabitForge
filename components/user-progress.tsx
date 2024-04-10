import Link from "next/link";
import { Button } from "./ui/button";
import Icon from "./Icon";
import { Heart, Infinity, Store } from "lucide-react";

type Props = {
  activeCourse: any; // TODO: replace with db types
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription
}:Props) => {
  return (
    <div className=" flex items-center justify-between gap-x-2 w-full">
      <Link href={'/courses'}>
        <Button variant={'ghost'}>
          <Icon name="Languages"/>
        </Button>
      </Link>
      <Link href={'/shop'}>
        <Button variant={'ghost'} className=" text-orange-500 hover:text-orange-600">
          <Store className=" mr-2 "/>
          {points}
        </Button>
      </Link>
      <Link href={'/shop'}>
        <Button variant={'ghost'} className=" text-rose-500 hover:text-rose-600">
          <Heart className=" mr-2 "/>
          {
            hasActiveSubscription?
            <Infinity className="h-4 w-4 stroke-[3]"/>
            : hearts
          }
        </Button>
      </Link>
    </div>
  )
}
export default UserProgress
