import React from 'react';
import { NavLink } from './HeaderLink.type';

type HeaderProps = {
  links: NavLink[];
};

const Header: React.FC<HeaderProps> = ({ links }) => (
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

export default Header;
