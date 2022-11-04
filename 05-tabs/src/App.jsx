import { useState, useEffect } from "react";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const url = "https://course-api.com/react-tabs-project";

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
        <div className="btn-container">
          {jobs.map((j) => {
            return (
              <button key={j.id} className="job-btn">
                {j.company}
              </button>
            );
          })}
        </div>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
