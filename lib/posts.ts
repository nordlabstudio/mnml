export type PostBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  cover: string;
  keywords: string[];
  content: PostBlock[];
};

const posts: Post[] = [
  {
    id: "01",
    title: "The Power of Less: Embracing Minimal Design",
    slug: "minimal-design-power",
    date: "2025-05-04",
    excerpt: "Exploring the principles and benefits of minimalism in design.",
    cover: "/assets/posts/01/cover.jpeg",
    keywords: ["minimalism", "design", "UI", "simplicity", "aesthetics"],
    content: [
      { type: "heading", text: "Introduction" },
      {
        type: "paragraph",
        text: "Minimal design is more than just a visual style—it's a philosophy that values clarity, focus, and intentionality. In a world saturated with information, minimalism helps users find what matters most by removing distractions and emphasizing essentials.",
      },
      { type: "heading", text: "Key Principles" },
      {
        type: "list",
        items: [
          "Whitespace: Using negative space to create balance and focus.",
          "Limited Color Palette: Ensuring harmony and visual calm.",
          "Clean Typography: Prioritizing readability and hierarchy.",
          "Purposeful Elements: Every component serves a clear function.",
        ],
      },
      { type: "heading", text: "Benefits" },
      {
        type: "paragraph",
        text: "Minimal design leads to improved clarity, faster load times, easier navigation, and a timeless look. It communicates confidence and sophistication, allowing the core message to shine.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Embracing minimalism challenges designers to be intentional and prioritize what truly matters, resulting in more effective and enjoyable user experiences.",
      },
      { type: "heading", text: "Part 2" },
      {
        type: "paragraph",
        text: "A designer must also consider the emotional impact of minimal design. By stripping away unnecessary elements, users can focus on the content and functionality, leading to a more satisfying interaction.",
      },
    ],
  },
  {
    id: "02",
    title: "Color Psychology: How Hues Influence Perception",
    slug: "color-psychology-design",
    date: "2025-05-04",
    excerpt:
      "Understanding how colors evoke emotions and guide user experience in design.",
    cover: "/assets/posts/02/cover.jpeg",
    keywords: ["color", "psychology", "emotion", "branding", "UI"],
    content: [
      { type: "heading", text: "Introduction" },
      {
        type: "paragraph",
        text: "Color is a powerful tool in design, capable of evoking emotions, influencing decisions, and shaping perceptions. Understanding color psychology helps designers create more effective and engaging experiences.",
      },
      { type: "heading", text: "How Colors Affect Us" },
      {
        type: "list",
        items: [
          "Red: Energy, urgency, passion",
          "Blue: Trust, calm, professionalism",
          "Yellow: Optimism, attention, warmth",
          "Green: Growth, health, tranquility",
          "Purple: Creativity, luxury, wisdom",
        ],
      },
      { type: "heading", text: "Applying Color Psychology" },
      {
        type: "paragraph",
        text: "Use color intentionally to guide users, reinforce branding, and create the desired mood. Consider cultural differences and accessibility when choosing palettes.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "By leveraging color psychology, designers can craft experiences that resonate emotionally and drive user engagement.",
      },
    ],
  },
  {
    id: "03",
    title: "Typography Matters: More Than Just Words",
    slug: "typography-matters-design",
    date: "2025-05-18",
    excerpt:
      "Exploring how font choices impact readability, hierarchy, and brand identity.",
    cover: "/assets/posts/03/cover.jpeg",
    keywords: ["typography", "fonts", "readability", "branding", "UI"],
    content: [
      { type: "heading", text: "Introduction" },
      {
        type: "paragraph",
        text: "Typography is the art and technique of arranging type. It goes beyond choosing a font—it's about creating hierarchy, guiding the reader, and expressing brand personality.",
      },
      { type: "heading", text: "Why Typography Matters" },
      {
        type: "list",
        items: [
          "Readability: Good typography makes content easy to scan and understand.",
          "Hierarchy: Font size, weight, and spacing direct attention and structure information.",
          "Brand Identity: Fonts convey mood and values, shaping how users perceive a brand.",
        ],
      },
      { type: "heading", text: "Best Practices" },
      {
        type: "paragraph",
        text: "Limit the number of fonts, use clear contrasts, and ensure sufficient line spacing. Test typography across devices for consistency.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Thoughtful typography elevates design, making content more engaging and memorable.",
      },
    ],
  },
  {
    id: "04",
    title: "Running a Design Studio with Next.js",
    slug: "running-design-studio-nextjs",
    date: "2025-05-06",
    excerpt:
      "Insights into managing a design studio specializing in creating websites with Next.js.",
    cover: "/assets/posts/04/cover.jpeg",
    keywords: [
      "design studio",
      "Next.js",
      "web development",
      "studio management",
      "website design",
    ],
    content: [
      { type: "heading", text: "Introduction" },
      {
        type: "paragraph",
        text: "Running a design studio focused on Next.js projects requires a blend of creative vision and technical expertise. Next.js offers flexibility, performance, and scalability for modern web design.",
      },
      { type: "heading", text: "Studio Workflow" },
      {
        type: "list",
        items: [
          "Client Discovery: Understanding goals and requirements.",
          "Design & Prototyping: Using tools like Figma or Framer for rapid iteration.",
          "Development: Leveraging Next.js features for fast, SEO-friendly sites.",
          "Launch & Support: Ensuring smooth deployment and ongoing maintenance.",
        ],
      },
      { type: "heading", text: "Tips for Success" },
      {
        type: "paragraph",
        text: "Build a strong team, invest in process automation, and stay updated with the latest Next.js releases.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "A Next.js-focused studio can deliver high-value solutions for clients seeking modern, performant websites.",
      },
    ],
  },
  {
    id: "05",
    title: "Selling Website Templates in Framer",
    slug: "selling-website-templates-framer",
    date: "2025-05-06",
    excerpt:
      "A guide to creating and selling website templates using Framer's powerful design and publishing tools.",
    cover: "/assets/posts/05/cover.jpeg",
    keywords: [
      "Framer",
      "website templates",
      "design",
      "selling",
      "web development",
    ],
    content: [
      { type: "heading", text: "Introduction" },
      {
        type: "paragraph",
        text: "Framer has emerged as a leading platform for designing and publishing website templates. Its intuitive interface and robust features make it easy for designers to create, share, and sell their work.",
      },
      { type: "heading", text: "Getting Started" },
      {
        type: "list",
        items: [
          "Explore Framer's template marketplace to understand trends.",
          "Design with reusability and customization in mind.",
          "Leverage Framer's publishing tools for seamless distribution.",
        ],
      },
      { type: "heading", text: "Monetization Tips" },
      {
        type: "paragraph",
        text: "Offer value through unique designs, clear documentation, and responsive support. Promote your templates via social media and design communities.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Selling templates in Framer can be a rewarding way to share your creativity and generate income.",
      },
    ],
  },
  {
    id: "06",
    title: "Applying AI in Website Design",
    slug: "applying-ai-in-website-design",
    date: "2025-05-06",
    excerpt:
      "Exploring how artificial intelligence is transforming the process of designing modern websites.",
    cover: "/assets/posts/06/cover.jpeg",
    keywords: [
      "AI",
      "website design",
      "artificial intelligence",
      "web development",
      "design automation",
    ],
    content: [
      { type: "heading", text: "Introduction" },
      {
        type: "paragraph",
        text: "Artificial intelligence is revolutionizing website design by automating repetitive tasks, personalizing user experiences, and enabling new creative possibilities.",
      },
      { type: "heading", text: "AI Applications in Design" },
      {
        type: "list",
        items: [
          "Automated layout and color suggestions",
          "Content generation and optimization",
          "Personalized user interfaces",
          "Accessibility improvements",
        ],
      },
      { type: "heading", text: "Challenges & Considerations" },
      {
        type: "paragraph",
        text: "While AI offers many benefits, designers must ensure ethical use, avoid bias, and maintain creative control.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Embracing AI can help designers work smarter and create more impactful digital experiences.",
      },
    ],
  },
];

export default posts;
