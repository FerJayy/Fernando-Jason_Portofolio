"use client";

import { Github, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TerminalDisplay from "@/components/terminal-display";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <div className="text-xl text-foreground opacity-100 text-center font-bold">{"FJ"}</div>

    <div className="flex gap-6">
      <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">
        About
      </a>
      <a href="#experience" className="text-muted-foreground transition-colors hover:text-primary">
        Experience
      </a>
      <a href="#projects" className="text-muted-foreground transition-colors hover:text-primary">
        Projects
      </a>
      <a href="#contact" className="text-muted-foreground transition-colors hover:text-primary">
        Contact
      </a>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-balance text-5xl font-bold md:text-6xl text-[rgba(252,252,252,1)]">Fernando Jason</h1>
              <p className="mt-4 font-medium uppercase text-left tracking-wide text-lg text-primary">
                Future AI Engineer | Web Developer
              </p>
              <p className="mt-6 text-pretty leading-relaxed text-left text-base tracking-tight text-[rgba(255,255,255,1)]">
                I design and build intelligent systems that bring ideas to life. My focus is on AI, data-driven solutions, and full-stack development, with a strong interest in turning research concepts into practical, real-world applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card/60 p-4">
                  <p className="text-sm text-primary">Core Focus</p>
                  <p className="mt-1 text-lg font-semibold text-[rgba(255,255,255,1)]">Applied Intelligent Systems</p>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 p-4">
                  <p className="text-sm text-primary">Toolbox</p>
                  <p className="mt-1 text-lg font-semibold text-[rgba(255,255,255,1)]">AI Products &amp; Full-Stack Web</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <TerminalDisplay />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary">About Me</h2>
              <div className="mt-6 space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Hello! I am Fernando Jason, I am a Computer Science and Intelligent Systems student at Binus University, with a strong interest in AI, Machine Learning, Web and Software development. I want to explore how intelligent systems can solve real-world problems, and I am passionate about applying these skills to create innovative and impactful solutions.
                </p>
                <p className="leading-relaxed">
                  Beyond academics, I enjoy working on projects that combine AI, data, and system design—from building intelligent applications to experimenting with deep learning models. I am constantly seeking opportunities to learn, collaborate, and grow in the tech field, whether through internships, research, or personal projects.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-center">
              <img
                src="/Fernando 1.jpg"
                alt="Fernando Jason"
                className="w-64 rounded-lg object-cover shadow-xl transition-transform hover:scale-105 h-64 text-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-secondary/40 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary">Experience</h2>
          <div className="mt-10 space-y-8">
            <Card className="border-border bg-card/80">
              <CardContent className="p-6">
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Staff of Corporate Relations   </h3>
                    <p className="text-primary">{"Bina Nusantara English Club (BNEC)"}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2025 — Present</span>
                </div>
                <p className="text-muted-foreground tracking-normal text-justify">
                  {"I successfully identified and engaged potential corporate partners, securing five long-term collaborations to support BNEC programs. By researching and evaluating over 20 companies, I aligned sponsorship opportunities with organizational goals and event needs. I also built and maintained strong professional relationships with more than 10 corporate partners, ensuring sustained engagement and support for ongoing initiatives."}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary">
                    Corporate Relations
                  </span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary">Teamwork & Leadership</span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary">Commmunication</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card/80">
              <CardContent className="p-6">
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      Activist KMK 
                    </h3>
                    <p className="text-primary">Komunitas Mahasiswa Katolik  </p>
                  </div>
                  <span className="text-sm text-muted-foreground">2023 — 2025</span>
                </div>
                <p className="text-muted-foreground">
                  {"Supported leadership and faith-based programs that strengthened teamwork, empathy, and organizational skills among members, while organizing and participating in over five community gatherings, religious events, and social services to foster student engagement and fellowship."}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full px-3 py-1 text-sm text-primary bg-[rgba(255,0,4,0.15036231538523798)]">{"Youth Activism"}</span>
                  <span className="rounded-full px-3 py-1 text-sm text-primary bg-[rgba(255,0,4,0.15)]">Teamwork</span>
                  <span className="rounded-full px-3 py-1 text-sm text-primary bg-[rgba(255,0,4,0.15)]">Communication</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-primary">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {"Self-made builds or projects that combines my creativity with technology."}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border-border bg-card/80 transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary text-primary">
                    CateringZ
                  </h3>
                  <a
                    href="https://ferjayy.github.io/WebsiteCateringz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary"
                  >
                    <ExternalLink />
                  </a>
                </div>
                <p className="text-muted-foreground">
                  Created and deployed a self-made website with a user-friendly UI to streamline catering service browsing and ordering.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">HTML</span>
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">CSS</span>
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">Java</span>
                </div>
              </CardContent>
            </Card>
            <Card className="group border-border bg-card/80 transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary text-primary">
                    House Prediction Model   
                  </h3>
                  <a
                    href="https://github.com/FerJayy/Machine-Learning-House-Prediction-Model.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary"
                  >
                    <ExternalLink />
                  </a>
                </div>
                <p className="text-muted-foreground">
                  Created a house prediction model using SVR, Ridge, Random Forest, and Linear Regression.   
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">Machine Learning </span>
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">Random Forest </span>
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">Sklearn</span>
                </div>
              </CardContent>
            </Card>
            <Card className="group border-border bg-card/80 transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary text-primary">
                    CNN and U-Net  
                  </h3>
                  <a
                    href="https://github.com/FerJayy/CNN-and-U-Net-Model.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary"
                  >
                    <ExternalLink />
                  </a>
                </div>
                <p className="text-muted-foreground">
                  {"Created a CNN Model using Medical Mnist dataset, U-Net Model using BraTs 2020 Dataset."}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">{"Deep Learning"}</span>
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">CNN</span>
                  <span className="rounded bg-primary/15 px-2 py-1 text-xs text-primary">U-Net Regression </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      

      {/* Contact Section */}
      <section id="contact" className="bg-secondary/40 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary">Get In Touch.</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Open to collaborations, research partnerships, and conversations around intelligent systems. Reach out via
            any channel below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:fernandojason100@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/fernando-jasonn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/FerJayy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://instagram.com/fernandojasonn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Fernando Jasonn. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
