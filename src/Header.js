import { Container } from "./style";

function Header (){
    return(
        <Container>
           <div className="header">
         <img className="logoCine" src = "./imagens/logo.png" alt="logo"/>
            </div>     
        </Container>
    )
}

export default Header;