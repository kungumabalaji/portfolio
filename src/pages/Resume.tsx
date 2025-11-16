import Layout from "../components/Layout";

export default function Resume() {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Resume</h1>

          {/* DOWNLOAD BUTTON */}
          <a
            href="/resume/kunguma_balaji_resume.pdf"
            download="Kunguma_Balaji_Resume.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </div>

        {/* PROFILE */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Profile</h2>
          <p>
            Applied Scientist with experience designing and deploying LLM-powered
            systems, reinforcement learning models, RAG automation pipelines,
            and enterprise AI agents. Strong background in NLP, multimodal AI,
            financial modeling, and decision-intelligence systems.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>

          <div>
            <h3 className="text-xl font-semibold">
              Artificial Intelligence Engineer — ASPECT, UK (May 2025 – Present)
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Built production-level Voice Agent using LangChain integrated with company data — improved accuracy by 42%.
              </li>
              <li>
                Developed Training Agent fine-tuned on realistic scenarios reducing training cost by 45%.
              </li>
              <li>
                Built customer portal integrating Salesforce → Firebase → React/Vite reducing query latency by 40%.
              </li>
              <li>
                Automated Salesforce workflows cutting QA time by 70%.
              </li>
              <li>
                Built AI-powered Interview Analysis tools using Groq + LLM chatbot.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              AI Researcher — London South Bank University (July 2025 – Ongoing)
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Led research on multimodal systems ensuring interpretability.</li>
              <li>Built models for regulated environments with compliance checks.</li>
              <li>Developed explainable AI systems using SHAP/LIME.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              AI Intern — Syntagma Labs, UK (Jan 2025 – May 2025)
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Built RAG-based compliance assistants boosting efficiency by 25%.</li>
              <li>Created dashboards & ML reports improving adoption.</li>
              <li>Delivered transparent models for regulated finance environments.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              AI Intern — Small Cap AI, UK (July 2024 – Nov 2024)
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Built agentic RAG pipelines improving prediction accuracy by 30%.</li>
              <li>Developed ML models for investment forecasting.</li>
              <li>Built LLM chatbot for client engagement.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Financial Analysis Intern — India Infoline (Feb 2023 – July 2023)
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Processed high-volume financial data and risk assessments.</li>
              <li>Collaborated with stakeholders on portfolio analysis.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Medical AI Chatbot:</strong> RAG + LangChain + Pinecone; 70% faster retrieval.
            </li>
            <li>
              <strong>NeuroLife AI:</strong> RAG + Generative AI for learning disability support.
            </li>
            <li>
              <strong>Wax AI:</strong> CV + GPT + TTS for object detection and interaction.
            </li>
            <li>
              <strong>Multimodal IoT Assistant:</strong> Flutter + Firebase + Python orchestration.
            </li>
            <li>
              <strong>HTAMV Research:</strong> 28% better R² on volatility forecasting.
            </li>
            <li>
              <strong>Agricultural Job Scheduling:</strong> 53k+ data analysis; 30–50% better utilization.
            </li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>MSc Artificial Intelligence — LSBU (Merit)</li>
            <li>Bachelor of Commerce (Honours) — Distinction</li>
          </ul>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>AWS Certified Cloud Practitioner — CLF-C02</li>
            <li>Azure AI Fundamentals — AI-900</li>
            <li>Machine Learning Bootcamp — LSBU</li>
          </ul>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Languages:</strong> Python, React, Vite, C++, Swift</li>
            <li><strong>RAG & Agents:</strong> LangChain, LlamaIndex, FAISS, Chroma</li>
            <li><strong>Automation:</strong> n8n, Selenium, MLflow</li>
            <li><strong>ML:</strong> Transformers, XAI, CNNs, LSTMs, RL, GANs, Diffusion Models</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
