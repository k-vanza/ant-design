import { Table } from 'antd'
import React, { useState, useEffect } from 'react'

const TableComponent = () => {

const [columns, setColumns] = useState([
    {
        title: 'ID',
        dataIndex: 'id'
    },
    {
        title: 'quote',
        dataIndex: 'quote'
    },
])

const [dataSource, setDataSource] = useState([])

useEffect(() => {
    fetch('https://dummyjson.com/quotes')
    .then((res) => res.json())
    .then((result) => {
        setDataSource(result.quotes)
    });
}, [])


  return (
    <div>
        <Table columns={columns} dataSource={dataSource}/>
    </div>
  )
}

export default TableComponent