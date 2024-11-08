import styled from 'styled-components';
import { useData } from '../providers';
import { useState } from 'react';

export function FilterSearch({ placeholder, type }) {
  const {
    setNameFilter,
    setSpeciesFilter,
    setTypeFilter,
    updateURL
  } = useData();
  const [search, setSearch] = useState();
  const handleSearch = () => {
    updateURL({ [type]: search });
    switch (type) {
      case 'name':
        setNameFilter(search);
        break;
      case 'species':
        setSpeciesFilter(search);
        break;
      case 'type':
        setTypeFilter(search);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    switch (type) {
      case 'name':
        setNameFilter('');
        setSearch('');
        break;
      case 'species':
        setSpeciesFilter('');
        setSearch('');
        break;
      case 'type':
        setTypeFilter('');
        setSearch('');
        break;
      default:
        break;
    }
  };
  return (
    <FilterSearchContainer>
      <FilterInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
      />
      <ButtonContainer>
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
      </ButtonContainer>
    </FilterSearchContainer>
  );
}

const FilterSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterInput = styled.input`
  background-color: #263750;
  padding: 10px 20px;
  color: #fff;
  border: none;
  font-size: 18px;
  outline: none;
  border-radius: 10px;
`;

const SearchButton = styled.button`
  background-color: #263750;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  width: fit-content;
  border-radius: 10px;
  cursor: pointer;
`;

const ResetButton = styled.button`
  background-color: #ff5152;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  width: fit-content;
  border-radius: 10px;
  cursor: pointer;
`;
