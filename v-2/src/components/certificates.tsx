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

// ✅ Updated Certificate Data with STP Computer Education
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    issuer: "Riveyra Infotech Pvt. Ltd.",
    duration: "May 2025 - Jul 2025",
    location: "Work From Office",
    category: "Internship",
    image: "/certificates/riveyra_internship.jpg",
    date: "August 2025",
    description: [
      "Developed and maintained web applications using React.js and Node.js",
      "Collaborated with senior developers to implement new features and fix bugs",
      "Participated in agile development processes and code reviews",
    ],
  },
  {
    id: 2,
    title: "Web Development Diploma",
    issuer: "STP Computer Education",
    duration: "June 2023 - June 2024",
    location: "Remote",
    category: "Diploma",
    image: "/certificates/web_development.jpg",
    date: "June 2024",
    description: [
      "Completed 12-month comprehensive Web Development course",
      "Covered front-end and back-end web development technologies",
    ],
  },
  {
    id: 3,
    title: "Hackathon Participation",
    issuer: "Allenhouse Business School",
    category: "Hackathon",
    image: "/certificates/hackathon.jpeg",
    date: "February 2025",
    description: [
      "Participated in the Hackathon held on 20th-22nd February 2025",
      "Collaborated with team members to develop innovative solutions",
      "Gained hands-on experience in competitive coding and problem-solving",
    ],
  }
]

export default function CertificatesPage() {
  const [selected, setSelected] = useState<Certificate | null>(null)
  const [fullScreenImage, setFullScreenImage] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({})

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
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4 border border-green-500/20">
      <ImageIcon className="w-16 h-16 text-green-400 mb-4" />
      <h3 className="text-green-300 font-bold text-lg text-center mb-2">{title}</h3>
      <p className="text-gray-400 text-sm text-center">{issuer}</p>
      <p className="text-gray-500 text-xs text-center mt-2">Certificate Image</p>
    </div>
  )

  return (
    <section
      id="certificates"
      className="relative bg-black text-white py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-green-400/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
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
          My <span className="text-green-400">Achievement</span> & <span className="text-green-400">Certifications</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
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
              className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-green-500/20 rounded-2xl p-6 cursor-pointer hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 group"
              onClick={() => setSelected(cert)}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors">
                  <Award className="text-green-400 w-8 h-8" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-green-300 mb-3 group-hover:text-green-200 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-gray-300 font-medium mb-2">{cert.issuer}</p>
              
              {/* Additional Info */}
              {cert.duration && (
                <div className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.duration}</span>
                </div>
              )}
              
              {cert.location && (
                <div className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{cert.location}</span>
                </div>
              )}

              {/* Grade for Diploma */}
              {cert.grade && (
                <div className="flex items-center justify-center gap-1 text-sm text-yellow-400 mb-2">
                  <span className="font-semibold">Grade: {cert.grade}</span>
                </div>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                  {cert.category}
                </span>
                <span className="text-gray-500 text-sm">{cert.date}</span>
              </div>

              {/* Description */}
              <div className="text-gray-400 text-sm text-left max-h-32 overflow-y-auto">
                {Array.isArray(cert.description) ? (
                  <ul className="space-y-1">
                    {cert.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1 flex-shrink-0">•</span>
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-2xl border border-green-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Certificate Image with Error Handling */}
            <div className="relative w-full h-64 md:h-80 mb-6 bg-black rounded-lg border border-green-500/20 group">
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
                    <div className="bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                      <ZoomIn size={14} />
                      Click to view full screen
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Certificate Details */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400">
                {selected.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">
                    <strong className="text-gray-300">Issued by:</strong> {selected.issuer}
                  </p>
                  <p className="text-gray-400">
                    <strong className="text-gray-300">Date:</strong> {selected.date}
                  </p>
                  <p className="text-gray-400">
                    <strong className="text-gray-300">Category:</strong> {selected.category}
                  </p>
                  {selected.grade && (
                    <p className="text-gray-400">
                      <strong className="text-gray-300">Grade:</strong> {selected.grade}
                    </p>
                  )}
                </div>
                
                {(selected.duration || selected.location) && (
                  <div>
                    {selected.duration && (
                      <p className="text-gray-400">
                        <strong className="text-gray-300">Duration:</strong> {selected.duration}
                      </p>
                    )}
                    {selected.location && (
                      <p className="text-gray-400">
                        <strong className="text-gray-300">Location:</strong> {selected.location}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Description</h4>
                {Array.isArray(selected.description) ? (
                  <ul className="space-y-2 text-gray-400">
                    {selected.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 leading-relaxed">{selected.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Full Screen Image View */}
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