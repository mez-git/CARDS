import React from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectNum = ({ cardCount, handleSelectChange, generateRandomNumCards, loading }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Generate Random Numbers Button */}
      <div className="flex justify-center">
        {loading ? (
          ""
        ) : (
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-all duration-300"
            onClick={generateRandomNumCards}
          >
            Generate Random Numbers
          </Button>
        )}
      </div>

      {/* Select Number of Cards Dropdown (Positioned to the Right) */}
      <div className="w-48">
        <Select value={cardCount} onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full bg-white border-2 border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Number Of Cards" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="7">7</SelectItem>
            <SelectItem value="8">8</SelectItem>
            <SelectItem value="9">9</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectNum;

