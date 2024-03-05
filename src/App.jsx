import React from 'react';
import { ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
import './normalize.css';
import './app.scss';


function App() {
  return (
      <ConfigProvider
      theme={{
        token: {
          // colorPrimary: '#52C41A',
          // borderRadius: 26,
          // fontFamily: 'Rubik',
          // colorTextBase: '#3c4257',
        },
      }}
      >
        <div className="app">
          <Outlet />
        </div>
      </ConfigProvider>
  );
}

export default App;
