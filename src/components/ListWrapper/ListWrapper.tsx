import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
  padding-left: 0;
  flex-wrap: wrap;
`;

type ListWrapperProps = {
  children: JSX.Element[];
};

const ListWrapper = ({ children }: ListWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ListWrapper;
