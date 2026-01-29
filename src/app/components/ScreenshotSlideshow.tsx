'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function ScreenshotSlideshow() {
    const images = [
        '/app-dark-lookup.jpg',
        '/app-dark-history.jpg'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Mo35 App Screen ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}
        </>
    );
}
