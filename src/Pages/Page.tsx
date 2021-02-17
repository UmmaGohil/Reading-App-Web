import React from 'react';

type PageProps = {
  title: string,
}

export const Page = ({ title }: PageProps) => <>
  <h2>{ title }</h2>
  <p>
    [this is a page]
  </p>
</>

