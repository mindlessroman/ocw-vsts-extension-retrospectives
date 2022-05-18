import React from 'react';
import QuestionResponseItem from './questionResponseItem';
import SubmitButtonContainer from './submitButtonContainer';

export default function QuestionResponseContainer() {
    return (
        <div className="question-response-container">
            <h1>
                Question Response Area
            </h1>
            <QuestionResponseItem />
            <QuestionResponseItem />

            <SubmitButtonContainer />
        </div>
    )
}