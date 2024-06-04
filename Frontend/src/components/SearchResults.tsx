import React from "react";

interface SearchResultsProps {
    results: string[];
    isLoading?: boolean;
    error?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
    results,
    isLoading,
    error,
}) => {
    return (
        <div className="mt-4 md:mt-6 lg:mt-8 text-left" aria-live="polite">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : results.length > 0 ? (
                <ul className="list-disc pl-5 md:pl-6 lg:pl-7">
                    {results.map((result, index) => (
                        <li key={index} className="mb-1 md:mb-2 lg:mb-3">
                            {result}
                        </li>
                    ))}
                </ul>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default SearchResults;
