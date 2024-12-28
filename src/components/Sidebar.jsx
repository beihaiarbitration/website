import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>AI书写系统</h2>
      </div>
      <ul className="nav-list">
        <li className="nav-item active">首页</li>
        <li className="nav-item">案件管理</li>
        <li className="nav-item">统计报表</li>
        <li className="nav-item">系统设置</li>
      </ul>
      <div className="sidebar-footer">
        <button className="logout-btn">退出</button>
      </div>
    </div>
  );
};

export default Sidebar;
