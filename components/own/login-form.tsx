'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRightIcon, AtSignIcon, Key } from 'lucide-react';
import { authenticate } from '@/lib/data';

export default function LoginForm() {
  const [message, action] = useFormState(authenticate, undefined);

  return (
    <form action={action}  className='w-[50%]'>
      <h1 className={`text-2xl`}>
        Please log in to continue.
      </h1>
      <div className="w-full">
        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-foreground"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="bg-background peer block w-full rounded-md border border-primary-foreground py-[9px] pl-10 text-sm outline-2 placeholder:text-foreground"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <AtSignIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-foreground peer-focus:text-gray-900" />
          </div>
        </div>
        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-foreground"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="bg-background peer block w-full rounded-md border border-primary-foreground py-[9px] pl-10 text-sm outline-2 placeholder:text-foreground"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              minLength={6}
            />
            <Key className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-secondary-foreground peer-focus:text-primary" />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-1'>
        <LoginButton />
      </div>
      <div className="flex h-8 items-end space-x-1">
        {message && (
          <>
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <p aria-live="polite" className="text-sm text-destructive">
              {message}
            </p>
          </>
        )}
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-primary-foreground" />
    </Button>
  );
}