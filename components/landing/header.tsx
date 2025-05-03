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
                    <Link href={{ hash: 'home' }} scroll={false}>
                        <p>Home</p>
                    </Link>
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'services' }} scroll={false}>
                        <p>Our Services</p>
                    </Link>
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'about' }} scroll={false}>
                        <p>About Us</p>
                    </Link>                   
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <Link href={{ hash: 'faqs' }} scroll={false}>
                        <p>FAQs</p>
                    </Link>
                </div>
            </div>


            {/** right */}
            <div className="flex gap-5">
                <Button className="rounded-full">
                    <p>Contact us</p>
                </Button>
            </div>
        </div>
    );
}