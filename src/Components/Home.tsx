import React, { useState } from 'react';
import Page from '../Pages/Page'
import Search from '../Components/Search'
import Calendar from '../Components/Calendar'
import ResultData from '../Components/Result'
import Data from '../Data/Data.json'

const Home = () => {
  const [Result, setResult] = useState<{}[]>([])
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const searchChange = (e: any ) => {
    
    const searchResult = Data.data.filter((element) => element.title.includes(e.target.value));
    setResult(searchResult)
  }

  /*const noDays = Math.ceil((Math.abs(endDate - startDate))/((1000 * 60 * 60 * 24)))

  console.log(noDays)

  console.log(Data.data.noPages)
  
  console.log("avg: " + (Data.data.noPages/noDays))
  */
 //send a prop down to Result and assign it to a.noPages (and send it back up) ?

  return (
  <Page title="Home" variant="regular">
    <Search onChange={searchChange}/>
    <ResultData data={Result !== null ? Result : Data.data}/>
    <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
  </Page>
  )
}
export default Home

