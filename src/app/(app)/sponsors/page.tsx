'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const transitionConfig = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export default function SponsorsPage() {
  return (
    <main className="w-full bg-chalk-white text-carbon-black min-h-screen selection:bg-track-red selection:text-white overflow-x-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-center items-center text-center overflow-hidden bg-carbon-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sponsors/sponsors-hero.jpeg"
            alt="Athletic Coaching Camp Sponsors"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/80 via-transparent to-carbon-black" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.1 }}
          >
            <span className="inline-block bg-track-red/20 border border-track-red/50 text-track-red px-4 py-1.5 rounded-sm text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-6 shadow-xl">
              Official Partnerships
            </span>
            <h1 className="font-primary text-5xl sm:text-7xl md:text-[9rem] uppercase tracking-tighter leading-[0.85] text-white drop-shadow-2xl">
              PARTNER WITH <br />
              <span className="text-white/40 md:text-transparent md:[-webkit-text-stroke:2px_rgba(255,255,255,1)] opacity-90">
                LEGACY
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-2xl font-light tracking-wide text-white/70 max-w-3xl mx-auto leading-relaxed">
              Align your brand with 55+ years of athletic excellence, youth empowerment, and the pursuit of Olympic glory.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Discover Opportunities</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* 2. The Current Status (No Sponsors Yet - The Opportunity) */}
      <section className="py-24 md:py-32 px-6 bg-carbon-black text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transitionConfig}
            >
              <h2 className="font-primary text-4xl md:text-6xl uppercase tracking-tighter mb-8 leading-[0.9]">
                AN UNTAPPED <br/> OPPORTUNITY
              </h2>
              <div className="w-16 h-1 bg-track-red mb-8" />
              <div className="font-body text-lg md:text-xl text-white/70 space-y-6 leading-relaxed">
                <p>
                  Since 1969, Athletic Coaching Camp has operated completely independently, driven purely by passion, community support, and the relentless dedication of our coaches and athletes.
                </p>
                <p className="text-white font-medium text-xl md:text-2xl">
                  As of today, we do not have any corporate sponsors. 
                </p>
                <p>
                  This means that all premium sponsorship tiers—including the coveted Title Sponsorship—are currently available. Your brand has the exclusive opportunity to be the first major corporate partner in our illustrious history.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-white/5 border border-white/10 p-8 flex flex-col justify-center items-center text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)]" />
              <span className="text-8xl font-primary text-white/10 absolute top-12 left-12">"</span>
              <h3 className="font-secondary text-2xl md:text-4xl text-white tracking-wide leading-relaxed z-10">
                BE THE BRAND <br/> THAT POWERS <br/> THE NEXT CHAMPION.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. By The Numbers (Impact) */}
      <section className="py-24 md:py-32 px-6 bg-chalk-white border-b border-carbon-black/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transitionConfig}
            className="text-center mb-20"
          >
            <h2 className="font-primary text-4xl md:text-6xl uppercase tracking-tighter text-carbon-black mb-4">
              Our Impact
            </h2>
            <p className="font-secondary text-xl text-carbon-black/60 tracking-widest uppercase">The scale of your reach</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "55+", label: "Years of Legacy" },
              { number: "50K+", label: "Athletes Trained" },
              { number: "50+", label: "Elite Champions" },
              { number: "100+", label: "Yearly National Participates" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...transitionConfig, delay: index * 0.1 }}
                className="bg-white p-8 text-center border border-carbon-black/5 hover:border-carbon-black/20 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="font-primary text-6xl md:text-7xl text-carbon-black tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="font-secondary text-sm tracking-widest uppercase text-carbon-black/50 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sponsorship Tiers */}
      <section className="py-24 md:py-40 px-6 bg-chalk-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transitionConfig}
            >
              <h2 className="font-primary text-5xl md:text-7xl uppercase tracking-tighter text-carbon-black leading-[0.9]">
                Partnership <br/> Tiers
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig, delay: 0.2 }}
            >
              <p className="max-w-md font-body text-lg text-carbon-black/60 md:text-right">
                Customizable packages designed to maximize your brand's visibility and ROI across our physical events and digital platforms.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig, delay: 0.1 }}
              className="bg-carbon-black text-white p-10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-track-red/20 blur-3xl rounded-full group-hover:bg-track-red/40 transition-colors duration-700" />
              <div>
                <span className="text-track-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Premium</span>
                <h3 className="font-primary text-4xl uppercase tracking-tighter mb-4">Title Sponsor</h3>
                <p className="font-body text-white/60 mb-8 leading-relaxed">
                  The ultimate brand integration. Your name tied directly to our flagship events, including the Premier Relay Championship.
                </p>
                <ul className="space-y-4 mb-12">
                  {[
                    "Event Naming Rights",
                    "Premium Logo Placement on all Jerseys",
                    "Massive Stadium Banners",
                    "VIP Event Access & Seating",
                    "Dedicated Social Media Campaigns"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-white/80">
                      <span className="text-track-red mr-3">✦</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Tier 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig, delay: 0.2 }}
              className="bg-white text-carbon-black p-10 flex flex-col justify-between border border-carbon-black/10 hover:border-carbon-black/30 transition-colors duration-500"
            >
              <div>
                <span className="text-carbon-black/40 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Official</span>
                <h3 className="font-primary text-4xl uppercase tracking-tighter mb-4">Apparel Partner</h3>
                <p className="font-body text-carbon-black/60 mb-8 leading-relaxed">
                  Outfit the next generation of champions. Exceptional visibility on training and competition day kits.
                </p>
                <ul className="space-y-4 mb-12">
                  {[
                    "Logo on all Official Kits",
                    "Exclusivity in Apparel Category",
                    "On-ground Branding at Events",
                    "Digital Media Mentions"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-carbon-black/80">
                      <span className="text-carbon-black/30 mr-3">✦</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Tier 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig, delay: 0.3 }}
              className="bg-white text-carbon-black p-10 flex flex-col justify-between border border-carbon-black/10 hover:border-carbon-black/30 transition-colors duration-500"
            >
              <div>
                <span className="text-carbon-black/40 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Support</span>
                <h3 className="font-primary text-4xl uppercase tracking-tighter mb-4">Co-Sponsors</h3>
                <p className="font-body text-carbon-black/60 mb-8 leading-relaxed">
                  Perfect for Equipment, Beverage, and Nutrition brands looking to connect with a highly engaged athletic audience.
                </p>
                <ul className="space-y-4 mb-12">
                  {[
                    "Category Exclusivity",
                    "Product Placement/Sampling Booths",
                    "Secondary Logo Placement",
                    "Website Logo Inclusion"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-carbon-black/80">
                      <span className="text-carbon-black/30 mr-3">✦</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-32 px-6 bg-track-red text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transitionConfig}
          >
            <h2 className="font-primary text-5xl md:text-7xl uppercase tracking-tighter mb-6">
              Request the Deck
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              We are actively accepting proposals for the upcoming season. Contact our administration to request the comprehensive Sponsorship & Media Deck.
            </p>
            <a 
              href="mailto:sponsors@athleticcamp.com"
              className="inline-block bg-white text-track-red font-bold font-secondary uppercase tracking-[0.2em] px-10 py-5 hover:bg-carbon-black hover:text-white transition-colors duration-300"
            >
              Contact Administration
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
