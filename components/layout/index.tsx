import Footer from './Footer';
import Content from './Content';
import Aside from './Aside';
import Center from './Center';
import Header from './Header';
import Basic, { BasicProps } from './Basic';
import React from 'react';

interface LayoutType extends React.FC<BasicProps> {
  children: React.ReactNode;
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Left: typeof Aside;
  Center: typeof Center;
}

const Layout = Basic as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Left = Aside;
Layout.Center = Center;

export { Layout };
