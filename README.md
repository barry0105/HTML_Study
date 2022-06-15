# Study - CSS

**Flex**<br>
1. apply to Container<br>

```
/*Declaration*/
display : flex;
display : inline-flex;

/*direction*/
flex-direction: row;
flex-direction: column;
flex-direction: row-reverse;
flex-direction: column-reverse;

/*wrap*/
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/*sort - Main*/
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around; 
justify-content: space-evenly;

/*sort - UpDown*/
align-items: stretch;
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;

/*sort - rows*/
align-content: stretch;
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```
2. apply to Flex items
```
/*setting default-size*/
flex-basis: auto; /*default*/
%, px, rem, content ... etc

/*grow items*/
flex-grow: 0; /*default*/

/*minimize-items*/
flex-shrink: 1; /*default*/

/*flex-grow, flex-shrink, flex-basis*/
flex: 1;
/* flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
flex: 1 1 auto;
/* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */
flex: 1 500px;
/* flex-grow: 1; flex-shrink: 1; flex-basis: 500px; */
  
/*sort UpDown*/
align-self: auto;
align-self: stretch;
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: baseline;

/*order items*/
order: numbers;

/*position order*/
z-index: number;
```
