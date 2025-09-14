import React, { useState } from "react";
import { PageHeader } from "../ui/page-header";
import { EnhancedButton } from "../ui/enhanced-button";
import { EnhancedCard } from "../ui/enhanced-card";

const vehicleTypes = [
    "Sedan",
    "SUV",
    "Bus",
    "Mini Bus",
    "Tempo Traveller",
    // add more as per your vehicle taxonomy
];

const statusOptions = ["pending", "completed", "ongoing", "cancelled"];

export default function NewEnquiryModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [customerPhone, setCustomerPhone] = useState("");
    const [tripStartDate, setTripStartDate] = useState("");
    const [tripEndDate, setTripEndDate] = useState("");
    const [shortTripDesc, setShortTripDesc] = useState("");
    const [numVehicles, setNumVehicles] = useState(1);
    const [numPassengers, setNumPassengers] = useState("");
    const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);
    const [bookingQuotes, setBookingQuotes] = useState({});

    // Optional booking-level fields
    const [customerName, setCustomerName] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [detailedTripDesc, setDetailedTripDesc] = useState("");
    const [agent, setAgent] = useState("");
    const [partner, setPartner] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [driver, setDriver] = useState("");
    const [notes, setNotes] = useState("");
    const [status, setStatus] = useState("pending");

    const toggleVehicleType = (type) => {
        if (selectedVehicleTypes.includes(type)) {
            setSelectedVehicleTypes(selectedVehicleTypes.filter((v) => v !== type));
            // Remove booking quote for this vehicle type
            const newQuotes = { ...bookingQuotes };
            delete newQuotes[type];
            setBookingQuotes(newQuotes);
        } else {
            setSelectedVehicleTypes([...selectedVehicleTypes, type]);
        }
    };

    const onQuoteChange = (type, value) => {
        setBookingQuotes({
            ...bookingQuotes,
            [type]: value,
        });
    };

    const onSubmit = () => {
        // For now just close modal - you can extend to validate and send data
        // Example: validate required fields here...
        onClose();
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <EnhancedCard type="form" className="w-full max-w-3xl max-h-[90vh] overflow-auto p-6">
                <PageHeader title="New Enquiry" subtitle="Create a new customer enquiry" />
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                    {/* Must-have enquiry fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <label className="flex flex-col">
                            Customer Phone *
                            <input
                                type="tel"
                                required
                                value={customerPhone}
                                onChange={(e) => setCustomerPhone(e.target.value)}
                                className="input input-bordered"
                                placeholder="Enter phone number"
                            />
                        </label>
                        <label className="flex flex-col">
                            Trip Start Date *
                            <input
                                type="date"
                                required
                                value={tripStartDate}
                                onChange={(e) => setTripStartDate(e.target.value)}
                                className="input input-bordered"
                            />
                        </label>
                        <label className="flex flex-col">
                            Trip End Date *
                            <input
                                type="date"
                                required
                                value={tripEndDate}
                                onChange={(e) => setTripEndDate(e.target.value)}
                                className="input input-bordered"
                            />
                        </label>
                        <label className="flex flex-col col-span-2">
                            Short Trip Description *
                            <input
                                type="text"
                                required
                                value={shortTripDesc}
                                onChange={(e) => setShortTripDesc(e.target.value)}
                                className="input input-bordered"
                                placeholder="e.g. Delhi - Manali tour"
                            />
                        </label>
                        <label className="flex flex-col">
                            Number of Vehicles *
                            <input
                                type="number"
                                min={1}
                                value={numVehicles}
                                onChange={(e) => setNumVehicles(e.target.value)}
                                className="input input-bordered"
                                placeholder="1"
                                required
                            />
                        </label>
                        <label className="flex flex-col">
                            Number of Passengers *
                            <input
                                type="number"
                                min={1}
                                value={numPassengers}
                                onChange={(e) => setNumPassengers(e.target.value)}
                                className="input input-bordered"
                                placeholder="Enter number of passengers"
                                required
                            />
                        </label>
                    </div>

                    {/* Vehicle Type Multi-select */}
                    <div className="mt-4">
                        <label className="font-semibold">Vehicle Types Required *</label>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {vehicleTypes.map((type) => (
                                <button
                                    type="button"
                                    key={type}
                                    onClick={() => toggleVehicleType(type)}
                                    className={`px-3 py-1 rounded ${selectedVehicleTypes.includes(type)
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Booking Quotes for selected vehicle types */}
                    {selectedVehicleTypes.length > 0 && (
                        <div className="mt-4">
                            <label className="font-semibold">Booking Quotes</label>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                {selectedVehicleTypes.map((type) => (
                                    <label key={type} className="flex flex-col">
                                        {type} Quote
                                        <input
                                            type="number"
                                            min={0}
                                            step="0.01"
                                            placeholder="Enter quote amount"
                                            value={bookingQuotes[type] || ""}
                                            onChange={(e) => onQuoteChange(type, e.target.value)}
                                            className="input input-bordered"
                                            required
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Optional booking-level fields in expandable section */}
                    <details className="mt-6 border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">More Details (Optional)</summary>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            <label className="flex flex-col">
                                Customer Name
                                <input
                                    type="text"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    className="input input-bordered"
                                    placeholder="Full name"
                                />
                            </label>
                            <label className="flex flex-col">
                                Pickup Location
                                <input
                                    type="text"
                                    value={pickupLocation}
                                    onChange={(e) => setPickupLocation(e.target.value)}
                                    className="input input-bordered"
                                    placeholder="Enter pickup location"
                                />
                            </label>
                            <label className="flex flex-col">
                                Pickup Time
                                <input
                                    type="time"
                                    value={pickupTime}
                                    onChange={(e) => setPickupTime(e.target.value)}
                                    className="input input-bordered"
                                />
                            </label>
                            <label className="flex flex-col col-span-2">
                                Detailed Trip Description
                                <textarea
                                    value={detailedTripDesc}
                                    onChange={(e) => setDetailedTripDesc(e.target.value)}
                                    className="input input-bordered resize-y"
                                    rows={3}
                                    placeholder="Full trip details"
                                />
                            </label>
                            <label className="flex flex-col">
                                Agent
                                <input
                                    type="text"
                                    value={agent}
                                    onChange={(e) => setAgent(e.target.value)}
                                    className="input input-bordered"
                                    placeholder="Agent name (optional)"
                                />
                            </label>
                            <label className="flex flex-col">
                                Partner
                                <input
                                    type="text"
                                    value={partner}
                                    onChange={(e) => setPartner(e.target.value)}
                                    className="input input-bordered"
                                    placeholder="Partner name (optional)"
                                />
                            </label>
                            <label className="flex flex-col">
                                Vehicle
                                <input
                                    type="text"
                                    value={vehicle}
                                    onChange={(e) => setVehicle(e.target.value)}
                                    className="input input-bordered"
                                    placeholder="Vehicle detail (optional)"
                                />
                            </label>
                            <label className="flex flex-col">
                                Driver
                                <input
                                    type="text"
                                    value={driver}
                                    onChange={(e) => setDriver(e.target.value)}
                                    className="input input-bordered"
                                    placeholder="Driver detail (optional)"
                                />
                            </label>
                            <label className="flex flex-col col-span-2">
                                Notes
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    className="input input-bordered resize-y"
                                    rows={2}
                                    placeholder="Additional notes"
                                />
                            </label>
                            <label className="flex flex-col">
                                Status
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="input input-bordered"
                                >
                                    {statusOptions.map((opt) => (
                                        <option key={opt} value={opt}>
                                            {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </details>

                    <div className="flex justify-end mt-6 gap-4">
                        <EnhancedButton businessVariant="danger" type="button" onClick={onClose}>
                            Cancel
                        </EnhancedButton>
                        <EnhancedButton businessVariant="primary" type="submit">
                            Save Enquiry
                        </EnhancedButton>
                    </div>
                </form>
            </EnhancedCard>
        </div>
    );
}