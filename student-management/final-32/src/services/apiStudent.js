import { supabase } from '../utils/supabase';

export async function getStudentListWithLimit(
  teacherId,
  currentPage,
  pageSize
) {
  const { data: student, error } = await supabase
    .from('student')
    .select('*')
    .eq('teacher_id', teacherId)
    .range((currentPage - 1) * pageSize, currentPage * pageSize - 1);

  if (error) {
    console.log(error.message);
    return;
  }

  return student;
}

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

export async function countStudents(teacherId) {
  const { count, error } = await supabase
    .from('student')
    .select('*', { count: 'exact', head: true })
    .eq('teacher_id', teacherId);

  if (error) {
    console.log(error.message);
    return;
  }

  return count;
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
