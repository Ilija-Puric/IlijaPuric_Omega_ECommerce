import styled from 'styled-components';
import { WrapperProps } from '../../types';

const Wrapper = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
  padding-left: 0;
  flex-wrap: wrap;
`;

const ListWrapper = ({ children }: WrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ListWrapper;
