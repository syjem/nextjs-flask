'use client';

import { type TContact } from '@/lib/types';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getTypes } from '@/lib/utils';
import { getContacts } from '@/queries/get';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';

type ContactProps = {
  pathname: string;
  contactId: string;
};

const Contact = ({ pathname, contactId }: ContactProps) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['contacts', contactId],
    queryFn: () => getContacts(contactId as string),
  });

  if (isPending) return <div>Loading...</div>;
  if (isError)
    return <div>Error: {error.message || 'An error has occurred'} </div>;

  return (
    <>
      {data.message && <div>{data.message}</div>}
      {data.contact && (
        <div className="flex flex-col gap-y-8 max-w-ful">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link
                  href={pathname}
                  className="text-lg font-semibold text-slate-950/40">
                  {getTypes(pathname as string)}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-lg font-semibold text-slate-950">
                  {data.contact.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="size-[12rem] object-cover bg-[#c8c8c8] rounded-[1.5rem] mr-8 overflow-hidden">
            <Image
              src={data.contact.avatar}
              alt={data.contact.name}
              width={200}
              height={200}
              className="size-full"
            />
          </div>

          <div>
            <h2 className="flex items-start gap-4 text-[2rem] font-bold m-0 active:outline-none active:text-active">
              {data.contact.name}
              <Favorite contact={data.contact} />
            </h2>

            {data.contact.twitter && (
              <p className="m-0">
                <Link
                  target="_blank"
                  href={`https://twitter.com/${data.contact.twitter}`}
                  className="flex text-base text-[#3992ff] hover:underline">
                  {data.contact.twitter}
                </Link>
              </p>
            )}

            {data.contact.notes && (
              <p className="whitespace-break-spaces">{data.contact.notes}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

const Favorite = ({ contact }: { contact: TContact }) => {
  const favorite = contact.favorite;
  return (
    <form>
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}>
        {favorite ? '★' : '☆'}
      </button>
    </form>
  );
};
