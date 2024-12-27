import { supabase } from '../utils/supabase';

const mockScoreList = [
  {
    id: '1',
    name: 'John Doe',
    class: 'class 1 | year 9',
    subject: 'Mathematics',
    semester: 'Fall 2023',
    score: 85,
  },
  {
    id: '2',
    name: 'Jane Smith',
    class: 'class 2 | year 10',
    subject: 'English',
    semester: 'Spring 2023',
    score: 92,
  },
  {
    id: '3',
    name: 'Michael Brown',
    class: 'class 1 | year 9',
    subject: 'Science',
    semester: 'Fall 2023',
    score: 78,
  },
  {
    id: '4',
    name: 'Emily Davis',
    class: 'class 3 | year 11',
    subject: 'History',
    semester: 'Spring 2023',
    score: 88,
  },
  {
    id: '5',
    name: 'Chris Lee',
    class: 'class 2 | year 10',
    subject: 'Physics',
    semester: 'Fall 2023',
    score: 95,
  },
  {
    id: '6',
    name: 'Sophie White',
    class: 'class 1 | year 9',
    subject: 'Chemistry',
    semester: 'Spring 2023',
    score: 82,
  },
  {
    id: '7',
    name: 'Liam Harris',
    class: 'class 3 | year 11',
    subject: 'Biology',
    semester: 'Fall 2023',
    score: 90,
  },
  {
    id: '8',
    name: 'Olivia Scott',
    class: 'class 2 | year 10',
    subject: 'Geography',
    semester: 'Spring 2023',
    score: 80,
  },
  {
    id: '9',
    name: 'Ethan Miller',
    class: 'class 3 | year 11',
    subject: 'Literature',
    semester: 'Fall 2023',
    score: 85,
  },
  {
    id: '10',
    name: 'Ava Johnson',
    class: 'class 1 | year 9',
    subject: 'Mathematics',
    semester: 'Spring 2023',
    score: 91,
  },
];

export async function getScoreList() {
  const { data: score, error } = await supabase.from('score').select('*');

  if (error) {
    console.log(error.message);
    return;
  }

  return score;
}

export async function createScore(newScore) {
  const { data, error } = await supabase
    .from('score')
    .insert([newScore])
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}

export async function getScoreByScoreId(scoreId) {
  const { data: score, error } = await supabase
    .from('score')
    .select('*')
    .eq('id', scoreId);

  if (error) {
    console.log(error.message);
    return;
  }

  return score;
}

export async function updateScore(scoreId, newScore) {
  const { data, error } = await supabase
    .from('score')
    .update(newScore)
    .eq('id', scoreId)
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
