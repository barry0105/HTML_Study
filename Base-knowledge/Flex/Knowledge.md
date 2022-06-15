display: flex;
display: inline-flex;  

flex-direction: row; 정렬 방향  
flex-direction: column;  
flex-direction: row-reverse;  
flex-direction: column-reverse;  

flex-wrap: nowrap;* 줄넘김 처리/
flex-wrap: wrap;  
flex-wrap: wrap-reverse;

flex-flow: row wrap; 
아래의 두 줄을 줄여 쓴 것  
flex-direction: row;  
flex-wrap: wrap;  
            
justify-content: flex-start; 메인축 방향 정렬 
justify-content: flex-end;  
justify-content: center;  
justify-content: space-between;  
justify-content: space-around;  
justify-content: space-evenly;  

align-items: stretch; 수직축 방향 정렬 
align-items: flex-start;  
align-items: flex-end;  
align-items: center;  
align-items: baseline;  

align-content: stretch;* wrap이 설정된 상태에서 아이템들의 행이 2줄 이상 되었을 때 수직충 방향 정렬하는 법/
align-content: flex-start;  
align-content: flex-end;  
align-content: center;  
align-content: space-between;  
align-content: space-around;  
align-content: space-evenly;  