import { Divider, Input } from 'antd'
import React from 'react'

const {TextArea} = Input;

const TutorialFive = () => {
  return (
    <div>
        <p>input text field</p>
        <Input type='text' placeholder='enter your name' maxLength={10} />
        <p>input text field for password</p>
        <Input type='password' placeholder='enter password' maxLength={8}/>
        <p>input text that  accepts only numbers</p>
        <Input type='number' placeholder='enter phone nmber' maxLength={10}/>
        <p>input field with allow clear functinality</p>
        <Input type='text' placeholder='enter text' allowClear/>
        <p>variants of input field</p>
        <p>outlined</p>
        <Input type='text' placeholder='enter anything' variant='outlined'/>
        <p>borderless</p>
        <Input type='text' placeholder='enter anything' variant='borderless'/>
        <p>filled</p>
        <Input type='text' placeholder='enter anything' variant='filled'/>
        <p>status</p>
        <Input type='text' placeholder='enter anything' status='warning'/>
        <Divider />
        <p>Search input field</p>
        <Input.Search type='text' addonBefore='htts://' disabled/>
        <Divider />
        <p>text area</p>
        <TextArea />
    </div>
  )
}

export default TutorialFive