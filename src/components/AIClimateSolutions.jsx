import "../styles.css";

export default function AIClimateSolutions() {
  return (
    <div className="page-container">
      <h1>How AI is Helping Fight Climate Change</h1>

      {/* Introduction */}
      <section className="section">
        <h2>Introduction</h2>
        <p>
          Researchers have highlighted AI’s potential to reduce emissions, but the topic is
          often presented in highly technical language and can sometimes lack thorough
          discussion of ethical considerations. This overview will explore several academic
          and media sources that discuss both the benefits and drawbacks of AI in relation
          to climate change.
        </p>
      </section>

      {/* Emission Reduction Statistics */}
      <section className="section">
        <h2>Emission Reduction Statistics</h2>
        <p>
          A beneficial take on AI reducing emissions comes from researchers who note that
          “DT itself can potentially directly reduce global emissions up to 15% by 2030 and
          additional 35% by impacting on transformation of systems as well as business and
          consumer decisions” (Filho et al., 2022, p.3). While this is an impressive claim,
          the technical language in such research can make it difficult for a general
          audience to fully understand.
        </p>
      </section>

      {/* Intelligent Cities & Renewable Energy */}
      <section className="section">
        <h2>Intelligent Cities & Renewable Energy</h2>
        <p>
          The same research mentions that “AI and machine learning can be used to regulate
          building energy and thus can be applied to the construction of intelligent cities”
          (Filho et al., 2022, p.3). Additionally, they point out how AI can enhance renewable
          energy capabilities and efficiency, reducing greenhouse gas emissions and overall
          carbon footprint (Filho et al., 2022, p.7). However, these authors generally favor
          AI’s positive influence on climate-related issues, sometimes glossing over its
          ethical challenges.
        </p>
      </section>

      {/* BBC Ideas: AI for Disaster Prediction */}
      <section className="section">
        <h2>BBC Ideas: AI for Disaster Prediction</h2>
        <p>
          A similar stance is presented by BBC Ideas on YouTube. The video discusses how AI
          can predict hazardous disasters and help coordinate emergency responses. According
          to one example, AI could determine where to dispatch first responders, which
          hospitals should be on high alert, and where relief supplies are needed (BBC Ideas,
          2:28). Data collection via satellite observations enables AI systems to detect
          patterns of erosion and landslides, offering insights for preventive measures (BBC
          Ideas, 1:40).
        </p>
      </section>

      {/* Balancing Both Sides: The AI Gambit */}
      <section className="section">
        <h2>Balancing Both Sides: The AI Gambit</h2>
        <p>
          Many articles, such as <i>The AI Gambit: Leveraging Artificial Intelligence to Combat
          Climate Change—Opportunities, Challenges</i>, recognize that AI offers significant
          climate solutions yet also pose drawbacks. This article, published in
          <i> AI &amp; Society</i>, explains both sides of the debate but does lean towards a
          more optimistic view of AI. For instance, it reads, “It is important to keep in mind
          that, although training AI/ML models can require a lot of energy, they are usually
          used to improve the efficiency ... and potentially electricity” (Cowls et al., 2023,
          p. 15), as well as “AI can help improve and expand current understanding of climate
          change” (Cowls et al., 2023, p.2).
        </p>
        <p>
          That said, the article admits that while AI has potential benefits and is essential
          for the future of climate change (Cowls et al., 2023, p.20), it doesn’t discuss the
          negative impacts in as much depth. Moreover, its UK-based context means local
          regulations and perspectives might differ from those in the United States.
        </p>
      </section>

      {/* Conclusion */}
      <section className="section">
        <h2>Conclusion</h2>
        <p>
          In summary, the research and media sources highlight that AI holds great promise
          for addressing climate change—through emission reductions, renewable energy
          management, and disaster response—though concerns about biases, ethical
          considerations, and resource use remain. If one’s focus is on showing AI’s
          positive impact, these sources offer strong evidence. However, anyone seeking a
          balanced perspective should supplement them with discussions on AI’s potential
          drawbacks and necessary safeguards.
        </p>
      </section>
    </div>
  );
}
