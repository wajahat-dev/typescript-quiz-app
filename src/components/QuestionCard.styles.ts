import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 1000px;
    /* background: #ebfeff; */
    border-radius: 10px;
    border: 2px solid white;
    padding: 0 220px;
    text-align: center;
    box-shadow: 21px 25px 20px -2px rgba(10,20,20,0.75);

    p{
        font-size: 1rem;
    }
`
type ButtonWraperProps={
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper  = styled.div<ButtonWraperProps>`

    transition: all 0.3s ease;
    :hover{
        opacity: 0.8;
    }

    button{
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${
            ({correct,userClicked})=>
            correct ? 'linear-gradiant(90deg, #56ffa7, #59bc86'
            : !correct && userClicked ?
            'linear-gradiant(90deg, #ff5656, #c16868'
            :'linear-gradiant(90deg, #56ccff, #6eafb4'
        };
        border: 3px solid #ffffff;
        box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
        border-radius: 10px;
        color: #ffffff;
        box-shadow: 1px 2px 0px rgba(0,0,0,0.25);
    }
`