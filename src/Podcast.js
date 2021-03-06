import React from 'react';
import styled from "styled-components";

const PodcastDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: white;
  border: 1px solid darkgray;
  text-align: left;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: forestgreen;
    color: white;
  }
`;

export function Podcast({id, name, series, time, flag, onClick}) {
    return (
        <PodcastDetails>
            <i>{series}</i>
            <p>{name}</p>
            <small>{time}</small>
            <small>{flag}</small>
            <button onClick={() => onClick({id, time, name, series})} disabled={flag === 'true'}>Download</button>
        </PodcastDetails>
    );
}