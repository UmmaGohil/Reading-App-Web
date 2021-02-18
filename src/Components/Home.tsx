import React from 'react';
import Page from '../Pages/Page'
import Search from '../Components/Search'
import Calendar from '../Components/Calendar'

const Home = () => 
  <Page title="Home" variant="regular">
   
    <Search />
    <Calendar />
  </Page>

export default Home

