//Find the Largest Number
//Description: Write a function findLargest that takes three numbers as arguments and returns the largest of the three.
function findLargest(a, b, c) {
    return Math.max (a,b,c);
}

console.log(findLargest(5, 10, 3)); // Output: 10
console.log(findLargest(8, 2, 6)); // Output: 8
// Reverse Words in a Sentence
// Description: Write a function reverseWords that takes a string as an argument and returns a new string where the order of the words in the sentence are reversed, but the words themselves aren't.
function reverseWords(sentence) {
    return sentence.split (' ').reverse().join(' ');
}

console.log(reverseWords("Hello world!")); // Output: "world! Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"
// Find the Longest Word in an Array
// Description: Write a function findLongestWord that takes an array of strings as an argument and returns the longest word in the array. If there are multiple words with the same length, return the first one.
function findLongestWord(words) {
    let max="";
    for(const word in words){
        if(words[word].length > max.length){
            max = words[word];
        }
    }
    return max;
 }
    


console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"
// Count Occurrences of Words in a Sentence
// Description: Write a function countWords that takes a string sentence as an argument and returns an object where each key is a word in the sentence and the corresponding value is the number of times that word appears in the sentence.
function countWords(sentence) {
    let words = sentence.split(' ');
    // Step 2: Initialize an empty object to store word counts
       let wordCounts = {};
    // Step 3: Iterate through the array of words using a for loop
       for (let i = 0; i < words.length; i++) {
       let word = words[i];
       // Skip empty words resulting from multiple spaces or other issues
       if (word) {
           // Count each word
           if (wordCounts[word]) {
               wordCounts[word]++;
           } else {
               wordCounts[word] = 1;
           }
       }
   }
   // Step 4: Return the object containing word counts
   return wordCounts;
       }



console.log(countWords("hello world hello")); 
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test")); 
// Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }