import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function BooksSearch({ search, setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Form.Group className="mb-3" controlI d="searchBox">
      <Form.Control
        type="text"
        placeholder="Buscar libro..."
        value={search}
        onChange={handleSearch}
      />
    </Form.Group>
  );
}
