"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ExternalLink, ChevronDown } from "lucide-react";

const CONTACT_INFO = [
    {
        icon: Mail,
        label: "Email",
        value: "support@email.com",
        href: "mailto:support@email.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 XXXXX XXXXX",
        href: "tel:+91XXXXXXXXXX"
    }
];

const OFFICE_HOURS = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Sunday", hours: "Closed" }
];

const FAQ_ITEMS = [
    {
        question: "How accurate are predictions?",
        answer: "Our model is 92% accurate compared to current market listings."
    },
    {
        question: "Which cities are supported?",
        answer: "Currently supporting Mumbai, Delhi, Bangalore, Kolkata, Chennai, Hyderabad."
    },
    {
        question: "How is the price calculated?",
        answer: "Based on location trends, amenities, and room type."
    }
];

export function Contact() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <section className="min-h-[800px] bg-white dark:bg-slate-900 pt-10 pb-20 px-4 md:px-6 transition-colors">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                        Have questions about our AI pricing predictions? We&apos;re here to help.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        {CONTACT_INFO.map((contact, i) => (
                            <a
                                key={i}
                                href={contact.href}
                                className="block bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:border-rose-200 dark:hover:border-rose-800 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <contact.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{contact.label}</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-rose-500 transition-colors">
                                            {contact.value}
                                        </p>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-rose-400 transition-colors" />
                                </div>
                            </a>
                        ))}

                        {/* Location Card */}
                        <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">India</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        Serving all major cities across the country
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Office Hours Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 border border-rose-100 dark:border-slate-700 rounded-2xl p-6 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Support Hours</h3>
                            </div>
                            
                            <div className="space-y-4">
                                {OFFICE_HOURS.map((schedule, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center py-3 border-b border-rose-100 dark:border-slate-600 last:border-0"
                                    >
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{schedule.day}</span>
                                        <span className={`text-sm ${schedule.hours === "Closed" ? "text-gray-400 dark:text-gray-500" : "text-gray-600 dark:text-gray-400"}`}>
                                            {schedule.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-white/50 dark:bg-slate-700/50 rounded-xl">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-bold">Quick Tip:</span> For fastest response,
                                    email us with your query and we&apos;ll get back to you within 24 hours.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8"
                >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                        Common Questions?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 text-center">
                        Click on a question to see the answer.
                    </p>
                    <div className="space-y-3 max-w-2xl mx-auto">
                        {FAQ_ITEMS.map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
                                >
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform ${
                                            expandedFaq === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {expandedFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 pb-4 pt-0">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 bg-rose-50 dark:bg-rose-900/20 rounded-lg p-3 border-l-4 border-rose-500">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
