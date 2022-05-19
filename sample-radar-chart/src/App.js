import './App.css';
import QuestionInputContainer from './components/questionInputContainer';
import RadarChartContainer from './components/radarChartContainer';
import { testMaxRange, testQuestions, generateRandomTestData } from './test-data/mockedRadarChartContents';

function App() {
  const testResponses = generateRandomTestData();

  return (
    <div className="App">
      <QuestionInputContainer />
      <RadarChartContainer
        maxResponseRange={testMaxRange}
        questions={testQuestions}
        responses={testResponses}
      />
    </div>
  );
}

export default App;
