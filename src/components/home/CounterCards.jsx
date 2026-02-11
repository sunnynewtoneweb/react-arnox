import { counterItems } from "./aboutData.js";
import CounterCard from "./CounterCard";

function CounterCards() {
  return (
    <div className="row">
      <div className="col-sm-6 pt-sm-4 pt-md-5">
        {counterItems.slice(0, 2).map((item) => (
          <CounterCard key={item.id} {...item} />
        ))}
      </div>

      <div className="col-sm-6">
        {counterItems.slice(2, 4).map((item) => (
          <CounterCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CounterCards;