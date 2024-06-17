// src/SearchComponent.tsx
import React, { useState } from "react";
import Papa from "papaparse";
import Modal from "./Modal";

interface DataRow {
  Name: string;
  ID: string;
  Score: string;
  // value: string;
}

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [results, setResults] = useState<DataRow[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = () => {
    const sheetUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCknWNN4lpM4fsXtt2Dq0YuQ7ad25PT6AN3zGNIi4IbeE5NrM5JDrEiDP6Kquvu7KDUAhyLYKerMKb/pub?gid=0&single=true&output=csv"; // Use your published CSV URL

    fetch(sheetUrl)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse<DataRow>(data, { header: true }).data;
        const filteredData = parsedData.filter((row) => row.ID === searchQuery);
        setResults(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="InputContainer">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index}>
              <p>Name: {result.Name}</p>
              <p>ID: {result.ID}</p>
              <p>Score: {result.Score}</p>
            </div>
          ))) : (<p>No results found</p>)}
      </div>


       {/* <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index}>
              <p>Name: {result.Name}</p>
              <p>ID: {result.ID}</p>
              <p>Score: {result.Score}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </Modal> */}


    </div>
  );
};

export default SearchComponent;
