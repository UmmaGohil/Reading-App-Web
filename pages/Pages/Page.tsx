import React from 'react';
import CSS from 'csstype';

interface Props  {
  title?: string,
  children: React.ReactNode,
  variant: "regular" | "dark"
}

const h1Styles: CSS.Properties = {
  color: '#2938fa',
  backgroundColor: '#f1a5d0',
  fontSize: '5rem'
};

const Page = ({ title, variant, children }: Props) => <>
  <h2 style={h1Styles}>{ title }</h2>
  {children}
</>

export default Page

