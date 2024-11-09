import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useData } from '../providers';

export function FilterSelect({ data, type, title }) {
  const {
    statusFilter,
    genderFilter,
    setStatusFilter,
    setGenderFilter
  } = useData();
  const [select, setSelect] = useState('');

  useEffect(() => {
    // Обновляем состояние select, когда изменяются фильтры в контексте
    if (type === 'status') {
      setSelect(statusFilter || ''); // если статус фильтр пустой, сбрасываем select
    } else if (type === 'gender') {
      setSelect(genderFilter || ''); // если фильтр пустой, сбрасываем select
    }
  }, [statusFilter, genderFilter, type]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelect(value);

    // Обновляем соответствующий фильтр в DataProvider
    if (type === 'status') {
      setStatusFilter(value === 'all' ? '' : value); // Если выбрано "all", сбрасываем фильтр
    } else if (type === 'gender') {
      setGenderFilter(value === 'all' ? '' : value);
    }
  };

  return (
    <FilterSelectContainer>
      <SelectFilter value={select} onChange={handleChange}>
        <FilterSelectOption disabled value="">
          {`Select ${title}`}
        </FilterSelectOption>
        {data?.map((option) => (
          <FilterSelectOption key={option.name} value={option.value}>
            {option.name}
          </FilterSelectOption>
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

const FilterSelectOption = styled.option``;
