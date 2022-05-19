import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { ParticipantResponseModel } from '../models/participantResponseModel';
import { QuestionInformationModel } from '../models/questionInformationModel';
import { ChartColors, ChartPointStyles, ChartStyleCount } from '../constants/radarChartConstants';

export interface RadarChartContainerProps {
  maxResponseRange: number,
  questions: QuestionInformationModel[],
  responses: ParticipantResponseModel[],
};

// pass in List of QuestionInformationModel and List of Participant Response Model
export default function RadarChartContainer(props: RadarChartContainerProps) {
  const maxResponseRange = props.maxResponseRange;
  const currentQuestions = props.questions;
  const currentResponses = props.responses;

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  var generateDatasets = function () {
    let dataArray = [];

    for (let i = 0; i < currentResponses.length; i++) {
      const selectedStyleIndex = i % ChartStyleCount;
      let sortedResponses: number[] = [];
      for (let j = 0; j < currentQuestions.length; j++)
      {
        sortedResponses.push(currentResponses[i].responses.get(j + 1));
      }
      dataArray.push({
        label: `User ${currentResponses[i].userId}`,
        data: sortedResponses,
        fill: true,
        borderColor: ChartColors[selectedStyleIndex],
        radius: 5,
        pointStyle: ChartPointStyles[selectedStyleIndex],
        pointBackgroundColor: ChartColors[selectedStyleIndex],
        pointBorderColor: 'black',
        pointHoverBackgroundColor: 'black',
        pointHoverBorderColor: ChartColors[selectedStyleIndex]
      })
    };

    return dataArray;
  };

  const data = {
    labels: currentQuestions.map(q => q.questionName),
    datasets: generateDatasets()
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        min: 0,
        max: maxResponseRange
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };

  return (
    <div className="h-48">
      <Radar data={data} options={options} />
    </div>
  );
}