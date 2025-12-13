import FeatureCards from "./FeatureCards";
import RoomsPreview from "./RoomsPreview";
import Dining from "./Dining";

import LocationMap from "./LocationMap";
import CTASection from "./CTASection";

export default function Features({ tier = "premium" }) {
  return (
    <section className={`py-12 ${tier === "basic" ? "bg-brand-ivory" : "bg-gradient-to-b from-brand-ivory to-gray-100"} relative z-10`}>
      <div className="container mx-auto px-4">
        <FeatureCards tier={tier} />
        {(tier === "standard" || tier === "premium") && <RoomsPreview tier={tier} />}
        {tier === "premium" && <Dining tier={tier} />}
     
        {tier === "premium" && <LocationMap />}
        <CTASection tier={tier} />
      </div>
    </section>
  );
}