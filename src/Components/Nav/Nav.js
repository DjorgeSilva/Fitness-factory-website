import React from 'react'
import logoIMG from "../../assets/logo.png"
import logoIMGDesk from "../../assets/logodesktop.png"
import {
    Nav,
    BoxLogo,
    BoxIcon,
    IconMenu,
    IconMenuClose,
    SideBar, 
    Links
} from "./NavElements"

export const NavMenu = ({ isOpen, setIsOpen, sizeScreen }) => {
    return (
        <>
            <Nav>
                <BoxLogo>
                    <Links to="/">
                        {(sizeScreen < 950 ? <img src={logoIMG} alt="Logomarca Fitness Factory"/> : <img src={logoIMGDesk} alt="Logomarca Fitness Factory"/>)}
                    </Links>
                </BoxLogo>

                <BoxIcon onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IconMenuClose/> : <IconMenu/>}
                </BoxIcon>
            </Nav>

            <SideBar isOpen={isOpen}>
                <nav>
                    <ul>
                        <li>
                            <Links to="/beneficios">Nossos Benefícios</Links>
                        </li>
                        <li>
                            <Links to="/taxas">Taxas</Links>
                        </li>
                        <li>
                            <Links to="/galeria">Galeria</Links>
                        </li>
                        <li>
                            <Links to="/noticias">Notícias e Novidades</Links>
                        </li>
                        <li>
                            <Links to="/contato">Contato</Links>
                        </li>
                    </ul>

                </nav>
            </SideBar>

        </>
    )
}
