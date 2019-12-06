import React, { Component } from 'react';
import styled from 'styled-components';

export default class Gif extends Component {
    render() {
        console.log(this.props.gifdata)
        return (
            <GifWrapper>
                <img src={this.props.gifdata.images.fixed_width.url} alt="Gif"></img>
            </GifWrapper>
        )
    }
}

const GifWrapper = styled.div`
    padding: 2rem;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
    display: flex:
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`