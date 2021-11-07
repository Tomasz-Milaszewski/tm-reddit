import styled from 'styled-components';

export const EntryStyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: 1px solid orange;
  
  .entry-header-close {
      cursor: pointer;
  }
`;