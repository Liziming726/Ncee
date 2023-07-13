import { Radio, Timeline } from 'antd'
import { useState } from 'react'
const App = () => {
  const [mode, setMode] = useState('left')
  const onChange = (e) => {
    setMode(e.target.value)
  }
  return (
    <>
      <Timeline
        mode={mode}
        items={[
          {
            label: '2023-06-25',
            children: '高考成绩公布',
          },
          {
            label: '2023-06-29',
            children: '普通类提前批第一次志愿',
          },
          {
            label: '2023-07-05',
            children: '普通类特殊类型批次、常规批第一次志愿',
          },
          {
            label: '2023-07-13',
            children: '普通类提前批第二次志愿',
          },
          {
            label: '2023-07-24',
            children: '普通类常规批第二次志愿',
          },
          {
            label: '2023-07-31',
            children: '普通类常规批第三次志愿',
          },
        ]}
      />
    </>
  )
}
export default App