//import logo from "../public/imagens/logo.png"

import { Container } from "./style";

function Home() {
    return (
        <Container>
           
            <h2>Catálogo</h2>
            <ul>
                <li>
                    <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Filme Batman"/>
                    <span>Batman Dark Knight</span>
                </li>
                <li>
                    <img src="https://i.pinimg.com/originals/29/db/0c/29db0c0a687e36fd8a03f01d367fb14c.jpg" alt="Filme Viva a vida é uma festa"></img>
                    <span>Viva a vida é uma festa</span>
                </li>
                <li>
                    <img src="https://johto.legiaodosherois.com.br/wp-content/uploads/2023/01/legiao_jIOfk42XMuUm-scaled.jpg" alt="Filme Pânico 6"></img>
                    <span>Pânico 6</span>
                </li>
            </ul>

        </Container>
    )
}

export default Home;