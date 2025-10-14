"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Award, X, Calendar, MapPin, ZoomIn, ZoomOut, RotateCcw, Image as ImageIcon } from "lucide-react"

// ✅ Define TypeScript interface for Certificate
interface Certificate {
  id: number
  title: string
  issuer: string
  category: string
  image: string
  date: string
  description: string | string[]
  duration?: string
  location?: string
  grade?: string
}

// ✅ Props interface for receiving theme
interface CertificatesPageProps {
  theme?: 'dark' | 'light'
}

// ✅ Updated Certificate Data with STP Computer Education
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Web Development Diploma",
    issuer: "STP Computer Education",
    duration: "June 2023 - June 2024",
    location: "Remote",
    category: "Diploma",
    image: "/images/webdev.jpg",
    date: "June 2024",
    description: [
      "Completed 12-month comprehensive Web Development course",
      "Covered front-end and back-end web development technologies",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    issuer: "Riveyra Infotech Pvt. Ltd.",
    duration: "May 2025 - Jul 2025",
    location: "Work From Office",
    category: "Internship",
    image: "/images/internship.jpg",
    date: "August 2025",
    description: [
      "Developed and maintained web applications using React.js and Node.js",
      "Collaborated with senior developers to implement new features and fix bugs",
      "Participated in agile development processes and code reviews",
    ],
  },
  {
    id: 3,
    title: "Hackathon Participation",
    issuer: "Allenhouse Business School",
    category: "Hackathon",
    image: "/images/hackathions.jpg",
    date: "February 2025",
    description: [
      "Participated in the Hackathon held on 20th-22nd February 2025",
      "Collaborated with team members to develop innovative solutions",
      "Gained hands-on experience in competitive coding and problem-solving",
    ],
  },
  {
    id: 4,
    title: "IBM Enterprise-Grade AI",
    issuer: "IBM",
    category: "ARTIFICIAL INTELLIGENCE",
    image: "/images/grade_Ai.jpg",
    date: "June 2024",
    description: [
      "Acquired hands-on experience with AI tools, frameworks, and real-world applications.",
      "Developed skills in AI integration, problem-solving, and data-driven decision making.",
      "Strengthened ability to build scalable AI-powered enterprise solutions.",
    ],
  },
  {
    id: 5,
    title: "LeetCode Contest",
    issuer: "LeetCode",
    category: "Competitive Programming",
    image: "/images/leetcode_2.jpg",
    date: "June 2025",
    description: [
      "Awarded a badge on LeetCode for completing 50+ consecutive days of problem-solving.",
      "Demonstrated consistency and dedication in improving algorithmic and coding skills.",
      "Solved a wide range of DSA problems covering arrays, recursion, and dynamic programming.",
    ],
  },
  {
    id: 6,
    title: "Coding Ninjas Contest",
    issuer: "Coding Ninjas",
    category: "Competitive Programming",
    image: "/images/coding_ninjas.jpg",
    date: "August 2025",
    description: [
      "Proud to be among the top 0.92% of coders who solved a challenging Bit Manipulation problem in record time.",
      "Earned a special badge from Coding Ninjas 🏅 for consistent coding performance.",
      "Strengthened my expertise in bitwise operations and algorithm optimization.",
    ],
  }
]

export default function CertificatesPage({ theme = 'dark' }: CertificatesPageProps) {
  const [selected, setSelected] = useState<Certificate | null>(null)
  const [fullScreenImage, setFullScreenImage] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({})

  // Theme-aware colors
  const themeColors = {
    dark: {
      bg: "bg-black",
      text: "text-white",
      textSecondary: "text-gray-400",
      cardBg: "bg-gradient-to-br from-zinc-900 to-zinc-800",
      cardBorder: "border-green-500/20",
      accent: "text-green-400",
      accentBg: "bg-green-500/10",
      modalBg: "bg-black/80",
      fallbackBg: "bg-gray-800",
      borderColor: "border-gray-700",
      hoverBorder: "hover:border-green-400/40",
      hoverShadow: "hover:shadow-green-500/10",
    },
    light: {
      bg: "bg-gray-50",
      text: "text-gray-900",
      textSecondary: "text-gray-600",
      cardBg: "bg-gradient-to-br from-white to-gray-100",
      cardBorder: "border-green-600/30",
      accent: "text-green-600",
      accentBg: "bg-green-500/20",
      modalBg: "bg-white/80",
      fallbackBg: "bg-gray-200",
      borderColor: "border-gray-300",
      hoverBorder: "hover:border-green-600/50",
      hoverShadow: "hover:shadow-green-600/20",
    }
  }

  const colors = themeColors[theme]

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setFullScreenImage(true)
    setZoom(1)
    setRotation(0)
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5))
  }

  const handleReset = () => {
    setZoom(1)
    setRotation(0)
  }

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360)
  }

  const handleCloseFullScreen = () => {
    setFullScreenImage(false)
    setZoom(1)
    setRotation(0)
  }

  const handleImageError = (certId: number) => {
    setImageError(prev => ({ ...prev, [certId]: true }))
  }

  // Fallback component for missing images
  const ImageFallback = ({ title, issuer }: { title: string; issuer: string }) => (
    <div className={`w-full h-full flex flex-col items-center justify-center ${colors.fallbackBg} rounded-lg p-4 border ${colors.cardBorder}`}>
      <ImageIcon className={`w-16 h-16 ${colors.accent} mb-4`} />
      <h3 className={`${colors.accent} font-bold text-lg text-center mb-2`}>{title}</h3>
      <p className={`${colors.textSecondary} text-sm text-center`}>{issuer}</p>
      <p className="text-gray-500 text-xs text-center mt-2">Certificate Image</p>
    </div>
  )

  return (
    <section
      id="certificates"
      className={`relative ${colors.bg} ${colors.text} py-20 px-6 md:px-12 overflow-hidden min-h-screen transition-colors duration-300`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-40 h-40 ${
          theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/20'
        } rounded-full blur-3xl`} />
        <div className={`absolute bottom-10 right-10 w-60 h-60 ${
          theme === 'dark' ? 'bg-green-400/10' : 'bg-green-400/20'
        } rounded-full blur-3xl`} />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My <span className={colors.accent}>Achievement</span> & <span className={colors.accent}>Certifications</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${colors.textSecondary} max-w-2xl mx-auto mb-12 text-lg`}
        >
          A showcase of my achievements, learning milestones, and professional accomplishments.
        </motion.p>

        {/* Certificate Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative ${colors.cardBg} border ${colors.cardBorder} rounded-2xl p-6 cursor-pointer ${colors.hoverBorder} hover:shadow-2xl ${colors.hoverShadow} transition-all duration-300 group`}
              onClick={() => setSelected(cert)}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`p-3 ${colors.accentBg} rounded-full group-hover:${colors.accentBg} transition-colors`}>
                  <Award className={`${colors.accent} w-8 h-8`} />
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold ${colors.accent} mb-3 group-hover:${colors.accent} transition-colors`}>
                {cert.title}
              </h3>
              
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-medium mb-2`}>{cert.issuer}</p>
              
              {/* Additional Info */}
              {cert.duration && (
                <div className={`flex items-center justify-center gap-1 text-sm ${colors.textSecondary} mb-1`}>
                  <Calendar className="w-4 h-4" />
                  <span>{cert.duration}</span>
                </div>
              )}
              
              {cert.location && (
                <div className={`flex items-center justify-center gap-1 text-sm ${colors.textSecondary} mb-2`}>
                  <MapPin className="w-4 h-4" />
                  <span>{cert.location}</span>
                </div>
              )}

              {/* Grade for Diploma */}
              {cert.grade && (
                <div className={`flex items-center justify-center gap-1 text-sm ${
                  theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                } mb-2`}>
                  <span className="font-semibold">Grade: {cert.grade}</span>
                </div>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-medium px-3 py-1 ${colors.accentBg} ${colors.accent} rounded-full`}>
                  {cert.category}
                </span>
                <span className={`${colors.textSecondary} text-sm`}>{cert.date}</span>
              </div>

              {/* Description */}
              <div className={`${colors.textSecondary} text-sm text-left max-h-32 overflow-y-auto`}>
                {Array.isArray(cert.description) ? (
                  <ul className="space-y-1">
                    {cert.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`${colors.accent} mr-2 mt-1 flex-shrink-0`}>•</span>
                        <span className="text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs">{cert.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Preview */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 ${colors.modalBg} backdrop-blur-md flex items-center justify-center z-50 p-4`}
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative ${colors.cardBg} p-6 rounded-2xl border ${colors.cardBorder} max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className={`absolute top-4 right-4 p-2 ${colors.textSecondary} hover:${colors.text} ${
                theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'
              } rounded-full transition-colors z-10`}
            >
              <X size={20} />
            </button>

            {/* Certificate Image with Error Handling */}
            <div className={`relative w-full h-64 md:h-80 mb-6 ${
              theme === 'dark' ? 'bg-black' : 'bg-white'
            } rounded-lg border ${colors.cardBorder} group`}>
              {imageError[selected.id] ? (
                <ImageFallback title={selected.title} issuer={selected.issuer} />
              ) : (
                <>
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-contain p-4 cursor-zoom-in"
                    sizes="(max-width: 768px) 100vw, 700px"
                    onClick={handleImageClick}
                    onError={() => handleImageError(selected.id)}
                  />
                  {/* Zoom Hint */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`${theme === 'dark' ? 'bg-black/50' : 'bg-white/80'} ${
                      colors.text
                    } px-2 py-1 rounded text-xs flex items-center gap-1`}>
                      <ZoomIn size={14} />
                      Click to view full screen
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Certificate Details */}
            <div className="space-y-4">
              <h3 className={`text-2xl md:text-3xl font-bold ${colors.accent}`}>
                {selected.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className={colors.textSecondary}>
                    <strong className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Issued by:</strong> {selected.issuer}
                  </p>
                  <p className={colors.textSecondary}>
                    <strong className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Date:</strong> {selected.date}
                  </p>
                  <p className={colors.textSecondary}>
                    <strong className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Category:</strong> {selected.category}
                  </p>
                  {selected.grade && (
                    <p className={colors.textSecondary}>
                      <strong className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Grade:</strong> {selected.grade}
                    </p>
                  )}
                </div>
                
                {(selected.duration || selected.location) && (
                  <div>
                    {selected.duration && (
                      <p className={colors.textSecondary}>
                        <strong className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Duration:</strong> {selected.duration}
                      </p>
                    )}
                    {selected.location && (
                      <p className={colors.textSecondary}>
                        <strong className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Location:</strong> {selected.location}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className={`border-t ${colors.borderColor} pt-4`}>
                <h4 className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                } mb-2`}>Description</h4>
                {Array.isArray(selected.description) ? (
                  <ul className={`space-y-2 ${colors.textSecondary}`}>
                    {selected.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`${colors.accent} mr-2 mt-1 flex-shrink-0`}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={`${colors.textSecondary} leading-relaxed`}>{selected.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Full Screen Image View - यह dark mode में ही रहेगा क्योंकि image view के लिए dark background better है */}
      {fullScreenImage && selected && !imageError[selected.id] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60] flex items-center justify-center"
          onClick={handleCloseFullScreen}
        >
          {/* Control Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={(e) => { e.stopPropagation(); handleZoomOut() }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              disabled={zoom <= 0.5}
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleZoomIn() }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              disabled={zoom >= 3}
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleRotate() }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <RotateCcw size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleReset() }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleCloseFullScreen}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Zoom Level Indicator */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
            {Math.round(zoom * 100)}%
          </div>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div
              className="relative max-w-full max-h-full"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transition: 'transform 0.2s ease',
              }}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                onError={() => handleImageError(selected.id)}
              />
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            Use mouse wheel to zoom • Drag to pan
          </div>
        </motion.div>
      )}
    </section>
  )
}