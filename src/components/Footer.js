import styled from "styled-components";

export default function Footer({ children }) {
    return (
        <FooterContainer>
            <span>0</span>
            {children}
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    width: 300px;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 120px;
    display: flex;
   
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`