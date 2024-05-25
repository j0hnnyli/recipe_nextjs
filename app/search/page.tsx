import React from "react";
import DisplaySearch from './DisplaySearch'
import SearchPageSearchbar from './SearchPageSearchbar'

type Props = {
  searchParams: {
    search: string
  };
};

const Search = async ({ searchParams }: Props) => {
  const { search } = searchParams

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center">
        <h2 className="text-2xl"> 
          Search :
        </h2>
        <SearchPageSearchbar defaultvalue={search}/>
      </div>

      <DisplaySearch query={search}/>
    </>
  );
};

export default Search;
