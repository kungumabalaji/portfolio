import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout>
      <div className="p-6 space-y-12">
        
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-300 max-w-3xl">
          A collection of my most impactful AI systems across healthcare, finance, 
          accessibility, entertainment, and enterprise automation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* HTAMV — Financial Forecasting */}
          <div className="border rounded-xl p-6 shadow bg-gray-900">
            <img src="/assets/project-dissertation.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              HTAMV — Hybrid Temporal-Attentive Multi-Asset Volatility Forecasting
            </h2>
            <p className="text-sm leading-6">
              HTAMV is a next-generation volatility forecasting framework developed during my MSc 
              dissertation. It predicts 5–10 day volatility for stocks, forex, and crypto with 
              28% higher R² accuracy than baseline models.
              <br /><br />
              Powered by Temporal Fusion Transformers + LSTM, with explainability via SHAP, 
              it reduces portfolio drawdowns and supports hedge funds, robo-advisors, and 
              institutional fintech platforms.
            </p>
          </div>

          {/* VS Medical RAG Chatbot */}
          <div className="border rounded-xl p-6 shadow bg-gray-900">
            <img src="/assets/project-medical-chatbot.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">VS Medical RAG Chatbot</h2>
            <p className="text-sm leading-6">
              A medical-grade Retrieval-Augmented Generation (RAG) system built using 
              LangChain, Pinecone, and Groq.
              <br /><br />
              It uses verified data from The Gale Encyclopedia of Medicine to deliver 
              transparent, structured, and explainable medical responses for hospitals, 
              telemedicine, and healthcare education.
              <br /><br />
              Each answer breaks into definitions, symptoms, causes, risks, diagnostics, 
              and treatments — making it a trustworthy medical companion.
            </p>
          </div>

          {/* NeuroLife */}
          <div className="border rounded-xl p-6 shadow bg-gray-900">
            <img src="/assets/neuro-life.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              NeuroLife — Multimodal AI for Cognitive & Learning Disabilities
            </h2>
            <p className="text-sm leading-6">
              NeuroLife is an upcoming speech + vision + reasoning multimodal AI system 
              that adapts to the learning style of individuals with cognitive disabilities.
              <br /><br />
              Features include:
              <br />• Personalized learning pathways  
              <br />• Voice-first interaction  
              <br />• Visual recognition assistance  
              <br />• Emotion-aware feedback  
              <br />• Adaptive reinforcement learning  
              <br /><br />
              The mission is to build AI that doesn’t replace people — it amplifies them.
            </p>
          </div>

          {/* WAX-AI */}
          <div className="border rounded-xl p-6 shadow bg-gray-900">
            <img src="/assets/wax-ai.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">WAX-AI — Interactive Museum Intelligence</h2>
            <p className="text-sm leading-6">
              WAX-AI is a pioneering museum AI system using vision models, NLP, speech 
              synthesis, and emotion modelling to power interactive wax figures.
              <br /><br />
              It detects visitors, understands speech, and delivers character-specific 
              responses, transforming traditional museum experiences.
              <br /><br />
              This project was presented to Madame Tussauds London and received strong 
              positive feedback.
            </p>
          </div>

          {/* Multimodal AI Learning Companion */}
          <div className="border rounded-xl p-6 shadow bg-gray-900">
            <img src="/assets/multimodal.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Multimodal AI Learning Companion</h2>
            <p className="text-sm leading-6">
              An AI assistant that integrates voice, vision, and reasoning to support 
              personalized education.
              <br /><br />
              Built with LLMs, CLIP-based vision models, and reinforcement-learning 
              techniques, it serves as an intelligent tutor for students in STEM, 
              languages, and soft-skill development.
            </p>
          </div>

          {/* LSBU Research Presentation */}
          <div className="border rounded-xl p-6 shadow bg-gray-900">
            <img src="/assets/research-presentation.png" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Research Presentation — LSBU</h2>
            <p className="text-sm leading-6">
              Presented research on AI-driven manufacturing inspection and intelligent 
              automation systems at London South Bank University.
            </p>
          </div>

          {/* Demo Video */}
          <div className="border rounded-xl p-6 shadow bg-gray-900">
            <video controls className="rounded mb-4">
              <source src="/assets/proof.mp4" type="video/mp4" />
            </video>
            <h2 className="text-2xl font-semibold mb-2">AI Systems Demo</h2>
            <p className="text-sm leading-6">
              A technical demonstration showcasing AI workflow orchestration, 
              data pipelines, and production-grade intelligent agents.
            </p>
          </div>

          {/* Certification */}
          <div className="border rounded-xl p-6 shadow bg-gray-900">
            <img src="/assets/certificate-ai-business.jpg" className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">AI & Business Strategy Certification</h2>
            <p className="text-sm leading-6">
              Completed professional certification in AI and Business Strategy focusing 
              on enterprise transformation, AI-driven value creation, and strategic deployment.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
