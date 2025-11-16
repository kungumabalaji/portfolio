import Layout from "../components/Layout";

export default function Resume(){
  return(
    <Layout>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Resume</h1>

        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Integrated advanced RAG-based AI agents using LangChain.</li>
          <li>Developed enterprise automation AI agents.</li>
          <li>Built real-time ML dashboards and medical chatbots.</li>
          <li>Integrated Salesforce with AI for workflow automation.</li>
          <li>Created interview analysis and document intelligence tools.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Education</h2>
        <p>Bachelor of Commerce (Honours) — Distinction (2019–2023)</p>
      </div>
    </Layout>
  )
}
