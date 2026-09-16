export type ProfileId = "go" | "python" | "java" | "unity";

export type Experience = {
  company: string;
  country: string;
  role: string;
  date: string;
  details: string[];
};

export type Project = {
  name: string;
  image: string;
  links: { label: string; href: string }[];
};

export type Course = {
  name: string;
  provider: { name: string; url: string };
};

export type Education = {
  degree: string;
  institution: string;
  country: string;
  date: string;
};

export type Profile = {
  label: string;
  href: string;
  icon: string;
  accent: string;
  title: string;
  edition: string;
  intro: string;
  emphasis: string;
  description: string;
  experience: Experience[];
  projects: Project[];
  technologies: string[];
  languages: string[];
  courses: Course[];
  education: Education[];
};

export const commonEducation: { tuDresden: Education; kfu: Education } = {
  tuDresden: {
    degree: "M.Sc. Computational Modeling and Simulation",
    institution: "TU Dresden",
    country: "Germany",
    date: "Oct 2023 — Sep 2026"
  },
  kfu: {
    degree: "B.Sc. Computer Science",
    institution: "Kazan Federal University",
    country: "Russia",
    date: "Sep 2019 — Jun 2023"
  }
};

export const commonCourses: { distributedComputing: Course; } = {
  distributedComputing: {
      name: "Distributed computing",
      provider: {
        name: "VK · 2026",
        url: "https://education.vk.company"
      }
  },
};

// Named roles are the only shared content. Add either to a profile's experience.
export const commonExperience: { tuDresden: Experience; samsungKfu: Experience } = {
  tuDresden: {
    company: "TU Dresden",
    country: "Germany",
    role: "Python / Go Backend Developer",
    date: "Oct 2024 — Present",
    details: [
      "Development and maintenance of Python/Go backend services for a web application and internal integrations",
      "Designing REST/gRPC APIs, implementing server-side business logic, working with FastAPI, SQLAlchemy, and PostgreSQL",
      "Participation in the development of microservices architecture and event-driven communication via Kafka",
      "Implementing background tasks, asynchronous data processing, and caching using Redis",
      "Service containerization and deployment: Docker, Docker Compose, Docker Swarm",
      "Configuring Kubernetes environments for running and managing services",
      "Implementing observability: structured logging, Prometheus metrics, visualization in Grafana, tracing via Jaeger, and centralized log collection via Loki",
      "Working on the stability, fault tolerance, and scalability of backend services",
      "Maintenance of individual Vue.js frontend modules"
    ]
  },
  samsungKfu: {
    company: "Samsung / KFU IT-Lyceum",
    country: "Russia",
    role: "Android & Java Teacher",
    date: "Sep 2021 — Sep 2023",
    details: [
      "Taught Java programming and Android application development; 90% of students created functional Android apps by the end of the course.",
      "Instructed students on mobile app and game architecture so they could design and develop their own applications and games."
    ]
  }
};

export const profiles: Record<ProfileId, Profile> = {
  go: {
    label: "Go developer",
    href: "/go/",
    icon: "golang",
    accent: "#00AED9",
    title: "GO BACKEND",
    edition: "GO / BACKEND",
    intro: "I build robust, high-throughput systems that power the",
    emphasis: "Go backend",
    description: "Microservices, distributed architectures and real-time APIs. From clean domain architecture and high-performance concurrency to cloud infrastructure, event-driven pipelines and high-load databases — I build the reliable systems that make scale possible.",
    experience: [
      commonExperience.tuDresden
    ],
    projects: [
    ],
    technologies: [
      "net/http",
      "Gin",
      "REST API",
      "WebSockets",
      "goroutines",
      "channels",
      "context",
      "Zap",
      "PostgreSQL",
      "GORM",
      "Redis",
      "Unit testing",
      "Docker",
      "Nginx",
      "Linux / Ubuntu",
      "CI/CD",
      "Git",
      "Vue.js",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Jaeger",
      "Loki",
      "Kafka",
      "gRPC",
      "OpenTelemetry",
      "OpenAPI",
      "Testcontainers",
      "Swagger Codegen"
    ],
    languages: [
      "Go",
      "SQL",
      "JavaScript",
      "HTML / CSS"
    ],
    courses: [
      commonCourses.distributedComputing,
      {
        name: "Backend Development Go",
        provider: {
          name: "VK · 2026",
          url: "https://education.vk.company"
        }
      },
    ],
    education: [
      commonEducation.tuDresden,
      commonEducation.kfu
    ]
  },
  python: {
    label: "Python developer",
    href: "/python/",
    icon: "python",
    accent: "#FFCD40",
    title: "PYTHON & BACKEND",
    edition: "PYTHON / BACKEND",
    intro: "I build robust, high-throughput systems that power the",
    emphasis: "Python backend",
    description: "Microservices, distributed architectures and real-time APIs. From clean domain architecture and high-performance concurrency to cloud infrastructure, event-driven pipelines and high-load databases — I build the reliable systems that make scale possible.",
    experience: [
      commonExperience.tuDresden
    ],
    projects: [
      {
        name: "Kadi4Mat",
        image: "/images/projects/kadi.png",
        links: [
          {
            label: "Web",
            href: "https://kadi.iam.kit.edu/"
          }
        ]
      }
    ],
    technologies: [
      "Flask",
      "Django",
      "FastAPI",
      "Alembic",
      "SQLAlchemy",
      "Kafka / RabbitMQ",
      "Redis",
      "NATS / NATS JetStream",
      "Celery / TaskIQ",
      "FastStream",
      "Dishka",
      "REST API",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Linux / Ubuntu",
      "Git / CI/CD",
      "Vue.js",
      "PyTorch / Deep Learning / Machine Learning",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Jaeger",
      "Loki",
      "Kafka",
      "gRPC",
      "OpenTelemetry",
      "OpenAPI",
      "Testcontainers",
      "Swagger Codegen",
      "OOP",
      "SOLID"
    ],
    languages: [
      "Python",
      "SQL",
      "JavaScript",
      "HTML / CSS"
    ],
    courses: [
      commonCourses.distributedComputing,
      {
        name: "Advanced Python",
        provider: {
          name: "VK · 2026",
          url: "https://education.vk.company"
        }
      },
    ],
    education: [
      commonEducation.tuDresden,
      commonEducation.kfu
    ]
  },
  java: {
    label: "Java developer",
    href: "/java/",
    icon: "java",
    accent: "#F58219",
    title: "JAVA & BACKEND",
    edition: "JAVA / BACKEND",
    intro: "I build robust, high-throughput systems that power the",
    emphasis: "Java backend",
    description: "Microservices, distributed architectures and real-time APIs. From clean domain architecture and high-performance concurrency to cloud infrastructure, event-driven pipelines and high-load databases — I build the reliable systems that make scale possible.",
    experience: [
      commonExperience.tuDresden
    ],
    projects: [
    ],
    technologies: [
      "Spring Framework / Spring Boot",
      "Spring Cloud",
      "Spring Data / Hibernate",
      "Liquibase",
      "REST API",
      "PostgreSQL",
      "Docker",
      "Gradle",
      "Nginx",
      "Linux / Ubuntu",
      "Git / CI/CD",
      "OOP",
      "SOLID",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Jaeger",
      "Loki",
      "Kafka",
      "Redis",
      "gRPC",
      "OpenTelemetry",
      "OpenAPI",
      "Testcontainers",
      "Swagger Codegen"
    ],
    languages: [
      "Java",
      "Kotlin",
      "SQL",
      "JavaScript",
      "HTML / CSS"
    ],
    courses: [
      commonCourses.distributedComputing,
      {
        name: "Backend Development Java",
        provider: {
          name: "T-Bank · 2025",
          url: "https://edu.tinkoff.ru/"
        }
      },
    ],
    education: [
      commonEducation.tuDresden,
      commonEducation.kfu
    ]
  },
  unity: {
    label: "Unity developer",
    href: "/unity/",
    icon: "unity",
    accent: "#110B09",
    title: "UNITY / AR / VR",
    edition: "UNITY / GAME DEV",
    intro: "I turn ideas into playable worlds through",
    emphasis: "Unity, AR & VR",
    description: "Mobile games, real-world AR and immersive VR. From game architecture and custom shaders to multiplayer, computer vision and publishing across platforms — I build the systems that make play possible.",
    experience: [
      {
        company: "Ludens / Woodrooms",
        country: "Russia",
        role: "Middle Unity Developer · Project work",
        date: "May 2023 — Jan 2026",
        details: [
          "Developed and integrated a YOLOv7 model for object detection, exporting it to ONNX for Unity.",
          "Prototyped a real-world AR game using Niantic SDK.",
          "Created custom DLL builds of Microsoft ONNX libraries to resolve Unity integration issues.",
          "Connected Unity WebTexture to neural networks, translating detected real-world objects into in-game assets.",
          "Developed game localization logic.",
          "Designed client-server interaction using C# Sockets and Mirror.",
          "Created quest logic and new-player tutorial systems.",
          "Developed player geolocation and map zoning, enabling interaction with in-game entities similar to Pokémon Go.",
          "Implemented VR experiences using Meta XR SDK."
        ]
      },
      {
        company: "Taptics",
        country: "Russia",
        role: "Middle Unity Developer · Mobile",
        date: "Sep 2021 — May 2023",
        details: [
          "Designed scalable and maintainable game architecture using design patterns.",
          "Implemented Match-3, idler and roguelike mechanics.",
          "Integrated Facebook Ads and Unity Ads.",
          "Integrated Google, Apple, VK and AppGallery account authentication (OAuth).",
          "Released games on AppGallery, adapting advertising and monetization.",
          "Developed custom real-time shaders.",
          "Created quest, inventory and tutorial systems.",
          "Implemented metric collection using AppLovin.",
          "Conducted A/B testing to optimize gameplay and user experience.",
          "Developed game localization logic."
        ]
      },
      commonExperience.samsungKfu,
      {
        company: "Mageinn",
        country: "Russia",
        role: "Junior Unity Web Developer",
        date: "Jun 2019 — Aug 2021",
        details: [
          "Developed WebGL applications for gambling platforms.",
          "Compressed textures and assets, reducing load times by 30%.",
          "Created Unity WebGL page templates with HTML and CSS.",
          "Implemented slot machine logic and quest systems.",
          "Deployed games to servers and wrote client-server interaction code."
        ]
      }
    ],
    projects: [
      {
        name: "Monster Crush: RPG Idle Merge",
        image: "/images/projects/monster-crush.webp",
        links: [
          {
            label: "Android",
            href: "https://play.google.com/store/apps/details?id=com.midcore.monsterscrush"
          }
        ]
      },
      {
        name: "Pirates & Puzzles — PVP League",
        image: "/images/projects/pirates-and-puzzles.webp",
        links: [
          {
            label: "Android",
            href: "https://play.google.com/store/apps/details?id=com.herocraft.game.pirates.and.puzzles.match.pvp"
          },
          {
            label: "iOS",
            href: "https://apps.apple.com/ru/app/pirates-puzzles-pvp-league/id1483755748"
          }
        ]
      },
      {
        name: "Monster Land: Survival Escape",
        image: "/images/projects/monster-land.png",
        links: [
          {
            label: "Android",
            href: "https://play.google.com/store/apps/details?id=com.eddev.landofmonsters"
          },
          {
            label: "iOS",
            href: "https://apps.apple.com/us/app/monster-land-survival-escape/id6747615252"
          }
        ]
      },
      {
        name: "ARsenal Craft",
        image: "/images/projects/arcraft.webp",
        links: [
          {
            label: "Android",
            href: "https://play.google.com/store/apps/details?id=com.sludens.arsenalcraft"
          }
        ]
      }
    ],
    technologies: [
      "Unity URP / HDRP",
      "OpenXR (VR/AR)",
      "Meta XR SDK",
      "Niantic SDK",
      "Shaders",
      "Unity UI Toolkit",
      "Animator",
      "UniTask",
      "UniRx / R3",
      "VContainer / Zenject / Extenject",
      "Entitas / DOTS / ECS",
      "Addressables",
      "MessagePipe",
      "Yarn Spinner",
      ".NET Core",
      "Mirror / Netcore",
      "C# Sockets",
      "ONNX",
      "Blender",
      "Maya",
      "Cinema 4D",
      "Houdini",
      "Git / CI / CD",
      "Docker",
      "SOLID",
      "OOP",
      "Design Patterns",
      "Unit testing",
    ],
    languages: [
      "C#",
      "SQL",
      "JavaScript",
      "HTML / CSS",
    ],
    courses: [
      {
        name: "Unity Entity Component System",
        provider: {
          name: "K-Syndicate",
          url: "https://lms.k-syndicate.school/ecs"
        }
      },
      {
        name: "Unity Addressables",
        provider: {
          name: "K-Syndicate",
          url: "https://lms.k-syndicate.school/addressables/"
        }
      },
      {
        name: "Architecture of Unity mobile games",
        provider: {
          name: "K-Syndicate",
          url: "https://lms.k-syndicate.school/architecture-unity-games/"
        }
      },
      {
        name: "Deep Learning",
        provider: {
          name: "Netology",
          url: "https://netology.ru/programs/deep-learning"
        }
      },
      {
        name: "Computer Vision",
        provider: {
          name: "RobotDreams",
          url: "robotdreams.cc/uk/course/318-computer-vision"
        }
      },
      {
        name: "Visual Effects Artist",
        provider: {
          name: "Volnitsa",
          url: "https://volnitsa.net/"
        }
      }
    ],
    education: [
      commonEducation.tuDresden,
      commonEducation.kfu
    ]
  }
};
