"use client";

import { useState } from "react";
import {
  Scissors,
  Building2,
  Settings,
  DraftingCompass,
  FileSpreadsheet,
  Hammer,
  ChevronDown,
  ChevronUp,
  Check,
  Compass,
  FileText
} from "lucide-react";

interface SubService {
  name: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  subServices: SubService[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "core-cutting",
    title: "Core Cutting Services",
    shortDesc: "High-precision core drilling and cutting using non-impact diamond core systems.",
    longDesc: "Our core cutting division is equipped with advanced diamond core machinery designed for precise structural alterations. We deliver noise-minimized, dust-controlled, and damage-free concrete openings tailored to structural blueprints.",
    icon: Scissors,
    subServices: [
      { name: "RCC Slab Core Cutting" },
      { name: "Concrete Wall Core Cutting" },
      { name: "Beam Core Cutting" },
      { name: "Floor Openings & Expansion Joints" },
      { name: "Electrical & MEP Service Openings" },
      { name: "HVAC Duct Openings" },
      { name: "AC Copper Pipe Openings" },
      { name: "Plumbing & Drainage Pipe Openings" },
      { name: "Chemical Anchor Drilling & Rebar Fixing" }
    ]
  },
  {
    id: "civil-construction",
    title: "Civil Construction",
    shortDesc: "Complete building structural works for residential, commercial, and industrial facilities.",
    longDesc: "From initial ground-breaking to structural completion, our civil construction team delivers robust works complying with local building codes. We handle reinforcing, form work, and pour operations under engineer supervision.",
    icon: Building2,
    subServices: [
      { name: "Reinforced Concrete construction" },
      { name: "Concrete Slab Casting & Finishing" },
      { name: "Earthwork, Excavation & Footings" },
      { name: "Form Work & Scaffolding services" },
      { name: "Structural Repair & Concrete Crack Injection" },
      { name: "Building Maintenance & Refurbishments" }
    ]
  },
  {
    id: "mep-solutions",
    title: "Mechanical, Electrical and Plumbing Solutions",
    shortDesc: "Mechanical, Electrical, and Plumbing engineering layouts and systems installation.",
    longDesc: "We provide full Mechanical, Electrical and Plumbing contracting. Our qualified technicians lay pipe conduits, execute power grid distributions, install pump stations, and align ventilation ducts designed for high-efficiency and safety compliance.",
    icon: Settings,
    subServices: [
      { name: "HVAC Ventilation Systems installation" },
      { name: "Industrial & Domestic Pump Installations" },
      { name: "Electrical Power Distribution & Panels" },
      { name: "Water Supply & Drainage pipe systems" },
      { name: "Mechanical, Electrical and Plumbing Testing & Commissioning" }
    ]
  },
  {
    id: "design-consulting",
    title: "Architectural Designing & Consulting",
    shortDesc: "Structural blueprints, CAD drafts, project consulting, and energy-saving designs.",
    longDesc: "Work alongside our structural engineers to prepare blueprints and load distributions. We consult on modern engineering methods, offering energy-saving insulation and window layouts.",
    icon: DraftingCompass,
    subServices: [
      { name: "Architectural Space Planning & 3D rendering" },
      { name: "Structural Design & Load Calculations" },
      { name: "Project Management Consulting" },
      { name: "Energy-saving Material specs & Insulation consulting" }
    ]
  },
  {
    id: "planning-estimating",
    title: "Planning & Estimating",
    shortDesc: "Accurate Bill of Quantities (BOQ), material projections, and site scheduling.",
    longDesc: "Avoid cost-overruns with our detailed planning services. We conduct pre-construction site studies, provide standard-compliant BOQ calculations, and map out project timelines.",
    icon: FileSpreadsheet,
    subServices: [
      { name: "Pre-construction Feasibility studies" },
      { name: "Detailed Bill of Quantities (BOQ) calculations" },
      { name: "Material Sourcing & Cost estimates" },
      { name: "Project Scheduling & Milestones planning" }
    ]
  },
  {
    id: "steel-interior",
    title: "Steel, Interior & Special Works",
    shortDesc: "Timber work, landscaping, swimming pools, steel structures, and interior finishing.",
    longDesc: "We bring finishing excellence to your property. Our specialty fabrication teams handle architectural steel, decorative timber carpentry, custom swimming pool construction, and modern landscaping.",
    icon: Hammer,
    subServices: [
      { name: "Structural & Decorative Steel fabrication" },
      { name: "Interior Designing & Drywall installation" },
      { name: "Timber carpentry, ceilings & floors" },
      { name: "Landscaping & Outdoor layouts" },
      { name: "Swimming Pool construction & filtration systems" }
    ]
  }
];

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<string | null>("core-cutting");

  const toggleExpand = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Page Header */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-navy-light to-navy-dark opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05904_1px,transparent_1px),linear-gradient(to_bottom,#c5a05904_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <p className="text-gold uppercase tracking-widest font-mono text-xs sm:text-sm font-semibold">
            Precision Solutions • Residential, Commercial & Industrial
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto rounded" />
        </div>
      </section>

      {/* 2. Services Grid Area */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold text-gold uppercase tracking-widest font-mono">Detailed Catalog</h2>
            <p className="text-3xl font-extrabold text-navy tracking-tight">Explore Our Professional Divisions</p>
            <p className="text-slate-600 text-sm font-light">
              Click on any service card below to expand details, explore technical specifications, and view our custom sub-services list.
            </p>
          </div>

          {/* List of Expandable Cards */}
          <div className="space-y-6">
            {serviceCategories.map((service) => {
              const IconComponent = service.icon;
              const isExpanded = expandedCard === service.id;

              return (
                <div
                  key={service.id}
                  className={`rounded-xl border transition-all duration-300 ${
                    isExpanded
                      ? "border-gold bg-slate-50/50 shadow-md"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  
                  {/* Card Main Bar */}
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="w-full text-left flex items-center justify-between p-6 sm:p-8 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div
                        className={`rounded-lg p-3.5 transition-colors ${
                          isExpanded ? "bg-gold/15 text-gold" : "bg-navy/5 text-navy"
                        }`}
                      >
                        <IconComponent className="h-6 sm:h-7 w-6 sm:w-7" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-navy">{service.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-light pr-4 hidden sm:block">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gold" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-navy-light/60 hover:text-gold" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Details Container */}
                  {isExpanded && (
                    <div className="px-6 pb-8 sm:px-8 border-t border-slate-200/60 pt-6 space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-gold uppercase tracking-wider font-mono">Service Overview</h4>
                        <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                          {service.longDesc}
                        </p>
                      </div>
                      
                      {/* Sub services bullet grid */}
                      {service.id === "mep-solutions" ? (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Mechanical */}
                            <div className="space-y-3 bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
                              <h5 className="font-bold text-navy text-sm uppercase tracking-wider border-b border-gold/45 pb-1 flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                                Mechanical
                              </h5>
                              <ul className="space-y-2">
                                {["Ventilation Systems", "Fire Fighting Systems", "Pump Installations", "Chilled Water Systems", "Compressed Air Systems"].map((item) => (
                                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Electrical */}
                            <div className="space-y-3 bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
                              <h5 className="font-bold text-navy text-sm uppercase tracking-wider border-b border-gold/45 pb-1 flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                                Electrical
                              </h5>
                              <ul className="space-y-2">
                                {["Power Distribution", "Lighting Systems", "Earthing & Lightning Protection", "Generator Systems", "ELV Systems"].map((item) => (
                                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Plumbing */}
                            <div className="space-y-3 bg-white p-5 rounded-lg border border-slate-100 shadow-sm">
                              <h5 className="font-bold text-navy text-sm uppercase tracking-wider border-b border-gold/45 pb-1 flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                                Plumbing
                              </h5>
                              <ul className="space-y-2">
                                {["Water Supply Systems", "Sanitary Systems", "Drainage Systems", "Pump Installations", "Water Treatment Systems"].map((item) => (
                                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Mechanical, Electrical and Plumbing Slogan Strip */}
                          <div className="bg-navy-dark text-white text-center py-4 px-6 rounded-lg border border-gold/25 space-y-1.5 shadow-sm">
                            <p className="text-xs font-bold text-gold uppercase tracking-wider font-mono">Pump Installation & All Types of Mechanical, Electrical and Plumbing Solutions</p>
                            <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                              We Design • Supply • Install • Commission • Maintain
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-gold uppercase tracking-wider font-mono">Core Sub-Services</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.subServices.map((sub, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-gold flex-shrink-0" />
                                <span className="text-sm text-slate-700 font-medium">{sub.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Quote Link */}
                      <div className="pt-2">
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center rounded bg-navy px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gold hover:text-navy-dark"
                        >
                          Request Estimate for this Service
                        </a>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Technology Highlight Banner */}
      <section className="bg-navy-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded bg-gold/10 px-3 py-1 text-xs font-semibold text-gold tracking-wider uppercase border border-gold/20">
            <Compass className="h-4 w-4" />
            <span>Advanced Equipment Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            High-Precision Diamond Core Technology
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm font-light">
            We use advanced non-impact wet-core machinery from Hilti and Bosch. This allows dust-free, damage-free execution with zero mechanical stress to your structures.
          </p>
        </div>
      </section>

    </div>
  );
}
