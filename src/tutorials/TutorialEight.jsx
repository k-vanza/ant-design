import { Col, Divider, Row } from 'antd'
import React from 'react'

const boxStyle = {
    backgroundColor:'#004182',
    width: '100%',
    height: '80px',
    fontsize: '40px',
    border: '2px solid gray',
    color: 'white',
    textAlign: 'center'
}

//xs means the screen size is extra small and 24 means that the span will be 24 
//sm means small screen and 12 means the span will be 12 hence; two columns will be visible
//md means medium size screen and 8 means the span will be 8 hence; 3 columns will be visible
//lg means large screen will be and 3 means the span will be 3 hence; 8 columns will be visible


const TutorialEight = () => {
  return (
    <>
        <Row gutter={24}>
            <Col span={24} style={boxStyle}>
                span-24
            </Col>
        </Row>
        <Row gutter={24}>
            <Col span={12} style={boxStyle}>
                span-12
            </Col>
            <Col span={12} style={boxStyle}>
                span-12
            </Col>
        </Row>
        <Row justify='space-evenly'>
            <Col span={3} style={boxStyle}>
                span-4
            </Col>
            <Col span={3} style={boxStyle}>
                span-4
            </Col>
            <Col span={3} style={boxStyle}>
                span-4
            </Col>
            <Col span={3} style={boxStyle}>
                span-4
            </Col>
            <Col span={3} style={boxStyle}>
                span-4
            </Col>
            <Col span={3} style={boxStyle}>
                span-4
            </Col>
        </Row>
        <Divider orientation='left'>Responsive</Divider>
        <Row justify='space-evenly'>
            <Col style={boxStyle} xs={24} sm={12} md={8} lg={3}>
                span-4
            </Col>
            <Col style={boxStyle} xs={24} sm={12} md={8} lg={3}>
                span-4
            </Col>
            <Col style={boxStyle} xs={24} sm={12} md={8} lg={3}>
                span-4
            </Col>
            <Col style={boxStyle} xs={24} sm={12} md={8} lg={3}>
                span-4
            </Col>
            <Col style={boxStyle} xs={24} sm={12} md={8} lg={3}>
                span-4
            </Col>
            <Col style={boxStyle} xs={24} sm={12} md={8} lg={3}>
                span-4
            </Col>
        </Row>
    </>
  )
}

export default TutorialEight