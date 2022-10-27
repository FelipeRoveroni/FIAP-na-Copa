import styled from "styled-components";



export const LoginComponente = styled.section`
    /* min-height: 100vh; */
    border: 5px solid black;
    border-radius: 10px;
    color: black;
    font-size: 1.2rem;
    margin:  18.5rem 0rem;
    padding: 1rem 1rem;
    display: grid;
    h1{
        color: blueviolet;
        font-size: 3rem;
        text-transform: uppercase;
        display: block;
        width: 100%;
        text-align: center;
    }
    form{
        width: 600px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        fieldset{
            border: 0;
            input{
                width: 100%;
            }
        }
    }
`;

export const AppComponente = styled.h1`
    background: rgb(0,156,59);
    background: linear-gradient(90deg, rgba(0,156,59,1) 0%, rgba(255,223,0,1) 20%, rgba(0,39,118,1) 40%, rgba(254,254,254,1) 50%, rgba(5,43,115,1) 60%, rgba(255,223,0,1) 80%, rgba(0,156,59,1) 100%);
    border: 1px solid black;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const RoutesComponente = styled.section`
    
`;

export const MenuComponente = styled.header`
    ul{
        display: flex;
        list-style:none;
        gap:0 20px;
        color: white;
        button{
            border-color: #3498db;
            color: #fff;
            box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
            -webkit-transition: all 150ms ease-in-out;
            transition: all 150ms ease-in-out;
            padding: 10px 20px;
            :hover{
                box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
            }
        }
        
    }
`;

export const FooterComponente = styled.section`
    background: rgb(0,156,59);
    background: linear-gradient(90deg, rgba(0,156,59,1) 0%, rgba(255,223,0,1) 20%, rgba(0,39,118,1) 40%, rgba(254,254,254,1) 50%, rgba(5,43,115,1) 60%, rgba(255,223,0,1) 80%, rgba(0,156,59,1) 100%);
    color: #FFF;
    width: 100%;
    height: 100px;    
    text-align: start;
`;





