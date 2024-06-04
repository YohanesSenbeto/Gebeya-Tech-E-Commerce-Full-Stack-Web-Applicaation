import React from "react";

interface SearchResultsProps {
    results: string[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Search Results</h2>
            {results.length > 0 ? (
                <ul className="list-disc pl-5">
                    {results.map((result, index) => (
                        <li key={index} className="mb-1">
                            {result}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
