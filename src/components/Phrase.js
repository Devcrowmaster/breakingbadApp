import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const tablet = 'min-width:760px';

const PhraseContainer = styled.div`
  padding: 1.5rem;
  border-radius: .5rem;
  background-color: white;
  width: 15rem;
  margin: 3rem auto auto auto;
  position: relative;
  @media (${tablet}){
    width: 30rem;
  }
  &::before{
    content: open-quote;
    font-size: 8rem;
    color: #000;
    position: absolute;
    left: -1rem;
    top: -2rem;
  }
`;

const PhraseTitle = styled.h1`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  font-size: 1.2rem;
  @media (${tablet}){
    font-size: 1.8rem;
  }
`;

const PhraseText = styled.p`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  line-height: 1.5;
`;

const Phrase = ({phrase}) => {

  const { author,quote } = phrase;

  return (
    <PhraseContainer>
      <PhraseTitle>{author}</PhraseTitle>
      <PhraseText>{quote}</PhraseText>
    </PhraseContainer>
  );
}

Phrase.propTypes = {
  phrase: PropTypes.object.isRequired
}
export default Phrase;