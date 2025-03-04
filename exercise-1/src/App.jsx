import pnLogo from "./assets/pn-logo.png";

function App() {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for (fake batch name))</h1>
      </header>

      <main className="scores-container">
        <div class="scores">
          <h1>Fake Course</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First name 1 </td>
                <td>Last name 1 </td>
                <td>55</td>
              </tr>
              <tr>
                <td>First name 2 </td>
                <td>Last name 2 </td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
