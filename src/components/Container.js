import React, { Component } from "react";
import Gif from "./Gif";
import axios from "axios";
import styled from 'styled-components';

class Container extends Component {
  apikey = process.env.REACT_APP_APIKEY;
  state = {
    gifs: []
  };

  componentDidMount() {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=simpsons&api_key=${this.apikey}&limit=20&lang=en`
      )
      .then(response => {
        this.setState({ gifs: response.data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
        <GifGrid>
            {this.state.gifs.map(gif => <Gif key={gif.id} gifdata={gif} />)}
        </GifGrid>
        )
  }
}

const GifGrid = styled.div`
    padding: 8rem 5rem;
    display: grid;
    grid-template-columns: repeat( 4, 1fr);
    grid-template-rows: auto;
    grid-gap: 3rem;
    `
export default Container;
