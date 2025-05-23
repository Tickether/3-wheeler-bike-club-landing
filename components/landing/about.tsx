import Image from "next/image";

export function About() {
    return (
        <div className="flex max-sm:flex-col w-full mb-36 h-full items-center justify-center gap-20 max-md:gap-10">
                <div className="flex flex-col gap-4 w-2/5 max-md:w-full max-md:h-2/5 items-center justify-center">
                    <div className="flex flex-col w-full gap-4">
                        <h1 className="text-4xl max-md:text-xl font-semibold text-start max-sm:text-center">About Us</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-base max-xl:text-xs max-lg:text-[10px] max-sm:text-center">{"3 Wheeler Bike Club is a Membership Club for 3-Wheeler(TukTuk/Pragia/Keke) Bikers built on the pillars of Ownership, Community & Governance."}</p>
                        <p className="text-base max-xl:text-xs max-lg:text-[10px] max-sm:text-center">{"A community driven platform for 3-wheelers bikers with membership payment & credit score features, and a P2P finance feature for buying or adding bikes to the platform with hire purchase agreements."}</p>
                    </div>
                </div>
                <div className="flex w-2/5 max-md:w-full max-md:h-2/5 items-center justify-center max-lg:w-96 max-lg:h-96 max-sm:w-72 max-sm:h-72">
                    <Image src="/images/kekeAbout.svg" alt="Keke About" width={700} height={700} />
                </div>
        </div>
    );
}
