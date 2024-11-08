import styled from 'styled-components';
import { Text } from '../common';

export function PopupInfo({ origin, location }) {
  return (
    <StyledPopupInfo>
      {origin?.name !== 'unknown' && (
        <PopupOrigin>
          <Text>First Seen in:</Text>
          <PopupOriginValue>{origin?.name}</PopupOriginValue>
        </PopupOrigin>
      )}

      {location?.name !== 'unknown' && (
        <PopupLastLocation>
          <Text>Last known location:</Text>
          <PopupLastLocationValue>{location?.name}</PopupLastLocationValue>
        </PopupLastLocation>
      )}
    </StyledPopupInfo>
  );
}

const StyledPopupInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-direction: ${window.screen.width < 600 ? 'column' : 'row'};
`;

const PopupOrigin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  max-width: ${window.screen.width < 600 ? '100%' : '48%'};
`;

const PopupLastLocation = styled(PopupOrigin)``;

const PopupOriginValue = styled.p`
  color: #83bf46;
`;

const PopupLastLocationValue = styled(PopupOriginValue)``;
