export const siteData = {
  name: "Long Le",
  title: "Backend Engineer",
  tagline:
    "Backend Engineer specializing in Distributed & Event-Driven Systems (Java, Go, Node.js, PHP). Building high-throughput distributed systems, event-driven integrations, and production MCP servers.",
  about:
    "Backend engineer with 6 years building large-scale, high-throughput distributed systems, with deep ownership of event-driven integrations and data sync for e-commerce and marketing platforms. At Flodesk, owns two-way sync of subscribers and order/commerce events across Shopify, Squarespace, Wix, ThriveCart, and Zapier — webhook ingestion, OAuth token lifecycles, consent compliance, and high-throughput import pipelines — and also designed and shipped the company’s production remote Model Context Protocol (MCP) server (mcp.flodesk.com), exposing Flodesk analytics to LLM clients with OAuth 2.1 and full observability. Earlier, nearly four years of Java / Spring Boot microservices and serverless on AWS, including high-throughput banking data migration. AWS Solutions Architect and Terraform certified.",
  resumeUrl: "/cv.pdf",

  experience: [
    {
      company: "Flodesk",
      role: "Backend Engineer",
      period: "May 2025 - Jul 2026",
      description:
        "Owned Flodesk’s third-party integration platform across six commerce/content integrations (Shopify, Squarespace, Wix, ThriveCart, Canva, Instagram) plus Zapier — OAuth (including an Ory Hydra authorization-server upgrade), webhook ingestion, token refresh, and consent-compliant sync. Eliminated ~200k redundant events/day with checkpointing and dedup, cut subscriber-import memory ~50%, and built the Dunning 2.0 event-driven payment-recovery flow. Designed and shipped Flodesk’s remote Model Context Protocol (MCP) server (TypeScript) to production with OAuth 2.1, Streamable HTTP transport, and Prometheus metrics.",
      tech: [
        "Go",
        "TypeScript",
        "Node.js",
        "Webhooks",
        "OAuth2 (Ory Hydra)",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Recurly",
        "AWS",
        "Kubernetes",
        "Prometheus",
        "OpenTelemetry",
      ],
    },
    {
      company: "FPT Software",
      role: "Technical Lead",
      period: "Jan 2025 - May 2025",
      description:
        "Robotic Platform – Web Store (robotic module store for the DART platform). Built and maintained the DART robotic-module store, scaling its high-throughput Spring Boot APIs; optimized MongoDB queries and indexes to reduce response time and keep latency stable under load. Delivered end-to-end store features across Java 17/Spring Boot APIs and ReactJS UI, from API design through frontend integration and production deployment.",
      tech: ["Java 17 (Spring Boot)", "ReactJS", "MongoDB", "AWS", "Kubernetes", "ArgoCD", "SonarQube"],
    },
    {
      company: "FPT Software",
      role: "Senior Software Engineer",
      period: "Sep 2022 - Dec 2024",
      description:
        "Healthcare System – serverless for medical records. Built durable batch-processing workflows for medical-record management, running entirely on AWS Lambda and completing each batch within 10 minutes. Automated Terraform infrastructure and Jenkins/SonarQube CI/CD, cutting deployment time 50%; supported secure authentication with Cognito JWT and mentored junior engineers on backend practices.",
      tech: ["Java 11 (Quarkus)", "AWS Lambda", "MySQL", "MongoDB", "Terraform", "Cognito JWT", "Jenkins"],
    },
    {
      company: "KMS Technology",
      role: "Software Engineer",
      period: "Jul 2021 - Aug 2022",
      description:
        "Banking System – high-speed data migration. Designed and implemented high-speed migration tool with Spring Batch parallel processing and Kafka for tables with millions of records and 30+ columns. Optimized batch jobs reducing migration run from >10 hours to ~1 hour, and diagnosed and resolved data-write race conditions to ensure data correctness while improving throughput.",
      tech: ["Java 11 (Spring Boot, Spring Batch, Spring Data)", "TiDB", "Kafka", "Docker"],
    },
    {
      company: "Cloud Nine Solutions",
      role: "Software Engineer",
      period: "Aug 2020 - Jun 2021",
      description:
        "Built RESTful APIs and optimized database queries on a Laravel / MySQL stack; foundational backend and system-design experience working alongside senior engineers.",
      tech: ["PHP (Laravel)", "MySQL", "Docker"],
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "Golang", "TypeScript", "Node.js", "PHP", "ReactJS", "JavaScript"],
    },
    {
      category: "Backend & Cloud",
      items: ["AWS", "Kubernetes", "Docker", "Terraform", "AWS Lambda", "Prometheus", "OpenTelemetry"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "TiDB"],
    },
    {
      category: "System Design",
      items: [
        "Distributed Systems",
        "Event-Driven Architecture",
        "Microservices",
        "Message Queues (SQS, Kafka)",
        "Webhooks & Idempotency",
        "High-Availability & Throughput",
        "Performance Optimization",
      ],
    },
    {
      category: "MCP & Agent Tooling",
      items: [
        "MCP Server Design",
        "OAuth 2.1 & Dynamic Client Registration",
        "MCP Tool & Schema Design",
        "Agentic Workflows (Claude Code)",
      ],
    },
  ],

  certifications: [
    "AWS Certified Solutions Architect - Associate",
    "HashiCorp Certified: Terraform Associate",
  ],

  education: [
    {
      institution: "Ho Chi Minh University of Technology (Bach Khoa HCM)",
      degree: "B.Eng. in Computer Science",
      period: "08/2017 – 04/2022",
      gpa: "7.59",
    },
  ],

  projects: [
    {
      title: "Event Processing Fairness System",
      description:
        "A distributed system that processes webhook events fairly across multi-tenant accounts. Uses Kafka for event streaming, Redis for rate limiting and deduplication, and circuit breakers for fault tolerance. Includes a dead-letter queue service for retry handling and full observability via Prometheus/Grafana. Deployed on Kubernetes with auto-scaling.",
      tech: ["Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Go", "Docker", "Kubernetes", "Helm", "Prometheus", "Grafana"],
      github: "https://github.com/long-lehoang/event-processing-fairness",
      demo: "",
      image: "/images/project-1.png",
    },
    {
      title: "Flodesk Remote MCP Server",
      description:
        "Production remote Model Context Protocol server exposing analytics tools to LLM clients. Architected with OAuth 2.1, Dynamic Client Registration, Streamable HTTP transport, per-session isolation, Redis rate limiting, and Prometheus metrics.",
      tech: ["TypeScript", "Node.js", "MCP SDK", "OAuth 2.1", "Redis", "Docker", "Prometheus"],
      github: "https://github.com/long-lehoang",
      demo: "https://mcp.flodesk.com",
      image: "/images/project-2.png",
    },
    {
      title: "High-Speed Banking Data Migration Tool",
      description:
        "High-speed data migration tool for banking system tables with millions of records. Designed with Spring Batch parallel processing and Kafka streaming, cutting migration duration from >10 hours to ~1 hour with zero downtime.",
      tech: ["Java", "Spring Boot", "Spring Batch", "TiDB", "Kafka", "Docker"],
      github: "https://github.com/long-lehoang",
      demo: "",
      image: "/images/project-3.png",
    },
    {
      title: "Healthcare Serverless Microservices",
      description:
        "Serverless microservices managing medical records and handling millions of daily transactions. Built on Quarkus and AWS Lambda with sub-10-minute batch workflows, Terraform IaC, and Cognito JWT security.",
      tech: ["Java", "Quarkus", "AWS Lambda", "Terraform", "MySQL", "MongoDB", "Cognito JWT"],
      github: "https://github.com/long-lehoang",
      demo: "",
      image: "/images/project-4.png",
    },
  ],

  socialLinks: [
    { name: "github", url: "https://github.com/long-lehoang" },
    { name: "linkedin", url: "https://www.linkedin.com/in/long-lehoang" },
    { name: "email", url: "mailto:long.bk.khmt@gmail.com" },
  ],
};
