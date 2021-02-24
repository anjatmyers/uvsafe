import styled from 'styled-components';
// imsc shortcut

// sc shortcut


export const DivSC = styled.div`
    background-color: ${props => props.bgc || "purple"};
    
    `;

export const Paper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; 
`;


// const h1S = styled.h1`
//   background-color: grey;
// `;

// const h2 = styled.h2`
//   height: 300px; 
// `;