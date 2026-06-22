import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandTwitterFilled, IconMailFilled } from "@tabler/icons-react";
import { siteConfig } from "./site";

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    url: siteConfig.github,
    icon: IconBrandGithubFilled,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ishan-maiti/",
    icon: IconBrandLinkedinFilled,
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:"+siteConfig.email,
    icon: IconMailFilled,
  },
  {
    id: "twitter",
    label: "Twitter",
    url: "https://twitter.com/",
    icon: IconBrandTwitterFilled,
  },
];