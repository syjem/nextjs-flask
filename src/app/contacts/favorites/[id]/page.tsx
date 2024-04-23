import Contact from '@/components/contact';
import React from 'react';

const FavoritesIdPage = ({ params }: { params: { id: string } }) => {
  return <Contact pathname="/contacts/favorites" contactId={params.id} />;
};

export default FavoritesIdPage;
