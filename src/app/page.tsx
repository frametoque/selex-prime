import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Activity,
  HardHat,
  Cpu,
  ArrowRight,
  Phone,
  CheckCircle,
  Building2,
  Maximize2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Selex Prime Engineering | Core Cutting & Construction Solutions",
  description: "Established in 2017, Selex Prime Engineering offers dust-controlled, damage-free RCC slab, wall & beam core cutting, Mechanical, Electrical and Plumbing solutions, and civil construction islandwide in Sri Lanka.",
};

export default function Home() {
  const yearsOfExperience = new Date().getFullYear() - 2017;
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-navy-dark text-white py-24 sm:py-32 flex items-center min-h-[85vh]">
        {/* Background Grid Pattern & Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light via-navy-dark to-navy-dark opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05908_1px,transparent_1px),linear-gradient(to_bottom,#c5a05908_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Decorative Gold Accent Orb */}
        <div className="absolute top-1/4 right-[-10%] h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-10 left-[-10%] h-[300px] w-[300px] rounded-full bg-gold/5 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs sm:text-sm font-medium text-gold tracking-wide uppercase">
                <Shield className="h-4 w-4 text-gold animate-pulse" />
                <span>Dust-Controlled • Damage-Free Execution</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Complete Construction<br />
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-accent to-gold"> */}
                <span className="text-transparent bg-clip-text bg-gold via-gold-accent to-gold">
                  Solutions!
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Selex Prime Engineering delivers innovative, reliable, and high-quality construction solutions across Sri Lanka. We specialize in Mechanical, Electrical and Plumbing engineering (Mechanical, Electrical, Plumbing) and high-precision core cutting.
              </p>

              {/* Tagline Strip */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 font-mono tracking-widest uppercase">
                <span>Construction</span>
                <span className="text-gold">•</span>
                <span>Mechanical, Electrical and Plumbing</span>
                <span className="text-gold">•</span>
                <span>Pump Installation</span>
                <span className="text-gold">•</span>
                <span>Maintenance</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-gold px-8 py-4 text-base font-semibold text-navy-dark shadow-lg transition-all hover:bg-gold-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded border border-slate-500 hover:border-gold px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/5"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Visual element representing the machine or logo */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                className="relative w-full max-w-[400px] aspect-square bg-slate-50 border-2 border-gold/35 shadow-2xl overflow-hidden flex flex-col items-center justify-between p-6 rounded-lg group hover:border-gold transition-colors duration-500"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(197, 160, 89, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(197, 160, 89, 0.08) 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}
              >
                {/* Drafting Blueprint Circles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[300px] h-[300px] rounded-full border border-gold/5 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-gold/10" />
                  <div className="absolute w-[180px] h-[180px] rounded-full border border-gold/5" />
                  
                  {/* Grid Crosshair */}
                  <div className="absolute h-full w-[1px] bg-gold/5" />
                  <div className="absolute w-full h-[1px] bg-gold/5" />
                </div>

                {/* Drafting Metadata Top Strip */}
                <div className="w-full flex justify-between text-[10px] text-slate-400 font-mono tracking-wider border-b border-gold/15 pb-2 relative z-25 select-none">
                  <span>DRAFT SHEET: SP-01</span>
                  <span>OP: SELEX_PRIME</span>
                </div>

                {/* Embedded Transparent Logo */}
                <div className="relative z-10 w-full flex flex-col items-center justify-center py-4">
                  <div className="relative w-full max-w-[290px] aspect-[4/1.8] flex items-center justify-center">
                    <Image
                      src="/without bg.png"
                      alt="Selex Prime Engineering Logo"
                      width={290}
                      height={85}
                      className="object-contain filter drop-shadow-[0_2px_8px_rgba(11,29,51,0.06)] transition-transform duration-500 group-hover:scale-[1.03]"
                      priority
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-[10px] text-gold tracking-[0.25em] font-mono uppercase font-bold">
                      Engineering Excellence
                    </p>
                  </div>
                </div>

                {/* Drafting Metadata Bottom Strip */}
                <div className="w-full flex justify-between text-[10px] text-slate-400 font-mono tracking-wider border-t border-gold/15 pt-2 relative z-25 select-none">
                  <span>SCALE: 1:1 [MM]</span>
                  <span>SYS: Mechanical, Electrical and Plumbing/CONSTR</span>
                </div>

                {/* Technical Corner Brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-300" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-300" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Stats Strip */}
      <section className="bg-gold-light border-y border-gold/20 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-navy">{yearsOfExperience}+ Years</p>
              <p className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-semibold">Industry Experience</p>
            </div>
            <div className="space-y-1 border-l border-gold/30">
              <p className="text-3xl font-extrabold text-navy">100%</p>
              <p className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-semibold">Dust Controlled</p>
            </div>
            <div className="space-y-1 md:border-l md:border-gold/30">
              <p className="text-3xl font-extrabold text-navy">Damage Free</p>
              <p className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-semibold">Structural Drilling</p>
            </div>
            <div className="space-y-1 border-l border-gold/30">
              <p className="text-3xl font-extrabold text-navy">Islandwide</p>
              <p className="text-xs sm:text-sm text-slate-600 uppercase tracking-wider font-semibold">Service Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Highlight */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold text-gold uppercase tracking-widest font-mono">Our Expertise</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Premium Core Engineering Services
            </p>
            <div className="h-1 w-16 bg-gold mx-auto rounded" />
            <p className="text-slate-600 text-sm sm:text-base font-light">
              We leverage advanced diamond core technology and expert engineering to provide structural alterations, openings, and installations.
            </p>
          </div>

          {/* Grid of Highlight Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Core Cutting */}
            <div className="group relative rounded-xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex rounded-lg bg-navy/10 p-3 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-6">
                  <Maximize2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">Core Cutting Services</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Accurate core cutting in RCC slabs, walls, and beams. Dust-controlled plumbing, electrical, and HVAC service openings.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center text-xs font-semibold text-gold uppercase tracking-wider hover:text-gold-hover transition-colors">
                Explore Cuts <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2: Civil Construction */}
            <div className="group relative rounded-xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex rounded-lg bg-navy/10 p-3 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-6">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">Civil Construction</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Full concrete construction, slabs, earthwork, form work, structural repair, and maintenance for projects of all sizes.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center text-xs font-semibold text-gold uppercase tracking-wider hover:text-gold-hover transition-colors">
                Explore Construction <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3: Mechanical, Electrical and Plumbing Solutions */}
            <div className="group relative rounded-xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex rounded-lg bg-navy/10 p-3 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-6">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">Mechanical, Electrical and Plumbing Solutions</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Mechanical, Electrical, and Plumbing engineering. Ventilation layouts, industrial pump installations, and power distribution.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center text-xs font-semibold text-gold uppercase tracking-wider hover:text-gold-hover transition-colors">
                Explore Mechanical, Electrical and Plumbing <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>

            {/* Card 4: Design & Consulting */}
            <div className="group relative rounded-xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex rounded-lg bg-navy/10 p-3 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-6">
                  <HardHat className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">Designing & Estimating</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Architectural design, structural consulting, project management, and planning & estimating with focus on energy-savings.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center text-xs font-semibold text-gold uppercase tracking-wider hover:text-gold-hover transition-colors">
                Explore Design <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded border border-navy/20 hover:border-gold px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              View Detailed Service Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* 3b. Specialized in Mechanical, Electrical and Plumbing Solutions */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold text-gold uppercase tracking-widest font-mono">Engineering Specialties</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Specialized in Mechanical, Electrical and Plumbing Solutions
            </p>
            <div className="h-1 w-16 bg-gold mx-auto rounded" />
            <p className="text-slate-600 text-sm sm:text-base font-light">
              We design, supply, install, commission, and maintain high-efficiency systems for projects across Sri Lanka.
            </p>
          </div>

          {/* Mechanical, Electrical and Plumbing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Mechanical */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-gold/30 transition-colors">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-navy border-b border-gold/30 pb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  Mechanical
                </h3>
                <ul className="space-y-3">
                  {[
                    "Ventilation Systems",
                    "Fire Fighting Systems",
                    "Pump Installations",
                    "Chilled Water Systems",
                    "Compressed Air Systems"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Electrical */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-gold/30 transition-colors">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-navy border-b border-gold/30 pb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  Electrical
                </h3>
                <ul className="space-y-3">
                  {[
                    "Power Distribution",
                    "Lighting Systems",
                    "Earthing & Lightning Protection",
                    "Generator Systems",
                    "ELV Systems"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plumbing */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-gold/30 transition-colors">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-navy border-b border-gold/30 pb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  Plumbing
                </h3>
                <ul className="space-y-3">
                  {[
                    "Water Supply Systems",
                    "Sanitary Systems",
                    "Drainage Systems",
                    "Pump Installations",
                    "Water Treatment Systems"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Slogan strip from flyer */}
          <div className="bg-navy-dark text-white rounded-xl border border-gold/20 p-6 shadow-md text-center max-w-4xl mx-auto space-y-2">
            <h4 className="text-xs font-bold text-gold uppercase tracking-widest font-mono">
              Pump Installation & All Types of Mechanical, Electrical and Plumbing Solutions
            </h4>
            <p className="text-sm sm:text-base font-semibold tracking-wide text-slate-200">
              We Design • Supply • Install • Commission • Maintain
            </p>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Strip (Quick glance) */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text info */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold text-gold uppercase tracking-widest font-mono">Why Selex Prime</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                High-Precision Diamond Core Technology
              </p>
              <div className="h-1 w-16 bg-gold rounded" />
              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                Concrete alteration requires meticulous planning and exact execution. We operate with specialized gear to maintain building integrity and minimize site dust.
              </p>
              <ul className="space-y-4">
                {[
                  "Qualified engineering technicians & professional team",
                  "High precision diamond core machines for exact openings",
                  "Dust controlled environment and structural damage-free cuts",
                  "Strict compliance with schedules & on-time service"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/about#standards"
                  className="inline-flex items-center justify-center rounded bg-navy px-6 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-gold hover:text-navy"
                >
                  More About Our Standards
                </Link>
              </div>
            </div>

            {/* Right side graphical items */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Feature 1 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60 space-y-4 shadow-sm hover:border-gold/30 transition-all">
                <div className="text-gold"><Shield className="h-8 w-8" /></div>
                <h4 className="text-base font-bold text-navy">Dust Controlled</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  We use integrated water collection systems and vacuum attachments to prevent slurry and dust from contaminating surrounding work zones.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60 space-y-4 shadow-sm hover:border-gold/30 transition-all">
                <div className="text-gold"><Activity className="h-8 w-8" /></div>
                <h4 className="text-base font-bold text-navy">Damage Free</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Core drilling utilizes non-impact rotary action. Unlike jackhammers, this prevents micro-cracks from propagating through structural reinforcement.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60 space-y-4 shadow-sm hover:border-gold/30 transition-all">
                <div className="text-gold"><Building2 className="h-8 w-8" /></div>
                <h4 className="text-base font-bold text-navy">Sectors Serviced</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Our services are optimized for residential buildings, commercial complexes, and industrial plants across Sri Lanka.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60 space-y-4 shadow-sm hover:border-gold/30 transition-all">
                <div className="text-gold"><HardHat className="h-8 w-8" /></div>
                <h4 className="text-base font-bold text-navy">Safety Standards</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  All tasks are carried out under strict safety guidelines. Team members are equipped with standard PPE and undergo safety training.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. Contact Call-to-action Section */}
      <section className="bg-navy-dark text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-light to-navy-dark opacity-95" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Have a project in mind? Let's discuss details.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Contact Selex Prime Engineering today for high-precision core cutting, Mechanical, Electrical and Plumbing layouts, or civil construction. We provide site inspections and detailed estimations islandwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0767825324"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-gold px-8 py-4 text-base font-semibold text-navy-dark shadow-lg transition-colors hover:bg-gold-hover"
            >
              <Phone className="mr-2.5 h-5 w-5" />
              Call Now: 076 782 5324
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded border border-white hover:border-gold px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5"
            >
              Send Message
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
