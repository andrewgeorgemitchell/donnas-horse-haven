import React, { useState } from 'react';
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

const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  const handleSelect = (image: any) => {
    setOpen(true);
    setSelectedPhoto(image);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <Layout title="Gallery" description="Gallery" />;
};

export default Gallery;
