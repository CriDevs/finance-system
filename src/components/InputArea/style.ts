import styled from "styled-components";


export const Container = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
padding: 20px;
border-radius: 10px;
box-shadow: 0 0 5px #ccc;
background-color: #fff;
`


export const InputLabel = styled.label`
    flex: 1;
    margin-top: 10px;

`


export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`


export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 1px;
    font-size: 20px;
    border: 1px solid lightblue;
    border-radius: 5px;

`

export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;

`


export const Button = styled.button`
width: 100%;
height: 30px;
padding: 5px;
border: 1px solid lightblue;
border-radius: 5px;
background-color: lightblue;
color: black;
cursor: pointer;

&hover{
    background-color: blue;
    color: white;
}
`