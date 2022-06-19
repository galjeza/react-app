import styled from "styled-components";


const StyledDiv = styled.div`
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`

const Card = (props) =>{
    return ( 
            <StyledDiv className={props.className}>{props.children}</StyledDiv>
        )
}

export default Card;