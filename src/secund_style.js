import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
padding-top: 50px;
background-color:darkgray;
.main{
    display: "flex";
    flex-direction: "column";
    justify-content: "left";
}

.btn{
    padding: 40px 0px  ;
    display: flex;
}
.result{
    display:flex;
    flex-Direction:column;
    justify-Content:left;
    padding-Left:10px;
    border: 2px solid yellowgreen;
    margin-left:10px;
    width: 400px;   
  
}

h2{
  font-size: 22px;
  padding-right: 20px;
}

`

export const Title = styled.div`
display:flex;
justify-content: flex-start;
padding-left: 10px;

h1{
    display:flex;   
    font-size: 40px;
    background-color: aliceblue;
    color: black;
    justify-content: flex-start;
    width: 395px;
    align-items: center;
    padding-left: 10px;
    height: 90px;
    border-radius: 8px;

}

`
export const Button = styled.div`
padding: 7px 22px;
margin: 0 8px;
border-radius: 8px;
background-color:yellowgreen;
cursor: pointer;
font-size: 20px;
font-weight:600;

&:hover{
    background-color: #0000cc;
    color: white;
}

`