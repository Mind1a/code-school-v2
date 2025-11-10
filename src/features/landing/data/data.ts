import { Article, CourseCard, FooterLink, FooterLogo, NavItem } from "../types";

export const navLinks: NavItem[] = [
  { label: "თავფურცელი", href: "/" },
  { label: "კურსი", href: "/courses" },
  {
    label: "ლექსიკონი",
    href: "https://multiterm.iliauni.edu.ge/",
    external: true,
  },
  { label: "პროექტის შესახებ", href: "/about" },
];

export const contactLinks: FooterLink[] = [
  {
    id: 1,
    icon: "/images/svg/info_icon.svg",
    alt: "Email icon",
    href: "mailto:info@iliauni.edu.ge",
    label: "info@iliauni.edu.ge",
  },
  {
    id: 2,
    icon: "/images/svg/phone_icon.svg",
    alt: "Phone icon",
    href: "tel:+995322220009",
    label: "(+995 32) 222 00 09",
  },
  {
    id: 3,
    icon: "/images/svg/location_icon.svg",
    alt: "Location icon",
    href: "https://maps.app.goo.gl/nvPokDBG7115F1ie9",
    label: "თბილისი ქაქუცა ჩოლოყაშვილის გამზირი 3/5",
    external: true,
  },
];

export const footerLogos: FooterLogo[] = [
  {
    id: 1,
    icon: "/images/svg/logo_unilab.svg",
    alt: "Unilab Logo",
    href: "https://unilab.iliauni.edu.ge/",
    width: 94.74,
    height: 124,
  },
  {
    id: 2,
    icon: "/images/svg/logo_iliauni.svg",
    alt: "Iliauni Logo",
    href: "https://iliauni.edu.ge/en/",
    width: 124.66,
    height: 124,
  },
];

export const articlesData: Article[] = [
  {
    id: "info_coding",
    title: "ინფორმაციის კოდირება",
    paragraphs: [
      "არსებობს ინფირმაციის კოდირების, ინფიორმაციისათვის ფორმატის შეცვლის ბევრი განსხვავებული საშუალება. მაგალითად საიდუმლო კოდების სისტემა ინფირმაციას უხილავს ხდის მათთთვის ვინც მოცემულ კოდების სისტემას არ იცნიბს.",
      "საკომუნიკაციო კოდის ადრეულ მაგალითად შეგვიძლია სამეტრყველო ენის გამოგონება ჩავთვალოთ. ენამ ადამიანს საშუალება მისცა, მეტყველების საშუალებით, გადმსცეს ის, რასაც ფიქრობს, რაც ნახა ან იგრძნო.",
      "ინფირმაციის კომპიუტერისათვის გასაგებ ფორმაში გადაყვანას ასევე კოდირებას უწოდებენ. კომპიყტერული პროგრამის შესაქმნელად საჭიროა ინფორმაციის კომპიუტერისათვის გასაგებ ფორმაში გადაყვანა, ამისათვის კომპიუტერულ ენებს ვიყენებეთ.",
    ],
  },
  {
    id: "program_coding",
    title: "პროგრამული კოდი",
    paragraphs: [
      "პროგრამული კოდი ხელოვნურად შექმნილი ენაა, რომელიც კომპიუტერული მოწყობილობებისათვის კომპლექსური დავალებების, ინსტრუქციების მისაცემად არის საჭირო. პროგრამული კოდი პროგრამების შესაქმნელად გამოიყენება, რომლებიც განსაზღვრავენ კომპიუტერული მოწყობილობის მიერ გარკვეული ოპერაციების შესრულებას, განაპირობებენ კომპიუტერული მოწყობილობის ქცევას.",
    ],
  },
  {
    id: "how_coding",
    title: "როგორ მუშაობს პროგრამული ენა",
    paragraphs: [
      "პროგრამირების ენა შედგება საკვანძო სიტყვების, სიმბოლოებისა და ოპერატორების ნაკრებისგან. ადამიანმა რომელსაც პროგრამირების ენასთან შეხება არ ქონია შეიძლება ვერ წარმოიდგინოს როგორ შეიძლება ამ სიმბოლოების ნაკადში გარკვევა, მაგრამ პროგრამირების ენა როგორც ნებისმიერი საკომუნიკაციო სისტემა გარკვეულ წესებს ექვემდაბარება, რომლის შესწავლაც არის შესაძლებელი. უფრო მეტიც ბუნებრივი ენებიაგან განსხვავებით პროგრამირების ზედმოწევნით ზუსტად ექვემდაბარება წესებს და მათში გამონაკლისები არ გვხდება.",
    ],
    fullWidth: true,
  },
];
export const coursesData: CourseCard[] = [
  {
    id: "python",
    href: "/courses/python/1.1",
    logo: "/images/svg/py_logo.svg",
    logoAlt: "Python logo",
    logoWidth: 137.49,
    logoHeight: 137.49,
    backgroundColor: "#ebf3f9",
    shadowColor: "#89b9dd",
    courseName: "Python - ის საწყისები",
    author: "სახელი გვარი",
    topicsCount: 10,
  },
  {
    id: "html-css",
    href: "/courses/html/1.1",
    logo: "/images/svg/html_css_logo.svg",
    logoAlt: "HTML CSS logo",
    logoWidth: 167.19,
    logoHeight: 124.17,
    backgroundColor: "#ddddfe",
    shadowColor: "#ababd0",
    courseName: "HTML, CSS ის საწყისები",
    author: "სახელი გვარი",
    topicsCount: 10,
  },
];
export const projectsData = [
  {
    id: 1,
    name: "გიორგი გომელაური",
    role: "პოზიცია",
    socials: [
      { id: "linkedin", icon: "/images/svg/linkdin.svg", link: "#" },
      { id: "dribbble", icon: "/images/svg/ball.svg", link: "#" },
      { id: "github", icon: "/images/svg/github.svg", link: "#" },
    ],
  },
  {
    id: 2,
    name: "გიორგი გორგოშვილი",
    role: "პოზიცია",
    socials: [
      { id: "linkedin", icon: "/images/svg/linkdin.svg", link: "#" },
      { id: "dribbble", icon: "/images/svg/ball.svg", link: "#" },
      { id: "github", icon: "/images/svg/github.svg", link: "#" },
    ],
  },
  {
    id: 3,
    name: "გიორგი გიორგაძე",
    role: "პოზიცია",
    socials: [
      { id: "linkedin", icon: "/images/svg/linkdin.svg", link: "#" },
      { id: "dribbble", icon: "/images/svg/ball.svg", link: "#" },
    ],
  },
  {
    id: 4,
    name: "გიორგი გიორგაშვილი",
    role: "პოზიცია",
    socials: [{ id: "linkedin", icon: "/images/svg/linkdin.svg", link: "#" }],
  },
  {
    id: 5,
    name: "გიორგი გომელაშვილი",
    role: "პოზიცია",
    socials: [
      { id: "linkedin", icon: "/images/svg//linkdin.svg", link: "#" },
      { id: "github", icon: "/images/svg/github.svg", link: "#" },
      { id: "behance", icon: "/images/svg/be.svg", link: "#" },
    ],
  },
  {
    id: 6,
    name: "გიორგი გიორგაშვილი",
    role: "პოზიცია",
    socials: [
      {
        id: "linkedin",
        icon: "/images/svg/linkdin.svg",
        link: "#",
      },
      { id: "behance", icon: "/images/svg/be.svg", link: "#" },
    ],
  },
];
