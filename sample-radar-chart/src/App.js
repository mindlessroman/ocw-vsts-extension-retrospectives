import './App.css'
import QuestionInputContainer from './components/facilitatorForm/questionInputContainer'
import FeedbackChart from './components/feedbackChart'

function App() {
  return (
    <div className="App">
      <QuestionInputContainer />

      <div style={{ height: '500px' }}>
        <FeedbackChart />
      </div>
    </div>
  )
}

export default App
