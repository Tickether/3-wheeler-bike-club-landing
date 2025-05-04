import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

export function FAQs() {
    return (
        <div className="flex max-sm:flex-col-reverse w-full mb-36 h-full items-center justify-center gap-20">
            <div className="flex w-2/5 max-md:w-full max-md:h-2/5 items-center justify-center max-lg:w-96 max-lg:h-96 max-sm:w-64 max-sm:h-64">
                <Image src="/images/kekeFAQs.svg" alt="Keke FAQs" width={700} height={700} />
            </div>
            <div className="flex flex-col gap-6 max-md:gap-2 w-2/5 max-md:w-full max-md:h-2/5 items-center justify-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl max-xl:text-xl max-lg:text-base font-semibold max-sm:text-center">Frequently Asked Questions</h1>
                    <p className="text-sm max-xl:text-xs max-lg:text-[10px] max-sm:text-center">Here are some of the most common inquiries we receive to help you make informed decisions with confidence. If you need more details, feel free to reach out!</p>
                </div>
                <div className="w-full">
                    <Accordion type="single" collapsible className="flex flex-col w-full gap-1">
                        <AccordionItem className="border-none" value="item-1">
                            <AccordionTrigger className="h-20 max-sm:h-14 text-sm max-lg:text-xs max-sm:text-[9px] bg-[#494848] px-2 py-2 max-sm:py-1 rounded-xl border-l-4 border-l-yellow-500">What is the exact structure of the investment, and how are returns calculated?</AccordionTrigger>
                            <AccordionContent className="px-2 max-sm:text-[8px]">
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="border-none" value="item-2">
                            <AccordionTrigger className="h-20 max-sm:h-14 text-sm max-lg:text-xs max-sm:text-[9px] bg-[#494848] px-2 py-2 max-sm:py-1 rounded-xl border-l-4 border-l-yellow-500">What are the risks involved, and what happens if a driver defaults on their hire purchase agreement?</AccordionTrigger>
                            <AccordionContent className="px-2 max-sm:text-[8px]">
                            Yes. It comes with default styles that matches the other
                            components  aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="border-none" value="item-3">
                            <AccordionTrigger className="h-20 max-sm:h-14 text-sm max-lg:text-xs max-sm:text-[9px] bg-[#494848] px-2 py-2 max-sm:py-1 rounded-xl border-l-4 border-l-yellow-500">Who manages the bikes and drivers, and what’s the vetting process for drivers on the platform?</AccordionTrigger>
                            <AccordionContent className="px-2 max-sm:text-[8px]">
                            Yes. Its animated by default, but you can disable it if you
                            prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
