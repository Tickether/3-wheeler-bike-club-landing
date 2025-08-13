import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";
import { Landmark, Receipt } from "lucide-react";

export function Hero() {

    const router = useRouter()
    
    return (
        <div className="flex flex-col w-full mb-36 gap-14 max-md:gap-12 items-center justify-center">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-7xl max-md:text-5xl max-md:tracking-tight max-sm:text-3xl font-semibold tracking-wider">The Future of</h1>
                <h1 className="text-7xl max-md:text-5xl max-md:tracking-tight max-sm:text-3xl font-semibold tracking-wider">Urban Mobility</h1>
            </div>
            <div className="max-w-2xl max-sm:w-60 text-center">
                <p className="text-base max-md:text-sm max-sm:text-xs">Giving 3-Wheeler drivers the keys to ownership, and investors access to fractionalized opportunities to earn steady returns.</p>
            </div>
            <div className="flex gap-6 flex-col">
                <Button className="rounded-full px-12 py-7 max-sm:px-8 max-sm:py-6 border-grey-500" variant="default" onClick={() => router.push("https://finance.3wb.club")}>
                    <div className="flex">
                        <Receipt />
                        <Landmark />
                    </div>
                    Finance a 3-Wheeler
                </Button>
            </div>
            <div className="absolute inset-0 flex justify-center items-center z-[-1] opacity-50 max-sm:mt-60">
                <Image className="max-2xl:w-5/6 max-2xl:h-5/6" src="/images/kekeHero.svg" alt="Keke Hero" width={800} height={800} />
            </div>
        </div>
    );
}
