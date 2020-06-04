import React from 'react';
import styled from 'styled-components';
import { ServerType } from '../../types/types';

const Wrap = styled.article`
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 1px 2px 4px #888;
  padding: 16px;
`;

const Title = styled.h3`
  margin-top: 0;
`;

export default function ServerItem({ name, status }: ServerType) {
  return (
    <Wrap>
      <Title>{name}</Title>
      {status}
    </Wrap>
  );
}
