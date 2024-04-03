import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-green-500 font-bold text-sm">Hello habbit forge</p>
      <Button size='lg' variant='outline'>click me</Button>
    </div>
  );
}
