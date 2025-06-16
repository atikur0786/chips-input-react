import { useState } from "react";

interface Chip {
  id: number;
  name: string;
}

function App() {
  const [chipsList, setChipsList] = useState<Chip[]>([]);
  const [chipValue, setChipValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const newChip = {
        id: new Date().getTime(),
        name: chipValue,
      };
      setChipsList((prev) => [...prev, newChip]);
      setChipValue("");
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-blue-400 p-12">
        <h1 className="text-center">Chips Input</h1>
        <div className="w-100 my-auto">
          <input
            type="text"
            name="chip"
            id="chip"
            value={chipValue}
            onKeyDown={handleKeyDown}
            onChange={(e) => setChipValue(e.target.value)}
            className="bg-amber-50"
          />

          {chipsList.map((chip) => (
            <div key={chip.id}>
              <p>{chip.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
