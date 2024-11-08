import styled from 'styled-components';
import { Logo } from './Logo';
import { Filter } from './Filter';
export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Filter />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
