import { Car } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <div className="flex max-md:flex-col w-full mb-36 h-full items-center justify-center gap-20 max-md:gap-10">
                <div className="flex flex-col gap-4 w-2/5 max-md:w-full max-md:h-2/5 items-center justify-center">
                    <h1 className="text-4xl max-md:text-xl font-semibold">About Us</h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-lg max-md:text-xs">{"3 Wheeler Bike Club is a Membership Club for 3-Wheeler(TukTuk/Pragia/Keke) Bikers built on the pillars of Ownership, Community & Governance."}</p>
                        <p className="text-lg max-md:text-xs">{"A community driven platform for 3-wheelers bikers with membership payment & credit score features, and a P2P finance feature for buying or adding bikes to the platform with hire purchase agreements."}</p>
                    </div>
                </div>
                <div className="flex w-2/5 max-md:w-full max-md:h-2/5 items-center justify-center">
                    <Car className="w-1/2 h-1/2" />
                </div>
        </div>
    );
}
