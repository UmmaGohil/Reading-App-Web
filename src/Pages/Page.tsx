import React from 'react';
import CSS from 'csstype';

// ? is optional => title is string or undefined
interface Props  {
  title?: string,
  children: React.ReactNode,
  variant: "regular" | "dark"
}

const h1Styles: CSS.Properties = {
  color: 'red',
  backgroundColor: 'blue',
  fontSize: '5rem'
};

const Page = ({ title, variant, children }: Props) => <>
  <h2 style={h1Styles}>{ title }</h2>
  
    {children}
</>

export default Page

