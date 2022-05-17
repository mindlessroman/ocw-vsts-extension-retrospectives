import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    C: 90,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    C: 75,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    C: 90,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    C: 145,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    C: 150,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    C: 100,
    fullMark: 150,
  },
];

export default class FeedbackChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/radar-chart-specified-domain-mfl04';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} legendType="square" dot="true"/>
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} legendType="diamond" dot="true"/>
          <Radar name="John" dataKey="C" stroke="#12ca2A" fill="#82ca9d" fillOpacity={0.6} legendType="triangle" dot="true"/>
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
