import React from 'react';
import Page from '../Pages/Page'

interface Props {
  onChange() : string
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
      <button>Go</button>
    </form>
  </Page>

export default Search

