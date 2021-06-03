import styled, {createGlobalStyle} from 'styled-components'
import BGImage from './images/black.jpg'

export const GlobalStyle = createGlobalStyle`
    *{
        /* border: 2px solid #ffffff; */
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }    
html{
        height: 100%;
    }
    p{
        color: #ffffff
    }

    body{
        
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
`


export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    
    > p {
        color: #ffffff
      
    }

    .score{
        color: #ffffff;
        font-size: 2rem;
        margin:0px;

    }

    h1{
        font-family: Fascinate Impact;
        background-image: linear-gradient(90deg, rgba(165,182,193,1) 12%, rgba(159,50,196,1) 100%);;
        background-size: 100%;
        background-clip: text;
        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        --moz-text-fill-color: transparent;
        filter: drop-shadow(0 0 0.75rem crimson);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next{
        cursor: pointer;
        background: linear-gradient(90deg, rgba(165,182,193,1) 12%, rgba(118,50,196,1) 100%);
        box-shadow: 21px 25px 20px -9px rgba(0,0,0,0.75);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
    }
    .start{
        max-width: 200px;
        /* margin-right: 200px; */
        
    }

`



