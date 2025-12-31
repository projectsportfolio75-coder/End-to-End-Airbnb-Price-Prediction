"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Clock, MapPin, Home } from "lucide-react";

export interface PredictionRecord {
    id: string;
    city: string;
    propertyType: string;
    guests: number;
    price: number;
    timestamp: number;
}

interface PredictionHistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    history: PredictionRecord[];
    onClearHistory: () => void;
}

export function PredictionHistoryModal({ isOpen, onClose, history, onClearHistory }: PredictionHistoryModalProps) {
    if (!isOpen) return null;

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
                        className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md z-[70] mx-auto"
                    >
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-slate-700">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">My Predictions</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-4 max-h-[60vh] overflow-y-auto">
                                {history.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Clock className="w-12 h-12 text-gray-300 dark:text-slate-600 mx-auto mb-4" />
                                        <p className="text-gray-500 dark:text-gray-400">No predictions yet</p>
                                        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
                                            Your prediction history will appear here
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {history.map((record) => (
                                            <motion.div
                                                key={record.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4 border border-gray-100 dark:border-slate-600"
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <MapPin className="w-4 h-4 text-rose-500" />
                                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                                {record.city}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                            <Home className="w-3 h-3" />
                                                            <span>{record.propertyType}</span>
                                                            <span>•</span>
                                                            <span>{record.guests} guests</span>
                                                        </div>
                                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                                                            {new Date(record.timestamp).toLocaleDateString('en-IN', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                                                            ₹{record.price.toLocaleString('en-IN')}
                                                        </span>
                                                        <p className="text-xs text-gray-400 dark:text-gray-500">per night</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {history.length > 0 && (
                                <div className="p-4 border-t border-gray-100 dark:border-slate-700">
                                    <button
                                        onClick={onClearHistory}
                                        className="w-full flex items-center justify-center gap-2 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors font-medium"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Clear History
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
