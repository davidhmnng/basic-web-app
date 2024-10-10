function QueryProcessor(query: string): string {
  // Check if the query involves an addition operation
  if (query.match(/plus/i)) {
      console.log('Addition query detected:', query);
      return handleAddition(query);
  }

  // Check if the query involves a comparison of numbers
  if (query.match(/largest/i)) {
      console.log('Comparison query detected:', query);
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
  return "No Match";
}

function handleAddition(query: string): string {
  // Match any text before, and focus on finding two numbers around the word "plus"
  const regex = /(\d+)\s*plus\s*(\d+)/i;
  const match = query.match(regex);

  if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const sum = num1 + num2;
      console.log(`Calculating sum: ${num1} + ${num2} = ${sum}`);
      return `${sum}`;
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
      console.log(`Finding largest: ${num1}, ${num2}, ${num3} => ${largest}`);
      return `${largest}`;
  }

  return "I couldn't parse the numbers for comparison.";
}

export default QueryProcessor;