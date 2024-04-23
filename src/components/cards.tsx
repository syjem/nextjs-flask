import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { generateFallback } from '@/lib/utils';
import { TContact } from '@/lib/types';
import Link from 'next/link';

type CardsProps = {
  contact: TContact;
  pathname: string;
};

const Cards = ({ contact, pathname }: CardsProps) => {
  const contactName = generateFallback(contact.name);

  return (
    <Card className="w-full max-w-sm flex items-center justify-center">
      <Link href={`${pathname}/${contact.id}`} className="w-full">
        <CardContent className="flex flex-col gap-4 items-center justify-center p-0 py-8">
          <Avatar>
            <AvatarImage src={contact.avatar} alt={contact.name} />
            <AvatarFallback>{contactName}</AvatarFallback>
          </Avatar>
          <span className="text-slate-950 text-sm md:text-base font-medium block">
            {contact.name}
          </span>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Cards;
