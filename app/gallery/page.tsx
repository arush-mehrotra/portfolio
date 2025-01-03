'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpg';

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery"},
  ];  

export default function Gallery() {
    return (
      <div className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-16 py-8">
        <nav className="flex items-end justify-between mb-16">
          <Link href="/" className="text-2xl font-light tracking-tight hover:text-gray-600 transition-colors inter">
            Arush Mehrotra
          </Link>
          <div className="flex items-end gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-light hover:text-gray-600 transition-colors inter"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image1} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image5} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image6} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image2} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image3} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image7} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image8} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={image4} alt="" />
                </div>
            </div>
        </div>
    </div>
    );
}