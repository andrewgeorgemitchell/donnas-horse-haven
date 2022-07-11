import React from 'react';
import Layout from '~/components/Layout/Layout';

// eslint-disable-next-line @typescript-eslint/ban-types
type ContactProps = {};

const Contact: React.FC<ContactProps> = () => (
  <Layout title="Contact" description="Contact us" />
);

export default Contact;
