import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useData } from './providers';

export function Pagination() {
  const [pages, setPages] = useState([]);
  const { info, activePage, setActivePage, updateURL } = useData();
  const pageClickHandler = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(page);
    updateURL({ page });
  };
  useEffect(() => {
    if (info.pages) {
      const createdPages = Array.from({ length: info.pages }, (_, i) => i + 1);
      setPages(createdPages);
    }
  }, [info.pages]);

  if (pages.length <= 1) return null;

  return (
    <StyledPagination>
      {activePage > 1 && (
        <>
          <Page onClick={() => pageClickHandler(1)}>« First</Page>
          {activePage > 2 && <Ellipsis>...</Ellipsis>}
        </>
      )}
      {activePage > 1 && (
        <Page onClick={() => pageClickHandler(activePage - 1)}>
          {activePage - 1}
        </Page>
      )}
      <Page active>{activePage}</Page>
      {activePage < pages.length && (
        <Page onClick={() => pageClickHandler(+activePage + 1)}>
          {+activePage + 1}
        </Page>
      )}
      {activePage < pages.length && (
        <>
          {activePage < pages.length - 1 && <Ellipsis>...</Ellipsis>}
          <Page onClick={() => pageClickHandler(pages.length)}>Last »</Page>
        </>
      )}
    </StyledPagination>
  );
}

const StyledPagination = styled.div`
  width: 100%;
  text-align: center;
`;

const Page = styled.span`
  color: #fff;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  transition: color 0.2s;
  ${({ active }) => active && 'color: #83bf46'};

  &:hover {
    color: #83bf46;
  }
`;

const Ellipsis = styled(Page)`
  cursor: default;

  &:hover {
    color: #fff;
  }
`;
