"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Clock,
  ExternalLink,
  Loader2,
  Facebook
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "core-cutting",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceLabels: Record<string, string> = {
      "core-cutting": "Concrete Core Cutting & Drilling",
      "mep-solutions": "MEP Solutions (Mechanical, Electrical, Plumbing)",
      "civil-construction": "Civil Construction & Building Works",
      "structural-alterations": "Structural Alterations & Renovations",
      "water-pumps": "Pump Installations & Water Systems",
      "general-inquiry": "General Inquiry"
    };

    const serviceName = serviceLabels[formData.service] || formData.service;
    const emailStr = formData.email ? formData.email : "Not provided";

    const messageText = 
      `*New Inquiry - Selex Prime Engineering*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${emailStr}\n` +
      `*Service Required:* ${serviceName}\n\n` +
      `*Project Description:*\n${formData.message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/94767825324?text=${encodedText}`;

    // Simulate short loader delay for smoother user flow
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Open WhatsApp link in new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "core-cutting",
      message: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. Page Header */}
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-navy-light to-navy-dark opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05904_1px,transparent_1px),linear-gradient(to_bottom,#c5a05904_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="text-gold uppercase tracking-widest font-mono text-xs sm:text-sm font-semibold">
            Get an Estimate • Consult an Engineer
          </p>
          <div className="h-0.5 w-16 bg-gold mx-auto rounded" />
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Office & Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6 shadow-sm">
                <h2 className="text-xl font-bold text-navy border-l-2 border-gold pl-3">
                  Selex Prime Offices
                </h2>
                
                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  Have an upcoming project or need a quote? Reach out using our phone lines or send us a message through the contact form.
                </p>

                <div className="space-y-4 pt-2">
                  
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="rounded-lg bg-gold/10 p-3 text-gold flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Office Address</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                        No 93/1, Kuda Waskaduwa,<br />Waskaduwa, Sri Lanka
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="rounded-lg bg-gold/10 p-3 text-gold flex-shrink-0 mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Call Us Today</h4>
                      <a href="tel:0767825324" className="text-xs sm:text-sm text-slate-600 font-medium hover:text-gold transition-colors block mt-1">
                        076 782 5324
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="rounded-lg bg-gold/10 p-3 text-gold flex-shrink-0 mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Email Address</h4>
                      <a href="mailto:info@selexprime.lk" className="text-xs sm:text-sm text-slate-600 font-medium hover:text-gold transition-colors block mt-1">
                        info@selexprime.lk
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="rounded-lg bg-gold/10 p-3 text-gold flex-shrink-0 mt-1">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Working Hours</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                        Mon – Sat: 8:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex gap-4 items-start">
                    <div className="rounded-lg bg-gold/10 p-3 text-gold flex-shrink-0 mt-1">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Facebook Page</h4>
                      <a
                        href="https://www.facebook.com/p/SELEX-Engineering-100063520334047/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-slate-600 font-medium hover:text-gold transition-colors block mt-1"
                      >
                        SELEX Engineering on Facebook
                      </a>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Quick Chat button */}
                <div className="border-t border-slate-100 pt-6">
                  <a
                    href="https://wa.me/94767825324"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded bg-[#25D366] hover:bg-[#20ba56] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>

              </div>

              </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
                      <p className="text-slate-600 text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed">
                        Your inquiry has been successfully sent to Selex Prime Engineering. One of our engineers will review your details and call you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center rounded bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy-dark"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-navy border-l-2 border-gold pl-3">
                        Request a Free Quote
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-light">
                        Please fill in your details below. Submitting this form will automatically open WhatsApp with your pre-formatted project details to message our engineers directly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-xs font-bold text-navy-light uppercase tracking-wider font-mono">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full rounded border border-slate-300 px-4 py-2.5 text-base md:text-sm focus:border-gold focus:outline-none bg-slate-50/50"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-xs font-bold text-navy-light uppercase tracking-wider font-mono">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 077 123 4567"
                          className="w-full rounded border border-slate-300 px-4 py-2.5 text-base md:text-sm focus:border-gold focus:outline-none bg-slate-50/50"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email */}
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-bold text-navy-light uppercase tracking-wider font-mono">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="w-full rounded border border-slate-300 px-4 py-2.5 text-base md:text-sm focus:border-gold focus:outline-none bg-slate-50/50"
                        />
                      </div>

                      {/* Service Category */}
                      <div className="space-y-1">
                        <label htmlFor="service" className="text-xs font-bold text-navy-light uppercase tracking-wider font-mono">
                          Select Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded border border-slate-300 px-4 py-2.5 text-base md:text-sm focus:border-gold focus:outline-none bg-slate-50/50"
                        >
                          <option value="core-cutting">Core Cutting Services</option>
                          <option value="civil-construction">Civil Construction</option>
                          <option value="mep-solutions">Mechanical, Electrical and Plumbing Solutions</option>
                          <option value="design-consulting">Architectural & Structural Designing</option>
                          <option value="planning-estimating">Planning & Estimating</option>
                          <option value="special-works">Steel, Interior & Timber works</option>
                        </select>
                      </div>

                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs font-bold text-navy-light uppercase tracking-wider font-mono">
                        Describe Your Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please include location details, slab thickness, cutting requirements, or civil engineering scope..."
                        className="w-full rounded border border-slate-300 px-4 py-2.5 text-base md:text-sm focus:border-gold focus:outline-none bg-slate-50/50 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-gold px-8 py-3.5 text-sm font-semibold text-navy-dark shadow transition-all hover:bg-gold-hover hover:scale-[1.01] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Redirecting to WhatsApp...
                          </>
                        ) : (
                          "Submit Inquiry via WhatsApp"
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
