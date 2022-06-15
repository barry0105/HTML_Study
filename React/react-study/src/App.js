import React, { useState } from 'react';
import './App.css';

function App() {
  let [post,postChange] = useState(['남자 코트 추천','남자 바지 추천','겨울 옷 구매 팁']);
  let [count, countChange] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div>React 개발 blog</div>
      </div>
      <div className='list'>
        <h4>{post[0]} <span onClick={()=>{countChange(count + 1)}}>👍</span><span>{count}</span></h4>
        <p>2022년 2월 17일</p>
        <hr></hr>
      </div>
      <div className='list'>
        <h4>{ post[1] }</h4>
        <p>2022년 5월 18일</p>
        <hr></hr>
      </div>
      <div className='list'>
        <h4>{ post[2] }</h4>
        <p>2022년 6월 13일</p>
        <hr></hr>
      </div>
      <Modal></Modal>
    </div>
  );
}
function Modal(){
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
  )
}

export default App;
