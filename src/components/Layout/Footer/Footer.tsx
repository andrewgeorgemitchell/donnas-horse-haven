import React from 'react';
import { NavLink } from '../Header/HeaderLink.type';

type FooterProps = {
  links: NavLink[];
};

const Footer: React.FC<FooterProps> = ({ links }) => <div />;

export default Footer;
