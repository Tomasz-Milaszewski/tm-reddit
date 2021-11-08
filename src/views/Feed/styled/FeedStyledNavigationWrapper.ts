import styled from 'styled-components';

export const FeedStyledNavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  min-height: 5vh;
  margin-top: 10px;
  
  .feed-navigation-button {
    width: 80px;
    margin: 0 5px;
    border: 1px solid #37BEB0;
    background-color: #DBF5F0;
    border-radius: 5px;
    font-size: 14px;
    
    :hover {
        cursor: pointer;
        background-color: #A4E5E0;
    }
  }
  
  .arrow-left {
    border: 1px solid black;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  
  .arrow-right {
    border: 1px solid black;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;