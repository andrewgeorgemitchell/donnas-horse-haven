import Head from 'next/head';
import React, { useMemo } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

type LayoutProps = {
  title: string;
  description: string;
  tags?: Array<{
    name: string;
    content: string;
  }>;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  tags,
  children,
}) => {
  const NavLinks = useMemo(
    () => [
      {
        label: `Home`,
        link: `/`,
      },

      {
        label: `Events`,
        link: `/events`,
      },
      {
        label: `Gallery`,
        link: `/gallery`,
      },
      {
        label: `Contact`,
        link: `/contact`,
      },
    ],
    [],
  );

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {tags?.map(({ name, content }) => (
          <meta key={name} name={name} content={content} />
        ))}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header links={NavLinks} />
      <main
        style={{
          width: `100%`,
          flexGrow: 2,
          background: `#efebeb`,
          overflow: `hidden`,
        }}
      >
        {children}
      </main>
      <Footer links={NavLinks} />
    </div>
  );
};

export default Layout;
