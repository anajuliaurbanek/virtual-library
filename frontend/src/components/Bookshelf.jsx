import Shelf from "./Shelf";

const shelves = [
  [
    { id: 1, title: "Blue Hour" },
    { id: 2, title: "Story Teller" },
    { id: 3, title: "White Facade" },
    { id: 4, title: "Minimalism" },
  ],

  [
    { id: 5, title: "Art Design" },
    { id: 6, title: "Sky Gazing" },
    { id: 7, title: "Waves of Mind" },
  ],

  [
    { id: 8, title: "Literary" },
    { id: 9, title: "Blue Hour II" },
  ],
];

export default function Bookshelf() {
  return (
    <div className="bookshelf">
      {shelves.map((shelf, index) => (
        <Shelf
          key={index}
          books={shelf}
        />
      ))}
    </div>
  );
}