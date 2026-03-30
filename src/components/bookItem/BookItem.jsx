import { Badge, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  imageUrl,
  available,
  setSelectedBook,
}) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleClick = () => {
    setNewTitle('Actualizado');
    console.log(newTitle);
  };

  const handleSelected = (e) => {
    setSelectedBook(newTitle);
  };

  return (
    <Card style={{ width: '22rem' }} className="mx-3">
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== '' ? imageUrl : 'https://bit.ly/47Nylzk'}
      />
      <Card.Body>
        <div className="mb-2">
          {available ? (
            <Badge bg="success">Disponible</Badge>
          ) : (
            <Badge bg="danger">Reservado</Badge>
          )}
        </div>
        <Card.Title>{newTitle}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>
          {rating} estrella {rating > 1 ? 's' : ''}
        </div>
        <p>{pageCount} páginas</p>
        <div className='d-flex justify-content-around items-center'>
          <Button onClick={handleClick}>Actualizar titulo</Button>
          <Button onClick={handleSelected}>Seleccionar libro</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
