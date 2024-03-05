import React from 'react';
import { Spin, Tooltip } from 'antd';
import './loading.scss';

const Loading = ({ height }) => {
  return (
    <div className="container loading" style={{ height }}>
      <Tooltip title="Loading...">
        <Spin size="large" tip="Loading..." className="loading__spin" />
      </Tooltip>
    </div>
  );
};

export default Loading;
