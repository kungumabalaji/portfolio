import Layout from "../components/Layout";

export default function Projects(){
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded p-4 shadow">
            <img src="/assets/project-dissertation.jpg" className="rounded mb-2"/>
            <h2 className="text-xl font-semibold">HTAMV – Financial Forecasting Dashboard</h2>
            <p>Deep learning volatility forecasting deployed for investment simulation.</p>
          </div>

          <div className="border rounded p-4 shadow">
            <img src="/assets/project-medical-chatbot.jpg" className="rounded mb-2"/>
            <h2 className="text-xl font-semibold">VS Medical RAG Chatbot</h2>
            <p>Medical-grade RAG chatbot using LangChain, Pinecone and Groq.</p>
          </div>

          <div className="border rounded p-4 shadow">
            <img src="/assets/research-presentation.png" className="rounded mb-2"/>
            <h2 className="text-xl font-semibold">Research Presentation – LSBU</h2>
            <p>Showcasing research on manufacturing quality inspection using AI.</p>
          </div>

          <div className="border rounded p-4 shadow">
            <video controls className="rounded mb-2">
              <source src="/assets/proof.mp4" type="video/mp4"/>
            </video>
            <h2 className="text-xl font-semibold">Project Demo Video</h2>
            <p>Demonstration of AI workflows and system outputs.</p>
          </div>

        </div>
      </div>
    </Layout>
  )
}
