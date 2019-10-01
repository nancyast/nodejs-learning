let buf = new Buffer('hello', 'utf-8');
// ask Buffer take a string 'hello' and convert it to binary data.
console.log(buf);
// Buffer(5) [104, 101, 108, 108, 111]
// Buffer is an object and contains 5 characters, 5 pieces of binary data.
// It's outputting as hexadecimal notation to make it shorter and easier to read.
// But it is binary data that actually being stored.
console.log(buf.toJSON());
//
