import { supabase } from '../utils/supabase';

export async function createTeacher(teacher) {
  const { error } = await supabase.from('teacher').insert([teacher]);

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export async function getTeacherByTeacherId(teacherId) {
  const { data: teacher, error } = await supabase
    .from('teacher')
    .select('*')
    // Filters
    .eq('teacher_id', teacherId);

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return teacher;
}
