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
            <img src="/assets/project-dissertation.jpg" className="rounded mb-4" />
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
            <img src="/assets/project-medical-chatbot.jpg" className="rounded mb-4" />
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
            <img src="/assets/neuro-life.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              NeuroLife — Multimodal AI for Cognitive & Learning Disabilities
            </h2>
            <p className="text-sm leading-6">
              NeuroLife is a multimodal AI system combining <strong>speech, vision, and 
              reasoning</strong> to support individuals with cognitive disabilities.
              <br /><br />
              Features:<br />
              • Personalized learning pathways  
              • Voice-first conversational support  
              • Visual recognition assistance  
              • Emotion-aware feedback  
              • Adaptive reinforcement learning  
            </p>
          </div>

          {/* WAX-AI */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/wax-ai.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">WAX-AI — Interactive Museum Intelligence</h2>
            <p className="text-sm leading-6">
              WAX-AI is a museum intelligence system that uses <strong>vision AI, speech 
              modelling, and NLP</strong> to bring wax figures to life.
              <br /><br />
              It identifies visitors, listens to queries, and responds with 
              character-specific dialogue.
              <br /><br />
              Presented to <strong>Madame Tussauds London</strong> with excellent feedback.
            </p>
          </div>

          {/* Multimodal AI Learning Companion */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/multimodal.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Multimodal AI Learning Companion</h2>
            <p className="text-sm leading-6">
              An AI system integrating <strong>voice, vision, and reasoning</strong> to deliver 
              real-time personalized tutoring.
              <br /><br />
              Built with LLMs, CLIP-based models, and reinforcement learning, it supports 
              STEM education, language learning, and skill development.
            </p>
          </div>

          {/* LSBU Research Presentation */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/research-presentation.png" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Research Presentation — LSBU</h2>
            <p className="text-sm leading-6">
              Presented research on <strong>AI-driven manufacturing inspection and 
              automation systems</strong> at London South Bank University.
            </p>
          </div>

          {/* Demo Video */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <video controls className="rounded mb-4">
              <source src="/assets/proof.mp4" type="video/mp4" />
            </video>
            <h2 className="text-2xl font-semibold mb-2">AI Systems Demo</h2>
            <p className="text-sm leading-6">
              Demonstration of AI workflow orchestration, data pipelines, and 
              production-ready agent behaviour.
            </p>
          </div>

          {/* Certification */}
          <div className="border rounded-xl p-6 shadow-card bg-card text-card-foreground">
            <img src="/assets/certificate-ai-business.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              AI & Business Strategy Certification
            </h2>
            <p className="text-sm leading-6">
              Certified in AI & Business Strategy focusing on enterprise transformation, 
              AI-driven value creation, and future-proof decision systems.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
