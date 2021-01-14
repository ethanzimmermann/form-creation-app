import axios from 'axios';

export function useTakeSurvey() {
    //Saves a submission for the given assessment
    function saveSubmission(submission) {
        axios.post("http://localhost:3000/submission",{
                title: submission.title,
                questionSections: submission.questionSections,
                templateId: submission.id
            }, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
    }

    return {
        saveSubmission
    }
}