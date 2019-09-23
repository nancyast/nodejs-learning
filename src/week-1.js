// 1. Using ES6, count the number of male students and female students and output the results with console.log.
const students = [
  {
    name: 'Nam',
    age: 24,
    gender: 'male',
  },
  {
    name: 'Mai',
    age: 22,
    gender: 'female',
  },
  {
    name: 'Trang',
    age: 23,
    gender: 'female',
  },
  {
    name: 'An',
    age: 20,
    gender: 'male',
  },
  {
    name: 'Thien',
    age: 27,
    gender: 'male',
  },
];

const { male, female } = students.reduce(
  (acc, student) => {
    return {
      ...acc,
      [student.gender]: acc[student.gender] + 1,
    };
  },
  { male: 0, female: 0 },
);

console.log('male ', male, 'female ', female);

// 2. Using ES6, convert the students array to new array with just the names.
const names = students.map(s => s.name);

console.log('names', names);
