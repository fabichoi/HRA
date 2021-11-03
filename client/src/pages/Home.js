import React from 'react';
import '../style/Home/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <br/>            
            <br/>            
            <br/>            
            <br/>            
            <h2>안녕하세요.</h2>
            <h2>한자 학습 시스템 입니다.</h2>
            <br/>
            <h3>모든 배정한자는 '한국어문회'의 배정한자를 참고하였습니다.</h3>
            <br/>
            <h2>메뉴 소개</h2>
            <li>한자 검색 : 한자를 검색할 수 있습니다.</li>
            <li>한자 학습 : 한자를 학습할 수 있습니다.</li>
            <li>단어 학습 : 한자 단어를 학습할 수 있습니다.</li>
        </div>
    );
};

export default Home;