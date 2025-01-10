import { DatePicker, Divider, TimePicker } from 'antd'
import React from 'react'
import dayjs from 'dayjs'

const TutorialNine = () => {

    const onChangeHandler = (date, dateString) => {
        console.log(date, dateString)
    }

  return (
    <>
        <Divider orientation='center'>traditional</Divider>
        <DatePicker onChange={onChangeHandler}/>
        <Divider orientation='center'>week picker</Divider>
        <DatePicker picker='week'/>

        <Divider orientation='center'>month picker</Divider>
        <DatePicker picker='month'/>

        <Divider orientation='center'>year picker</Divider>
        <DatePicker picker='year'/>

        <Divider orientation='center'>quarter picker</Divider>
        <DatePicker picker='quarter'/>

        <Divider orientation='center'>restricted date picker</Divider>
        <DatePicker 
            defaultValue={dayjs('2025-01-05')}
            minDate={dayjs('2025-01-03')}
            mixDate={dayjs('2025-01-10')}
        />

        <Divider orientation='center'>range picker</Divider>
        <DatePicker.RangePicker />

        <Divider orientation='center'>time picker</Divider>
        <TimePicker />

        <Divider orientation='center'>time range picker</Divider>
        <TimePicker.RangePicker />


    </>
  )
}

export default TutorialNine