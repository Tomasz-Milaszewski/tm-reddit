import styled from 'styled-components';

export const FeedStyledHeaderPagination = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  
  .feed-pagination-button {
    margin-left: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #37BEB0;
    background-color: #DBF5F0;
    
    :hover {
        cursor: pointer;
        background-color: #A4E5E0;
    }
    
    &.active {
        background-color: #37BEB0;
    }
  }
`;