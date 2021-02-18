import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    top: ${({ isOpen }) => (isOpen ? '-0px' : '-245px')};
    transition: all .1s; 

    @media (min-width: 950px){
        top: ${({ isOpen }) => (isOpen ? '-0px' : '-330px')};
    }
`

export const Banner = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    img{
        width: 100%;
        border-bottom: 2px solid ${props => props.theme.primary_color};
        object-fit: cover;
    }
`

export const BannerTxt = styled.div`
    width: 100%;
    height: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme.secundary_color};

    h1{
        font-size: clamp(1.5rem, 5vw, 4rem);
        text-transform: uppercase;

        span{
            color: ${props => props.theme.primary_color};
        }
    }
    p{
        font-size: clamp(.8rem, 3vw, 2rem);
        margin: 10px 0;
        font-weight: bolder;
    }
    button{
        cursor: pointer;
        padding: 10px 30px;
        border-radius: 100px;
        border: none;
        border: 1px solid #ec5f0d;
        color: ${props => props.theme.secundary_color};;
        background: transparent;
        text-transform: uppercase;
        font-size: clamp(.8rem, 2vw, 1rem);
        margin: 10px 0;
        outline: none;
    }

`

export const Main = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: -4px;
`
export const Info = styled.div`
    width: 100%;
    height: fit-content;

    @media (min-width: 950px){
        height: 100vh;
        display: flex;
    }

`

export const InfoImage = styled.div`
    width: 100%;
    height: inherit;
    background: ${props=> props. theme. primary_color};
    img{
        width: 100%;
        object-fit: cover;

        @media (min-width: 950px){
            width: 70%;
            margin-top: 200px;
            margin-left: 80px;
    }
    }
`;

export const InfoTxt = styled.div`
    width: 100%;
    height: inherit;
    background: #F5F5F5;
`;

export const ItemInfoTxt = styled.div`
    width: 100%;
    height: fit-content;
    padding: 30px 30px;
    h1{
        font-size: clamp(1.5rem, 2vw, 2rem);
        color: ${props=> props.theme.ternary_color};
        margin-bottom: 10px;
    }
    p{
        color: #636363;
        line-height:28px;
    }

    @media (min-width: 950px){
        margin-top: 30px;
    }

    @media (min-width: 1150px){
        margin-top: 90px;
    }

`;
