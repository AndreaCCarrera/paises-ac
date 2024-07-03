import React, { useState } from 'react';

interface Props {
  onSearch: (term: string) => void;
}

export function Searcher({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange} 
        placeholder="🔎 Search by country ... "
      />
    </form>
  );
}