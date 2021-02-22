import React from 'react';
import Page from '../Pages/Page'
import { enGB } from 'date-fns/locale'
import { DateRangePicker} from 'react-nice-dates'
import 'react-nice-dates/build/style.css'


interface Props {
  startDate: any,
  setStartDate:  any,
  endDate: any,
  setEndDate: any
}

const Calendar = ({startDate, setStartDate, endDate, setEndDate}: Props) => {


  // convert the dates and then computer the amount of days between them 
  // then send this down to results via a prop 
 
  
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
            className={'input' + (focus === startDate ? ' -focused' : '')}
            {...startDateInputProps}
            placeholder='Start date'
          />
          <span className='date-range_arrow' />
          <input
            className={'input' + (focus === endDate ? ' -focused' : '')}
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

