// The ParticipantResponseModel requires the following parameters
// UserId : The ID of the User responding, an integer.
// Responses : A collection of the user's responses mapped to
// the corresponding question.
export interface ParticipantResponseModel {
  userId: number;
  responses: [number][];
};