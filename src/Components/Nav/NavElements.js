import styled from "styled-components"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoClose} from "react-icons/io5"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background: ${props=> props.theme.secundary_color};
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${props=> props.theme.primary_color};
    z-index: 10000;
    position: relative;
    @media (min-width: 950px){
        background: transparent;
        border-bottom: none;
    }
`

export const BoxLogo = styled.nav`
    width: 20%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 50px;
    }
    
`
export const BoxIcon = styled.nav`
    width: 20%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const IconMenu = styled(GiHamburgerMenu)`
    cursor: pointer;
    font-size: 30px;
    float: right;
    color: ${props=> props.theme.primary_color};
`;  

export const IconMenuClose = styled(IoClose)`
    cursor: pointer;
    font-size: 30px;
    float: right;
    color: ${props=> props.theme.primary_color};
`;  

export const SideBar = styled.div`
    width: 100%;
    height: 25vh;
    position: relative;
    top: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    z-index: 0;
    transition: all .1s; 
    
    nav{
        width: 100%;
        ul{
            list-style: none;
            height:100%;
            li{
                width: 100%;
                height: 45px;
                border-bottom: 1px solid #CDCDCD;
                padding: 10px;

                &:last-child{
                border: 0px solid #CDCDCD;
            }
            }
        }
    }
`

export const Links = styled(Link)`
    font-size: 1.2rem;
    color: ${props=> props.theme.ternary_color};
    font-weight: 500;
`;  