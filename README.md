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
```
