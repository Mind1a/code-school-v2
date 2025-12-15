type TableOfContentItem = {
  _id: string;
  order: number;
  title: string;
  section: TableOfContentItem[];
};

export type Course = {
  _id: string;
  name: string;
  author: string;
  sectionCount: number;
  description: string;
  projectPicture: string;
  tableOfContent: TableOfContentItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
