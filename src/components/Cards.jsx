import React from "react";
import { Button } from "./ui/button";
import { CircleHelp } from "lucide-react";
import SelectNum from "./SelectNum";

const Cards = ({
  result,
  cards,
  generateRandomNumCards,
  handleSelectChange,
  cardCount,
  handleShow,
  show,
  handleClicked,
  clicked,
  gameResult,
  loading,
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 min-h-screen flex flex-col">
      {/* Header Section - App Name */}
      <div className="w-full flex justify-between p-6 bg-blue-500 shadow-md rounded-b-lg">
        {/* App Name */}
        <div className="text-white text-4xl font-extrabold">
          Card Matching Game
        </div>
        {/* SelectNum Component (for selecting card count) and Generate Random Numbers button */}
        <SelectNum
          handleSelectChange={handleSelectChange}
          cardCount={cardCount}
          generateRandomNumCards={generateRandomNumCards}
          loading={loading}
        />
      </div>

      {/* Cards Grid Section */}
      <div className="flex-grow flex justify-center items-center p-6">
        <div className="grid grid-cols-4 gap-6 max-w-4xl w-full">
          {cards.map((number, index) => (
            <div
              key={index}
              onClick={() => {
                if (!clicked.includes(index) && clicked.length < 2) {
                  handleClicked(index);
                  handleShow(index);
                }
              }}
              className="relative w-32 h-48 bg-white shadow-lg rounded-xl border-2 border-gray-300 flex justify-center items-center text-4xl font-bold text-black cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              {show[index] ? (
                <div className="text-3xl font-semibold">{number}</div>
              ) : (
                <CircleHelp className="text-gray-500" />
              )}
              {/* Card Hover Overlay */}
              {show[index] && (
                <div className="absolute inset-0 bg-opacity-20 bg-gray-800 rounded-xl"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Result Section - Centering h1 and Button */}
      <div className="w-full flex flex-col justify-center items-center p-6 space-y-4">
        <h1 className="text-3xl font-semibold text-center">{gameResult}</h1>
        
        <Button
          onClick={result}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Check Result
        </Button>
      </div>
    </div>
  );
};

export default Cards;




