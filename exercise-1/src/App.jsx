
import Header from "./components/Header.jsx";
import Score from "./components/Score.jsx";
import { ENGLISH_RESULTS, HTML_RESULTS, PYTHON_RESULTS, JAVA_RESULTS } from "./data.js";

function App() {
  const batchName = "PNC batch 2024";

  return (
    <>
      <Header batchName={batchName}/>
      <main className="scores-container">
        <Score courseName="Java" courseResult={JAVA_RESULTS} />
        <Score courseName="HTML" courseResult={HTML_RESULTS} />
        <Score courseName="Python" courseResult={PYTHON_RESULTS} />
        <Score courseName="English" courseResult={ENGLISH_RESULTS} />
      </main>
      

    </>
  );
}

export default App;
