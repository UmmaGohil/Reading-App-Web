import React from 'react';

interface PageProps  {
  title: string,
  children: React.ReactNode
}

 const Page = ({ title, children }: PageProps) => <>
  <h2>{ title }</h2>
  <p>
    [this is a page]
    {children}
  </p>
</>

export default Page

