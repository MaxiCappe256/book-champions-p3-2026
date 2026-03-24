import { Badge, Card, Button } from "react-bootstrap";
const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  imageUrl,
  available,
}) => {
  return (
    <Card style={{ width: "22rem" }} className="mx-3">
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47Nylzk"}
      />
      <Card.Body>
        <div className="mb-2">
          {available ? (
            <Badge bg="success">Disponible</Badge>
          ) : (
            <Badge bg="danger">Reservado</Badge>
          )}
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>
          {rating} estrella {rating > 1 ? "s" : ""}
        </div>
        <p>{pageCount} páginas</p>
        <Button>Actualizar titulo</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
