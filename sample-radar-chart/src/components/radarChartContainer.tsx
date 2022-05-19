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
import { ChartColors, ChartPointStyles } from '../constants/radarChartConstants';

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
    let dataArray: [
      {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: ChartColors[0],
        borderColor: ChartColors[0],
        pointStyle: ChartPointStyle[3],
        pointBackgroundColor: ChartColors[0],
        pointBorderColor: 'black',
        pointHoverBackgroundColor: 'black',
        pointHoverBorderColor: ChartColors[0]
      },
    ];


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
    }
  };

  return (
    <div className="h-48">
      <Radar data={data} options={options} />
    </div>
  );
}