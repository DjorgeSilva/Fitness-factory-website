import React, { useState, useEffect } from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyles.js"
import { NavMenu } from "./Components/Nav/Nav"
import { Home } from "./Routes/Home/Home"
import { Beneficios } from "./Routes/Beneficios/Beneficios"
import { Taxas } from "./Routes/Taxas/Taxas"
import { Galeria } from "./Routes/Galeria/Galeria"
import { Noticias } from "./Routes/Noticias/Noticias"
import { Contato } from "./Routes/Contato/Contato"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = {
  primary_color: "#DD3333",
  secundary_color: "#fff",
  ternary_color: "#121212",
  font_color: "#333",
  font_padrao: "Roboto, sans-serif"
};


function App() {

  const [isOpen, setIsOpen] = useState(false);

  // retorna o tamanho da tela
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
  // retorna o tamanho da tela

  const AuthenticatedRoutes = () => {
    return (
      <Router>
        <Route path="/beneficios" component={Beneficios} />
        <Route path="/taxas" component={Taxas} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/noticias" component={Noticias} />
        <Route path="/contato" component={Contato} />
      </Router>
    )
  }

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} sizeScreen={size.width}/>
          <Route path="/" exact>
            <Home isOpen={isOpen} />
          </Route>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
