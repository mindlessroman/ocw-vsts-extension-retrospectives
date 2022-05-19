
import { ParticipantResponseModel } from 'src/models/participantResponseModel'
import { QuestionInformationModel } from 'src/models/questionInformationModel'
import { NumericDictionary } from 'lodash'

export namespace TestHelper {

    export function CreateQuestionInformationModel(QuestionInformation?: QuestionInformationModel): QuestionInformationModel {
        const newQuestionInformation: QuestionInformationModel = {
            questionId: null,
            questionName: null,
            questionDetails: null
        };
        return newQuestionInformation;
    }

    export function CreateParticipantResponseModel(participantResponse?: ParticipantResponseModel): ParticipantResponseModel {
        const newParticipantResponse: ParticipantResponseModel = {
            userId: null,
            responses: null
        };
        return newParticipantResponse;
    }
}


export namespace TestData {

    const participantResponse

}