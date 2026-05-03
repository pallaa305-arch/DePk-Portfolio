import { abilities } from "../constants";

const neonColors = [
  "bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/5 border-violet-500/20",
  "bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 border-cyan-500/20",
  "bg-gradient-to-br from-pink-500/10 via-transparent to-rose-500/5 border-pink-500/20",
];

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }, index) => (
        <div
          key={title}
          className={`rounded-xl p-8 flex flex-col gap-4 border transition-all duration-500 hover:scale-[1.03] hover:shadow-lg ${neonColors[index % neonColors.length]}`}
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;