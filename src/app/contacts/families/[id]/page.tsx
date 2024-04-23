import Contact from '@/components/contact';
import React from 'react';

const FamiliesIdPage = ({ params }: { params: { id: string } }) => {
  return <Contact pathname="/contacts/families" contactId={params.id} />;
};

export default FamiliesIdPage;
