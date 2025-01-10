import { Select } from 'antd'
import React, { useState } from 'react'

const TutorialSix = () => {

    const [loading,setLoading] = useState(false)

    const onChangeHandler = (val) =>{
        console.log(`onchange value ${val}`)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },3000)
    }

    const onSearchHandler = (val) => {
        console.log(`on search value ${val}`)
    }
    const onSelectHandler = (val) => {
        console.log(`on select value ${val}`)
    }
  
  const colorList = [
    {
        value: 'black',
        label: 'black'
    },
    {
        value: 'blue',
        label: 'blue'
    },
    {
        value: 'red',
        label: 'red'
    },
    {
        value: 'white',
        label: 'white'
    }
  ]


  //onSelect logs the value on each selection and onChange value the previous logs are saved and displayed
  
    return (
    <div>
        <p>option selection</p>
        <Select 
            placeholder='select a color' 
            options={colorList}
            showSearch
            allowClear
            style={{width: '300px'}}
        />
        <p>multiple select mode</p>
        <Select 
            placeholder='select an option'
            options={colorList}
            showSearch
            allowClear
            mode='multiple'
            autoFocus
            style={{width: '300px'}}
            onChange={onChangeHandler}
            onSearch={onSearchHandler}
            onSelect={onSelectHandler}
            loading={loading}
        />
    </div>
  )
}

export default TutorialSix