// Booklist.js
import React from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
  padding: 50px 12px;
  max-width: 400px;
  height: 500px;
`;

const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`;

const PhotoContainer = styled.div`
  text-align: center;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 150px;
  object-fit: cover;
  align-items: center;
  border: ${(props) => `1px solid #000`};
`;

const Title = styled.h2`
  color: #000;
  font-weight: 300;
`;

const Authors = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`;

const Description = styled.p`
  color: #000;
  font-weight: 300;
`;

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #000;
  cursor: pointer;
  border: 1px solid #000;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;

const BookCard = ({ title, authors, img, description }) => (
  <StyledRoot>
    <StyledContainer>
      <PhotoContainer>
        <Photo src={img} />
      </PhotoContainer>
      <Title>{title}</Title>
      <Authors>{authors}</Authors>
      <Description>{description}</Description>
      <ActionButton>0 Comments</ActionButton>
      <ActionButton>0 Likes</ActionButton>
      <ActionButton>0 Views</ActionButton>
    </StyledContainer>
  </StyledRoot>
);
export default BookCard;
