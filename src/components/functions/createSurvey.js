import { computed, reactive, ref, watch } from '@vue/composition-api';
import { minLength } from './validators';
import axios from 'axios';

export function useCreateSurvey() {
    //New survey data
    const title = ref('');
    const state = reactive({
        questionSections: []
    })

    //Adds a question section
    function addSection(){
        let section = reactive({
            name: '',
            description: '',
            nameError: '',
            descriptionError: '',
            questions: []
        })
        watch(section, value => {
            value.nameError = minLength(value.name, 3, 'Section name');
            value.descriptionError = minLength(value.description, 3, 'Section description');
        })
        state.questionSections.push(section);
    }

    //Adds a question to the question section at the given index
    function addQuestion(questionDetails){
        state.questionSections[questionDetails.counter].questions.push({
            type: questionDetails.type,
            text: '',
            options: [],
            value: ''
        })
    }

    //Adds an option to the question and the provided index
    function addOption(indices){
        state.questionSections[indices.counter].questions[indices.questionCounter].options.push({
            text: '',
            value: ''
        })
    }

    //Saves data to the json-server
    function pushData(){
        axios.post("http://localhost:3000/survey",
        {
            title: title.value,
            questionSections: state.questionSections
        },
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            console.log(response.data);
        })
    }

    return {
        title,
        //Computed -> acts as a simple getter for the question section array
        questionSections: computed(() => state.questionSections),
        addSection,
        addQuestion,
        addOption,
        pushData
    }
}