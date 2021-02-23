import React, { useState } from 'react';
import Page from '../Pages/Page'
import Search from '../Components/Search'
import Calendar from '../Components/Calendar'
import ResultData from '../Components/Result'
import Data from '../Data/Data.json'
import CSS from 'csstype'

const Home = () => {
  const [Result, setResult] = useState<{}[]>([])
  const [startDate, setStartDate] = useState<any>()
  const [endDate, setEndDate] = useState<any>()

  const searchChange = (e: any ) => {
    const searchResult = Data.data.filter((element) => element.title.includes(e.target.value));
    setResult(searchResult)
  }

  
  const row: CSS.Properties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: '-10%'
  }

  const column: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1'
  }

  const average: CSS.Properties = {
    color: '#2938fa',
    fontSize: '2rem',
  };

 const noDays = Math.ceil((Math.abs(endDate - startDate))/((1000 * 60 * 60 * 24)))
 const newResult = Result
 const pages = newResult.map(a => Object.values(a)[3])
 const parsePage: any = [...pages]

  return (
  <Page title="Reading Application" variant="regular">
    <div style={row}>
      <div style={column}>
        <Search onChange={searchChange}/>
      </div>
      <div style={column}>
      <Calendar 
        startDate={startDate} 
        setStartDate={setStartDate} 
        endDate={endDate} 
        setEndDate={setEndDate}
      />
      </div>
      
    </div>
      <p style={average}>{(parsePage/noDays)} pages to read each day!</p>
      <ResultData data={Result !== null ? Result : Data.data}/>
  </Page>
  )
}
export default Home

