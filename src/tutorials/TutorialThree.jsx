import React from 'react'
import {Divider, Typography} from 'antd'

const {Title, Text} = Typography

const TutorialThree = () => {
  return (
    <div>
        <Title>H1 in ant design</Title>
        <Title level={2}>H2 in ant design</Title>
        <Title level={3}>H3 in ant design</Title>
        <Title level={4}>H4 in ant design</Title>
        <Title level={5}>H5 in ant design</Title>
        
        <Divider />

        <Text>normal text</Text><br />
        <Text type='secondary'>Secondary text</Text><br />
        <Text type='success'>Success text</Text><br />
        <Text type='warning'>Warning text</Text><br />
        <Text type='danger'>Danger text</Text><br />

        <Divider />

        <Text disabled>disabled</Text><br />
        <Text mark>disabled</Text><br />
        <Text code>disabled</Text><br />
        <Text keyboard>disabled</Text><br />
        <Text underline>disabled</Text><br />
        <Text italic>disabled</Text><br />
        <Text strong>disabled</Text><br />
        <Text delete>disabled</Text><br />
    </div>
  )
}

export default TutorialThree