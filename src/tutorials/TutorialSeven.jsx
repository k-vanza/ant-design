import { Button, Flex } from 'antd'
import React from 'react'

const boxStyle = {
    width: '100%',
    heignt: '300px',
    border: '1px solid red'
}

// gap: small, large, middle
//justify: flex-start, center, flex-end, space-between
//align: center, flex-strat, flex-end

const TutorialSeven = () => {
  return (
    <Flex
        gap="large"
        justify='space-evenly'
        align='center'
        style={boxStyle}
    >
        <Button type='primary'>Click1</Button>
        <Button type='primary'>Click2</Button>
        <Button type='primary'>Click3</Button>
        <Button type='primary'>Click4</Button>
        <Button type='primary'>Click5</Button>
        <Button type='primary'>Click6</Button>
    </Flex>
  )
}

export default TutorialSeven