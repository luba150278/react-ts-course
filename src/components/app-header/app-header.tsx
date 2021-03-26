/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import styled from 'styled-components';

const Header = styled.div<{ colored: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${(props) => (props.colored ? 'green' : 'black')};
    :hover {
      cursor: pointer;
      color: blue;
    }
  }

  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

type Liked = {
  liked: number;
  allPosts: number;
};
/* если хотим изменить div на ссылку например используем as="a" */
const AppHeader: React.FC<Liked> = ({ liked, allPosts }) => (
  <Header colored>
    <h1>Lyubov Myetolkina</h1>
    <h2>
      {allPosts} items, liked {liked}
    </h2>
  </Header>
);

export default AppHeader;
