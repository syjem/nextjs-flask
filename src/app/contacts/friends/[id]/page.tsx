import Contact from '@/components/contact';
import React from 'react';

const FriendsIdPage = ({ params }: { params: { id: string } }) => {
  return <Contact pathname="/contacts/friends" contactId={params.id} />;
};

export default FriendsIdPage;
