"use client";

import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { API_URL } from "@/utils/config";
import { PredictionRecord } from "./PredictionHistoryModal";

const CITIES = ["Mumbai", "Delhi", "Bangalore", "Goa", "Jaipur", "Hyderabad", "Chennai", "Kolkata"];
const PROPERTY_TYPES = ["Apartment", "Villa", "Bungalow", "Studio", "Heritage Haveli", "Beach House"];

// Helper function to save prediction to localStorage
const savePredictionToHistory = (city: string, propertyType: string, guests: number, price: number) => {
    const newRecord: PredictionRecord = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
        city,
        propertyType,
        guests,
        price,
        timestamp: Date.now(),
    };

    try {
        const stored = localStorage.getItem('prediction_history');
        let history: PredictionRecord[] = stored ? JSON.parse(stored) : [];
        
        // Add new record at the beginning and keep only last 5
        history = [newRecord, ...history].slice(0, 5);
        
        localStorage.setItem('prediction_history', JSON.stringify(history));
    } catch {
        // If localStorage fails, just skip saving
        console.error('Failed to save prediction to history');
    }
};

export function SearchForm({ onPredict }: { onPredict: (price: number) => void }) {
    const [city, setCity] = useState("Mumbai");
    const [propertyType, setPropertyType] = useState("Apartment");
    const [guests, setGuests] = useState(2);
    const [loading, setLoading] = useState(false);

    const handlePredict = async () => {
        setLoading(true);
        // Simulate API
        const startTime = Date.now();
        try {
            const res = await fetch(`${API_URL}/predict`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    city,
                    property_type: propertyType,
                    accommodates: guests,
                    // defaults
                    room_type: "Entire home/apt",
                    bedrooms: 1,
                    beds: 1,
                    bathrooms: 1,
                    amenities: ""
                }),
            });
            const data = await res.json();
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime < 800) await new Promise(r => setTimeout(r, 800 - elapsedTime));

            if (data.success) {
                // Save to localStorage before calling onPredict
                savePredictionToHistory(city, propertyType, guests, data.predicted_price);
                onPredict(data.predicted_price);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="pt-4 pb-10 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 sticky top-16 md:top-20 z-40 transition-all">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">

                {/* Desktop Pill Layout */}
                <div className="hidden md:flex w-full max-w-4xl bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-600 shadow-airbnb items-center p-0 relative overflow-visible h-[66px]">
                    {/* Where */}
                    <div className="flex-1 px-8 py-3 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full cursor-pointer relative group border-r border-gray-200 dark:border-slate-600">
                        <label className="block text-xs font-bold text-black dark:text-white tracking-wider">Where</label>
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full bg-transparent text-sm text-gray-600 dark:text-gray-300 font-medium focus:outline-none appearance-none cursor-pointer"
                        >
                            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    {/* Type */}
                    <div className="flex-1 px-8 py-3 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full cursor-pointer relative group border-r border-gray-200 dark:border-slate-600">
                        <label className="block text-xs font-bold text-black dark:text-white tracking-wider">Property Type</label>
                        <select
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="w-full bg-transparent text-sm text-gray-600 dark:text-gray-300 font-medium focus:outline-none appearance-none cursor-pointer"
                        >
                            {PROPERTY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    {/* Guests */}
                    <div className="flex-0.8 px-8 py-3 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full cursor-pointer relative group">
                        <label className="block text-xs font-bold text-black dark:text-white tracking-wider">GUESTS</label>
                        <div className="text-sm text-gray-600 dark:text-gray-300 font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                            <input
                                type="number"
                                min={1}
                                max={16}
                                value={guests}
                                onChange={(e) => setGuests(parseInt(e.target.value))}
                                className="w-12 bg-transparent focus:outline-none dark:text-gray-300"
                            /> guests
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="pr-2 pl-2">
                        <button
                            onClick={handlePredict}
                            disabled={loading}
                            className="bg-[#FF385C] hover:bg-[#D90B3E] text-white rounded-full h-12 px-6 flex items-center gap-2 transition-all font-bold text-sm shadow-md"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5 stroke-[2.5px]" />}
                            {loading ? "Calculating..." : "Predict"}
                        </button>
                    </div>
                </div>

                {/* Mobile Stacked Layout */}
                <div className="md:hidden w-full max-w-md space-y-3">
                    {/* Where */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-600 p-4">
                        <label className="block text-xs font-bold text-black dark:text-white tracking-wider mb-2">Where</label>
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full bg-transparent text-sm text-gray-600 dark:text-gray-300 font-medium focus:outline-none appearance-none cursor-pointer"
                        >
                            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    {/* Type */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-600 p-4">
                        <label className="block text-xs font-bold text-black dark:text-white tracking-wider mb-2">Property Type</label>
                        <select
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="w-full bg-transparent text-sm text-gray-600 dark:text-gray-300 font-medium focus:outline-none appearance-none cursor-pointer"
                        >
                            {PROPERTY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    {/* Guests */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-600 p-4">
                        <label className="block text-xs font-bold text-black dark:text-white tracking-wider mb-2">GUESTS</label>
                        <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                            <input
                                type="number"
                                min={1}
                                max={16}
                                value={guests}
                                onChange={(e) => setGuests(parseInt(e.target.value))}
                                className="w-16 bg-transparent focus:outline-none dark:text-gray-300"
                            /> guests
                        </div>
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={handlePredict}
                        disabled={loading}
                        className="w-full bg-[#FF385C] hover:bg-[#D90B3E] text-white rounded-xl h-14 flex items-center justify-center gap-2 transition-all font-bold text-sm shadow-md"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5 stroke-[2.5px]" />}
                        {loading ? "Calculating..." : "Predict Price"}
                    </button>
                </div>
            </div>
        </div>
    )
}
