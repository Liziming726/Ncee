import { Input, Select, Card, Pagination } from 'antd';
import { useState, useEffect } from 'react';
const [searchQuery, setSearchQuery] = useState('');
const [schoolType, setSchoolType] = useState('');
const [schoolLevel, setSchoolLevel] = useState('');
const [schoolRegion, setSchoolRegion] = useState('');
const [currentPage, setCurrentPage] = useState(1);
useEffect(() => {
    // 在这里调用后端接口获取数据
  }, [searchQuery, schoolType, schoolLevel, schoolRegion, currentPage]);
  return (
    <>
      <Input.Search
        placeholder="搜索大学"
        onSearch={value => setSearchQuery(value)}
      />
      <Select placeholder="院校类型" onChange={value => setSchoolType(value)}>
        {/* 在这里添加选项 */}
      </Select>
      <Select placeholder="院校层次" onChange={value => setSchoolLevel(value)}>
        {/* 在这里添加选项 */}
      </Select>
      <Select placeholder="院校地区" onChange={value => setSchoolRegion(value)}>
        {/* 在这里添加选项 */}
      </Select>
      {/* 在这里使用.map()方法来遍历学校数据并创建卡片组件 */}
      <Pagination
        current={currentPage}
        onChange={page => setCurrentPage(page)}
        total={/* 在这里添加总学校数量 */}
      />
    </>
  );