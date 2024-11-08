import styled from 'styled-components';

export function CardInfo({ children }) {
  return <StyledCardInfo>{children}</StyledCardInfo>;
}

const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
`;
