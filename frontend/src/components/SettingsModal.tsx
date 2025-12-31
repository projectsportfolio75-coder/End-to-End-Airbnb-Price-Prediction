"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
    }, []);

    if (!isOpen) return null;

    const themeOptions = [
        { value: 'light', label: 'Light', icon: Sun },
        { value: 'dark', label: 'Dark', icon: Moon },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-sm z-[70] mx-auto"
                    >
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-slate-700">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Settings</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="mb-4">
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Appearance
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {mounted && themeOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => setTheme(option.value)}
                                                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                                                    theme === option.value
                                                        ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                                                        : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                                                }`}
                                            >
                                                <option.icon className={`w-6 h-6 ${
                                                    theme === option.value
                                                        ? 'text-rose-500'
                                                        : 'text-gray-400 dark:text-gray-500'
                                                }`} />
                                                <span className={`text-sm font-medium ${
                                                    theme === option.value
                                                        ? 'text-rose-600 dark:text-rose-400'
                                                        : 'text-gray-600 dark:text-gray-400'
                                                }`}>
                                                    {option.label}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
                                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                                        Dark mode uses a Midnight Blue/Slate palette for better readability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
