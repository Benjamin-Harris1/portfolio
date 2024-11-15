interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLinks: {
      frontend: string;
      backend: string;
    };
    image?: string;
  }

  export const projects: Project[] = [
    {
      title: "Nemlig.com clone with unique features",
      description:
        "A full-stack e-commerce platform made with Nemlig.com for our exam project, featuring user authentication, product management, and shopping cart functionality.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Prisma"],
      githubLinks: {
        frontend: "https://github.com/osman-butt/nemlig-project-frontend-v2",
        backend: "https://github.com/osman-butt/nemlig-project-backend-v2",
      },
      image: "/assets/nemlig.png",
    },
    {
      title: "RESTful Kino",
      description: "A movie booking system with RESTful architecture, allowing users to browse movies, book tickets, and manage screenings.",
      technologies: ["Java", "Spring Boot", "React", "TypeScript", "MySQL"],
      githubLinks: {
        frontend: "https://github.com/kea-projects-gobs/restfulkino-frontend",
        backend: "https://github.com/kea-projects-gobs/restfulkino-backend",
      },
      image: "/assets/restfulKino.png",
    },
    {
      title: "Big Bowl",
      description: "A restaurant management system for Big Bowl, featuring table reservations, menu management, and order processing.",
      technologies: ["Java", "Spring Boot", "React", "TypeScript", "MySQL"],
      githubLinks: {
        frontend: "https://github.com/kea-projects-gobs/bigbowl-frontend",
        backend: "https://github.com/kea-projects-gobs/bigbowl-backend",
      },
      image: "/assets/bigbowlxp.png",
    },
  ];

