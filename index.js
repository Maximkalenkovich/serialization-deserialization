function serialize(arr) {
    // Check if the input array is empty
    if (arr.length === 0) {
      // If it is, return an empty array representation
      return "[]";
    }
  
    // Initialize an empty result string
    let result = "";
    // Set the start and end pointers to the first element of the array
    let start = arr[0];
    let end = arr[0];
  
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // If the current element is one more than the previous element
      if (arr[i] === end + 1) {
        // Update the end pointer to the current element
        end = arr[i];
      } else {
        // Otherwise, we have encountered a new sequence
        // If the previous sequence has only one element
        if (start === end) {
          // Add the element to the result string
          result += start + ",";
        } else {
          // Otherwise, add the range to the result string
          result += start + "-" + end + ",";
        }
        // Update the start and end pointers to the current element
        start = arr[i];
        end = arr[i];
      }
    }
  
    // Handle the last sequence
    if (start === end) {
      // If it has only one element, add it to the result string
      result += start;
    } else {
      // Otherwise, add the range to the result string
      result += start + "-" + end;
    }
  
    // Wrap the result string with square brackets and return it
    return "[" + result + "]";
  }
  
  function deserialize(str) {
    // Initialize an empty result array
    let result = [];
    // Split the input string (excluding the square brackets) into ranges
    let ranges = str.slice(1, -1).split(",");
  
    // Iterate through each range
    for (let range of ranges) {
      // If the range contains a hyphen
      if (range.includes("-")) {
        // Split the range into start and end values, and convert them to numbers
        let [start, end] = range.split("-").map(Number);
        // Iterate from start to end, and add each number to the result array
        for (let i = start; i <= end; i++) {
          result.push(i);
        }
      } else {
        // If the range is a single number, add it to the result array
        result.push(Number(range));
      }
    }
  
    // Return the result array
    return result;
  }
  
  
// TESTS RESAULT CONSOLE
  function testSerializeDeserialize(arr) {
    const serialized = serialize(arr);
    const deserialized = deserialize(serialized);
    const compressionRatio = (arr.length / serialized.length).toFixed(2);
  
    console.log(`Original Array: ${arr}`);
    console.log(`Serialized Array: ${serialized}`);
    console.log(`Deserialized Array: ${deserialized}`);
    console.log(`Compression Ratio: ${compressionRatio}\n`);
  
    return arr.every((val, index) => val === deserialized[index]);
  }
  
  // Prostest tests
  console.log("Simple tests:");
  console.log(testSerializeDeserialize([1, 2, 3, 4, 5])); // true
  console.log(testSerializeDeserialize([1, 2, 4, 5, 6])); // true
  
  // Random tests
  console.log("Random tests:");
  console.log(testSerializeDeserialize(Array.from({ length: 50 }, () => Math.floor(Math.random() * 100)))); // true
  console.log(testSerializeDeserialize(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))); // true
  console.log(testSerializeDeserialize(Array.from({ length: 500 }, () => Math.floor(Math.random() * 100)))); // true
  console.log(testSerializeDeserialize(Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100)))); // true
  
  // Edge tests
  console.log("Edge tests:");
  console.log(testSerializeDeserialize(Array.from({ length: 100 }, () => Math.floor(Math.random() * 9 + 1)))); // true
  console.log(testSerializeDeserialize(Array.from({ length: 100 }, () => Math.floor(Math.random() * 90 + 10)))); // true
  console.log(testSerializeDeserialize(Array.from({ length: 100 }, () => Math.floor(Math.random() * 900 + 100)))); // true
  console.log(testSerializeDeserialize(Array.from({ length: 900 }, () => Math.floor(Math.random() * 3 + 1)))); // true
  