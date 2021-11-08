import styled from 'styled-components';

export const StyledLoader = styled.div`
  margin: auto;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 80px;
  height: 80px;
  animation: spin 3s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;