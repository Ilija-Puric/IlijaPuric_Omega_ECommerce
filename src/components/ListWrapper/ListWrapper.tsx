import styled from 'styled-components';
import { ListWrapperProps } from '../../types';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  list-style: none;
  padding-left: 0;
  flex-wrap: wrap;

  &.wrapper--shrink {
    grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  }
`;

const ListWrapper = ({ children, total }: ListWrapperProps) => {
  return <Wrapper className={`${total <= 6 && total >= 1 ? 'wrapper--shrink' : ''}`}>{children}</Wrapper>;
};

export default ListWrapper;
