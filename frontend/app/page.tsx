import Link from "next/link";
import {
  MessageCircle,
  Pill,
  Stethoscope,
  AlertTriangle,
  GitCompare,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    href: "/chat",
    icon: MessageCircle,
    light: "bg-blue-50",
    text: "text-blue-700",
    title: "AI Chat",
    description:
      "Ask anything about medicines, symptoms, or health. CuraSense uses Gemini AI with session memory to give context-aware answers.",
  },
  {
    href: "/lookup",
    icon: Pill,
    light: "bg-purple-50",
    text: "text-purple-700",
    title: "Medicine Lookup",
    description:
      "Search any medicine by name and get full enriched details: composition, uses, side effects, warnings, and cost.",
  },
  {
    href: "/recommend",
    icon: Stethoscope,
    light: "bg-teal-50",
    text: "text-teal-700",
    title: "Symptom Advisor",
    description:
      "Describe your symptoms and receive ranked medicine recommendations with pros, cons, and safety notes.",
  },
  {
    href: "/interaction",
    icon: AlertTriangle,
    light: "bg-amber-50",
    text: "text-amber-700",
    title: "Drug Interaction",
    description:
      "Enter two medicine names to get an AI-powered interaction risk assessment — Low, Moderate, or High.",
  },
  {
    href: "/compare",
    icon: GitCompare,
    light: "bg-rose-50",
    text: "text-rose-700",
    title: "Compare Medicines",
    description:
      "Side-by-side comparison of ingredients, dosage, price, and safety scores for any two medicines.",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          Powered by Gemini 2.5 Flash
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-3 leading-tight">
          Medicine Intelligence,
          <br />
          <span className="text-blue-600">Reimagined with AI</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          CuraSense brings together RAG-powered medicine lookup, AI-driven recommendations,
          drug interaction analysis, and conversational health assistance — all in one place.
        </p>
        <p className="mt-3 text-xs text-amber-600 font-medium bg-amber-50 inline-block px-3 py-1.5 rounded-lg">
          For informational purposes only. Always consult a licensed healthcare professional.
        </p>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ href, icon: Icon, light, text, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            <div className={`inline-flex items-center justify-center w-10 h-10 ${light} rounded-xl mb-3`}>
              <Icon className={`${text}`} size={20} />
            </div>
            <h2 className="text-base font-semibold text-slate-800 mb-1.5">{title}</h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>
            <div className={`flex items-center gap-1 text-xs font-semibold ${text}`}>
              Get started{" "}
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
