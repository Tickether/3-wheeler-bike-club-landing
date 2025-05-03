import { BookOpenIcon, Contact, FileQuestion, Home } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";


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
                <div className="flex gap-1 items-center">
                    <p>Home</p>
                </div>
                <div className="flex gap-1 items-center">
                    <p>Our Services</p>
                </div>
                <div className="flex gap-1 items-center">
                    <p>About Us</p>
                </div>
                <div className="flex gap-1 items-center">
                    <p>FAQs</p>
                </div>
                <div></div>
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