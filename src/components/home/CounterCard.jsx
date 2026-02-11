function CounterCard({ title, number, suffix, description }) {
  return (
    <div className="counter__item">
      <h6 className="text-uppercase dark fw-bold mb-4">{title}</h6>

      <strong className="counter_numbers themeGradient">
        <span className="counter">{number}</span>
        {suffix}
      </strong>

      <p className="mb-0">{description}</p>
    </div>
  );
}

export default CounterCard;