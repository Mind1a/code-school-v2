const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const CoursesApi = async () => {
  const res = await fetch(`${baseUrl}/api/courses`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};
