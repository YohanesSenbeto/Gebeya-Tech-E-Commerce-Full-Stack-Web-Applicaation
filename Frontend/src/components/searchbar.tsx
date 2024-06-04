import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "./Navbar";
import mockData from "./mockData";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import SearchResults from "./SearchResults";

function Searchbar() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [results, setResults] = useState<string[]>([]);

    const handleCategoryChange = (value: string) => {
        setCategory(value);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Fetch results based on the query and category
        fetchResults(query, category);
    };

    const fetchSuggestions = (query: string) => {
        // Filter suggestions from mock data based on the query
        const filteredSuggestions = mockData
            .filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((item) => item.name);
        setSuggestions(filteredSuggestions);
    };

    const fetchResults = (query: string, category: string) => {
        // Filter mock data based on the query and category
        const filteredResults = mockData.filter(
            (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) &&
                (category === "all" || item.category === category)
        );
        // Extract only the names from the filtered results
        const resultNames = filteredResults.map((item) => item.name);
        // Update state with the filtered results
        setResults(resultNames);
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

    return (
        <div className="flex-1 items-center gap-3 md:flex hidden">
            <form
                className="relative hidden w-full max-w-md md:flex"
                onSubmit={handleSearch}
            >
                <div className="relative flex items-center">
                    <Select onValueChange={handleCategoryChange}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Search by category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                <SelectItem value="all">ALL</SelectItem>
                                <SelectItem value="phones">PHONES</SelectItem>
                                <SelectItem value="laptops">LAPTOPS</SelectItem>
                                <SelectItem value="desktops">
                                    DESKTOPS
                                </SelectItem>
                                <SelectItem value="electronics">
                                    ELECTRONICS
                                </SelectItem>
                                <SelectItem value="tv">TV</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="relative flex items-center ml-3">
                    <SearchIcon
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400"
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
                </div>
                {suggestions.length > 0 && (
                    <ul className="absolute z-10 mt-12 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="p-2 cursor-pointer hover:bg-gray-200 color-black"
                                onClick={() => setQuery(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
            <SearchResults results={results} />
        </div>
    );
}

export default Searchbar;
