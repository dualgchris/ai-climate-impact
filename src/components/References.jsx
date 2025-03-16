import "../styles.css"; 
import { FaExternalLinkAlt } from "react-icons/fa"; // Import external link icon

const references = [
  {
    title: "Four Ways AI Can Help Tackle Climate Change",
    authors: "BBC Ideas",
    year: 2021,
    link: "https://www.youtube.com/watch?v=mvUPj2WbuKc&ab_channel=BBCIdeas",
  },
  {
    title: "A “Thirsty” AI Boom Could Deepen Big Tech’s Water Crisis",
    authors: "CNBC International",
    year: 2023,
    link: "https://www.youtube.com/watch?v=SGHk3zE5xh4",
  },
  {
    title:
      "The AI Gambit: Leveraging Artificial Intelligence to Combat Climate Change—Opportunities, Challenges, and Recommendations",
    authors: "Cowls, J., Tsamados, A., Taddeo, M., & Floridi, L.",
    year: 2023,
    link: "https://doi.org/10.1007/s00146-021-01294-x",
  },
  {
    title: "Aligning Artificial Intelligence with Climate Change Mitigation",
    authors:
      "Kaack, L. H., Donti, P. L., Strubell, E., Kamiya, G., Creutzig, F., & Rolnick, D.",
    year: 2022,
    link: "https://doi.org/10.1038/s41558-022-01377-7",
  },
  {
    title: "Deploying Artificial Intelligence for Climate Change Adaptation",
    authors:
      "Leal Filho, W., Wall, T., Afonso Rui Mucova, S., Nagy, G., Balogun, A.-L., Luetz, J., Ng, A., Kovaleva, M., Mohammad Safiul Azam, F., Alves, F., Guevara, Z., Matandirotya, N., Skouloudis, A., Tzachor, A., Malakar, K., & Gandhi, O.",
    year: 2022,
    link: "https://doi.org/10.1016/j.techfore.2022.121662",
  },
  {
    title: "ChatGPT (Jan 31 version) [Large language model]",
    authors: "OpenAI",
    year: 2025,
    link: "https://chat.openai.com/chat",
  },
  {
    title: "Apple Data Center in Mesa, Arizona",
    authors: "Todd, J.",
    year: 2017,
    fullCitation:
      "Todd, J. (2017). Apple data center in Mesa, Arizona [Photograph]. NBC News. " +
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/newscms/2021_24/3484373/210618-data-center-mesa-mn-1220.jpg",
  },
  {
    title: "Google vs. Microsoft Water Consumption (2023)",
    authors: "Google Environmental Report",
    year: 2023,
    fullCitation:
      "Google Environmental Report. (2023). Google vs. Microsoft water consumption [Photograph]. Google. " +
      "https://media-hosting.imagekit.io//c25adf912fa8443c/Screenshot%202025-03-16%20at%201.45.18%E2%80%AFPM.png",
  },
];

export default function References() {
  return (
    <div className="page-container">
      <h1>References</h1>
      <p>Below are the key research sources used in this project.</p>

      {references.map((ref, index) => (
        <section key={index} className="section">
          <h2>{ref.title}</h2>
          <p>
            <strong>Authors:</strong> {ref.authors}
          </p>
          <p>
            <strong>Year:</strong> {ref.year}
          </p>
          {ref.link && (
            <p>
              <a href={ref.link} target="_blank" rel="noopener noreferrer">
                View Source <FaExternalLinkAlt />
              </a>
            </p>
          )}
          {ref.fullCitation && (
            <p>
              <strong>Reference List Entry:</strong> {ref.fullCitation}
            </p>
          )}
        </section>
      ))}
    </div>
  );
}
