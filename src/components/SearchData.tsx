import React, { useState } from "react";
import StyledWrapper from "../style/styledWrapper";

interface SearchDataProps {
  onSearchChange?: (query: string) => void;
}

const SearchData: React.FC<SearchDataProps> = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  return (
    <StyledWrapper>
      <div className="InputContainer w-[320px]  mb-[20px]">
        <input
          type="text"
          name="text"
          className="input"
          id="input"
          placeholder="Search by initials"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            if (onSearchChange) onSearchChange(value);
          }}
        />
        <label htmlFor="input" className="labelforsearch">
          <svg viewBox="0 0 512 512" className="searchIcon">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </label>
        <div className="border" />
      </div>
    </StyledWrapper>
  );
};

export default SearchData;