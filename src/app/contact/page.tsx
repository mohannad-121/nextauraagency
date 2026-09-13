"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [division, setDivision] = useState<string>("ai");
  const [budget, setBudget] = useState<string>("$15k - $35k");
  const [timeline, setTimeline] = useState<string>("2-4 Months");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });

  const divisions = [
    { id: "ai", label: "NextAura AI" },
    { id: "studios", label: "NextAura Studios" },
    { id: "fit", label: "NextAura Fit" },
    { id: "unsure", label: "Not Sure Yet" },
  ];

  const budgetTiers = ["$5k - $15k", "$15k - $35k", "$35k - $75k", "$75k+"];
  const timelines = ["Urgent (1-2 Mos)", "Standard (2-4 Mos)", "Flexible"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#C9A45C", "#E5C77A", "#B99A5D"],
      });
    } catch {
      // Fallback if confetti fails
    }
  };

  return (
    <main className="relative bg-[#050505] text-[#F4F0E7] pt-32 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="INITIATE DISCOVERY"
          title="START A"
          serifTitle="PROJECT."
          description="Tell us about your ambition. We will evaluate the technical architecture, project scope, and division fit."
        />

        {formSubmitted ? (
          <div className="mt-16 rounded-3xl border border-[#C9A45C]/40 bg-[#0D0D0D] p-12 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]">
              <Sparkles className="h-8 w-8 text-[#E5C77A]" />
            </div>
            <h2 className="text-3xl font-light text-white uppercase">Inquiry Received.</h2>
            <p className="max-w-lg mx-auto text-sm text-[#8D8D8D] leading-relaxed">
              Thank you, <span className="text-[#E5C77A] font-semibold">{formData.name}</span>. Our technical partners will review your submission for {division.toUpperCase()} and respond within 24 hours.
            </p>
            <div className="pt-4">
              <Button href="/" variant="outline">
                Return to Homepage
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-16 space-y-10">
            {/* Division Selector */}
            <div className="space-y-4">
              <label className="text-xs font-mono text-[#C9A45C] uppercase block">
                01 // INTERESTED DIVISION
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {divisions.map((div) => (
                  <button
                    key={div.id}
                    type="button"
                    onClick={() => setDivision(div.id)}
                    className={`rounded-2xl border p-4 text-xs font-mono tracking-wider uppercase transition-all ${
                      division === div.id
                        ? "border-[#C9A45C] bg-[#C9A45C]/15 text-[#E5C77A]"
                        : "border-white/10 bg-white/5 text-[#8D8D8D] hover:border-white/20"
                    }`}
                  >
                    {div.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#8D8D8D] uppercase block">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Mohannad Al-Kamal"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] p-4 text-sm text-white placeholder-[#8D8D8D]/40 focus:border-[#C9A45C] focus:outline-hidden"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-[#8D8D8D] uppercase block">
                  COMPANY / ORGANIZATION
                </label>
                <input
                  type="text"
                  placeholder="Acme Technology Group"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] p-4 text-sm text-white placeholder-[#8D8D8D]/40 focus:border-[#C9A45C] focus:outline-hidden"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-[#8D8D8D] uppercase block">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] p-4 text-sm text-white placeholder-[#8D8D8D]/40 focus:border-[#C9A45C] focus:outline-hidden"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-[#8D8D8D] uppercase block">
                  PHONE NUMBER (OPTIONAL)
                </label>
                <input
                  type="tel"
                  placeholder="+962 7X XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] p-4 text-sm text-white placeholder-[#8D8D8D]/40 focus:border-[#C9A45C] focus:outline-hidden"
                />
              </div>
            </div>

            {/* Budget Tiers */}
            <div className="space-y-4">
              <label className="text-xs font-mono text-[#C9A45C] uppercase block">
                02 // ESTIMATED BUDGET TIER
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {budgetTiers.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`rounded-2xl border p-4 text-xs font-mono tracking-wider uppercase transition-all ${
                      budget === b
                        ? "border-[#C9A45C] bg-[#C9A45C]/15 text-[#E5C77A]"
                        : "border-white/10 bg-white/5 text-[#8D8D8D] hover:border-white/20"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <label className="text-xs font-mono text-[#C9A45C] uppercase block">
                03 // TARGET TIMELINE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelines.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`rounded-2xl border p-4 text-xs font-mono tracking-wider uppercase transition-all ${
                      timeline === t
                        ? "border-[#C9A45C] bg-[#C9A45C]/15 text-[#E5C77A]"
                        : "border-white/10 bg-white/5 text-[#8D8D8D] hover:border-white/20"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#8D8D8D] uppercase block">
                PROJECT GOALS & DESCRIPTION
              </label>
              <textarea
                rows={5}
                placeholder="Describe what you want to build, key challenges, or specific AI/software requirements..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#0D0D0D] p-4 text-sm text-white placeholder-[#8D8D8D]/40 focus:border-[#C9A45C] focus:outline-hidden resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Submit Inquiry to NextAura
              </Button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
