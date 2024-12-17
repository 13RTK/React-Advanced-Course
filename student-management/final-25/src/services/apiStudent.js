import { faker } from '@faker-js/faker';
import { supabase } from '../utils/supabase';

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

export async function getStudentList(teacherId) {
  const { data: student, error } = await supabase
    .from('student')
    .select('*')
    .eq('teacher_id', teacherId);

  if (error) {
    console.log(error.message);
    return;
  }

  return student;
}

export async function createStudent(newStudent) {
  const { data, error } = await supabase
    .from('student')
    .insert([newStudent])
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}

export async function getStudentByStudentId(studentId) {
  const { data: student, error } = await supabase
    .from('student')
    .select('*')
    .eq('student_id', studentId);

  if (error) {
    console.log(error.message);
    return;
  }

  return student;
}

export async function updateStudent(studentId, newStudent) {
  const { data, error } = await supabase
    .from('student')
    .update(newStudent)
    .eq('student_id', studentId)
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
