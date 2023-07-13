import React from 'react'
import { Button, Space } from 'antd'
import './gongneng.css'

const Gongneng = () => {
  const spanStyle = {
    color: 'black',
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '30px'
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <Space size={130}>
        <Button type="ghost" style={{ height: '120px', width: '200px', border: '2px solid rgb(57,138,205)' }}>
          <img src="/省控线.png" alt="图片" style={{ height: 'auto', width: '60px', marginRight: '18px', marginTop: '20px' }} />
          <span style={spanStyle}> 省控线</span>
        </Button>

        <Button type="ghost" style={{ height: '120px', width: '200px', border: '2px solid rgb(57,138,205)' }}>
          <img src="/志愿填报.png" alt="图片" style={{ height: 'auto', width: '60px', marginRight: '20px', marginTop: '20px' }} />
          <span style={spanStyle}> 志愿填报</span>
        </Button>

        <Button type="ghost" style={{ height: '120px', width: '200px', border: '2px solid rgb(57,138,205)' }}>

          <img src="/相关院校.png" alt="图片" style={{ height: 'auto', width: '60px', marginRight: '20px', marginTop: '20px' }} />
          <span style={spanStyle}>院校查询</span>

        </Button>

        <Button type="ghost" style={{ height: '120px', width: '200px', border: '2px solid rgb(57,138,205)' }}>
          <img src="/专业查询.png" alt="图片" style={{ height: 'auto', width: '60px', marginRight: '20px', marginTop: '20px' }} />
          <span style={spanStyle}>  专业查询 </span>
        </Button>
      </Space>
    </div>
  )
}

export default Gongneng