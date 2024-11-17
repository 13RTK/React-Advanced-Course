import { faker } from '@faker-js/faker';

const mockStudentList = [
  {
    id: '1',
    name: 'John Doe',
    class: 'class 1 | year 9',
    gender: 'male',
    teacher: 'mr. smith',
  },
  {
    id: '2',
    name: 'Jane Smith',
    class: 'class 2 | year 10',
    gender: 'female',
    teacher: 'mrs. johnson',
  },
  {
    id: '3',
    name: 'Michael Brown',
    class: 'class 1 | year 9',
    gender: 'male',
    teacher: 'mr. wilson',
  },
  {
    id: '4',
    name: 'Emily Davis',
    class: 'class 3 | year 11',
    gender: 'female',
    teacher: 'mr. anderson',
  },
  {
    id: '5',
    name: 'Chris Lee',
    class: 'class 2 | year 10',
    gender: 'male',
    teacher: 'mrs. clark',
  },
  {
    id: '6',
    name: 'Sophie White',
    class: 'class 1 | year 9',
    gender: 'female',
    teacher: 'mr. smith',
  },
  {
    id: '7',
    name: 'Liam Harris',
    class: 'class 3 | year 11',
    gender: 'male',
    teacher: 'mrs. davis',
  },
  {
    id: '8',
    name: 'Olivia Scott',
    class: 'class 2 | year 10',
    gender: 'female',
    teacher: 'mr. taylor',
  },
  {
    id: '9',
    name: 'Ethan Miller',
    class: 'class 3 | year 11',
    gender: 'male',
    teacher: 'mr. anderson',
  },
  {
    id: '10',
    name: 'Ava Johnson',
    class: 'class 1 | year 9',
    gender: 'female',
    teacher: 'mrs. clark',
  },
];

export function getStudentList() {
  return mockStudentList.map((student) => {
    return {
      ...student,
      avatar: faker.image.avatar(),
    };
  });
}
