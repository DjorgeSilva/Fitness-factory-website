import React from 'react'
import logoIMG from "../../assets/logo.png"
import logoIMGDesk from "../../assets/logodesktop.png"
import {
    Nav,
    BoxLogo,
    BoxIcon,
    IconMenu,
    IconMenuClose,
    MenuIcons,
    SearchIcon,
    SideBar,
    CartIcon,
    Links,
    Linkss,
    MenuDesktop
} from "./NavElements"

export const NavMenu = ({ isOpen, setIsOpen, sizeScreen }) => {
    return (
        <>
            <Nav>
                <BoxLogo>
                    <Links to="/">
                        {(sizeScreen < 950 ? <img src={logoIMG} alt="Logomarca Fitness Factory" /> : <img src={logoIMGDesk} alt="Logomarca Fitness Factory" />)}
                    </Links>
                </BoxLogo>

                <BoxIcon>
                    {isOpen ? <IconMenuClose onClick={() => setIsOpen(!isOpen)} /> : <IconMenu onClick={() => setIsOpen(!isOpen)} />}
                </BoxIcon>

                <MenuDesktop>
                    <nav>
                        <ul>
                            <li>
                                <Linkss to="/beneficios">Nossos Benefícios</Linkss>
                            </li>
                            <li>
                                <Linkss to="/taxas">Taxas</Linkss>
                            </li>
                            <li>
                                <Linkss to="/galeria">Galeria</Linkss>
                            </li>
                            <li>
                                <Linkss to="/noticias">Notícias e Novidades</Linkss>
                            </li>
                            <li>
                                <Linkss to="/contato">Contato</Linkss>
                            </li>
                        </ul>
                    </nav>
                </MenuDesktop>

                <MenuIcons>
                    <SearchIcon />
                    <CartIcon />
                </MenuIcons>
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
