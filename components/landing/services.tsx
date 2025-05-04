import { Users, Landmark } from "lucide-react";
import { Card } from "../ui/card";

export function Services() {
  return (
    <div className="relative flex flex-col w-full mb-36 h-full items-center justify-center gap-20">
      {/* ↓ Fade-in BG image ↓ */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/dodo.svg')]
          bg-center bg-cover
          opacity-15      /* adjust to taste */
          -z-10
        "
      />

      {/* ← Your existing content stays here → */}
      <div className="flex flex-col gap-4 text-center max-w-2xl z-10">
        <h1 className="text-4xl max-md:text-2xl font-semibold">Our Services</h1>
        <p className="text-lg max-md:text-sm">
          3 Wheeler Bike Club empowers three-wheeler bike riders with community finance tools for vehicle ownership
        </p>
      </div>

      <div className="flex w-full h-2/4 max-md:flex-col gap-4 justify-center z-10">
        <Card className="flex w-2/5 max-md:w-full h-80 max-md:h-48 flex-col gap-4 justify-center p-8 max-md:p-4">
          <div className="flex flex-col gap-4 max-md:flex-row max-md:items-center max-md:justify-center">
            <Users className="w-14 h-14 max-md:w-10 max-md:h-10" />
            <h1 className="text-xl max-md:text-sm font-semibold">3WB Riders Club</h1>
          </div>
          <p className="text-sm max-md:text-[10px] max-md:text-center">
            A platform where TukTuk riders pay dues, build credit, govern their treasury, and access P2P fleet financing to drive-to-own their vehicles.
          </p>
        </Card>

        <Card className="flex w-2/5 max-md:w-full h-80 max-md:h-48 flex-col gap-4 justify-center p-8 max-md:p-4">
          <div className="flex flex-col gap-4 max-md:flex-row max-md:items-center max-md:justify-center">
            <Landmark className="w-14 h-14 max-md:w-10 max-md:h-10" />
            <h1 className="text-xl max-md:text-sm font-semibold">P2P Fleet Finance</h1>
          </div>
          <p className="text-sm max-md:text-[10px] max-md:text-center">
            A decentralized way for individuals to fund a fleet of 3-Wheeler Bikes, empowering riders to achieve ownership while earning a decent ROI.
          </p>
        </Card>
      </div>
    </div>
  );
}
