import { BookOpenIcon, Contact, FileQuestion, Home } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'services', 'about', 'faqs'];
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If section is in viewport (with some buffer for better UX)
                    if (rect.top >= -100 && rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex w-full h-20 justify-between items-center px-4">
            {/** left */}
            <div>
                <Image
                    src="/icons/512x512.png"
                    alt=""
                    width={60}
                    height={60}
                />
            </div>

            {/** middle */}
            <div className="flex gap-14 max-md:hidden">
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'home' }}>
                        <p className={`hover:underline hover:decoration-4 hover:underline-offset-8 hover:decoration-white ${activeSection === 'home' ? 'underline decoration-4 underline-offset-8 decoration-yellow-500' : ''}`}>Home</p>
                    </Link>
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'services' }}>
                        <p className={`hover:underline hover:decoration-4 hover:underline-offset-8 hover:decoration-white ${activeSection === 'services' ? 'underline decoration-4 underline-offset-8 decoration-yellow-500' : ''}`}>Our Services</p>
                    </Link>
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'about' }}>
                        <p className={`hover:underline hover:decoration-4 hover:underline-offset-8 hover:decoration-white ${activeSection === 'about' ? 'underline decoration-4 underline-offset-8 decoration-yellow-500' : ''}`}>About Us</p>
                    </Link>                   
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'faqs' }}>
                        <p className={`hover:underline hover:decoration-4 hover:underline-offset-8 hover:decoration-white ${activeSection === 'faqs' ? 'underline decoration-4 underline-offset-8 decoration-yellow-500' : ''}`}>FAQs</p>
                    </Link>
                </div>
            </div>

            {/** right */}
            <div className="flex gap-5">
                <Button className="rounded-full">
                    <Link href={{ hash: 'footer' }}>
                        <p>Contact us</p>
                    </Link>
                </Button>
            </div>
        </div>
    );
}