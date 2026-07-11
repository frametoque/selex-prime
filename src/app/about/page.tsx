import type { Metadata } from "next";
import Image from "next/image";
import {
  Eye,
  Compass,
  Award,
  Heart,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle,
  Briefcase,
  ShieldAlert,
  CalendarCheck,
  Building,
  FileCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Selex Prime Engineering",
  description: "Learn about Selex Prime Engineering's history since 2017, our core values, and our vision/mission for complete construction and Mechanical, Electrical and Plumbing solutions in Sri Lanka.",
};

export default function About() {
  const yearsOfExperience = new Date().getFullYear() - 2017;
  const values = [
    {
      title: "Safety First",
      desc: "We enforce strict safety protocols across all job sites to protect our workforce and client facilities.",
      icon: ShieldCheck
    },
    {
      title: "Integrity",
      desc: "Our business operations are built on honesty, transparent estimates, and ethical conduct.",
      icon: Heart
    },
    {
      title: "Customer Focus",
      desc: "We align closely with client requirements, providing custom drilling & layout specifications.",
      icon: Users
    },
    {
      title: "Team Work",
      desc: "Collaborative problem-solving lets us finish complex commercial structural work seamlessly.",
      icon: Users
    },
    {
      title: "Quality",
      desc: "We commit to exact tolerance standards, utilizing high-precision diamond core machines.",
      icon: Award
    },
    {
      title: "Respect",
      desc: "We honor agreements and show professional regard to builders, partners, and employees.",
      icon: ShieldCheck
    },
    {
      title: "Collaboration",
      desc: "Partnering effectively with main contractors, Mechanical, Electrical and Plumbing teams, and architects for optimal delivery.",
      icon: Briefcase
    },
    {
      title: "Accountability",
      desc: "We stand by our work, ensuring 100% compliance with inspection checklists and layouts.",
      icon: CheckCircle
    }
  ];

  const pillars = [
    {
      title: "Quality Workmanship",
      sub: "Excellence in Every Project",
      desc: "Every core cutting, concrete pour, and Mechanical, Electrical and Plumbing routing operation runs under strict inspection logs. We align with international QA/QC tolerances to deliver high-quality construction.",
      icon: FileCheck
    },
    {
      title: "Experienced Team",
      sub: "Qualified Technical Workforce",
      desc: "Our structural engineers, project managers, and Mechanical, Electrical and Plumbing technicians possess years of specialized contracting expertise to execute complex high-rise and industrial builds.",
      icon: Users
    },
    {
      title: "On-Time Delivery",
      sub: "Strict Adherence to Schedules",
      desc: "Construction milestones are non-negotiable. We leverage advanced diamond core systems and schedule workflows to guarantee your systems are ready on or before time.",
      icon: CalendarCheck
    },
    {
      title: "Safe & Reliable",
      sub: "Dust-Controlled & Damage-Free Method",
      desc: "Uncompromising safety standards. We employ specialized water-suppression attachments and non-impact tools to protect structure integrity and maintain toxicity-free workspaces.",
      icon: ShieldAlert
    },
    {
      title: "Complete Solution",
      sub: "From Concept to Completion",
      desc: "We build it all. We design, supply, install, commission, and maintain Mechanical, Electrical and Plumbing and structural systems, offering a seamless single-source solution for developers.",
      icon: Building
    }
  ];

  const partners = [
    { name: "INSEE Cement", logo: "/partners/insee.png" },
    { name: "Tokyo Super", logo: "/partners/tokyo_super.png" },
    { name: "Lanwa Steel", logo: "/partners/lanwa.png" },
    { name: "Melwa Steel", logo: "/partners/melwa.png" },
    { name: "Kelani Cables", logo: "/partners/kelani_cables.png" },
    { name: "ACL Cables", logo: "/partners/acl_cables.png" },
    { name: "Orange Electric", logo: "/partners/orange_electric.png" },
    { name: "Rocell", logo: "/partners/rocell.png" },
    { name: "Macktiles", logo: "/partners/macktiles.png" },
    { name: "Lanka Tiles", logo: "/partners/lanka_tiles.png" },
    { name: "Alumex", logo: "/partners/alumex.png" },
    { name: "JAT Holdings", logo: "/partners/jat.png" },
    { name: "Dulux Paint", logo: "/partners/dulux.png" },
    { name: "Nippon Paint", logo: "/partners/nippon_paint.png" },
    { name: "Multilac Paint", logo: "/partners/multilac.png" },
    { name: "Softlogic", logo: "/partners/softlogic.png" },
    { name: "Arpico", logo: "/partners/arpico.png" },
    { name: "Singer", logo: "/partners/singer.png" },
    { name: "Abans", logo: "/partners/abans.png" },
    { name: "S-lon", logo: "/partners/s_lon.png" },
    { name: "Anton Pipes", logo: "/partners/anton.png" },
    { name: "Hilti Systems", logo: "/partners/hilti.png" },
    { name: "Bosch Tools", logo: "/partners/bosch.png" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-navy-light to-navy-dark opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05904_1px,transparent_1px),linear-gradient(to_bottom,#c5a05904_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">About Our Company</h1>
          <p className="text-gold uppercase tracking-widest font-mono text-xs sm:text-sm font-semibold">
            Established 2017 • Civil & Mechanical, Electrical and Plumbing Contracting
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto rounded" />
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Graphic/Info block */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 p-8 shadow-sm">
                <p className="text-lg font-bold text-navy mb-4">A Trusted Construction Partner</p>
                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  Selex Prime Engineering is a premier contracting provider specialized in Civil Construction, Mechanical, Electrical, Plumbing (Mechanical, Electrical and Plumbing) solutions, and high-precision core cutting. 
                </p>
                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed mt-4">
                  Over the past {yearsOfExperience}+ years, we have built a reputation for excellence, handling residential renovations, commercial complexes, and industrial alterations across Sri Lanka.
                </p>
                <div className="mt-8 border-t border-slate-200 pt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-extrabold text-gold">2017</p>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Founded</p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-gold">{yearsOfExperience}+</p>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Vision & Mission */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Vision Card */}
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 flex gap-6 items-start">
                <div className="rounded-lg bg-gold/10 p-3 text-gold flex-shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy">Our Vision</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    To be the most reliable and innovative engineering contracting firm in Sri Lanka, recognized for setting benchmarks in safety, quality, and precision technology.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 flex gap-6 items-start">
                <div className="rounded-lg bg-gold/10 p-3 text-gold flex-shrink-0">
                  <Compass className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy">Our Mission</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    To deliver premium construction and core cutting solutions through technical excellence, state-of-the-art equipment, on-time scheduling, and an unwavering commitment to safe, dust-controlled and damage-free work methods.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold text-gold uppercase tracking-widest font-mono">Our Culture</h2>
            <p className="text-3xl font-extrabold text-navy tracking-tight">Our Core Values</p>
            <div className="h-0.5 w-12 bg-gold mx-auto" />
            <p className="text-slate-600 text-sm font-light">
              These shared principles define how we work together, collaborate with builders, and fulfill client commitments.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const IconComp = val.icon;
              return (
                <div key={val.title} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-gold/30 transition-colors">
                  <div className="rounded-full bg-navy/5 p-3 text-gold">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-navy text-base">{val.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. MD Message Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-2xl bg-navy-dark text-white p-8 sm:p-12 relative overflow-hidden border border-gold/15">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              {/* Director Image */}
              <div className="relative flex-shrink-0 select-none">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gold/50 bg-navy relative overflow-hidden shadow-md">
                  <Image
                    src="/director.png"
                    alt="Managing Director"
                    fill
                    sizes="(max-width: 640px) 96px, 128px"
                    className="object-cover"
                  />
                </div>
                {/* Visual badge */}
                <div className="absolute bottom-0 right-0 bg-gold text-navy-dark rounded-full p-1 border border-navy-dark z-10 shadow">
                  <ShieldCheck className="h-4 w-4 text-navy-dark" />
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-4 text-center md:text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                  A Message From Our Managing Director
                </span>
                <blockquote className="text-base sm:text-lg italic text-slate-300 font-light leading-relaxed font-sans">
                  "At Selex Prime Engineering, we believe in building with precision and executing with excellence. From concept to completion, we deliver innovative, reliable, and high-quality construction and Mechanical, Electrical and Plumbing solutions across Sri Lanka. Whether it's casting concrete structures or executing dust-controlled service penetrations, our goal is to build your vision with one standard excellence."
                </blockquote>
                <div className="pt-2">
                  <p className="font-bold text-white text-base">Sasika De Silva</p>
                  <p className="text-xs text-gold uppercase tracking-wider font-mono">Managing Director</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Merged Operational Pillars) */}
      <section id="standards" className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold text-gold uppercase tracking-widest font-mono">Our Standards</h2>
            <p className="text-3xl font-extrabold text-navy tracking-tight">Why Choose Selex Prime</p>
            <div className="h-0.5 w-12 bg-gold mx-auto" />
            <p className="text-slate-600 text-sm font-light">
              We address builder concerns directly through clear inspection logs, robust safety schemes, and on-time scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isLast = idx === pillars.length - 1;
              return (
                <div
                  key={pillar.title}
                  className={`group rounded-xl border border-slate-200 bg-white p-8 hover:border-gold/30 hover:shadow-sm transition-all duration-300 flex flex-col sm:flex-row gap-6 ${
                    isLast ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
                  }`}
                >
                  <div className="rounded-lg bg-navy/5 p-4 text-gold flex-shrink-0 h-14 w-14 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-semibold">
                      {pillar.sub}
                    </span>
                    <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Partner Marquee */}
      <section className="py-16 bg-white border-t border-slate-200/60 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h3 className="text-xs font-bold text-navy-light uppercase tracking-widest font-mono">
            Our Business Partners & Suppliers
          </h3>
          <div className="h-0.5 w-10 bg-gold mx-auto mt-2 rounded" />
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex w-full overflow-x-hidden py-4 bg-slate-50/50">
          <div className="animate-marquee flex gap-12 py-2 items-center min-w-full animate-[marquee_10s_linear_infinite] shrink-0">
            {/* First Set */}
            {partners.map((partner, idx) => (
              <div key={idx} className="relative h-14 w-32 flex-shrink-0 bg-white border border-slate-200/80 shadow-sm rounded-lg p-2 select-none flex items-center justify-center group hover:border-gold/30 hover:scale-105 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="128px"
                  className="object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate Set for Infinite scroll */}
            {partners.map((partner, idx) => (
              <div key={`dup-${idx}`} className="relative h-14 w-32 flex-shrink-0 bg-white border border-slate-200/80 shadow-sm rounded-lg p-2 select-none flex items-center justify-center group hover:border-gold/30 hover:scale-105 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="128px"
                  className="object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
