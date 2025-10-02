"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-900/90 text-white">
        {/* Bottom Bar */}
        <motion.div
          className="border-t border-emerald-500/50 mt-5 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white ">© {currentYear} "Usmanu Danfodiyo Library E-resources. All rights reserved.</p>
        </motion.div>
    
   </footer>
  )
}
