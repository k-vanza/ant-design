import { Divider, Typography } from 'antd'
import React from 'react'
const {text} = Typography;

const TutorialFour = () => {
  return (
    <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt aspernatur alias officiis repellat optio, molestias iure inventore voluptatum quod labore illo quo facilis a fugiat eveniet dolor eum et.</p>
        <Divider dashed/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero quaerat aliquid? Perspiciatis sint temporibus distinctio beatae repudiandae odit est illum accusantium. Beatae adipisci, inventore distinctio voluptatibus veniam repellendus obcaecati.</p>
        
        <Divider orientation='left'>Text</Divider>
        <Divider orientation='right'>Text</Divider>
    </div>
  )
}

export default TutorialFour