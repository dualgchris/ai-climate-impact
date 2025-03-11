import "../styles.css"; 
import { FaExternalLinkAlt } from "react-icons/fa"; // Import external link icon

const references = [
  {
    title: "Aligning Artificial Intelligence with Climate Change Mitigation",
    authors: "Kaack, L. H., Donti, P. L., Strubell, E., Kamiya, G., Creutzig, F., & Rolnick, D.",
    year: 2022,
    link: "https://doi.org/10.1038/s41558-022-01377-7",
  },
  {
    title: "Deploying Artificial Intelligence for Climate Change Adaptation",
    authors: "Leal Filho, W., Wall, T., Afonso Rui Mucova, S., Nagy, G., et al.",
    year: 2022,
    link: "https://doi.org/10.1016/j.techfore.2022.121662",
  },
  {
    title: "A 'Thirsty' AI Boom Could Deepen Big Tech’s Water Crisis",
    authors: "CNBC International",
    year: 2023,
    link: "https://www.youtube.com/watch?v=SGHk3zE5xh4",
  },
  {
    title: "Four Ways AI Can Help Tackle Climate Change",
    authors: "BBC Ideas",
    year: 2021,
    link: "https://www.youtube.com/watch?v=mvUPj2WbuKc",
  },
];

export default function References() {
  return (
    <div className="references-container">
      <h1>References</h1>
      <p>Below are the key research sources used in this project.</p>

      <div className="references-list">
        {references.map((ref, index) => (
          <div key={index} className="reference-card">
            <h3>{ref.title}</h3>
            <p><strong>Authors:</strong> {ref.authors}</p>
            <p><strong>Year:</strong> {ref.year}</p>
            <a href={ref.link} target="_blank" rel="noopener noreferrer" className="reference-link">
              View Source <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
