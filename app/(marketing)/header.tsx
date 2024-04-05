import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import { Loader } from 'lucide-react'
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image alt="habit forge" src={'/logo.svg'} width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-orange-500 tracking-wide">
            Habit Forge
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
              <Button size={'lg'} variant={'ghost'}>
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  )
}
export default Header
