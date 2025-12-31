"use client";
import { motion } from "framer-motion";
import { Brain, MapPin, TrendingUp, BarChart3, Sparkles } from "lucide-react";

const FEATURES = [
    {
        icon: Brain,
        title: "Smart Predictions",
        desc: "Advanced AI models trained specifically on the Indian real estate market."
    },
    {
        icon: MapPin,
        title: "Major Cities Covered",
        desc: "Live support for Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Kolkata."
    },
    {
        icon: TrendingUp,
        title: "Real-Time Insights",
        desc: "Instant price estimates based on current location trends and demand."
    },
    {
        icon: BarChart3,
        title: "Data-Backed Accuracy",
        desc: "Analyzes thousands of listings to ensure you get the fair market price."
    }
];

const TEAM_STATS = [
    { value: "2000+", label: "Properties Analyzed" },
    { value: "6", label: "Major Cities" },
    { value: "98%", label: "High Accuracy" },
    { value: "24/7", label: "Instant Access" }
];

export function About() {
    return (
        <section className="min-h-[800px] bg-white dark:bg-slate-900 pt-10 pb-20 px-4 md:px-6 transition-colors">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-rose-200 dark:shadow-rose-900/30">
                        <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
                        Intelligent Real Estate Analytics
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Empowering hosts and property owners with instant, data-driven price predictions tailored specifically for the Indian market.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {TEAM_STATS.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-rose-100 dark:hover:border-rose-900"
                        >
                            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 md:p-12 mb-16 border border-rose-100 dark:border-slate-700 shadow-sm"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg text-center md:text-left">
                        We believe that every property owner deserves clarity.
                        Our platform removes the guesswork from pricing by analyzing location,
                        amenities, and market demand to provide you with an accurate
                        estimate in <strong className="dark:text-white">Indian Rupees (₹)</strong>. Whether you are listing a cozy apartment
                        in Bangalore or a heritage home in Kolkata, we help you find the perfect price.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">
                        Why Choose Us
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {FEATURES.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 + i * 0.05 }}
                                className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group cursor-default"
                            >
                                <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-rose-500 transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
