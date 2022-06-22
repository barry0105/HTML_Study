import React from 'react';
import './page.css';
function Page1(props) {
    const Question = {
        1 : '안녕하세요',
        2 : '반갑습니다',
        3 : '고마워요',
        4 : '감사해요',
        5 : '잘있어요',
        6 : '다시 만나요'
    };
    const Answer = {
        'E' : 'E용 대답',
        'I' : 'I용 대답',
        'S' : 'S용 대답',
        'N' : 'N용 대답'
    };
    return (
        <div className='Background'>
            <div className='Question'>
                <img src='img/NoPic.png'></img>
                <h2>포도 안녕 미쁘다 우리는 함초롱하다 도담도담 그루잠 도르레 다솜 우리는 미쁘다</h2>
            </div>
            <hr/>
            <div className='survey-wrap'>
            <div className='survey-unit' name='1'>
                <input type='radio' id='radio1'/>
                <label for='radio1'>
                <span></span>
                <p>하이?</p>
                </label>
            </div>
            <div className='survey-unit' name='1'>
                <input type='radio' id='radio2'/>
                <label for='radio3'>
                <span></span>
                <p>바이?</p>
                </label>
            </div>
            </div>
            <div className='Button-wrap'>
                <button className='Back'>뒤로</button>
                <button className='Next'>다음</button>
            </div>
        </div>
    );
}

export default Page1;