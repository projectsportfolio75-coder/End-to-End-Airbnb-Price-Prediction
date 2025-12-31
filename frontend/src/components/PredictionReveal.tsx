"use client";
import { motion } from "framer-motion";
import { RefreshCcw, Star, CheckCircle } from "lucide-react";

export function PredictionReveal({ price, onReset }: { price: number, onReset: () => void }) {
    return (
        <section className="h-[500px] md:h-[600px] flex items-center justify-center relative overflow-hidden px-4">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-white dark:bg-slate-900 transition-colors">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-[100px] animate-pulse" />
            </div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                className="relative z-10 w-full max-w-lg"
            >
                {/* The Golden Ticket Card */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 shadow-[0_20px_60px_-15px_rgba(255,56,92,0.3)] rounded-[32px] md:rounded-[40px] p-6 md:p-12 text-center relative overflow-hidden group">

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 pointer-events-none" />

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold mb-6 border border-green-200 dark:border-green-800">
                            <CheckCircle className="w-4 h-4" /> High Confidence
                        </div>

                        <h3 className="text-gray-400 dark:text-gray-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">Optimal Nightly Rate</h3>

                        <div className="flex items-center justify-center gap-1 mb-6">
                            <span className="text-3xl md:text-4xl text-gray-400 dark:text-gray-500 font-light translate-y-[-8px]">₹</span>
                            <span className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 dark:from-white to-gray-600 dark:to-gray-400 tracking-tighter">
                                {price.toLocaleString('en-IN')}
                            </span>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mb-8 max-w-xs mx-auto leading-relaxed">
                            Based on your location, amenities, and current market demand.
                        </p>

                        <button
                            onClick={onReset}
                            className="inline-flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-rose-500 dark:hover:text-rose-400 transition-colors text-sm font-semibold tracking-wide uppercase hover:underline"
                        >
                            <RefreshCcw className="w-4 h-4" /> Recalculate
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
