import React, { useState } from 'react';
import Page from '../Pages/Page'
import Search from '../Components/Search'
import Calendar from '../Components/Calendar'
import ResultData from '../Components/Result'
import Data from '../Data/Data.json'

const Home = () => {
  const [Result, setResult] = useState<{}[]>([])
  const [startDate, setStartDate] = useState<any>()
  const [endDate, setEndDate] = useState<any>()

  const searchChange = (e: any ) => {
    
    const searchResult = Data.data.filter((element) => element.title.includes(e.target.value));
    //const test = Result !== null ? Result : Data.data.map(a => a.(Object.values(noPages)))
    setResult(searchResult)
    //console.log(test)
  }

  /*const noDays = Math.ceil((Math.abs(endDate - startDate))/((1000 * 60 * 60 * 24)))

  console.log(noDays)

  console.log(Data.data.noPages)
  
  console.log("avg: " + (Data.data.noPages/noDays))
  */
 //send a prop down to Result and assign it to a.noPages (and send it back up) ?

 const noDays = Math.ceil((Math.abs(endDate - startDate))/((1000 * 60 * 60 * 24)))

 console.log(noDays)

 console.log(Result)

 const newResult = Result

 const pages = newResult.map(a => Object.values(a)[3])

 console.log(...pages)
 
 const parsePage = [...pages]

 console.log('avg: ' + (parsePage/noDays))

 //const test2 = Object.keys(Result).map((key: any) => [Result[key]])
//const testtest = Result.map(a => ({a.data}))
 //console.log(testtest)
 //console.log(test2.map(a => a.Object.values(noPages)))

  return (
  <Page title="Home" variant="regular">
    <Search onChange={searchChange}/>
    <ResultData data={Result !== null ? Result : Data.data}/>
    <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
  </Page>
  )
}
export default Home

