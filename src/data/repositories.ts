export interface Repository {
  name: string;
  visibility: "Public" | "Private";
  technology: string;
  sizeKB: number;
  updatedDaysAgo: number;
}

const repositories: Repository[] = [
  {
    name: "design-system",
    visibility: "Public",
    technology: "React",
    sizeKB: 7320,
    updatedDaysAgo: 1,
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    technology: "JavaScript",
    sizeKB: 5871,
    updatedDaysAgo: 2,
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    technology: "Python",
    sizeKB: 4521,
    updatedDaysAgo: 5,
  },
  {
    name: "mobile-app",
    visibility: "Public",
    technology: "Swift",
    sizeKB: 3096,
    updatedDaysAgo: 3,
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    technology: "Java",
    sizeKB: 6210,
    updatedDaysAgo: 6,
  },
  {
    name: "blog-website",
    visibility: "Public",
    technology: "HTML/CSS",
    sizeKB: 1876,
    updatedDaysAgo: 4,
  },
  {
    name: "social-network",
    visibility: "Private",
    technology: "PHP",
    sizeKB: 5432,
    updatedDaysAgo: 7,
  },
];

export default repositories;
