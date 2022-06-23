import React, { useState } from 'react';
import './page.css';
import INFP from '../Result/INFP.js';
function Page1(props) {
    var [result,AppendingResult] = useState('');

    function ResultAppend(Append){
        AppendingResult(result+=Append);
        PageSlide();
    }
    const Question = [
        {
            'id' : 0,
            'Question' : '질문 1',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['I','E']
        },
        {
            'id' : 1,
            'Question' : '질문 2',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['S','N']
        },
        {
            'id' : 2,
            'Question' : '질문 3',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['F','P']
        },
        {
            'id' : 3,
            'Question' : '질문 4',
            'Answer' : ['대답 1','대답 2'],
            'Values' : ['T','J']
        }];
    const createQuestion = 
            Question.map((li,idx)=>
                (<div className='Question'>
                    
                    <img src='img/NoPic.png'></img>
                    <h2>{li.Question}</h2>
                    <div className='survey-wrap'>
                    <div className='survey-unit' >
                        <input type='radio' name={idx} id={li.id}/>
                        <label for={li.id} onClick={()=>{ResultAppend(li.Values[0])}}>
                        <span></span>
                        <p >{li.Answer[0]}</p>
                        </label>
                    </div>
                    <div className='survey-unit' >
                        <input type='radio' name={idx} id={li.id+1} value={li.Values[1]}/>
                        <label for={li.id+1} onClick={()=>{ResultAppend(li.Values[1])}}>
                        <span></span>
                        <p >{li.Answer[1]}</p>
                        </label>
                    </div>
                    </div>
                </div>
                )  
            );
    let [Page,PageChange] = useState(0);    
    const PageSlide = (() =>{
            if(Page < Question.length-1){
                PageChange(Page+1);
            }
            else{
                document.write(result);
            }
            
        });
    return (
        <div className='Background'>
            {createQuestion[Page]}
        </div>
    );
}

export default Page1;