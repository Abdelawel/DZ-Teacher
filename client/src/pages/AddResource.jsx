import React, { useState } from "react";
import Sidebar from "../component/Sidebar";

const NewResource = () => {
  const [title, setTitle] = useState("");
  const [pricing, setPricing] = useState("");
  const [level, setLevel] = useState("AP");
  const [year, setYear] = useState("");
  const [module, setModule] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const modules = ["Math", "Physics", "History", "Geography", "Biology", "Chemistry", "Literature", "Art"];

  const getYears = (level) => {
    switch (level) {
      case "AP":
        return [1, 2, 3, 4, 5];
      case "AM":
        return [1, 2, 3, 4];
      case "AS":
        return [1, 2, 3];
      default:
        return [];
    }
  };

  const [availableYears, setAvailableYears] = useState(getYears(level));

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    setAvailableYears(getYears(newLevel));
    setYear(""); // Reset year when level changes
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, pricing, level, year, module, description, selectedFile });
    setTitle("");
    setPricing("");
    setLevel("AP");
    setYear("");
    setModule("");
    setDescription("");
    setSelectedFile(null);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="bg-gray-100 p-6 rounded mb-8">
          <button className="text-gray-600 hover:text-gray-800 text-lg font-semibold mr-6">
            &lt; Back to Resources List
          </button>
          <h2 className="text-3xl font-bold text-black">
            New <span className="text-blue-600">Resources</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-6">
            <div className="w-1/2">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="pricing" className="block text-gray-700 font-bold mb-2">
                Pricing
              </label>
              <input
                type="text"
                id="pricing"
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-1/2">
              <label htmlFor="level" className="block text-gray-700 font-bold mb-2">
                Level
              </label>
              <select
                id="level"
                value={level}
                onChange={(e) => handleLevelChange(e.target.value)}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="AS">AS</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="year" className="block text-gray-700 font-bold mb-2">
                Year
              </label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="" disabled>Select a Year</option>
                {availableYears.map((yearOption) => (
                  <option key={yearOption} value={yearOption}>
                    {yearOption}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="module" className="block text-gray-700 font-bold mb-2">
              Module
            </label>
            <select
              id="module"
              value={module}
              onChange={(e) => setModule(e.target.value)}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="" disabled>Select a Module</option>
              {modules.map((mod) => (
                <option key={mod} value={mod}>
                  {mod}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
              The File
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full"
            />
            {selectedFile && <p className="mt-1 text-sm text-gray-600">Selected: {selectedFile.name}</p>}
          </div>

          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300 h-32"
          ></textarea>

          <div className="flex justify-end gap-4 mt-6">
            <button type="button" className="px-6 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-lg">Cancel</button>
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-lg font-semibold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewResource;
