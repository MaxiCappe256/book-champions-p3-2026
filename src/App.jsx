import BookItem from "./components/bookItem/BookItem";
function App() {
  const books = [
    {
      id: 1,
      title: "Harry Potter 1",
      author: "J.K. Rowling",
      rating: 4,
      pageCount: 800,
      imageUrl:
        "https://acdn-us.mitiendanube.com/stores/001/542/126/products/9789878000107-b82c22cfb174dca93016944484618644-1024-1024.jpg",
      available: true,
      summary:
        "Un niño huérfano descubre que es un mago y comienza su educación en Hogwarts, enfrentándose a sus primeros desafíos mágicos.",
    },
    {
      id: 2,
      title: "El Señor de los Anillos",
      author: "J.R.R. Tolkien",
      rating: 5,
      pageCount: 1200,
      imageUrl:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg",
      available: true,
      summary:
        "Un grupo de héroes emprende un viaje épico para destruir un anillo de poder maligno que amenaza con dominar la Tierra Media.",
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      rating: 3,
      pageCount: 900,
      imageUrl:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/0d/73/0d739e6e0e837d7637f97f9aad3639b4.jpg",
      available: true,
      summary:
        "En un planeta desértico donde la especia es la sustancia más valiosa del universo, un joven se convierte en el líder de una rebelión que cambiará el destino de todos.",
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      rating: 4,
      pageCount: 230,
      imageUrl:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg",
      available: true,
      summary:
        "En un mundo gobernado por un régimen totalitario, un hombre lucha contra la vigilancia constante y la manipulación de la verdad.",
    },
  ];
  return (
    <div>
      <h2>Books champion app</h2>
      <p>¡Quiero leer libros!</p>
      <BookItem
        title={books[0].title}
        author={books[0].author}
        rating={books[0].rating}
        pageCount={books[0].pageCount}
        imageUrl={books[0].imageUrl}
        available={books[0].available}
      />
      <BookItem
        title={books[1].title}
        author={books[1].author}
        rating={books[1].rating}
        pageCount={books[1].pageCount}
        imageUrl={books[1].imageUrl}
        available={books[1].available}
      />
      <BookItem
        title={books[2].title}
        author={books[2].author}
        rating={books[2].rating}
        pageCount={books[2].pageCount}
        imageUrl={books[2].imageUrl}
        available={books[2].available}
      />
      <BookItem
        title={books[3].title}
        author={books[3].author}
        rating={books[3].rating}
        pageCount={books[3].pageCount}
        imageUrl={books[3].imageUrl}
        available={books[3].available}
      />
    </div>
  );
}

export default App;
