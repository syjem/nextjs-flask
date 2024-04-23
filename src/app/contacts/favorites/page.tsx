'use client';

import Cards from '@/components/cards';
import { useQuery } from '@tanstack/react-query';
import { getFavoriteContacts } from '@/queries/get';
import { TContact } from '@/lib/types';
import { usePathname } from 'next/navigation';

const Favorites = () => {
  const pathname = usePathname();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavoriteContacts,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError)
    return <div>Error: {error.message || 'An error has occurred'}</div>;

  return (
    <>
      {data.message && <div>{data.message}</div>}
      {data.favorites && (
        <div className="w-full">
          <h2 className="text-lg font-semibold text-slate-950 mb-4 capitalize">
            Favorites
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {data.favorites.map((contact: TContact) => (
              <Cards key={contact.id} contact={contact} pathname={pathname} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Favorites;
