import Contact from '@/components/contact';
import React from 'react';

const CoWorkersIdPage = ({ params }: { params: { id: string } }) => {
  return <Contact pathname="/contacts/co-workers" contactId={params.id} />;
};

export default CoWorkersIdPage;
