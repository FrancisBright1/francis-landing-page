"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Database,
  BarChart3,
  Brain,
  Users,
  ChevronDown,
  Send,
  Code,
  TrendingUp,
  FileText,
} from "lucide-react"

export default function FrancisLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-800">Francis C. Bright</div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img src="/francis.jpg" alt="Francis C. Bright" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Francis Chibuike Bright</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-2">
                Data Analyst | Data Visualization Specialist | Educator
              </p>
              <p className="text-lg text-emerald-600 font-medium mb-6">
                Transforming data into decisions — one insight at a time.
              </p>

              <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Uyo, Nigeria</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>brightchibulkeaja@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+234 803 062 3059</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => window.open("https://tinyurl.com/FBC-portfolio", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Portfolio
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  <Send className="w-4 h-4 mr-2" />
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <ChevronDown
            className="w-8 h-8 mx-auto text-gray-400 animate-bounce cursor-pointer"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">About Me</h2>
            <div className="text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Francis is a results-driven Data Analyst with over 4 years of experience in healthcare and business
                analytics. He specializes in using Python, SQL, Power BI, and Excel to transform raw data into
                meaningful insights. Passionate about data storytelling and process improvement, he has helped
                organizations make smarter, data-informed decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-emerald-200">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-semibold text-gray-800 mb-2">Teaching</h3>
                  <p className="text-gray-600">Mentored 100+ students in data analysis</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardContent className="p-6 text-center">
                  <Brain className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-semibold text-gray-800 mb-2">Mentoring</h3>
                  <p className="text-gray-600">Guiding junior analysts to success</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-semibold text-gray-800 mb-2">Communication</h3>
                  <p className="text-gray-600">Clear data storytelling and reporting</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Core Skills</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-semibold mb-3">Programming</h3>
                  <div className="space-y-2">
                    <div>
                      <Badge variant="secondary">Python</Badge>
                    </div>
                    <div>
                      <Badge variant="secondary">SQL</Badge>
                    </div>
                    <div>
                      <Badge variant="secondary">SPSS</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-semibold mb-3">Visualization</h3>
                  <div className="space-y-2">
                    <div>
                      <Badge variant="secondary">Power BI</Badge>
                    </div>
                    <div>
                      <Badge variant="secondary">Tableau</Badge>
                    </div>
                    <div>
                      <Badge variant="secondary">Excel</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-semibold mb-3">Analytics</h3>
                  <div className="space-y-2">
                    <div>
                      <Badge variant="secondary">Predictive Modeling</Badge>
                    </div>
                    <div>
                      <Badge variant="secondary">Regression</Badge>
                    </div>
                    <div>
                      <Badge variant="secondary">Data Cleaning</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Database className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                  <h3 className="font-semibold mb-3">Data Management</h3>
                  <div className="space-y-2">
                    <div>
                      <Badge variant="secondary">ETL Processes</Badge>
                    </div>
                    <div>
                      <Badge variant="secondary">Dashboard Design</Badge>
                    </div>
                    <div>
                      <Badge variant="secondary">Data Architecture</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Experience</h2>

            <div className="space-y-8">
              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="text-xl">Timi-Tech Consult</CardTitle>
                  <CardDescription className="text-emerald-600 font-medium">2024 – Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Trained 100+ students on Python, SQL, and Power BI</li>
                    <li>• Designed comprehensive curricula for data analysis programs</li>
                    <li>• Mentored junior analysts and provided career guidance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="text-xl">Data Science Nigeria</CardTitle>
                  <CardDescription className="text-emerald-600 font-medium">2020 – 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated reporting processes, reducing manual work by 60%</li>
                    <li>• Built interactive dashboards for stakeholder decision-making</li>
                    <li>• Conducted comprehensive SPSS health data analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Portfolio</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg mb-4 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-emerald-600" />
                  </div>
                  <CardTitle>Health Data Dashboard</CardTitle>
                  <CardDescription>BMI, Blood Pressure & Blood Sugar Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Interactive Streamlit dashboard for comprehensive health metrics analysis and visualization.
                  </p>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() =>
                        window.open("https://francisbright1-health-dashboard-app-w2qfnr.streamlit.app", "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live App
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open("https://github.com/FrancisBright1/health-dashboard", "_blank")}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="w-16 h-16 text-blue-600" />
                  </div>
                  <CardTitle>Hospital Readmission Prediction</CardTitle>
                  <CardDescription>Machine Learning Model with 87% Accuracy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Predictive model using Logistic Regression and Random Forest to predict hospital readmissions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Scikit-learn</Badge>
                    <Badge variant="secondary">Power BI</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() =>
                        window.open("https://francisbright1-readmission-app-app-muqxfb.streamlit.app/", "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Link
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open("https://github.com/FrancisBright1/readmission-app", "_blank")}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-purple-600" />
                  </div>
                  <CardTitle>JAMB Exam Result Analysis</CardTitle>
                  <CardDescription>
                    The JAMB Performance Analysis project is a data-driven initiative designed to uncover meaningful
                    insights from the results of candidates who sat for the Joint Admissions and Matriculation Board
                    (JAMB) examination in Nigeria.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive exploratory data analysis on students JAMB examination in Nigeria.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Power BI</Badge>
                    <Badge variant="secondary">Excel</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://francisbright1-jamb-performance-analysis-jamb-app-bv9irx.streamlit.app/",
                          "_blank",
                        )
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Link
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        window.open("https://github.com/FrancisBright1/Jamb-Performance-Analysis", "_blank")
                      }
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Certifications</h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Data Analysis & Wrangling</h4>
                  <p className="text-gray-600">Data Campus Africa</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold">Data Management Essentials</h4>
                  <p className="text-gray-600">iCode Africa</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Let's Connect</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <span>brightchibulkeaja@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <span>+234 803 062 3059</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span>Uyo, Nigeria</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open("https://github.com/FrancisBright1", "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open("https://linkedin.com/in/francis-bright", "_blank")}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleSubmit} className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Francis Chibuike Bright. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Transforming data into decisions — one insight at a time.</p>
        </div>
      </footer>
    </div>
  )
}
