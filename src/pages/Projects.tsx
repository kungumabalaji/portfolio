import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout>
      <div className="p-6 space-y-12">
        
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-foreground/70 max-w-3xl">
          A collection of my most impactful AI systems across healthcare, finance, 
          accessibility, entertainment, and enterprise automation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* HTAMV — Financial Forecasting */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/project-dissertation.png" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              HTAMV — Hybrid Temporal-Attentive Multi-Asset Volatility Forecasting
            </h2>
            <p className="text-sm leading-6">
              HTAMV is a next-generation volatility forecasting framework built for 
              financial markets. It predicts 5–10 day volatility for stocks, forex, and crypto 
              with <strong>28% higher R² accuracy</strong> than baseline models.
              <br /><br />
              Powered by <strong>Temporal Fusion Transformers + LSTM</strong> with SHAP 
              explainability, it reduces portfolio drawdowns and supports hedge funds, 
              robo-advisors, and institutional fintech environments.
            </p>
          </div>

          {/* VS Medical RAG Chatbot */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <video controls className="rounded mb-4">
              <source src="/assets/vs-meical-videos.mp4" type="video/mp4" />
            </video>
            <h2 className="text-2xl font-semibold mb-2">VS Medical RAG Chatbot</h2>
            <p className="text-sm leading-6">
              A medical-grade RAG system built using <strong>LangChain, Pinecone, and Groq</strong>.
              <br /><br />
              Uses verified data from <em>The Gale Encyclopedia of Medicine</em> to deliver 
              structured and explainable responses for hospitals, clinicians, and students.
              <br /><br />
              Each answer includes definitions, symptoms, causes, risks, diagnostics, 
              and treatments — ensuring fully transparent AI behaviour.
            </p>
          </div>

          {/* NeuroLife */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/neuro-life-2.png" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              NeuroLife — Multimodal AI for Cognitive & Learning Disabilities
            </h2>
            <p className="text-sm leading-6">
              NeuroLife is a multimodal AI system combining <strong>speech, vision, and reasoning</strong> 
              to support individuals with cognitive disabilities.
              <br /><br />
              Features:<br />
              • Personalized learning pathways<br />
              • Voice-first conversational support<br />
              • Visual recognition assistance<br />
              • Emotion-aware feedback<br />
              • Adaptive reinforcement learning<br />
            </p>
          </div>

          {/* WAX-AI */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/WAX5.png" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">WAX-AI — Interactive Museum Intelligence</h2>
            <p className="text-sm leading-6">
              WAX-AI is a museum intelligence system that uses <strong>vision AI, speech modelling, and NLP</strong> 
              to bring wax figures to life.
              <br /><br />
              It identifies visitors, listens to queries, and responds with character-specific dialogue.
              <br /><br />
              Presented to <strong>Madame Tussauds London</strong> with excellent feedback.
            </p>
          </div>

          {/* Multimodal AI Learning Companion */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/multimodal.jpg.png" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Multimodal AI Learning Companion</h2>
            <p className="text-sm leading-6">
              Multimodal AI Learning Companion is an AI system that integrates <strong>voice, vision, and reasoning</strong> 
              to provide real-time, personalized tutoring. The system supports various educational domains including STEM, 
              language learning, and skill development.
              <br /><br />
              Key technologies and tools integrated in the system:
              <ul className="list-disc pl-6">
                <li><strong>LLMs (Large Language Models)</strong> for language processing and text generation.</li>
                <li><strong>CLIP-based models</strong> for visual recognition and understanding.</li>
                <li><strong>Reinforcement Learning</strong> for personalized learning pathways based on user interactions.</li>
                <li><strong>Real-time speech processing</strong> for dynamic feedback and interaction with the user.</li>
              </ul>
              <br />
              This project aims to make learning more interactive and adaptable by using multimodal approaches to education.
            </p>
          </div>

          {/* LSBU Research Presentation */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/research-presentation.png" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Research Presentation — LSBU</h2>
            <p className="text-sm leading-6">
              Presented research on <strong>AI-driven manufacturing inspection and automation systems</strong> at London South Bank University.
            </p>
          </div>

          {/* Real-Time IoT System for Data Collection and Automation */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <video controls className="rounded mb-4">
              <source src="/assets/robot-pic-vision.mp4" type="video/mp4" />
            </video>
            <h2 className="text-2xl font-semibold mb-2">Real-Time IoT System for Data Collection and Automation</h2>
            <p className="text-sm leading-6">
              In my IoT class, I worked on a hands-on project that demonstrated the power of the Internet of Things in real-world applications. 
              The project involved building a connected system that integrates sensors, microcontrollers, and cloud technologies to collect and process data in real-time. 
              My role involved designing the system's architecture, selecting appropriate communication protocols, and developing the software to handle the data flow. 
              <br /><br />
              The system was designed to monitor environmental conditions, automate tasks, and improve efficiency in specific processes. 
              The IoT solution enables real-time monitoring and data-driven decisions, leading to more efficient operations, cost reduction, and proactive problem-solving.
              <br /><br />
              This experience gave me a deeper understanding of how IoT technologies are transforming industries by providing actionable insights and automation capabilities.
            </p>
          </div>

          {/* Demo Video */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <video controls className="rounded mb-4">
              <source src="/assets/proof.mp4" type="video/mp4" />
            </video>
            <h2 className="text-2xl font-semibold mb-2">AI Systems Demo</h2>
            <p className="text-sm leading-6">
              Demonstration of AI workflow orchestration, data pipelines, and production-ready agent behaviour.
            </p>
          </div>

          {/* Certification */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/certificiation in ai and business strategy.webp" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              AI & Business Strategy Certification
            </h2>
            <p className="text-sm leading-6">
              Certified in AI & Business Strategy focusing on enterprise transformation, AI-driven value creation, and future-proof decision systems.
            </p>
          </div>

          {/* Recommendation Letter */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/recoemdentaion.webp" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Recommendation Letter from Syntagma Labs</h2>
            <p className="text-sm leading-6">
              A letter of recommendation from Polina Vertex, Co-founder of Syntagma Labs, detailing my contributions to research and development projects during my internship.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
