import styled from 'styled-components';
import widgetLogo from '../../assets/widget-logo.png';

export function Logo() {
  return <StyledLogo src={widgetLogo} alt="logo" />;
}

const StyledLogo = styled.img`
  max-width: 300px;
  user-select: none;
  margin: 0 auto 50px;
  ${window.screen.width < 930 && 'margin-bottom: 20px'};
`;
