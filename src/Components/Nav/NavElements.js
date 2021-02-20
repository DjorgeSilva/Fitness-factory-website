import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { FiSearch } from "react-icons/fi"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background: ${props => props.theme.secundary_color};
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${props => props.theme.primary_color};
    z-index: 10000;
    position: relative;
    @media (min-width: 950px){
        background: transparent;
        border-bottom: none;
    }

    @media (min-width: 1300px){
        width: 1300px;
        margin: 0 auto;
    }
`

export const BoxLogo = styled.div`
    width: 20%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 50px;
    }

    @media (min-width: 950px){
        width: 10%;
    }
    
`
export const BoxIcon = styled.nav`
    width: 20%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 950px){
        display: none;
    }

`

export const IconMenu = styled(GiHamburgerMenu)`
    cursor: pointer;
    font-size: 30px;
    float: right;
    color: ${props => props.theme.primary_color};

    @media (min-width: 950px){
        display: none;
    }
`;

export const IconMenuClose = styled(IoClose)`
    cursor: pointer;
    font-size: 30px;
    float: right;
    color: ${props => props.theme.primary_color};
`;



export const MenuDesktop = styled.ul`
    display: none;

    @media (min-width: 950px){
        display: block;
        width: 80%;
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            display: inline-block;
            color: ${props => props.theme.secundary_color};
            margin-right: 20px;
        }
    }
`

export const MenuIcons = styled.div`
    display: none;

    @media (min-width: 950px){
        display: block;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const SearchIcon = styled(FiSearch)`
    cursor: pointer;
    width: 25%;
    color: ${props => props.theme.secundary_color};
    font-size: 1.5rem;
    border-right: 2px solid #fff;
`

export const CartIcon = styled(FaShoppingCart)`
    cursor: pointer;
    width: 25%;
    color: ${props => props.theme.secundary_color};
    font-size: 1.5rem;
`

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
    color: ${props => props.theme.ternary_color};
    font-weight: 500;
`;


export const Linkss = styled(Link)`
    font-size: 1rem;
    color: ${props => props.theme.secundary_color};
    font-weight: 500;
    text-transform: uppercase;
`;  