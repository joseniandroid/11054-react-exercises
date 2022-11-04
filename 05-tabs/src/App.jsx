import { useState } from "react";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* TODO: Loop through all the jobs fetch from the API server */}
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
