import { useState } from "react";

interface Chip {
  id: number;
  name: string;
}

function App() {
  const [chipsList, setChipsList] = useState<Chip[]>([]);
  const [chipValue, setChipValue] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailedAlert, setShowFailedAlert] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const newChip = {
        id: new Date().getTime(),
        name: chipValue,
      };
      setChipsList((prev) => [...prev, newChip]);
      setChipValue("");
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
    }
  };

  const handleChipDelete = (id: number) => {
    const filteredChips = chipsList.filter((chip) => chip.id !== id);
    setChipsList(filteredChips);
    setShowFailedAlert(true);
    setTimeout(() => {
      setShowFailedAlert(false);
    }, 2000);
  };

  return (
    <>
      <div className="w-full h-screen bg-blue-400 p-12">
        <h1 className="text-center text-3xl font-bold">Chips Input</h1>
        <div className="w-100 ml-auto mr-auto bg-amber-200 p-2 mt-5 border-2 rounded-md">
          <input
            type="text"
            name="chip"
            id="chip"
            placeholder="Type something here..."
            value={chipValue}
            onKeyDown={handleKeyDown}
            onChange={(e) => setChipValue(e.target.value)}
            className="w-full bg-amber-50 border rounded-md p-2"
          />
        </div>

        <div className="w-100 ml-auto mr-auto bg-green-400 p-2 mt-5 border-2 rounded-md flex flex-wrap gap-2">
          {chipsList.map((chip) => (
            <div
              key={chip.id}
              className="bg-red-400 p-2 border-2 rounded-md w-fit flex justify-between items-center gap-3"
            >
              <p>{chip.name}</p>
              <button
                className="bg-amber-100 p-2 rounded-md text-red-600"
                onClick={() => handleChipDelete(chip.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        {showSuccessAlert && (
          <div className="w-60 absolute top-10 right-10 bg-green-500 p-2 rounded-md">
            <p className="text-amber-100 text-lg">Chip added in the list</p>
          </div>
        )}

        {showFailedAlert && (
          <div className="w-60 absolute top-10 right-10 bg-red-500 p-2 rounded-md">
            <p className="text-amber-100 text-lg">Chip deleted successfully</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
