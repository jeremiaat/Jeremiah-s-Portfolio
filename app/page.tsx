"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-200 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <main className="pt-32 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Projects */}
        <LazyMotion features={domAnimation}>
          <m.section
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <m.h2
              className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </m.h2>

            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                title="Beautiful Animals Website"
                desc="UI-focused site for browsing animal content with rich media and animations."
                tags={["React", "Next.js", "Tailwind CSS", "Framer Motion"]}
                imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBUYB75gx1klcGjC5_F8fwkbWIwAcYFOg59UNUK4mDVit30RkB9nl3ifMlUUreeJGUY9vPj_F_KDNvuGBwoV2KzI7QEp9KnSkivRO4Br6-OCpibnEsWEKkZRJ5u5JYtq2weufuj8QRqG321qIPRxVjRfbB4iofDbGcc6WsEB21NECv7jxAOnAlxd36_bgDYzwxYLEzo7f69aNpgH2aFk6FSI7yu-wyQjMlR_Gfz9eCLIvRGO1Gh7-HLK6oJ_ytJJemVWsEKwmkwr4A"
                githubUrl="https://github.com/jeremiaat/Animal-Website"
              />

              <ProjectCard
                title="Personal Finance Management"
                desc="Track income, expenses, and financial records with insightful visualizations."
                tags={["React", "Node.js", "Finance"]}
                imgUrl="https://images.unsplash.com/photo-1542223616-8f7b7a8f6a5b?auto=format&fit=crop&w=1400&q=60"
                githubUrl="https://github.com/jeremiaat/Personal-Finance-Management-System"
              />

              <ProjectCard
                title="Orbit Web Platform"
                desc="A UI platform experiment with layout utilities and interactive components."
                tags={["React", "UI", "Experiment"]}
                imgUrl="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=60"
                githubUrl="https://github.com/jeremiaat/Orbit"
              />
            </div>
          </m.section>
        </LazyMotion>

        {/* About Section */}
        <LazyMotion features={domAnimation}>
          <m.section
            className="py-24 grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            <div className="md:col-span-1">
              <m.h2
                className="text-3xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </m.h2>
            </div>
            <div className="md:col-span-2 flex flex-col gap-6 text-gray-500 dark:text-[#9292c9]">
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                With over 5 years of experience in front-end development, I specialize in building
                high-performance, responsive, and accessible web applications. My expertise lies in
                the React ecosystem, particularly with Next.js, and I have extensive experience
                developing custom themes and applications for the Shopify platform.
              </m.p>
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I am passionate about creating clean, elegant user interfaces that are visually appealing
                and intuitive. I bring a strong understanding of UX/UI design principles to every project,
                ensuring the final product meets both user needs and business goals.
              </m.p>
              <m.div
                className="flex flex-wrap gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {["React", "Next.js", "TypeScript", "Shopify/Polaris", "Tailwind CSS", "UI/UX Design", "Framer Motion"].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white"
                  >
                    {skill}
                  </span>
                ))}
              </m.div>
            </div>
          </m.section>
        </LazyMotion>

        {/* Get In Touch Section */}
        <LazyMotion features={domAnimation}>
          <m.section
            id="get-in-touch"
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <m.h2
              className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </m.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ContactCard
                title="Email"
                desc="Send me an email for inquiries or collaborations."
                icon="mail"
                link="mailto:hello@example.com"
                linkText="hello@example.com"
              />
              <ContactCard
                title="LinkedIn"
                desc="Connect with me professionally on LinkedIn."
                icon="linkedin"
                link="#"
                linkText="View Profile"
              />
              <ContactCard
                title="GitHub"
                desc="Check out my code repositories and contributions."
                icon="code"
                link="#"
                linkText="View Repos"
              />
              <ContactCard
                title="Phone"
                desc="Call me for quick discussions or urgent matters."
                icon="phone"
                link="tel:+1234567890"
                linkText="+1 (234) 567-890"
              />
            </div>
          </m.section>
        </LazyMotion>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
