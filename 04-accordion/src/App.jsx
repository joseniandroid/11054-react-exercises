import {useState} from 'react';
import SingleQuestion from './SingleQuestion';

import data from './data';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((q) => {
            return (
              <SingleQuestion key={q.id} {...q} />
            );
          })}
        </section>
      </div>
    </main>
  )
}

export default App
