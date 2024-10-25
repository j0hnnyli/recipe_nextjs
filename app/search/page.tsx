import React from "react";
import DisplaySearch from './DisplaySearch'
import SearchPageSearchbar from './SearchPageSearchbar'

type Props = {
  searchParams: {
    search: string
  };
};

const Search = ({ searchParams }: Props) => {
  const { search } = searchParams;
  
  return (
    <>
      <SearchPageSearchbar defaultvalue={search}/>
      <DisplaySearch query={search}/>
    </>
  );
};

export default Search;
