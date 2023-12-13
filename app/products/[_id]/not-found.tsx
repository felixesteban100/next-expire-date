"use client";

import Link from 'next/link';
import { FileWarning } from 'lucide-react';
// import { usePathname } from 'next/navigation';

export default function NotFound() {
//   const pathname = usePathname()
//   const productName = pathname.match(/\/(\d+)$/)?.[1] || 'name'

  return (
    <section className="w-full flex h-full flex-col items-center justify-start gap-2 pt-16">
      <FileWarning className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested product{/* : {productName} */}.</p>
      <Link
        href="/products/list"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/80"
      >
        Go Back
      </Link>
    </section>
  );
}