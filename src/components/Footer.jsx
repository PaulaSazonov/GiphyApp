import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterWrapper>
            Powered By GIPHY
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    background-color: #009ddc;
    text-align: center;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 1.5rem;
    `;
