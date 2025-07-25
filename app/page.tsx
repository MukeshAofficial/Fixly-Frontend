"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Download,
  Archive,
  Chrome,
  Settings,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Star,
  Sparkles,
  Brain,
  Lock,
  Gauge,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function FixlyLanding() {
  const [typedText, setTypedText] = useState("")
  const [showCorrection, setShowCorrection] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const incorrectText = "He go to school everyday."
  const correctText = "He goes to school every day."

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < incorrectText.length) {
        setTypedText(incorrectText.slice(0, typedText.length + 1))
      } else {
        setTimeout(() => setShowCorrection(true), 1000)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [typedText, incorrectText])

  const handleDownload = () => {
    // Replace this path with your actual zip file path
    const zipFilePath = "/fixly-extension.zip"
    const link = document.createElement("a")
    link.href = zipFilePath
    link.download = "fixly-extension.zip"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const installationSteps = [
    { icon: Download, title: "Download", description: "Get extension file" },
    { icon: Archive, title: "Unzip", description: "Extract the folder" },
    { icon: Chrome, title: "Open Chrome", description: "Go to extensions" },
    { icon: Settings, title: "Enable Dev", description: "Turn on developer" },
    { icon: CheckCircle, title: "Upload", description: "Load unpacked folder" },
  ]

  const features = [
    {
      icon: Zap,
      title: "Real-time Corrections",
      description: "Instantly fixes grammar and spelling as you type",
    },
    {
      icon: Brain,
      title: "Smart Suggestions",
      description: "AI-powered recommendations for better writing",
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Gmail, Twitter, Docs, and any website",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data stays private - nothing is stored",
    },
    {
      icon: Gauge,
      title: "Lightning Fast",
      description: "Lightweight extension that won't slow you down",
    },
    {
      icon: Shield,
      title: "Always Secure",
      description: "Built with security and trust in mind",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Writer",
      avatar: "/placeholder-user.jpg",
      quote:
        "Fixly has transformed my writing workflow. I catch mistakes instantly and my content quality has improved dramatically.",
    },
    {
      name: "Mike Rodriguez",
      role: "Student",
      avatar: "/placeholder-user.jpg",
      quote:
        "As a non-native English speaker, Fixly gives me confidence in my writing. It's like having a personal editor.",
    },
    {
      name: "Emma Thompson",
      role: "Marketing Manager",
      avatar: "/placeholder-user.jpg",
      quote: "Our team's email communication has become so much more professional since we started using Fixly.",
    },
    {
      name: "David Park",
      role: "Blogger",
      avatar: "/placeholder-user.jpg",
      quote: "I write faster knowing Fixly has my back. It catches errors I would never notice on my own.",
    },
  ]

  const faqs = [
    {
      question: "Is Fixly completely free?",
      answer:
        "Yes! Fixly is completely free to use with no hidden costs or premium tiers. We believe everyone deserves access to good writing tools.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Fixly works online to provide the most accurate corrections using our AI models. However, basic spell-check functionality works offline.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. Fixly processes text locally when possible and never stores your personal writing. We're committed to your privacy.",
    },
    {
      question: "Which websites does it support?",
      answer:
        "Fixly works on virtually any website where you can type - Gmail, Twitter, Facebook, Google Docs, LinkedIn, and thousands more.",
    },
    {
      question: "How do I install it?",
      answer:
        "Simply download the extension file, unzip it, go to Chrome extensions, enable developer mode, and upload the folder. It takes less than 2 minutes!",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              Trusted by 10,000+ writers worldwide
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Fixly – Write with Confidence. Anywhere.
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Fixly is your smart grammar assistant that corrects mistakes instantly while you write online.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-2" />
                Add to Chrome – It's Free
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 rating • 2M+ corrections made</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Fixly Icon */}
          <motion.div
            className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <CheckCircle className="w-8 h-8 text-white" />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">See Fixly in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how Fixly transforms your writing in real-time
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-white">
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-4">Writing Assistant</span>
                </div>

                <div className="min-h-[100px] flex items-center">
                  {!showCorrection ? (
                    <div className="text-white">
                      <span>{typedText}</span>
                      <motion.span
                        className="inline-block w-0.5 h-6 bg-white ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      />
                      {typedText === incorrectText && (
                        <motion.div
                          className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500 rounded"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-green-400"
                    >
                      {correctText}
                      <motion.div
                        className="inline-flex items-center ml-2 text-green-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Detects Errors</h3>
                  <p className="text-gray-600 text-sm">Instantly identifies grammar and spelling mistakes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Analyzes Context</h3>
                  <p className="text-gray-600 text-sm">AI understands meaning for accurate corrections</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Applies Fix</h3>
                  <p className="text-gray-600 text-sm">Seamlessly corrects with one click</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Grid */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Writers Choose Fixly</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make your writing flawless
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Installation Steps */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Easy Installation in 5 Steps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get Fixly running in less than 2 minutes</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {installationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-2" />
                Start Installation Now
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Writers Love Fixly</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who write better with Fixly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2M+</div>
              <p className="text-gray-600">Corrections Made</p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to know about Fixly</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Write with Confidence?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of writers who trust Fixly to make their writing perfect.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Fixly Now – Free Forever
            </Button>
            <p className="text-blue-100 mt-4 text-sm">No signup required • Works instantly • 100% secure</p>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Ready to improve your writing?</p>
              <p className="text-sm text-gray-600">Get Fixly free today</p>
            </div>
          </div>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4 mr-2" />
            Add to Chrome
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
