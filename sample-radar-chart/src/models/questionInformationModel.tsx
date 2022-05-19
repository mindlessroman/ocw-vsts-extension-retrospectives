// The QuestionInformationModel requires the following parameters
// QuestionId : The ID of the Question being asked, an integer.
// QuestionName : The Name of the Question being asked, such as
//   'Engineering Principles'.
// QuestionDetails: The detailed question text.
export interface QuestionInformationModel {
  questionId: number;
  questionName: string;
  questionDetails: string;
};