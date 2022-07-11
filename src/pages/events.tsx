import React from 'react';
import Layout from '~/components/Layout/Layout';
import { SanityClient } from '../services/SanityClient';

// eslint-disable-next-line @typescript-eslint/ban-types
type EventProps = {};

export async function getStaticProps() {
  const events = await SanityClient.fetch(
    `*[_type == 'testimonial'] {
      author,
      description,

    }`,
  );

  return {
    props: {
      events,
    },
  };
}

const events: React.FC<EventProps> = () => (
  <Layout title="events" description="events" />
);

export default events;
