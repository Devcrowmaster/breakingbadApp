import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled'
import Phrase from './components/Phrase';

const tablet = 'min-width:760px';
const desktop = 'min-width:1000px';

const Container = styled.div`
  background: linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  padding: 5.5rem 0;
  text-align: center;
  min-height:100vh;
  @media (${tablet}){
    padding-top: 8rem;
  }
`;
const Img = styled.img`
  width: 15rem;
  @media (${tablet}){
    width: 20rem;
  }
  @media (${desktop}){
    width: 25rem;
  }
`;

const Button = styled.button`
  margin-top: 3rem;
  appearance: none;
  outline: none;
  padding: 1rem 2rem;
  border: 1px solid #000;
  color: white;
  font-weight: bold;
  border-radius: 3rem;
  background: linear-gradient(top left, #007d35 0% , #007d35 40%, #0f574e 100%);
  background: -webkit-linear-gradient(top left, #007d35 0% , #007d35 40%, #0f574e 100%);
  transition: background-size 300ms;
  cursor: pointer;
  &:hover{
    background-size: 15rem;
  }
`;

function App() {

  const [phrase, setPhrase] = useState({});

  const handleApi = async()=>{
    const api = await fetch('https://www.breakingbadapi.com/api/quote/random');
    const data = await api.json();
    setPhrase(data[0]);
    // console.log(data[0])
  }

  useEffect(()=>{
    handleApi();
  },[])


  return (
    <Container>
      <Img src={logo} alt="Logo"/>
      <Phrase
        phrase={phrase}
      />
      <Button
        onClick={handleApi}
      >Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
