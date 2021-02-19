import React, {useState} from 'react';
import Page from '../Pages/Page'
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const Calendar = () => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  // convert the dates and then computer the amount of days between them 
  // then send this down to results via a prop 

  console.log(startDate)
  console.log(endDate)

  const oneDay = 24 * 60 * 60 * 1000;

  const diff = Math.round(Math.abs((startDate - endDate/ (oneDay))))


  console.log(diff)

  return(
    <Page variant="regular">
      <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format='dd MMM yyyy'
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className='date-range'>
          <input
            className={'input' + (focus === START_DATE ? ' -focused' : '')}
            {...startDateInputProps}
            placeholder='Start date'
          />
          <span className='date-range_arrow' />
          <input
            className={'input' + (focus === END_DATE ? ' -focused' : '')}
            {...endDateInputProps}
            placeholder='End date'
          />
        </div>
      )}
    </DateRangePicker>
    
    </Page>
  )
}
export default Calendar

