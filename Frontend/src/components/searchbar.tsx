import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "./Navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Searchbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search-results?query=${query}&category=${category}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length > 0) {
      fetchSuggestions(newQuery);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
    navigate(`/search-results?query=${suggestion}&category=${category}`);
  };

  const fetchSuggestions = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/suggestions?query=${query}`);
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="flex-1 items-center gap-2 md:flex ">
      <form
        className="relative hidden w-full max-w-md md:flex"
        onSubmit={handleSearch}
      >
       
   


<Select onValueChange={handleCategoryChange}>
  <SelectTrigger className=" text-black w-[200px]">
    <SelectValue 
      placeholder="Search by category" 
      className='bg-sky-600 text-black'
      defaultValue="all"
    />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Categories</SelectLabel>
      <SelectItem value="all" isSelected={true}>ALL</SelectItem>
      <SelectItem value="phones">PHONES</SelectItem>
      <SelectItem value="laptops">LAPTOPS</SelectItem>
      <SelectItem value="desktops">DESKTOPS</SelectItem>
      <SelectItem value="electronics">ELECTRONICS</SelectItem>
      <SelectItem value="tv">TV</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
        
        <div className="relative flex items-center ml-3">
          <SearchIcon
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={handleSearch}
          />
          <Input
            type="search"
            placeholder="Search products..."
            className="h-9 w-[300px] rounded-md bg-gray-100 pl-9 text-sm focus:bg-white focus:outline-none dark:bg-gray-800 dark:text-gray-50"
            value={query}
            onChange={handleInputChange}
            style={{ color: "black", backgroundColor: "white" }}
          />
          {query.length > 0 && (
            <button
              className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400 cursor-pointer"
              onClick={clearSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {suggestions.length > 0 && (
          <ul className="absolute bg-cyan-950 z-10 mt-12 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {loading && (
          <div className="absolute z-10 mt-12 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg">
            <div className="p-2 text-gray-500">Loading...</div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Searchbar;