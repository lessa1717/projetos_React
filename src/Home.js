//import logo from "../pubMoviec/imagens/logo.png"

import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";
import { APIKEY } from "./config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Details from "./details/Details";

function Home() {

    const img_path = 'https://image.tmdb.org/t/p/w500/'
    const [movies, setMovies] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-br-US&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            setMovies(data.results)
        })
    }, []) 


    // const movies = [
    //     {
    //         title: "Batman - Dark Knight",
    //         image_url: "https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg"
    //     },
    //     {
    //         title: "Coco",
    //         image_url: "https://i.pinimg.com/originals/29/db/0c/29db0c0a687e36fd8a03f01d367fb14c.jpg"
    //     },
    //     {
    //         title: "Panico 6",
    //         image_url: "https://johto.legiaodosherois.com.br/wp-content/uploads/2023/01/legiao_jIOfk42XMuUm-scaled.jpg"
    //     }
    // ]


    return (
        <Container>

            <h2>Catálogo</h2>
            <MovieList>
                {
                    movies.map(movie => {
                        return (
                            <Movie key={movie.id}>
                              <Link to={`/details/${movie.id}`}>

                                    <img src={`${img_path}${movie.poster_path}`} alt={movie.title}/>
                                    </Link>
                                <span>{movie.title}</span>
                               
                            </Movie>

                        )
                    })
                }


                <Movie>
                    <a href="https://www.google.com">
                        <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Filme Batman" />
                    </a>
                    <span>Batman - Dark Knight</span>
                </Movie>
                <Movie>
                    <a href="https://www.google.com">
                        <img src="https://i.pinimg.com/originals/29/db/0c/29db0c0a687e36fd8a03f01d367fb14c.jpg" alt="Filme Coco"/>
                    </a>
                    <span>Coco</span>
                </Movie>
                <Movie>
                    <a href="https://www.google.com">
                        <img src="https://johto.legiaodosherois.com.br/wp-content/uploads/2023/01/legiao_jIOfk42XMuUm-scaled.jpg" alt="Filme Pânico 6"/>
                    </a>
                    <span>Pânico 6</span>
                </Movie>
            </MovieList>

        </Container>
    )
}

export default Home;