import { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const NewBook = ({books, setBooksAdded}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [pageCount, setPageCount] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [available, setAvailable] = useState(false);


  


  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };
  const handleChangePageCount = (event) => {
    setPageCount(event.target.value);
  };
  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  };
  const handleChangeAvailable = (e) => {
    setAvailable(e.target.checked);
  };

  const handleAddBook = (event) => {
    event.preventDefault();

    const bookData = {
      id: books.length + 1,
      title,
      author,
      rating: parseInt(rating, 10),
      pageCount: parseInt(pageCount, 10),
      imageUrl,
      available,
    };

    setBooksAdded([...books, bookData]);

    setTitle('');
    setAuthor('');
    setImageUrl('');
    setRating('');
    setPageCount('');
    setAvailable('');
  };

  return (
    <Card className="m-4 container mx-auto  w-50" bg="success">
      <Card.Body>
        <Form className="text-white" onSubmit={handleAddBook}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar título"
                  onChange={handleChangeTitle}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar autor"
                  onChange={handleChangeAuthor}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de estrellas"
                  max={5}
                  min={0}
                  onChange={handleChangeRating}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="pageCount">
                <Form.Label>Cantidad de páginas</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de páginas"
                  min={1}
                  onChange={handleChangePageCount}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar url de imagen"
                onChange={handleChangeImageUrl}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col
              md={3}
              className="d-flex flex-column justify-content-end align-items-end"
            >
              <Form.Check
                type="switch"
                id="available"
                className="mb-3"
                label="¿Disponible?"
                onChange={handleChangeAvailable}
              />
              <Button variant="primary" type="submit">
                Agregar lectura
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewBook;
