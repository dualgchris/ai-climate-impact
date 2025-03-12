import "../styles.css";
export default function EnergyConsumption() {
  return (
    <div className="page-container">
      <h1>How AI is Helping Fight Climate Change</h1>

      {/* Introduction */}
      <section className="section">
        <h2>Introduction</h2>
        <p>
          AI being a leading factor in water consumption and overall negative climate 
          effects is an overseen problem in AI, according to CNBC International. 
          In a recent video clip, several negative impacts of training AI models 
          and housing data were discussed, highlighting the growing concerns 
          around energy usage and environmental sustainability.
        </p>
      </section>

      {/* Water Consumption in Data Centers */}
      <section className="section">
        <h2>Water Consumption in Data Centers</h2>
        <p>
          One prominent example discussed was Google's plan to build water-consuming 
          data centers in drought-stricken areas. Such infrastructure directly impacts 
          local inhabitants. The video emphasized the tension arising over water usage 
          for data centers versus human needs, an issue at the heart of social problems 
          worldwide. A notable instance mentioned in the clip is the protest in Uruguay 
          over Google's proposed data center (CNBC, 2023, 6:32).
        </p>
        <p>
          Training popular AI models requires large volumes of water to cool 
          high-powered computer parts (CNBC, 2023, 4:12). Visual models presented 
          in the video demonstrated how much water major tech companies consume; 
          for instance, Google’s global water consumption from 2021 to 2022 increased 
          by 21% (CNBC, 2023, 1:58).
        </p>
      </section>

      {/* Negative Implications & Ethical Concerns */}
      <section className="section">
        <h2>Negative Implications & Ethical Concerns</h2>
        <p>
          These revelations are crucial when discussing the negative implications of AI 
          on climate change, as they highlight how AI systems can exacerbate resource 
          scarcity. The same ethical considerations apply to many large-scale AI 
          deployments around the globe, raising questions about corporate responsibility, 
          local community impact, and sustainability practices.
        </p>
      </section>

      {/* ChatGPT's Own Acknowledgment */}
      <section className="section">
        <h2>ChatGPT’s Acknowledgment of Environmental Impact</h2>
        <p>
          In a related instance, ChatGPT itself acknowledges these concerns. When asked 
          questions like “How does AI affect climate change? How does it negatively impact 
          climate change? What are some ethical considerations?”, ChatGPT provided a direct 
          comparison between the carbon emissions of training AI models and driving cars 
          (OpenAI, 2025). Notably, it mentioned: “Training a single AI model can emit as 
          much CO₂ as five cars in their lifetime.” (OpenAI, 2025).
        </p>
      </section>
    </div>
  );
}
