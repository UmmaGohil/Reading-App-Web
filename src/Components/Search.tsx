import React from 'react';
import Page from '../Pages/Page'

interface Props {
  onChange(e: any): void 
}

const Search = ({ onChange }: Props) => 
  <Page variant="regular">
    <form>
      <input 
        type='search'
        placeholder='Search...'
        className='search'
        onChange={onChange}
      />
    </form>
  </Page>

export default Search

