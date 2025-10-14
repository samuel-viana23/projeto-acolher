function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center max-w-[250px] text-center px-4">
      <img src={icon} alt={title} className="h-10 w-10 mb-2" />
      <h4 className="text-lg font-bold mb-2 text-[#44576D]">{title}</h4>
      <p className="text-[#44576D]">{description}</p>
    </div>
  );
}

export default FeatureCard;