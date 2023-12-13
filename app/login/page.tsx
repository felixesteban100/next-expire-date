import { ModeToggle } from '@/components/mode-toogle';
import LoginForm from '@/components/own/login-form';

export default function Page() {
  return (
    <main className='min-h-screen'>
      <div className='w-full flex justify-between p-5 absolute'>
        <div className=''>unexpire</div>
        <ModeToggle />
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen"
      >
        <div
          className="col-span-1 flex-col justify-end gap-6 bg-secondary hidden lg:flex p-11"
        >
          {/* <p className={`text-xl text-secondary-foreground md:text-3xl md:leading-normal`}>
            <p className='font-bold'>Welcome to unexpire.</p> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-primary">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p> */}
        </div>
        <div
          className="col-span-1 flex flex-col items-center justify-center"
        >
          <LoginForm />
        </div>
      </div>
    </main>
  );
}