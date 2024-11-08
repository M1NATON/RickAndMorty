import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useData } from '../providers';

export function FilterSelect({ data, type, title }) {
  const [select, setSelect] = useState('');
  const { setStatusFilter, setGenderFilter, updateURL } = useData();

  useEffect(() => {
    if (select !== '') {
      updateURL({ [type]: select });
      switch (type) {
        case 'status':
          setStatusFilter(select);
          break;
        case 'gender':
          setGenderFilter(select);
          break;
        default:
          break;
      }
    } else {
      updateURL({ [type]: '' });
      setStatusFilter('');
      setGenderFilter('');
    }
  }, [select, type, setStatusFilter, setGenderFilter]);

  return (
    <FilterSelectContainer>
      <SelectFilter value={select} onChange={(e) => setSelect(e.target.value)}>
        <FilterselectOption selected disabled value="">
          Select {title}
        </FilterselectOption>
        {data?.map((option) => (
          <FilterselectOption key={option.name} value={option.value}>
            {option.name}
          </FilterselectOption>
        ))}
      </SelectFilter>
    </FilterSelectContainer>
  );
}

const FilterSelectContainer = styled.div``;

const SelectFilter = styled.select`
  width: 259px;
  background-color: #263750;
  padding: 10px 20px;
  color: #fff;
  border: none;
  font-size: 18px;
  outline: none;
  border-radius: 10px;
`;

const FilterselectOption = styled.option``;
