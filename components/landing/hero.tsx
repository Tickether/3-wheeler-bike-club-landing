import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function Hero() {

    const router = useRouter()
    
    return (
        <div className="flex flex-col w-full mb-36 gap-20 max-md:gap-14 items-center justify-center">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-8xl max-md:text-6xl max-md:tracking-tight max-sm:text-4xl font-semibold tracking-wider">The Future of</h1>
                <h1 className="text-8xl max-md:text-6xl max-md:tracking-tight max-sm:text-4xl font-semibold tracking-wider">Urban Mobility</h1>
            </div>
            <div className="max-w-5xl text-center">
                <p className="text-xl max-md:text-base max-sm:text-sm">Giving 3-Wheeler drivers the keys to ownership, and investors access to fractionalized opportunities to earn steady returns.</p>
            </div>
            <div className="flex gap-6 max-md:flex-col">
                <Button className="rounded-full px-12 py-7" onClick={() => router.push("https://member.3wb.club")}>Drive a 3-Wheeler</Button>
                <Button className="rounded-full px-12 py-7 border-yellow-500" variant="outline" onClick={() => router.push("https://mini.3wb.club")}>Finance a 3-Wheeler</Button>
            </div>
        </div>
    );
}
