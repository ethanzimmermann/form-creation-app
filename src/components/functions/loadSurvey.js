import { ref, computed } from "@vue/composition-api";
import axios from "axios";

export function useLoadSurveyApi() {
    //Global survey data
    const survey = ref({});
    const surveyList = ref([]);
    const submissionList = ref([])
    
    //Loads a clicked survey and submission list for the survey
    function loadClickedSurvey(surveyId){
        axios.get("http://localhost:3000/survey/"+surveyId,
            {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            survey.value = response.data;
        });
        axios.get("http://localhost:3000/submission?templateId="+surveyId,
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            submissionList.value = response.data;
        })
    }

    //Loads the current list of surveys
    function loadSurveyList(){
        axios.get("http://localhost:3000/survey",
            {
              headers: {
                  'Access-Control-Allow-Origin': '*'
              }
            }).then(response => {
                surveyList.value = response.data;
            });
    }

    return {
        survey: computed(() => survey.value),
        surveyList: computed(() => surveyList.value),
        submissionList: computed(() => submissionList.value),
        loadSurveyList,
        loadClickedSurvey

    }
}