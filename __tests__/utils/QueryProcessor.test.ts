function QueryProcessor(query: string): string {
    // Check if the query involves an addition operation
    if (query.match(/plus/i)) {
        return handleAddition(query);
    }

    // Check if the query involves a comparison of numbers
    if (query.match(/largest/i)) {
        return handleComparison(query);
    }

    // Default responses for known cases
    if (query === "shakespeare") {
        return (
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        );
    }

    if (query === 'What is your Andrew ID?') {
        return 'hdng';
    }

    // If the query doesn't match any known type, return a default response
    return "I don't know the answer to that.";
}

function handleAddition(query: string): string {
    const regex = /(\d+)\s*plus\s*(\d+)/i; // Updated: \s* allows for zero or more spaces
    const match = query.match(regex);

    if (match) {
        const num1 = parseInt(match[1], 10);
        const num2 = parseInt(match[2], 10);
        const sum = num1 + num2;
        return `The sum of ${num1} and ${num2} is ${sum}.`;
    }

    return "I couldn't parse the numbers for addition.";
}

function handleComparison(query: string): string {
    const regex = /(\d+)[, ]+(\d+)[, ]+(\d+)/i;
    const match = query.match(regex);

    if (match) {
        const num1 = parseInt(match[1], 10);
        const num2 = parseInt(match[2], 10);
        const num3 = parseInt(match[3], 10);
        const largest = Math.max(num1, num2, num3);
        return `The largest number is ${largest}.`;
    }

    return "I couldn't parse the numbers for comparison.";
}

export default QueryProcessor;