// // import { Container } from "./style.js";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { APIKEY } from "../config/key";

// function Details() {

//     const {id} = useParams();
//     console.log(id);

//     const [movie, setMovie] = useState([]);

//     useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR&page=1`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)

//             const movie = {
//                 id,
//                 title: data.title,
//                 overview: data.overview,
//                 releaseDate: data.release_date

//             }
//             setMovie(movie)
//             // setMovie(data.results)
//         })
//     }, [id]) 

//     return (
//         <div>
//             {/* <Container>
//         <div className="movie"> */}
//             <h1>Detalhes do filme</h1>
//             {/* </div>

//         </Container> */}
//         </div>
//     )
// }


// export default Details;




import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKEY } from "../config/key";
import { Container } from "./style";

function Details() {
    const img_path = 'https://image.tmdb.org/t/p/w500/'
    const { id } = useParams()
    // o useParams esta transformando o id em uma referencia
    console.log(id)

    const [movie, setMovie] = useState([])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR&page=1`)

            .then((response) => response.json())
            .then((data) => {
                console.log(data)

                const movie = {
                    id,
                    title: data.title,
                    overview: data.overview,
                    releaseDate: data.release_date,
                    poster: data.poster_path

                }
                setMovie(movie);
            });
    }, [id]);


    return (
        <Container>
            <div className="details">
                <img src={`${img_path}${movie.poster}`} alt={movie.title} />
                <div className="info">
                    <h1>{movie.title}</h1>

                    <span className="sinopse">Sinopse: {movie.overview}</span>
                    <span className="release">Data de lançamento: {movie.releaseDate}
                    <Link to="/"><button className="botaoInfo">Retornar ao catálogo</button></Link>
                    </span>
                </div>
            </div>
        </Container>
    )
}


export default Details;