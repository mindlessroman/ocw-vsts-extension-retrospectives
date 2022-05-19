// The ParticipantResponseModel requires the following parameters
// UserId : The ID of the User responding, an integer.
// Responses : A collection of the user's responses mapped to
// the corresponding question.
export type ParticipantResponseModel = {
  userId: number;
  responses: Map<number, number>;
};