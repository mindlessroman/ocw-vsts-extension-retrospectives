import React from 'react';

export default function SubmitButtonContainer() {

    /*   const handleSubmitButton = (event: React.FormEvent<HTMLFormElement>) => {
           // todo: this function will write data into DB
   
           // prevent page from reload
           event.preventDefault()
           // random alert
           alert("You submitted something!")
       }
   */
    return (
        <div className="SubmitButton">
            <button type="submit">Submit</button>
        </div>
    );
};