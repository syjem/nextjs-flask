import Contact from '@/components/contact';
import React from 'react';

const ContactIdPage = ({ params }: { params: { id: string } }) => {
  return <Contact pathname="/contacts" contactId={params.id} />;
};

export default ContactIdPage;
