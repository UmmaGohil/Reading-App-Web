import React, { useState } from 'react';
import Page from '../Pages/Page'
import Search from '../Components/Search'
import Calendar from '../Components/Calendar'
import Data from '../Data/Data.json'

const Home = () => {
  const [Result, setResult] = useState<null | {}>(null)

  const searchChange = (e: any ) => {
    const searchResult = Data.data.filter((element) => element.title.includes(e.target.value));
    setResult(searchResult)
  }

  return (
  <Page title="Home" variant="regular">
    <Search onChange={searchChange}/>
    <Calendar />
  </Page>
  )
}
export default Home

