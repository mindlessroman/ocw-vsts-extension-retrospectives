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

  // Colors adopted from https://sashamaps.net/docs/resources/20-colors/
  const chartColors = [
    '#800000',
    '#fabed4',
    '#9A6324',
    '#ffd8b1',
    '#808000',
    '#fffac8',
    '#3cb44b',
    '#000075',
    '#911eb4',
    '#f032e6'
  ];

  // Styles from ChartJS documentation
  // https://www.chartjs.org/docs/master/configuration/elements.html#info
  const chartPointStyles = [
    'circle',
    'cross',
    'crossRot',
    'dash',
    'line',
    'rect',
    'rectRounded',
    'rectRot',
    'star',
    'triangle'
  ];

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
        backgroundColor: chartColors[0],
        borderColor: chartColors[0],
        pointStyle: chartPointStyle[3],
        pointBackgroundColor: chartColors[0],
        pointBorderColor: 'black',
        pointHoverBackgroundColor: 'black',
        pointHoverBorderColor: chartColors[0]
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