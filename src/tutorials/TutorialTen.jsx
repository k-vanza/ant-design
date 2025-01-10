import { Divider, Progress } from 'antd'
import React from 'react'

const TutorialTen = () => {
  return (
    <>
        <Progress percent={45}/>
        <Progress percent={80} status='exception'/>
        <Progress percent={100} />
        <Progress percent={55} showInfo={false}/>

        <Divider orientation='center'>Circular progress bar</Divider>

        <Progress type='circle' percent={45}/>
        <Progress type='circle' percent={80} status='exception'/>
        <Progress type='circle' percent={100} />
        <Progress type='circle' percent={55} showInfo={false}/>

        <Progress 
            type='circle'
            percent={55}
            format={(percent) => `${percent} days`}
        />

        <Divider orientation='center'>progress bar with stops</Divider>

        <Progress percent={30} stops={5}/>        

    </>
  )
}

export default TutorialTen