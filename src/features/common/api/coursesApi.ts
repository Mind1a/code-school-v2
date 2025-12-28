const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const CoursesApi = async () => {
  const res = await fetch(`${baseUrl}/api/courses`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const CourseByIdApi = async (id: string) => {
  const res = await fetch(`${baseUrl}/api/courses/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const HomeworkByIdApi = async (homeworkId: string) => {
  const res = await fetch(`${baseUrl}/api/homeworks/${homeworkId}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const ChapterByIdApi = async (chaptersId: string) => {
  const res = await fetch(`${baseUrl}/api/chapters/${chaptersId}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};
