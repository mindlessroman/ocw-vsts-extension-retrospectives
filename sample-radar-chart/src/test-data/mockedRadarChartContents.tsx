import { ParticipantResponseModel } from "../models/participantResponseModel";

export const testMaxRange = 10;

export function generateRandomTestData() {
  let testData: ParticipantResponseModel[] = [];

  for (var i = 0; i < 10; i++) {
    let currentUserData: Map<number, number> = new Map();
    for (var j = 0; j < 5; j++) {
      currentUserData.set(j + 1, Math.floor(Math.random() * testMaxRange));
    }
    testData.push({
      userId: i, responses: currentUserData
    });
  }

  return testData;
};

export const testQuestions = [
  { questionName: 'Engineering Principles', questionId: 1},
  { questionName: 'Leadership', questionId: 2},
  { questionName: 'Psychological Safety', questionId: 3},
  { questionName: 'Career Development', questionId: 4},
  { questionName: 'Project Status', questionId: 5},
];