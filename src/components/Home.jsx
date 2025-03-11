import "../styles.css"; 
export default function Home() {
    return (
      <div className="home-container">
        <header className="home-header">
          <h1>AI & Climate Change: Analyzing the Environmental Impact</h1>
          <p className="subheading">Exploring AI’s Role in Energy Consumption, Carbon Emissions, and Sustainable Solutions</p>
        </header>
  
        <main className="home-content">
          <section className="introduction">
            <h2>Project Overview</h2>
            <p>
            When discussing the topic of AI, it is easy to focus on the groundbreaking achievements and advancements it has made to society while overlooking its negative effects. These negative effects can vary from ethical considerations, to serious environmental issues. However, it is known that AI’s advancements to furthering energy’s sustainability counteracts its own issues while solving other environmental issues. 

            </p>
          </section>
  
          <section className="research-focus">
            <h2>Research Focus</h2>
            <p>
              This study investigates the positives and negatives of AI’s environmental footprint, focusing on:
            </p>
            <ul>
              <li> The energy consumption of large AI models like ChatGPT.</li>
              <li> The carbon and water footprint of AI and data centers.</li>
              <li> AI-driven climate solutions, such as smart grids and emissions reduction.</li>
              <li> Ethical concerns regarding AI sustainability policies and corporate responsibility.</li>
            </ul>
          </section>
  
          <section className="explore">
            <h2>Explore the Data</h2>
            <p>
              This website is for many users from all backrounds to accurately understand and acknowledge the effects of AI.
            </p>
            <ul>
              <li> Problems With AI</li>
              <li> AI Climate Solutions</li>
              <li> Take a Quiz.</li>
              <li> References</li>
            </ul>
          </section>
  
          <section className="call-to-action">
            <h2>Why Does This Matter?</h2>
            <p>
            the exponentially growing population and implementation of AI technologies are changing the way people live. It is important for everyone to understand all factors of AI and how it helps and doesn't help society.
            </p>
          </section>
        </main>
      </div>
    );
  }
  