import styled from 'styled-components';

type LoginWrapperProps = {
  children: JSX.Element;
};

const LoginWrapper = ({ children }: LoginWrapperProps): JSX.Element => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 20px 16px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
  `;
  return <Wrapper>{children}</Wrapper>;
};

export default LoginWrapper;
