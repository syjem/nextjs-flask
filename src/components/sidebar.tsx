'use client';

import { navLists } from '@/lib/navs';
import { iconMap } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'flex flex-col gap-1 w-[250px] border-r h-full',
        className
      )}>
      <div className="py-8 flex items-center justify-center gap-2 border-b shadow-sm cursor-default">
        <h1 className="text-xl font-bold">ContactSpace</h1>
      </div>
      <nav className="relative h-full">
        {navLists.map((nav) => {
          const Icon = iconMap[nav.icon];
          return (
            <Link
              key={nav.label}
              href={nav.url}
              className={cn(
                'flex py-3 items-center justify-start gap-6 rounded-md hover:bg-gray-100 px-4 text-base font-medium transition-colors text-gray-700',
                {
                  'text-black font-bold bg-gray-200 hover:bg-gray-200':
                    pathname === `${nav.url}`,
                }
              )}>
              {
                <Icon
                  className={cn('h-5 w-5', {
                    'text-black': pathname === `${nav.url}`,
                  })}
                />
              }
              {nav.label}
            </Link>
          );
        })}
        <Button
          asChild
          variant="ghost"
          className="group absolute bottom-4 py-3 w-full flex justify-start">
          <Link
            href="/contacts/new"
            className="flex items-center gap-2 justify-start text-gray-700 group-hover:text-black group-hover:font-bold">
            <PlusCircle className="h-5 w-5" />
            New Contact
          </Link>
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
