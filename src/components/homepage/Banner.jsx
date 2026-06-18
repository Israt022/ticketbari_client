"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';

const Banner = () => {
    const banners = [
        {
            id: 1,
            image: "/travelBanner/b1.jpg",
            title: "Your Journey Starts Here",
            description:
            "Book bus, train, launch and flight tickets from one trusted platform.",
            buttonText: "Explore Tickets",
        },
        {
            id: 2,
            image: "/travelBanner/b2.jpg",
            title: "Travel Smarter Across Bangladesh",
            description:
            "Compare routes, schedules and fares for buses and trains in seconds.",
            buttonText: "Find Routes",
        },
        {
            id: 3,
            image: "/travelBanner/b3.jpg",
            title: "Discover the World",
            description:
            "Find affordable flights and plan unforgettable journeys around the globe.",
            buttonText: "Book a Flight",
        },
        {
            id: 4,
            image: "/travelBanner/b4.jpg",
            title: "Comfortable Bus Travel",
            description:
            "Choose premium coaches, select your seat and travel with confidence.",
            buttonText: "Book Bus Tickets",
        },
        {
            id: 5,
            image: "/travelBanner/b5.jpg",
            title: "Adventure Awaits You",
            description:
            "From city breaks to international tours, book your next destination today.",
            buttonText: "Start Exploring",
        },
    ];

    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ dynamicBullets: true }}
                autoplay={{
                    // delay: 3000,
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={2000}   
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative h-[70vh] min-h-[520px] w-full">

                            {/* Background Image */}
                            <Image
                            src={banner.image}
                            fill
                            alt={banner.title}
                            className="object-cover scale-105"
                            priority={banner.id === 1}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />

                            {/* Content */}
                            <div className="absolute inset-0 z-20 flex items-center">
                            <div className="container mx-auto px-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                                {/* LEFT CONTENT */}
                                <div className="max-w-2xl text-white">

                                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                                    Trusted Ticket Booking Platform
                                    </span>

                                    <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                                    {banner.title}
                                    </h1>

                                    <p className="mt-5 text-base md:text-lg text-gray-200">
                                    {banner.description}
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-4">
                                    <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                                        {banner.buttonText}
                                    </button>

                                    <button className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black">
                                        Learn More
                                    </button>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-10 flex flex-wrap gap-8">

                                    <div>
                                        <h3 className="text-2xl font-bold">50K+</h3>
                                        <p className="text-gray-300">Travelers</p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold">500+</h3>
                                        <p className="text-gray-300">Routes</p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold">24/7</h3>
                                        <p className="text-gray-300">Support</p>
                                    </div>

                                    </div>
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="hidden lg:flex justify-end">
                                    <div className="relative w-[380px]">

                                    {/* Main Glass Card */}
                                    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl shadow-2xl">

                                        <h3 className="text-2xl font-bold">
                                        Travel With Confidence
                                        </h3>

                                        <div className="mt-6 grid grid-cols-2 gap-4">

                                        <div className="rounded-xl bg-white/10 p-4 text-center">
                                            <h4 className="text-2xl font-bold">500+</h4>
                                            <p className="text-sm text-gray-300">
                                            Routes
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-white/10 p-4 text-center">
                                            <h4 className="text-2xl font-bold">50K+</h4>
                                            <p className="text-sm text-gray-300">
                                            Travelers
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-white/10 p-4 text-center">
                                            <h4 className="text-2xl font-bold">100+</h4>
                                            <p className="text-sm text-gray-300">
                                            Partners
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-white/10 p-4 text-center">
                                            <h4 className="text-2xl font-bold">24/7</h4>
                                            <p className="text-sm text-gray-300">
                                            Support
                                            </p>
                                        </div>

                                        </div>
                                    </div>

                                    {/* Floating Card 1 */}
                                    <div className="absolute -top-5 -left-8 rounded-xl bg-white px-4 py-3 text-black shadow-xl">
                                        ✈️ Flight Deals
                                    </div>

                                    {/* Floating Card 2 */}
                                    <div className="absolute -bottom-5 -right-8 rounded-xl bg-blue-600 px-4 py-3 text-white shadow-xl">
                                        🚌 Bus Booking
                                    </div>

                                    </div>
                                </div>

                                </div>
                            </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;