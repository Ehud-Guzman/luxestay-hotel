import DiningCard from "./DiningCard";
import DiningSubGrid from "../Gallery/DiningSubGrid";


export default function DiningList({ dining, isPremium }) {
  if (dining.length === 0)
    return <p className="text-center text-brand-ivory/80">No dining options match your criteria.</p>;

  return (
    <div className="space-y-12">
      {dining.map((option, index) => (
        <DiningCard key={option.id} restaurant={option} isPremium={isPremium} />

      ))}
        {isPremium && <DiningSubGrid dining={dining} />}
    </div>
  );
}
