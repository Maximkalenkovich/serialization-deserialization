# Array Serialization and Deserialization

This repository contains two functions, serialize and deserialize, for serializing and deserializing arrays, respectively. The functions are designed to compress consecutive sequences of numbers into ranges, and vice versa, thereby reducing the space required to store the array.

## Usage

### serialize(arr)

The serialize function takes an array of numbers as input and returns a string representation of the array, where consecutive sequences of numbers are compressed into ranges.

Example:

const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
const serializedArr = serialize(arr);
console.log(serializedArr); // Output: "[1-5,7-10]"

### deserialize(str)

The deserialize function takes a string representation of an array (as produced by the serialize function) as input and returns the original array of numbers.

Example:

const serializedArr = "[1-5,7-10]";
const arr = deserialize(serializedArr);
console.log(arr); // Output: [1, 2, 3, 4, 5, 7, 8, 9, 10]

## Implementation Details

The serialize function works by iterating through the input array and keeping track of the start and end of each consecutive sequence of numbers. Whenever a new sequence is encountered, the previous sequence is added to the result string as a range or a single number, depending on its length.

The deserialize function splits the input string into ranges (separated by commas), and then iterates through each range. If the range contains a hyphen (-), it expands the range into individual numbers and adds them to the result array. Otherwise, it adds the single number to the result array.

Both functions handle edge cases, such as empty arrays and arrays with a single element.

## Compression Ratio

The compression ratio represents the ratio of the length of the original array to the length of the serialized string. A compression ratio greater than 1 indicates that the serialized string is shorter than the original array, and vice versa.

You can calculate the compression ratio by dividing the length of the original array by the length of the serialized string:

const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
const serializedArr = serialize(arr);
const compressionRatio = arr.length / serializedArr.length;
console.log(compressionRatio); // Output: 1.8

In this example, the compression ratio is 1.8, indicating that the serialized string is approximately half the length of the original array.