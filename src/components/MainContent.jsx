import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="case-section">
        <h2>创建案件</h2>
        <div className="upload-box">
          <p>拖拽您的文件在这里或</p>
          <button>浏览文件</button>
        </div>
        <button className="start-check-btn">开始检索</button>
      </div>

      <div className="uploaded-files">
        <h3>上传的文件</h3>
        <div className="file-item">
          <span>(2022) 北海仲字第3-790号</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '64%' }}></div>
          </div>
          <span>64%</span>
        </div>
        <div className="file-item">
          <span>(2022) 北海仲字第3-560号</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '84%' }}></div>
          </div>
          <span>84%</span>
        </div>
        <div className="file-item">
          <span>(2022) 北海仲字第3-73号</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '30%' }}></div>
          </div>
          <span>30%</span>
        </div>
      </div>

      <div className="bottom-section">
        <div className="score-stats">
          <h3>评分分布</h3>
          <div className="chart-placeholder">
            <p>Pie Chart Placeholder</p>
          </div>
          <p>总评分统计: 356</p>
          <ul>
            <li>极好: 157</li>
            <li>相对满意: 89</li>
            <li>好评: 59</li>
            <li>儿科不理想: 30</li>
            <li>一般: 70</li>
          </ul>
        </div>
        <div className="cases-status">
          <div className="pending">
            <h3>待办</h3>
            <ul>
              <li>这是见海的事项1</li>
              <li>这是见海的事项2</li>
              <li>这是见海的事项3</li>
            </ul>
          </div>
          <div className="completed">
            <h3>已完成</h3>
            <ul>
              <li>这里是完成的任务1</li>
              <li>这里是完成的任务2</li>
              <li>这里是完成的任务3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
