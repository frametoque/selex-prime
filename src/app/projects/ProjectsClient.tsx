"use client";

import { useState } from "react";
import {
  MapPin,
  CheckCircle,
  Maximize2,
  Calendar,
  Building,
  Home as HomeIcon,
  Factory,
  Globe
} from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: "Residential" | "Commercial" | "Industrial";
  location: string;
  type: string;
  duration: string;
  scope: string;
  beforeState: string;
  afterState: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Mechanical, Electrical and Plumbing Duct Core Cutting",
    category: "Industrial",
    location: "Biyagama Industrial Zone",
    type: "Concrete Wall & Slab Openings",
    duration: "June 2026",
    scope: "Heavy industrial ventilation passage core cutting. We completed 18 core penetrations of 300mm diameter through 450mm reinforced concrete walls with zero micro-cracks.",
    beforeState: "Solid RCC load-bearing walls without Mechanical, Electrical and Plumbing utility openings.",
    afterState: "Clean, precise circular duct channels lined up for ventilation ducts."
  },
  {
    id: 2,
    title: "Commercial Chemical Anchoring",
    category: "Commercial",
    location: "Colombo 03 Retail Complex",
    type: "Chemical Anchor Drilling & Rebar Fixing",
    duration: "May 2026",
    scope: "Installation of heavy structural steel bracket support systems. Drilled 120 holes of 24mm diameter using high-precision Hilti dustless vacuum systems.",
    beforeState: "Concrete columns requiring seismic-resistant steel bracket integration.",
    afterState: "Anchored threaded studs set with professional epoxy resin, load-tested."
  },
  {
    id: 3,
    title: "Plumbing Pipe Slab Openings",
    category: "Commercial",
    location: "Kandy Grand Hotel expansion",
    type: "RCC Slab Core Cutting",
    duration: "April 2026",
    scope: "Drilling vertical conduits for main sewer and water supply pipes. Drilled 85 holes of 150mm diameter across 5 levels, working at night to minimize noise.",
    beforeState: "Five-story concrete decks requiring vertical utility shafts.",
    afterState: "Perfect vertical alignment of pipe openings, structural integrity preserved."
  },
  {
    id: 4,
    title: "Precision Staircase Slab Cut",
    category: "Residential",
    location: "Mount Lavinia Luxury Villa",
    type: "RCC Slab Section Cutting",
    duration: "March 2026",
    scope: "Creation of a new internal staircase opening. Slab saw cutting and core corners completed with zero impact to structural columns.",
    beforeState: "Continuous concrete ceiling block preventing mezzanine stairs.",
    afterState: "Clean-edge rectangular stairwell opening ready for custom metal staircase."
  },
  {
    id: 5,
    title: "Warehouse Expansion Floor Joints",
    category: "Industrial",
    location: "Orugodawatta Logistics Hub",
    type: "Slab Floor Openings & Expansion Joints",
    duration: "February 2026",
    scope: "Creating floor channels for expansion plates and utility lines in a newly laid concrete floor. Totaled 240 linear meters of precise line cutting.",
    beforeState: "Monolithic concrete warehouse floor prone to temperature cracking.",
    afterState: "Stress-relieved expansion joints sealed with industrial elastomer."
  },
  {
    id: 6,
    title: "AC Copper Pipe Core Cuts",
    category: "Residential",
    location: "Negombo Beach Residence",
    type: "AC Copper Pipe & Drainage Openings",
    duration: "January 2026",
    scope: "Drilled 14 core holes of 75mm diameter at a 15-degree decline to allow gravity drainage of condensate lines in residential brick and concrete walls.",
    beforeState: "Solid exterior walls without split AC conduit channels.",
    afterState: "Angled, smooth sleeve openings lined with PVC conduit sleeves."
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-navy-light to-navy-dark opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05904_1px,transparent_1px),linear-gradient(to_bottom,#c5a05904_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Projects & Gallery</h1>
          <p className="text-gold uppercase tracking-widest font-mono text-xs sm:text-sm font-semibold">
            Visual Proof of Precision • Residential, Commercial & Industrial
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto rounded" />
        </div>
      </section>

      {/* 2. Filterable Gallery Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["All", "Residential", "Commercial", "Industrial"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all ${
                  activeFilter === filter
                    ? "bg-gold text-navy-dark shadow-sm"
                    : "bg-slate-100 text-navy-light hover:bg-slate-200"
                }`}
              >
                {filter} Projects
              </button>
            ))}
          </div>

          {/* Project List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                {/* Visual Header representing structure */}
                <div className="bg-navy-dark text-white p-6 relative overflow-hidden min-h-[160px] flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-xl" />
                  
                  {/* Category icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <div className="text-slate-400">
                      {project.category === "Residential" && <HomeIcon className="h-5 w-5" />}
                      {project.category === "Commercial" && <Building className="h-5 w-5" />}
                      {project.category === "Industrial" && <Factory className="h-5 w-5" />}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold tracking-tight text-white leading-tight group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gold flex-shrink-0" />
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Scope & Details */}
                <div className="p-6 space-y-4 flex-grow">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-gold uppercase tracking-wider font-mono">Service Rendered</p>
                    <p className="text-sm font-semibold text-navy">{project.type}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {project.scope}
                  </p>

                  {/* Before & After comparison simulation */}
                  <div className="border-t border-slate-100 pt-4 space-y-3">
                    <p className="text-xs font-bold text-gold uppercase tracking-wider font-mono">Precision Log</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11.5px] sm:text-[11px] leading-tight">
                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
                        <span className="font-bold text-slate-500 uppercase tracking-widest font-mono block mb-1">Before</span>
                        <span className="text-slate-600 font-light">{project.beforeState}</span>
                      </div>
                      <div className="bg-gold-light p-2.5 rounded border border-gold/10">
                        <span className="font-bold text-gold uppercase tracking-widest font-mono block mb-1">After</span>
                        <span className="text-slate-700 font-medium">{project.afterState}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gold font-bold font-mono">
                    <CheckCircle className="h-4 w-4" />
                    <span>VERIFIED</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Islandwide Coverage Highlight */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex rounded-full bg-navy/5 p-3 text-gold">
            <Globe className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">Islandwide Service Coverage</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base font-light">
            We are fully mobilized to service sites in Western, Southern, Central, Northern, and Eastern provinces. From major commercial hubs in Colombo and Galle to industrial facilities in Kandy and Jaffna, we ensure timely delivery.
          </p>
        </div>
      </section>

    </div>
  );
}
