import { Chapter } from "@/features/courses/types";

export const sidebarData: Chapter[] = [
  {
    id: "1",
    title: "შესავალი ვებ სამყაროში",
    lessons: [
      { id: "intro-digital-world", title: "ციფრული სამყაროს გაცნობა" },
      {
        id: "what-is-internet",
        title: "რა არის ინტერნეტი? (როგორ უკავშირდება კომპიუტერები ერთმანეთს)",
      },
      { id: "what-is-website", title: "რა არის ვებსაიტი და ბრაუზერი?" },
      {
        id: "frontend-intro",
        title: "რას ვხედავთ ვებსაიტზე? (Front-End-ის გაცნობა)",
      },
      {
        id: "frontend-languages",
        title: "Front-End-ის ძირითადი ენები (HTML, CSS, JavaScript)",
      },
      {
        id: "project-idea",
        title: "საპროექტო დავალება - ვებ-გვერდის იდეის დაგეგმვა",
      },
    ],
  },

  {
    id: "2",
    title: "HTML-ის დოკუმენტის სტრუქტურა",
    lessons: [
      {
        id: "what-is-html-file",
        title: "რა არის HTML ფაილი?",
        subsections: [
          { id: "homework-1", title: "დავალება #1" },
          { id: "homework-2", title: "დავალება #2" },
        ],
      },
      {
        id: "html-skeleton",
        title: "HTML დოკუმენტის 'საწყისი' ტეგები",
      },
      { id: "head-tag", title: "გვერდის 'შუა' ნაწილი (head)" },
      { id: "body-tag", title: "გვერდის 'მთავარი ნაწილი' (body)" },
      { id: "homework", title: "საპროექტო დავალება" },
    ],
  },

  {
    id: "3",
    title: "ტექსტთან მუშაობა, სიები და გარჩევა HTML-ში",
    lessons: [
      { id: "text-tags", title: "ტექსტის ტეგები (p, h1–h6, span)" },
      { id: "lists", title: "სიების შექმნა (ul, ol, li)" },
      { id: "text-formatting", title: "ტექსტის ფორმატირება (b, i, strong)" },
      {
        id: "homework-text",
        title: "საპროექტო დავალება: ტექსტური გვერდის აგება",
      },
    ],
  },
];


