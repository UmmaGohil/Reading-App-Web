import React from 'react';
import Page from '../Pages/Page'
interface Props {
  data: {}[] 
}

const Result = ({ data }: Props) => 

  // props for no. of days / home results [no.pages] => compute amount of days, weeks and months
  <Page title="Result" variant="regular">
      {data?.map((a: any) => (
        <div className='post'>
          <p>{a.title}</p>
        </div>
      ))}
  </Page>

export default Result

