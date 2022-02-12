import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '남양 맛집 추천', '화성시청 카페 추천']);
  const [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0);
  let [input, setInput] = useState('');
  let date = 13;

  function addLike(i){
    const newLike = [...like];
    newLike[i] += 1;
    setLike(newLike);
  }

  function post(input){
    let newTitle = [...title];
    const addLike = [...like];

    newTitle.unshift(input);
    setTitle( newTitle );

    addLike.unshift(0);
    setLike( addLike );
  }


  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <div className='nav-bar'>
        <div>개발 Blog</div>
      </div>

      {/* 글 리스트 */}
      {
        title.map(function(title, i){
          return <div className='list' key={i}>
            <h3 onClick={ () => { {setIdx(i)} {setModal(true)} } }>{ title } <span onClick={ function(){ addLike(i) } }>👍</span> { like[i] }</h3>
            <p>2월 { date - i }일 발행</p>
            <hr/>
          </div>
        })
      }

      <div className='publish'>
        <input onChange={ (e) => { setInput(e.target.value) } }/>
        <button onClick={ () => { post(input) } }>저장</button>
        <p>input에 입력한 값 : { input }</p>
      </div>

      <button onClick={ () => { setModal(!modal) } }>글 열고 닫기</button>

      

      {
        modal === true
        ? <Modal title={ title } idx={ idx }></Modal>
        : null
      }


    </div>
  );
}


function Modal(props){
  return(
  <div className='modal'>
    <h2>제목 : {props.title[props.idx]}</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
)}

export default App;
