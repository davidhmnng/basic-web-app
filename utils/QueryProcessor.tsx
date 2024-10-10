function QueryProcessor(query: string): string {
  // Handle addition queries
  if (query.match(/plus/i)) {
      console.log('Addition query detected:', query);
      return handleAddition(query);
  }

  // Handle subtraction queries
  if (query.match(/minus/i)) {
      console.log('Subtraction query detected:', query);
      return handleSubtraction(query);
  }

  // Handle multiplication queries
  if (query.match(/multiplied by/i)) {
      console.log('Multiplication query detected:', query);
      return handleMultiplication(query);
  }

  // Handle largest number comparison queries
  if (query.match(/largest/i)) {
      console.log('Comparison query detected:', query);
      return handleComparison(query);
  }

  // Handle prime number queries
  if (query.match(/primes/i)) {
      console.log('Prime number query detected:', query);
      return handlePrime(query);
  }

  // Handle square and cube queries
  if (query.match(/square and a cube/i)) {
      console.log('Square and cube query detected:', query);
      return handleSquareAndCube(query);
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

// Handle addition queries with multiple numbers
function handleAddition(query: string): string {
  const regex = /(\d+)\s*plus\s*(\d+)/gi;
  const numbers: number[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[1], 10));
      numbers.push(parseInt(match[2], 10));
  }

  if (numbers.length >= 2) {
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      return `${sum}`;
  }

  return "I couldn't parse the numbers for addition.";
}

// Handle subtraction queries
function handleSubtraction(query: string): string {
  const regex = /(\d+)\s*minus\s*(\d+)/i;
  const match = query.match(regex);

  if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const difference = num1 - num2;
      return `${difference}`;
  }

  return "I couldn't parse the numbers for subtraction.";
}

// Handle multiplication queries
function handleMultiplication(query: string): string {
  const regex = /(\d+)\s*multiplied by\s*(\d+)/i;
  const match = query.match(regex);

  if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const product = num1 * num2;
      return `${product}`;
  }

  return "I couldn't parse the numbers for multiplication.";
}

// Handle largest number comparison
function handleComparison(query: string): string {
  const regex = /(\d+)[, ]+(\d+)[, ]+(\d+)/i;
  const numbers: number[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[1], 10));
      numbers.push(parseInt(match[2], 10));
      numbers.push(parseInt(match[3], 10));
  }

  if (numbers.length > 0) {
      const largest = Math.max(...numbers);
      return `${largest}`;
  }

  return "I couldn't parse the numbers for comparison.";
}

// Handle prime number queries
function handlePrime(query: string): string {
  const regex = /(\d+)/g;  // Matches all numbers in the query
  const numbers: number[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
  }

  if (numbers.length > 0) {
      const primeNumbers = numbers.filter(isPrime);
      return primeNumbers.length > 0 ? primeNumbers.join(', ') : 'No prime numbers found.';
  }

  return "I couldn't parse the numbers for prime checking.";
}

// Handle square and cube queries
function handleSquareAndCube(query: string): string {
  const regex = /(\d+)/g;  // Matches all numbers in the query
  const numbers: number[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
  }

  if (numbers.length > 0) {
      const squareAndCubeNumbers = numbers.filter(isSquareAndCube);
      return squareAndCubeNumbers.length > 0 ? squareAndCubeNumbers.join(', ') : 'No numbers that are both square and cube found.';
  }

  return "I couldn't parse the numbers for square and cube checking.";
}

// Utility function to check for prime numbers
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
  }
  return true;
}

// Utility function to check if a number is both a square and a cube
function isSquareAndCube(num: number): boolean {
  const squareRoot = Math.sqrt(num);
  const cubeRoot = Math.cbrt(num);

  // A number is both a square and a cube if its square root and cube root are integers
  return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
}

export default QueryProcessor;