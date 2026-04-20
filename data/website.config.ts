export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  profilePicture?: string;
  role: string;
  university: string;
  universityWebsite: string;
  socialMedia: SocialMediaLink[];
}

export interface WebsiteInfo {
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  route: string;
}

export interface HomepageSection {
  AboutSection?: boolean;
  NewsSection?: boolean;
  SelectedPublicationsSection?: boolean;
  ProjectSection?: boolean;
}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {
  name: "Yang Ji",
  profilePicture: "/beibei.jpg", //optional
  role: "Ph.D. Student",
  university: "HKUST(GZ)",
  universityWebsite: "https://hkust-gz.edu.cn/",
  socialMedia: [
    { name: "Email", url: "mailto:yji655@connect.hkust-gz.edu.cn" },
    {
      name: "GitHub",
      url: "https://github.com/yangji721",
    },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=yangji721" },
  ],
};

export const websiteInfo: WebsiteInfo = {
  title: personalInfo.name,
  description: "Ph.D. Graduate at HKUST(GZ), researching Explainable AI and LLM Compression",
};

export const navigations: NavigationItem[] = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "News", route: "/news" },
];

export const homepageSection: HomepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle: FontStyle = "sans"; // "sans" | "serif" | "mono"
