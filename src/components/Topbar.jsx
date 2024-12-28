import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h3>首页</h3>
      </div>
      <div className="topbar-right">
        <div className="notification-bell">
          <span>🔔</span>
        </div>
        <div className="avatar">
          <img 
            src="https://via.placeholder.com/36" 
            alt="user avatar" 
          />
          <span>Evan 李秀娟</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
