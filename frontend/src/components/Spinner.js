import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


function Spinner() {
    const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  return (
    <Spin indicator={antIcon} />
  )
}

export default Spinner