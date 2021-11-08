import styled from 'styled-components';

export const FeedStyledEntriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  scrollbar-width: none;
`;
