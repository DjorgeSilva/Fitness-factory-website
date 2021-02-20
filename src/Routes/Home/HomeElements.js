import styled from "styled-components"
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io"
import { icons } from "react-icons";

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
    height: 100vh;

    @media (min-width: 950px){
        height: 100vh;
        display: flex;
    }

`

export const InfoImage = styled.div`
    width: 100%;
    height: inherit;
    background: ${props => props.theme.primary_color};
    display: flex;
        justify-content: center;
        align-items: center;
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
    height: fit-content;
    position: relative;
`;

export const ItemInfoTxt = styled.div`
    width: 100%;
    height: fit-content;
    padding: 40px;
    img{
        width: 35px;
        float: left;
        margin: 20px 10px;
    }
    h1{
        font-size: clamp(1.5rem, 2vw, 2rem);
        color: ${props => props.theme.ternary_color};
        margin: 20px 0;
        float: left;

        span{
            color: ${props => props.theme.primary_color};
        }
    }

    h2{
        font-size: clamp(1.5rem, 2vw, 2rem);
        color: ${props => props.theme.ternary_color};
        margin: 0px 0;
        float: left;
    }
    p{
        color: #636363;
        line-height:28px;
        float: left;
        margin: 25px 0;
    }

    @media (max-width: 950px){
        padding-top: 150px;
    }

    @media (min-width: 950px){
        padding-top: 30px;
    }

    @media (min-width: 1150px){
        margin-top: 120px;
    }

`;

export const Links = styled(Link)`
    position: absolute;
    bottom: 0;
    right: 0;
`;


export const SumplementInfo = styled.div`
    width: 100%;
    height: fit-content;
    
    img{
        width: 80%;
        margin-top: 50px;

        @media (min-width: 1200px){
            width: 70%;
            margin-top: 200px
        }
    }

    p{
        width: 100%;

    }

    ul{
        width: 100%;
        display: block;
        padding-left: 30px; 
        float: left;
        &:last-of-type{
            margin-bottom: 80px;
        }
        li{
            width: 100%;
            color: #636363; 
            padding: 4px 0;
        }
    }

    @media (min-width: 950px){
        height: 100vh;
        display: flex;
    }

`

export const InfoImageSumplementos = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        object-fit: cover;
        margin-top: 0;

        @media (min-width: 950px){
            width: 70%;
            margin-top: 200px;
            margin-left: 80px;
    }
    }

`

export const Membership = styled.div`
    width: 100%;
    height: 70vh;
    margin-top: 30px;
    object-position: 50% 50%;
    position: relative;
    color:${props => props.theme.secundary_color};

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
        z-index:-1;
        object-position: 50% 10%;
    }


    @media (min-width: 950px){
        margin-top: 280px;
    }
`

export const InnerImageTxt = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: clamp(2rem, 2.5vw, 3rem);
        width: 80%;
        text-align: center;
        text-shadow: 3px 3px 2px #333;

        span{
            color: ${props => props.theme.primary_color};
        }
    }
    button{
        outline: none;
        cursor: pointer;
        margin-top: 40px;
        padding: 15px 50px;
        border: 3px solid ${props => props.theme.primary_color};
        text-transform: uppercase;
        border-radius: 100px;
        background: ${props => props.theme.primary_color};
        color: ${props => props.theme.secundary_color};
        font-size: 1rem;
        font-weight: bolder;

        &:hover{
            background: transparent;
        }
    }
`