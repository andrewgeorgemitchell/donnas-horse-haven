import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '~/components/Layout/Layout';

// eslint-disable-next-line @typescript-eslint/ban-types
type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  const router = useRouter();

  const [contactDetails, setContactDetails] = useState<boolean>(false);

  return <Layout title="Contact" description="Contact us" />;
};

export default Contact;
