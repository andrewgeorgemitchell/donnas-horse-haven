import React, { useState } from 'react';
import { NavLink } from './HeaderLink.type';

type HeaderProps = {
  links: NavLink[];
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        style={{
          backgroundColor: `#bdb9b9`,
        }}
      >
        {` `}
        {links.map((link) => link.label)}
      </nav>
    </>
  );
};

export default Header;
