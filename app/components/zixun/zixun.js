import { Card } from 'antd'
import { Col, Row } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
const { Meta } = Card

const App = () => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <Card
      hoverable
      style={{
        width: 280,
        marginLeft: '135px',
        marginTop: '60px',
      }}
      cover={
        <a href='https://www.sdzk.cn/NewsInfo.aspx?NewsID=6223'>
          <img alt="example" src="./45.png" style={{ width: '280px', height: '400px' }} />
        </a>
      }
    >
      <Meta title="志愿填报特别提醒" description="www.sdzk.cn" />
    </Card>

    <div style={{
      width: '800px', border: '3px solid rgb(57,138,205)', padding: '16px',
      marginTop: '60px', marginLeft: '75px', borderRadius: '20px'
    }}>
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} title={<><LinkOutlined /> 要点资讯1</>} style={{ fontSize: '18px' }}>
            <a href="https://www.sdzk.cn/NewsInfo.aspx?NewsID=6264" >山东省2023年普通高校招生录取结果查询方式和查询时间公告</a>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} title={<><LinkOutlined /> 要点资讯2</>} style={{ fontSize: '18px' }}>
            <a href="https://www.sdzk.cn/NewsInfo.aspx?NewsID=6233">普通高考平行志愿填报指导动漫（2023年版）</a>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} title={<><LinkOutlined /> 要点资讯3</>} style={{ fontSize: '18px' }}>
            <a href="https://www.sdzk.cn/NewsInfo.aspx?NewsID=6239">强基计划的录取方式是怎样的？报考强基计划的考生需要填报强基计划志愿吗？</a>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} title={<><LinkOutlined /> 要点资讯4</>} style={{ fontSize: '18px' }}>
            <a href="https://www.sdzk.cn/NewsInfo.aspx?NewsID=6242">什么是专业（专业类）平行志愿？填报平行志愿有哪些注意事项？</a>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
)

export default App