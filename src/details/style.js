import styled from "styled-components";

export const Container = styled.div`
    padding: 0 3rem;
    
    h1{
    margin: 3rem 0;
    text-align: center;
    font-size: 2.5rem;
    border-radius: 1rem;
    color: #FFFFFF;
    background: rgba(51, 51, 51, 0);
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
}


    padding: 15px;

h2 {
  text-align: center;
  margin: 4rem 0;
  
}

.details{
    display: flex;
    
    justify-content: center;
    align-items: center;
    

}

.info{

    
    display: flex; 
    flex-direction: column;
    gap: 30px;
    max-width: 40%;
    margin-left: 3rem;
    align-items: center;
}

.sinopse{
    display: flex;
    text-align: center;
    max-width: 50%;
    align-items: flex-start;
   
}


.release{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.5;
}

.botaoInfo{
    
    border-radius: 1rem;
    background-color: gray;
    font-weight: 500;
    color: #FFF;
    font-size: 0.9em;
    margin-top: 1rem;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;

}
.botaoInfo:hover{
    background-color: blue ;
}

img {
  width: 450px;
  border-radius: 10px;
  margin-bottom: 1rem;
 
}
span {
  font-weight: bold;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  letter-spacing: 2px;
  line-height: 100%;
  margin-bottom: 1rem;
}
    
`;