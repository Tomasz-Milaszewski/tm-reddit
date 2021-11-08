import styled from 'styled-components';

export const EntryStyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: 1px solid orange;
  
  .entry-header-close {
    padding: 10px;
    border: 1px solid #37BEB0;
    background-color: #DBF5F0;
    border-radius: 5px;
    font-size: 14px;
    
    :hover {
        cursor: pointer;
        background-color: #A4E5E0;
    }
  }
`;