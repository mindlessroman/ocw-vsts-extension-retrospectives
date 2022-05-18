import React from 'react';
import './App.css';
import QuestionInputContainer from './components/questionInputContainer';
import FeedbackChart from './components/feedbackChart';
import QuestionResponseContainer from './components/questionResponseContainer';
import SubmitButtonContainer from './components/submitButtonContainer';

function App() {
  return (
    <div className="App">
      <QuestionInputContainer />
      <QuestionResponseContainer />

      <div style={{ height: '500px' }}>
        <FeedbackChart />
      </div>
    </div>
  );
}

export default App;
