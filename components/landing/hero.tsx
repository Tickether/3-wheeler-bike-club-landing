import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function Hero() {

    const router = useRouter()
    
    return (
        <div className="flex flex-col w-full mb-36 gap-20 max-md:gap-12 items-center justify-center">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-7xl max-md:text-5xl max-md:tracking-tight max-sm:text-3xl font-semibold tracking-wider">The Future of</h1>
                <h1 className="text-7xl max-md:text-5xl max-md:tracking-tight max-sm:text-3xl font-semibold tracking-wider">Urban Mobility</h1>
            </div>
            <div className="max-w-2xl max-sm:w-60 text-center">
                <p className="text-base max-md:text-sm max-sm:text-xs">Giving 3-Wheeler drivers the keys to ownership, and investors access to fractionalized opportunities to earn steady returns.</p>
            </div>
            <div className="flex gap-6 max-md:flex-col">
                <Button className="rounded-full px-12 py-7 max-sm:px-8 max-sm:py-6" onClick={() => router.push("https://member.3wb.club")}>Drive a 3-Wheeler</Button>
                <Button className="rounded-full px-12 py-7 max-sm:px-8 max-sm:py-6 border-yellow-500" variant="outline" onClick={() => router.push("https://mini.3wb.club")}>Finance a 3-Wheeler</Button>
            </div>
        </div>
    );
}
