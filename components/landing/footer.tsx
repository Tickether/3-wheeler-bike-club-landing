import Image from "next/image";
import { useRouter } from "next/navigation";


export function Footer() {

    const router = useRouter()
    
    return (
        <div className="flex flex-col w-full gap-5 items-center justify-center pb-16 ">
            <div>
                <Image className="rounded-2xl max-md:rounded-xl max-md:w-10 max-md:h-10" src={"/icons/logo.jpg"} alt="logo" width={60} height={60} />
            </div>
            <div className="flex flex-col items-center">
                    <p className="text-[11px]">Want to drive-to-own a 3-Wheeler?</p>
                    <span className="text-xs text-yellow-500 font-bold underline" onClick={() => router.push("https://member.3wb.club")}>Become a member</span>
                </div>
            <div className="flex flex-row gap-5 items-center justify-center">
                <a href="https://x.com/3wbClub" target="_blank" rel="noopener noreferrer">
                    <Image className="max-md:w-5 max-md:h-5" src="/socials/x.svg" alt="x" width={30} height={30} />
                </a>
                <a href="https://t.me/threeWB" target="_blank" rel="noopener noreferrer">
                    <Image className="max-md:w-5 max-md:h-5" src="/socials/telegram.svg" alt="telegram" width={30} height={30} />
                </a>
                <a href="https://www.warpcast.com/3wbclub/" target="_blank" rel="noopener noreferrer">
                    <Image className="max-md:w-4 max-md:h-4" src="/socials/farcaster.png" alt="farcaster" width={25} height={25} />
                </a>
            </div>
            <div className="flex flex-row gap-5 text-xs max-md:text-[8px]">
                <p>{"Blog"}</p>
                <p>{"Careers"}</p>
                <p>{"Press"}</p>  
                <p>{"Privacy Policy"}</p>
                <p>{"Terms of Service"}</p>
            </div>
            <p className="text-xs max-md:text-[8px]">{"© 2025 3WB LABS INC. <> 3WB GHANA LTD. All rights reserved."}</p>
        </div>
    );
}