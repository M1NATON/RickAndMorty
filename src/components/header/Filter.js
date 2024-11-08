import styled from 'styled-components';
import { FilterSearch } from './FilterSearch';
import { FilterSelect } from './FilterSelect';

export function Filter() {
  const arrOptionData = [
    {
      name: 'All',
      value: ''
    },
    {
      name: 'Alive',
      value: 'alive'
    },
    {
      name: 'Dead',
      value: 'dead'
    },
    {
      name: 'Unknown',
      value: 'unknown'
    }
  ];
  const arrOptionsGenderData = [
    {
      name: 'All',
      value: ''
    },
    {
      name: 'Female',
      value: 'female'
    },
    {
      name: 'Male',
      value: 'male'
    },
    {
      name: 'Unknown',
      value: 'unknown'
    }
  ];
  return (
    <FilterContainer>
      <FilterSearch placeholder={'Search by name...'} type={'name'} />
      <FilterSearch placeholder={'Search by species...'} type={'species'} />
      <FilterSearch placeholder={'Search by type...'} type={'type'} />
      <FilterSelectContainer>
        <FilterSelect data={arrOptionData} type={'status'} title={'status'} />
        <FilterSelect
          data={arrOptionsGenderData}
          type={'gender'}
          title={'gender'}
        />
      </FilterSelectContainer>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 5%;
  ${window.screen.width < 1500 &&
  `flex-wrap: wrap; justify-content: space-between;`};
  ${window.screen.width < 680 && `justify-content: center;`};
`;

const FilterSelectContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
