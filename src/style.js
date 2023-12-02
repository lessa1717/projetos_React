// import styled from 'styled-components';

// export const Container = styled.div`
//   h2 {
//     text-align: center;
//     margin: 4rem 0;
//   }

//   img {
//     width: 200px;
//     height: 300px;
//     border-radius: 0.7rem;
//     margin-bottom: 0.5rem;
//   }

//   span {
//     text-align: center;
//     font-weight: bold;
//     font-size: 100%;
//   }

//   a {
//     transition: all 0.35s; 
//   }

//   a:hover {
//     transform: scale(1.1);
//   }
// `;

// export const MovieList = styled.ul`
//   list-style: none;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   column-gap: 3rem;
//   row-gap: 4rem;
 
// `;

// export const Movie = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* background: gray; */
//   justify-content: center;
//   border-radius: 0.5rem;
// `;

import styled from "styled-components";

export const Container = styled.div`

padding: 15px;

  h2 {
    text-align: center;
    margin: 4rem 0;
    
  }

  header img{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .logoCine img{
   display: flex;
   justify-content: center;
   align-items: center;

 }

  img {
    width: 180px;
    height: 250px;
    border-radius: 10px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  span {
    font-weight: bold;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    letter-spacing: 2px;
  }
  .movie {
    transition: all ease-in-out 0.2s;
    text-align: center;
  }
  .movie:hover{
    transform: scale(1.1);
    text-decoration: underline 2px #20c3c1;
  }

`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
