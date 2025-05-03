import { BookOpenIcon, Contact, FileQuestion, Home } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";


export function Header() {
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
            <div className="flex gap-14">
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'home' }}>
                        <p>Home</p>
                    </Link>
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'services' }}>
                        <p>Our Services</p>
                    </Link>
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'about' }}>
                        <p>About Us</p>
                    </Link>                   
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'faqs' }}>
                        <p>FAQs</p>
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