import { useEffect, useState, useMemo, createContext, useContext } from 'react';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export function DataProvider({ children }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});

  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  useEffect(() => {
    if (isFirstLoad) {
      const urlParams = new URLSearchParams(window.location.search);

      const page = urlParams.get('page');
      const name = urlParams.get('name');
      const status = urlParams.get('status');
      const species = urlParams.get('species');
      const type = urlParams.get('type');
      const gender = urlParams.get('gender');

      if (page) setActivePage(Number(page));
      if (name) setNameFilter(name);
      if (status) setStatusFilter(status);
      if (species) setSpeciesFilter(species);
      if (type) setTypeFilter(type);
      if (gender) setGenderFilter(gender);

      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  const fetchData = async (url) => {
    setIsFetching(true);
    setIsError(false);

    try {
      const { data } = await axios.get(url);
      setCharacters(data.results);
      setInfo(data.info);
    } catch (e) {
      setIsError(true);
      console.error(e);
    } finally {
      setIsFetching(false);
    }
  };
  const buildURL = () => {
    const searchParams = new URLSearchParams();

    if (nameFilter) searchParams.append('name', nameFilter);
    if (statusFilter) searchParams.append('status', statusFilter);
    if (speciesFilter) searchParams.append('species', speciesFilter);
    if (typeFilter) searchParams.append('type', typeFilter);
    if (genderFilter) searchParams.append('gender', genderFilter);
    searchParams.append('page', activePage);

    return '?' + searchParams.toString();
  };
  const updateURL = (newFilters) => {
    if (newFilters.page) setActivePage(newFilters.page);
    if (newFilters.name !== undefined) setNameFilter(newFilters.name);
    if (newFilters.status !== undefined)
      setStatusFilter(newFilters.status || '');
    if (newFilters.species !== undefined)
      setSpeciesFilter(newFilters.species || '');
    if (newFilters.type !== undefined) setTypeFilter(newFilters.type || '');
    if (newFilters.gender !== undefined)
      setGenderFilter(newFilters.gender || '');
  };

  useEffect(() => {
    if (!isFirstLoad) {
      const queryString = buildURL();
      window.history.replaceState(null, '', queryString);
      fetchData(`${API_URL}${queryString}`);
    }
  }, [
    nameFilter,
    statusFilter,
    speciesFilter,
    typeFilter,
    genderFilter,
    activePage,
    isFirstLoad
  ]);

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      characters,
      isFetching,
      isError,
      info,
      setNameFilter,
      setStatusFilter,
      setSpeciesFilter,
      setTypeFilter,
      setGenderFilter,
      updateURL
    }),
    [activePage, characters, isFetching, isError, info]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});
export const useData = () => useContext(DataContext);
