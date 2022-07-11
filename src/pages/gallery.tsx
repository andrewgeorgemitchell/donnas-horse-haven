import React from 'react';
import Layout from '~/components/Layout/Layout';
import { SanityClient } from '~/services/SanityClient';

type GalleryProps = {
  gallery: any;
};

export async function getStaticProps() {
  const gallery = await SanityClient.fetch(`*[_type == 'gallery']{
  "imageUrl": image.asset->url,
  title,
  }`);

  return {
    props: {
      gallery,
    },
    revalidate: 10,
  };
}

const Gallery: React.FC<GalleryProps> = ({ gallery }) => (
  <Layout title="Gallery" description="Gallery" />
);

export default Gallery;
