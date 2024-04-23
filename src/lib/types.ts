import {
  ContactIcon,
  Star,
  Home,
  BriefcaseBusiness,
  Users,
  UserIcon,
} from 'lucide-react';

interface IconMap {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const iconMap: IconMap = {
  ContactIcon: ContactIcon,
  Star: Star,
  Home: Home,
  Users: Users,
  BriefcaseBusiness: BriefcaseBusiness,
  UserIcon: UserIcon,
};

export type TContact = {
  id: number;
  name: string;
  avatar: string;
  twitter: string;
  phoneNumber: string;
  email: string;
  notes: string;
  favorite: boolean;
};

export type ParamsType = {
  type: 'all' | 'favorites' | 'families' | 'friends' | 'work';
};
