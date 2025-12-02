import React from "react";
import { motion } from "framer-motion";

// Requirements:
// - Uses Tailwind CSS for styling (make sure Tailwind is installed and configured in your project)
// - Uses framer-motion for micro-interactions
// - Responsive, single-file React component

export default function UIDeveloperAssignmentDashboard() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white p-6 sm:p-10 flex items-center justify-center">
      {/* Outer magenta border like the image */}
      <div className="w-full max-w-6xl border-2 border-pink-500 rounded-md overflow-hidden shadow-2xl">
        {/* Background card with gradient glows and inner content */}
        <div className="relative overflow-hidden bg-[#0f1011]">
          {/* top-left assignment badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-8 top-8"
          >
            <div className="inline-block bg-yellow-400 text-[#0b0b0b] font-medium px-4 py-1 rounded-md shadow-sm tracking-wide text-sm">
              ASSIGNMENT
            </div>
          </motion.div>

          {/* subtle grid pattern on the left - recreate with CSS */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -left-6 top-28 w-64 h-64 opacity-8"
              style={{
                background:
                  'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.25), transparent 25%), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '40px 40px, 40px 40px, 40px 40px'
              }}
            />

            {/* teal glow top center */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 blur-3xl opacity-60"
              style={{ background: 'radial-gradient(closest-side, rgba(18,211,197,0.14), transparent)' }}
            />

            {/* purple glow bottom-right */}
            <div
              className="absolute right-0 bottom-0 w-96 h-56 blur-3xl opacity-60"
              style={{ background: 'radial-gradient(closest-side, rgba(147,125,255,0.14), transparent)' }}
            />
          </div>

          <div className="relative px-8 py-20 sm:py-28 sm:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left big heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
                >
                  UI DEVELOPER
                  <br />
                  ASSIGNMENT
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-10 text-sm sm:text-base font-mono text-gray-300"
                >
                  <div className="text-xs text-gray-400">COMPANY</div>
                  <div className="mt-2 text-base sm:text-lg">Juspay Technologies Private Limited</div>
                </motion.div>
              </div>

              {/* Right column - decorative and responsive */}
              <div className="hidden md:flex items-end justify-end">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 150 }}
                  className="relative w-72 h-44 rounded-xl bg-[rgba(255,255,255,0.02)] border border-white/6 backdrop-blur-md p-4 flex items-center justify-center"
                >
                  {/* mock card to emulate image spot from design */}
                  <div className="absolute -left-12 -top-12 w-48 h-32 rounded-md" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))'}} />

                  <div className="text-xs text-gray-400 font-mono">Preview</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* bottom-left subtle separator line */}
          <div className="absolute left-6 bottom-6 w-48 h-px bg-white/6" />
        </div>
      </div>
    </div>
  );
}
