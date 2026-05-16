export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Volunteers", path: "/volunteers" },
  { label: "Gallery", path: "/gallery" },
  { label: "Events", path: "/events" },
  { label: "Donate", path: "/donate" },
  { label: "Contact", path: "/contact" },
]

const pexels = (id, width = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`

export const images = {
  hero: pexels(5884360, 1800),
  about: pexels(18012458),
  classroom: pexels(18012457),
  food: pexels(5909876),
  health: pexels(37019500),
  shelter: pexels(33157231),
  volunteer: pexels(36818423),
  event: pexels(36848852),
  sponsor: pexels(18012462),
}

export const stats = [
  { label: "Children supported", value: 200, suffix: "+" },
  { label: "Active volunteers", value: 20, suffix: "+" },
  { label: "Donation drives", value: 35, suffix: "+" },
  { label: "Community campaigns", value: 10, suffix: "+" },
]

export const impactMetrics = [
  { label: "Meals served", value: 2000, suffix: "+" },
  { label: "School kits shared", value: 300, suffix: "+" },
  { label: "Health checkups", value: 100, suffix: "+" },
  { label: "Shelter assists", value: 50, suffix: "+" },
]

export const programs = [
  {
    title: "Education Support",
    icon: "GraduationCap",
    image: images.classroom,
    description:
      "School supplies, tuition support, mentoring, and learning circles for children who need steady academic care.",
    points: ["Bridge classes", "Digital learning", "Scholarship guidance"],
  },
  {
    title: "Food Distribution",
    icon: "Utensils",
    image: images.food,
    description:
      "Nutritious meals, ration kits, and community kitchens that help children focus on growth instead of hunger.",
    points: ["Meal drives", "Ration kits", "Nutrition awareness"],
  },
  {
    title: "Healthcare Assistance",
    icon: "Stethoscope",
    image: images.health,
    description:
      "Health camps, medicine assistance, hygiene education, and referral support for vulnerable families.",
    points: ["Health camps", "Medicine support", "Hygiene kits"],
  },
  {
    title: "Child Protection",
    icon: "ShieldCheck",
    image: images.shelter,
    description:
      "Safe spaces, emotional care, awareness sessions, and referrals for children facing neglect or risk.",
    points: ["Safe spaces", "Counselling links", "Awareness drives"],
  },
  {
    title: "Skill Development",
    icon: "Sparkles",
    image: pexels(37261819),
    description:
      "Workshops that build confidence, creativity, communication, and practical abilities for young people.",
    points: ["Life skills", "Creative workshops", "Career exposure"],
  },
  {
    title: "Emergency Relief",
    icon: "LifeBuoy",
    image: images.food,
    description:
      "Fast support during floods, illness, displacement, or family crises through relief kits and volunteer networks.",
    points: ["Relief kits", "Rapid response", "Community mapping"],
  },
]

export const timeline = [
  {
    year: "2021",
    title: "The first learning circle",
    description:
      "Kashi Keshav began with volunteer-led evening classes for children who had fallen behind in school.",
  },
  {
    year: "2022",
    title: "Food and health drives",
    description:
      "The team expanded into ration support, hygiene kits, and basic healthcare camps across local communities.",
  },
  {
    year: "2024",
    title: "Community partnerships",
    description:
      "Schools, local leaders, donors, and young volunteers joined hands to support broader child welfare work.",
  },
  {
    year: "2026",
    title: "India-wide volunteer network",
    description:
      "Kashi Keshav continues building stronger city chapters and deeper long-term support for children.",
  },
]

export const values = [
  {
    title: "Compassion",
    icon: "Heart",
    description: "We listen first and respond with care, dignity, and consistency.",
  },
  {
    title: "Trust",
    icon: "BadgeCheck",
    description: "Every drive, donation, and decision is handled with transparency.",
  },
  {
    title: "Opportunity",
    icon: "BookOpen",
    description: "Children deserve equal access to education, safety, and growth.",
  },
  {
    title: "Community",
    icon: "Users",
    description: "Lasting change happens when families, volunteers, and supporters move together.",
  },
]

export const founder = {
  name: "Sakshi Anand",
  role: "Founder",
  age: 30,
  location: "India",
  image: "/Sakshi_Anand.webp",
  imageFit: "contain",
  imagePosition: "center",
  contribution:
    "Sakshi leads Kashi Keshav with a focus on education access, emotional care, and volunteer-led community support for children.",
}

export const volunteers = [
  {
    name: "Veer Jha",
    location: "Ahmedabad",
    age: 27,
    image: "/Veer Jha.webp",
    contribution:
      "Coordinates education kit drives and helps build local student mentoring circles in Ahmedabad.",
  },
  {
    name: "Sandeep Anand",
    location: "Bihar",
    age: 33,
    image: "/Sandeep Anand.webp",
    imageFit: "contain",
  imagePosition: "center",
    contribution:
      "Supports rural outreach, family counselling connections, and relief distribution planning.",
  },
  {
    name: "Sagar Anand",
    location: "Noida",
    age: 20,
    image: "/sagar.webp",
    imageFit: "contain",
    imagePosition: "center",
    contribution:
      "Leads youth volunteering activities, digital awareness content, and weekend learning sessions.",
  },
  {
    name: "Vikas Gupta",
    location: "Kolkata",
    age: 31,
    image: pexels(36876208, 900),
    contribution:
      "Organizes food drives, sponsor coordination, and field support for child welfare campaigns.",
  },
]

export const additionalVolunteers = [
  { name: "Mr. Vishal Singhaniya", age: 45, location: "Kolkata" },
  { name: "Ms. Ritu Aarya", age: 31, location: "Patna, Bihar" },
  { name: "Md. Kaif", age: 33, location: "Jharkhand" },
  { name: "Ms. Monika", age: null, location: "Maharashtra" },
  { name: "Mukesh Yadav", age: 28, location: "India" },
  { name: "Saurabh Suman", age: null, location: "Chennai" },
  { name: "Shubham", age: null, location: "Gurgaon" },
]

export const testimonials = [
  {
    name: "Asha Kumari",
    role: "Community parent",
    quote:
      "Kashi Keshav helped my daughter return to school with books, guidance, and the confidence she had lost.",
  },
  {
    name: "Rahul Verma",
    role: "Monthly donor",
    quote:
      "The team shares clear updates and real stories from the ground. Supporting them feels personal and meaningful.",
  },
  {
    name: "Nidhi Singh",
    role: "Volunteer mentor",
    quote:
      "Every session reminds me how much children can bloom when someone simply shows up for them regularly.",
  },
]

export const galleryImages = [
  {
    title: "Learning circle",
    image: images.classroom,
  },
  {
    title: "Nutrition support",
    image: images.food,
  },
  {
    title: "Health awareness",
    image: images.health,
  },
  {
    title: "Volunteer day",
    image: images.volunteer,
  },
  {
    title: "Community event",
    image: images.event,
  },
  {
    title: "Sponsor visit",
    image: images.sponsor,
  },
  {
    title: "Creative workshop",
    image: pexels(37261819, 1000),
  },
  {
    title: "Relief campaign",
    image: images.food,
  },
]

export const events = [
  {
    title: "Back to School Kit Drive",
    date: "May 28, 2026",
    location: "Noida",
    category: "Education",
    image: images.classroom,
    description:
      "A community drive to distribute school bags, notebooks, stationery, and mentoring support to children.",
  },
  {
    title: "Nutrition and Health Camp",
    date: "June 12, 2026",
    location: "Kolkata",
    category: "Healthcare",
    image: images.health,
    description:
      "Doctors and volunteers will host basic health checks, hygiene awareness, and food support for families.",
  },
  {
    title: "Sponsor a Child Meetup",
    date: "July 6, 2026",
    location: "Ahmedabad",
    category: "Sponsorship",
    image: images.sponsor,
    description:
      "Supporters and volunteers gather to discuss long-term child sponsorship plans and field impact.",
  },
]

export const partners = [
  "BrightPath Schools",
  "Hope Meals India",
  "CareFirst Clinics",
  "SkillRise Foundation",
  "UrbanKind Network",
]

export const faqs = [
  {
    question: "How can I donate to Kashi Keshav?",
    answer:
      "You can use the donation page to choose an amount, select monthly or one-time support, and submit your details. The QR/payment block is ready as a placeholder for your real payment details.",
  },
  {
    question: "Can I volunteer if I am in another city?",
    answer:
      "Yes. Kashi Keshav welcomes remote and city-based volunteers for mentoring, content support, fundraising, outreach, and event coordination.",
  },
  {
    question: "Where are donations used?",
    answer:
      "Donations support education kits, meals, healthcare assistance, child protection work, shelter support, emergency relief, and volunteer-led community programs.",
  },
  {
    question: "Can companies sponsor a campaign?",
    answer:
      "Yes. Companies can sponsor school drives, nutrition programs, healthcare camps, skill workshops, and long-term community support initiatives.",
  },
]
