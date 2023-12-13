import { ModeToggle } from '@/components/mode-toogle'
import { SidebarNav } from '@/components/own/SidebarNav'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Toaster } from '@/components/ui/toaster'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { PAGE_BACKGROUND } from '@/lib/constants'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { signOut } from '@/auth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${PAGE_BACKGROUND} min-h-screen`}>
      <Toaster />
      <div className="space-y-6 p-10 pb-16 block">
        <div className='flex justify-between'>
          <div className="space-y-0.5">
            <Link href={'/'} className="text-2xl font-bold tracking-tight hover:underline">unexpire</Link>
            <p className="text-muted-foreground">
              Go to the home page
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <ModeToggle />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <form
                    action={async () => {
                      'use server';
                      await signOut();
                    }}
                  >
                    <Button variant={'outline'} size={'icon'}><LogOut /></Button>
                  </form>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Log Out</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="h-fit lg:w-1/5 flex flex-row lg:flex-col-reverse justify-between lg:justify-start">
            <SidebarNav />
            {/* <div className=' lg:mb-5'>
              <ModeToggle />
            </div> */}
          </aside>
          <div className='flex-1' /* className="flex-1 lg:max-w-2xl" */>{children}</div>
        </div>
      </div>
    </div>
  )
}