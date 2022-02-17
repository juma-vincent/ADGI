import styled from 'styled-components';

export const DotContainer = styled.span`
    padding: 5.5px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${(props)=> props.active ? 'rgba(164, 87, 236, 0.8)' : 'rgba(21, 28, 58, 0.68)'};
`;

export const DotsContainer = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

