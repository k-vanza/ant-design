import { Button, Divider, Flex, Tooltip } from 'antd'
import React, { useState } from 'react'
import {SearchOutlined, DownloadOutlined} from '@ant-design/icons'

const TutorialOne = () => {

    const [loading, setLoading] = useState(false)

    const loadingHandler = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }
  return (
    <div>
        <Flex gap='5px' wrap>
            <div>TutorialOne</div>
            <Button type='primary'>primary Button</Button>
            <Button type='default'>default Button</Button>
            <Button type='dashed'>Dashed Button</Button>
            <Button type='text'>text button</Button>
            <Button type='link'>Link Button</Button>
        </Flex>
        <Divider />
        <Flex gap='5px' wrap>
            <Tooltip>
                <Button type='primary' icon={<SearchOutlined />}>primary</Button>
                <Button type='primary' iconPosition='end' icon={<SearchOutlined />}>primary</Button>
                <Button type='primary' icon={<DownloadOutlined />}>Download</Button>
                
            </Tooltip> 

            <Button type='primary' onClick={loadingHandler} loading={loading}>Loading</Button>
        </Flex>
    </div>
  )
}

export default TutorialOne