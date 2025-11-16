import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="p-6 space-y-16">
        
        {/* ABOUT ME */}
        <section className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-8">
            I am an AI Engineer specializing in Large Language Models, Intelligent Agents, 
            RAG systems, and full-stack AI product development. With a strong foundation in 
            deep learning, NLP, computer vision, and multimodal architectures, I design 
            production-ready AI systems for healthcare, finance, robotics, and enterprise 
            automation. I focus on building scalable, high-impact solutions that integrate 
            LLM reasoning, vector search, cloud orchestration, and real-time decision systems.
          </p>
        </section>

        {/* TECH STACK */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 bg-gray-900 p-6 rounded-xl shadow">
            <img src="/icons/python.png" className="h-12" />
            <img src="/icons/cpp.png" className="h-12" />
            <img src="/icons/pytorch.png" className="h-12" />
            <img src="/icons/opencv.png" className="h-12" />
            <img src="/icons/linux.png" className="h-12" />
            <img src="/icons/docker.png" className="h-12" />
            <img src="/icons/react.png" className="h-12" />
            <img src="/icons/aws.png" className="h-12" />
            <img src="/icons/langchain.png" className="h-12" />
            <img src="/icons/tensorflow.png" className="h-12" />
            <img src="/icons/vscode.png" className="h-12" />
            <img src="/icons/qt.png" className="h-12" />
          </div>
        </section>

        {/* SPECIALIZATIONS */}
        <section>
          <h2 className="text-2xl font-bold mb-6">My AI Specializations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Large Language Models & RAG</h3>
              <p>
                Expertise in building agentic systems, retrieval pipelines, embeddings, 
                vector stores, and end-to-end LLM applications using LangChain, LlamaIndex, 
                and Groq-based inference.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Machine Learning & Deep Learning</h3>
              <p>
                Designing advanced models with Transformers, LSTMs, CNNs, attention 
                mechanisms, GANs, and diffusion models for production environments.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Computer Vision Systems</h3>
              <p>
                Real-time vision systems with YOLO, OpenCV, and multimodal architectures for 
                robotics, healthcare, and interactive entertainment.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">AI Robotics & Autonomous Agents</h3>
              <p>
                Building hardware-integrated AI systems, sensor fusion pipelines, and 
                autonomous decision-making agents for IoT and robotics.
              </p>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL ENDORSEMENTS */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Professional Endorsements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Dr. Ali Salimian */}
            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">
                Dr. Ali Salimian  
                <span className="block text-sm opacity-75">
                  Director, MSc Artificial Intelligence Programme (LSBU)
                </span>
              </h3>
              <p className="text-sm mt-3">
                “Kunguma demonstrates outstanding research maturity, academic strength, and 
                long-term vision. His hybrid-temporal AI model for financial markets and 
                his ongoing contributions to AI research show his exceptional potential.”
              </p>
            </div>

            {/* Adam Sabri */}
            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">
                Adam Sabri  
                <span className="block text-sm opacity-75">
                  Guest Experience Manager, Madame Tussauds (Merlin Entertainments)
                </span>
              </h3>
              <p className="text-sm mt-3">
                “Kunguma delivered AI-driven interactive systems that enhanced visitor 
                experiences with real-time automation, computer vision, and voice-based 
                intelligence. His creativity and execution exceeded expectations.”
              </p>
            </div>

            {/* Tuan */}
            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">
                Tuan Sihan 
                <span className="block text-sm opacity-75">
                  Head of Data & AI, Aspect
                </span>
              </h3>
              <p className="text-sm mt-3">
                “Kunguma is a rare talent. His AI agents, automation workflows, and 
                intelligent ML-driven systems delivered business-critical impact across 
                the organisation. I recommend him without reservation.”
              </p>
            </div>

            {/* Polina */}
            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">
                Polina Vertex  
                <span className="block text-sm opacity-75">
                  Co-Founder, Syntagma Labs
                </span>
              </h3>
              <p className="text-sm mt-3">
                “He brings a rare combination of programming skill, research depth, and 
                curiosity. His contributions to DAO analytics, blockchain intelligence, 
                and NLP automation were highly impactful.”
              </p>
            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
}
