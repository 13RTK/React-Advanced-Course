import { supabase } from '../utils/supabase';

export async function createTeacher(teacher) {
  const { data, error } = await supabase
    .from('teacher')
    .insert([teacher])
    .select();

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}

export async function getTeacherByTeacherId(teacherId) {
  const { data: teacher, error } = await supabase
    .from('teacher')
    .select('*')
    // Filters
    .eq('teacher_id', teacherId);

  if (error) {
    console.log(error.message);
    return;
  }

  return teacher;
}