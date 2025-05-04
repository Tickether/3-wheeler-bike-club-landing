import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

export function FAQs() {
    return (
        <div className="flex max-md:flex-col-reverse w-full mb-36 h-full items-center justify-center gap-20">
            <div className="flex w-2/5 max-md:w-full max-md:h-2/5 items-center justify-center">
            <Image src="/images/kekeFAQs.svg" alt="Keke FAQs" width={700} height={700} />
            </div>
            <div className="flex flex-col gap-6 max-md:gap-2 w-2/5 max-md:w-full max-md:h-2/5 items-center justify-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl max-md:text-xl font-semibold">Frequently Asked Questions</h1>
                    <p className="text-sm max-md:text-xs">Here are some of the most common inquiries we receive to help you make informed decisions with confidence. If you need more details, feel free to reach out!</p>
                </div>
                <div className="w-full">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg max-md:text-xs">What is the exact structure of the investment, and how are returns calculated?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg max-md:text-xs">What are the risks involved, and what happens if a driver defaults on their hire purchase agreement?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components  aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg max-md:text-xs">Who manages the bikes and drivers, and what’s the vetting process for drivers on the platform?</AccordionTrigger>
                            <AccordionContent>
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
