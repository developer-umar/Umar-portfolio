'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  Image as ImageIcon,
  MapPin,
  RotateCcw,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import Image from 'next/image';
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  category: string;
  image: string;
  date: string;
  description: string | string[];
  duration?: string;
  location?: string;
  grade?: string;
}

interface CertificatesPageProps {
  theme?: 'dark' | 'light';
}
const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Web Development Diploma',
    issuer: 'STP Computer Education',
    duration: 'June 2023 - June 2024',
    location: 'Remote',
    category: 'Diploma',
    image: '/images/webdev.jpg',
    date: 'June 2024',
    description: [
      'Completed 12-month comprehensive Web Development course',
      'Covered front-end and back-end web development technologies',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer Intern',
    issuer: 'Riveyra Infotech Pvt. Ltd.',
    duration: 'May 2025 - Jul 2025',
    location: 'Work From Office',
    category: 'Internship',
    image: '/images/internship.jpg',
    date: 'August 2025',
    description: [
      'Developed and maintained web applications using React.js and Node.js',
      'Collaborated with senior developers to implement new features and fix bugs',
      'Participated in agile development processes and code reviews',
    ],
  },
  {
    id: 3,
    title: 'Hackathon Participation',
    issuer: 'Allenhouse Business School',
    category: 'Hackathon',
    image: '/images/hackathions.jpg',
    date: 'February 2025',
    description: [
      'Participated in the Hackathon held on 20th-22nd February 2025',
      'Collaborated with team members to develop innovative solutions',
      'Gained hands-on experience in competitive coding and problem-solving',
    ],
  },
  {
    id: 4,
    title: 'IBM Enterprise-Grade AI',
    issuer: 'IBM',
    category: 'ARTIFICIAL INTELLIGENCE',
    image: '/images/grade_Ai.jpg',
    date: 'June 2024',
    description: [
      'Acquired hands-on experience with AI tools, frameworks, and real-world applications.',
      'Developed skills in AI integration, problem-solving, and data-driven decision making.',
      'Strengthened ability to build scalable AI-powered enterprise solutions.',
    ],
  },
  {
    id: 5,
    title: 'LeetCode Contest',
    issuer: 'LeetCode',
    category: 'Competitive Programming',
    image: '/images/leetcode_2.jpg',
    date: 'June 2025',
    description: [
      'Awarded a badge on LeetCode for completing 50+ consecutive days of problem-solving.',
      'Demonstrated consistency and dedication in improving algorithmic and coding skills.',
      'Solved a wide range of DSA problems covering arrays, recursion, and dynamic programming.',
    ],
  },
  {
    id: 6,
    title: 'Coding Ninjas Contest',
    issuer: 'Coding Ninjas',
    category: 'Competitive Programming',
    image: '/images/coding_ninjas.jpg',
    date: 'August 2025',
    description: [
      'Proud to be among the top 0.92% of coders who solved a challenging Bit Manipulation problem in record time.',
      'Earned a special badge from Coding Ninjas 🏅 for consistent coding performance.',
      'Strengthened my expertise in bitwise operations and algorithm optimization.',
    ],
  },
];

export default function CertificatesPage({
  theme = 'dark',
}: CertificatesPageProps) {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const themeColors = {
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      cardBg: 'bg-gradient-to-br from-zinc-900 to-zinc-800',
      cardBorder: 'border-green-500/20',
      accent: 'text-green-400',
      accentBg: 'bg-green-500/10',
      modalBg: 'bg-black/80',
      fallbackBg: 'bg-gray-800',
      borderColor: 'border-gray-700',
      hoverBorder: 'hover:border-green-400/40',
      hoverShadow: 'hover:shadow-green-500/10',
    },
    light: {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      cardBg: 'bg-gradient-to-br from-white to-gray-100',
      cardBorder: 'border-green-600/30',
      accent: 'text-green-600',
      accentBg: 'bg-green-500/20',
      modalBg: 'bg-white/80',
      fallbackBg: 'bg-gray-200',
      borderColor: 'border-gray-300',
      hoverBorder: 'hover:border-green-600/50',
      hoverShadow: 'hover:shadow-green-600/20',
    },
  };

  const colors = themeColors[theme];

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFullScreenImage(true);
    setZoom(1);
    setRotation(0);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(false);
    setZoom(1);
    setRotation(0);
  };

  const handleImageError = (certId: number) => {
    setImageError((prev) => ({ ...prev, [certId]: true }));
  };
  const ImageFallback = ({
    title,
    issuer,
  }: {
    title: string;
    issuer: string;
  }) => (
    <div
      className={`flex size-full flex-col items-center justify-center ${colors.fallbackBg} rounded-lg border p-4 ${colors.cardBorder}`}
    >
      <ImageIcon className={`size-16 ${colors.accent} mb-4`} />
      <h3 className={`${colors.accent} mb-2 text-center text-lg font-bold`}>
        {title}
      </h3>
      <p className={`${colors.textSecondary} text-center text-sm`}>{issuer}</p>
      <p className="mt-2 text-center text-xs text-gray-500">
        Certificate Image
      </p>
    </div>
  );

  return (
    <section
      id="certificates"
      className={`relative ${colors.bg} ${colors.text} min-h-screen overflow-hidden px-6 py-20 transition-colors duration-300 md:px-12`}
    >
      <div className="absolute inset-0">
        <div
          className={`absolute left-10 top-10 size-40 ${
            theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/20'
          } rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-10 right-10 size-60 ${
            theme === 'dark' ? 'bg-green-400/10' : 'bg-green-400/20'
          } rounded-full blur-3xl`}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          My <span className={colors.accent}>Achievement</span> &{' '}
          <span className={colors.accent}>Certifications</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${colors.textSecondary} mx-auto mb-12 max-w-2xl text-lg`}
        >
          A showcase of my achievements, learning milestones, and professional
          accomplishments.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
              className={`relative ${colors.cardBg} border ${colors.cardBorder} cursor-pointer rounded-2xl p-6 ${colors.hoverBorder} hover:shadow-2xl ${colors.hoverShadow} group transition-all duration-300`}
              onClick={() => setSelected(cert)}
            >
              <div className="mb-4 flex justify-center">
                <div
                  className={`p-3 ${colors.accentBg} group-hover: rounded-full${colors.accentBg} transition-colors`}
                >
                  <Award className={`${colors.accent} size-8`} />
                </div>
              </div>
              <h3
                className={`text-xl font-bold ${colors.accent} group-hover: mb-3${colors.accent} transition-colors`}
              >
                {cert.title}
              </h3>

              <p
                className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2 font-medium`}
              >
                {cert.issuer}
              </p>

              {cert.duration && (
                <div
                  className={`flex items-center justify-center gap-1 text-sm ${colors.textSecondary} mb-1`}
                >
                  <Calendar className="size-4" />
                  <span>{cert.duration}</span>
                </div>
              )}

              {cert.location && (
                <div
                  className={`flex items-center justify-center gap-1 text-sm ${colors.textSecondary} mb-2`}
                >
                  <MapPin className="size-4" />
                  <span>{cert.location}</span>
                </div>
              )}
              {cert.grade && (
                <div
                  className={`flex items-center justify-center gap-1 text-sm ${
                    theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                  } mb-2`}
                >
                  <span className="font-semibold">Grade: {cert.grade}</span>
                </div>
              )}

              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`px-3 py-1 text-xs font-medium ${colors.accentBg} ${colors.accent} rounded-full`}
                >
                  {cert.category}
                </span>
                <span className={`${colors.textSecondary} text-sm`}>
                  {cert.date}
                </span>
              </div>
              <div
                className={`${colors.textSecondary} max-h-32 overflow-y-auto text-left text-sm`}
              >
                {Array.isArray(cert.description) ? (
                  <ul className="space-y-1">
                    {cert.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`${colors.accent} mr-2 mt-1 shrink-0`}>
                          •
                        </span>
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
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 ${colors.modalBg} z-50 flex items-center justify-center p-4 backdrop-blur-md`}
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative ${colors.cardBg} rounded-2xl border p-6 ${colors.cardBorder} max-h-[90vh] w-full max-w-4xl overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className={`absolute right-4 top-4 p-2 ${colors.textSecondary} hover:${colors.text} ${
                theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'
              } z-10 rounded-full transition-colors`}
            >
              <X size={20} />
            </button>
            <div
              className={`relative mb-6 h-64 w-full md:h-80 ${
                theme === 'dark' ? 'bg-black' : 'bg-white'
              } rounded-lg border ${colors.cardBorder} group`}
            >
              {imageError[selected.id] ? (
                <ImageFallback
                  title={selected.title}
                  issuer={selected.issuer}
                />
              ) : (
                <>
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="cursor-zoom-in object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 700px"
                    onClick={handleImageClick}
                    onError={() => handleImageError(selected.id)}
                  />
                  <div className="absolute bottom-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <div
                      className={`${theme === 'dark' ? 'bg-black/50' : 'bg-white/80'} ${
                        colors.text
                      } flex items-center gap-1 rounded px-2 py-1 text-xs`}
                    >
                      <ZoomIn size={14} />
                      Click to view full screen
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold md:text-3xl ${colors.accent}`}>
                {selected.title}
              </h3>

              <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <div>
                  <p className={colors.textSecondary}>
                    <strong
                      className={
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }
                    >
                      Issued by:
                    </strong>{' '}
                    {selected.issuer}
                  </p>
                  <p className={colors.textSecondary}>
                    <strong
                      className={
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }
                    >
                      Date:
                    </strong>{' '}
                    {selected.date}
                  </p>
                  <p className={colors.textSecondary}>
                    <strong
                      className={
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }
                    >
                      Category:
                    </strong>{' '}
                    {selected.category}
                  </p>
                  {selected.grade && (
                    <p className={colors.textSecondary}>
                      <strong
                        className={
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }
                      >
                        Grade:
                      </strong>{' '}
                      {selected.grade}
                    </p>
                  )}
                </div>

                {(selected.duration || selected.location) && (
                  <div>
                    {selected.duration && (
                      <p className={colors.textSecondary}>
                        <strong
                          className={
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }
                        >
                          Duration:
                        </strong>{' '}
                        {selected.duration}
                      </p>
                    )}
                    {selected.location && (
                      <p className={colors.textSecondary}>
                        <strong
                          className={
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }
                        >
                          Location:
                        </strong>{' '}
                        {selected.location}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className={`border-t ${colors.borderColor} pt-4`}>
                <h4
                  className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  } mb-2`}
                >
                  Description
                </h4>
                {Array.isArray(selected.description) ? (
                  <ul className={`space-y-2 ${colors.textSecondary}`}>
                    {selected.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`${colors.accent} mr-2 mt-1 shrink-0`}>
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={`${colors.textSecondary} leading-relaxed`}>
                    {selected.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      {fullScreenImage && selected && !imageError[selected.id] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={handleCloseFullScreen}
        >
          <div className="absolute right-4 top-4 z-10 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              disabled={zoom <= 0.5}
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              disabled={zoom >= 3}
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRotate();
              }}
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            >
              <RotateCcw size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleReset();
              }}
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            >
              Reset
            </button>
            <button
              onClick={handleCloseFullScreen}
              className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </div>
          <div className="absolute left-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {Math.round(zoom * 100)}%
          </div>
          <div className="relative flex size-full items-center justify-center p-4">
            <div
              className="relative max-h-full max-w-full"
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
                className="max-h-full max-w-full object-contain"
                onError={() => handleImageError(selected.id)}
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
            Use mouse wheel to zoom • Drag to pan
          </div>
        </motion.div>
      )}
    </section>
  );
}
