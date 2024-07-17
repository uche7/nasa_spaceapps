export const navigationData = (Router: any) => [
  {
    text: "Home",
    route: () => Router.push("/"),
  },
  {
    text: "Blogs",
    route: () => Router.push("/blogs"),
  },
  {
    text: "FAQ's",
    route: () => Router.push("/faq"),
  },
  {
    text: "Challenges",
    route: () =>
      window.open(
        "https://www.spaceappschallenge.org/2023/challenges/",
        "_blank"
      ),
  },
];
