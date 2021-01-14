<template>
    <div class="entry-form">
        <h1 class="title">{{currentSurvey.title}}</h1>
        <div v-for="(section, counter) in currentSurvey.questionSections" v-bind:key="counter" style="padding-bottom:2em">
            <h1 class="subtitle">
                {{section.name}}
            </h1>
            <label style="font-style: italic;">
                {{section.description}}
            </label>
            <div v-for="(question, counterQuestion) in section.questions" v-bind:key="counterQuestion">
                <div v-if="question.type == 'checkbox'" style="margin-top: 1em">
                    <b-checkbox type="is-info" v-model="question.value">{{question.text}}</b-checkbox>
                </div>
                <div v-if="question.type == 'radio'" style="margin-top: 1em">
                    <label class="subtitle" style="margin-top: 1em">
                        {{question.text}}
                    </label>
                    <div v-for="(option, optionCounter) in question.options" v-bind:key="optionCounter">
                        <b-radio v-model="question.value" v-bind:native-value="option.value" type="is-info">
                            {{option.text}}
                        </b-radio>
                    </div>
                </div>
                <div v-if="question.type == 'textarea'" style="margin-top: 1em">
                    <b-field horizontal v-bind:label="question.text">
                        <b-input v-bind:placeholder="question.filler" v-model="question.value"></b-input>
                    </b-field>
                </div>
            </div>
        </div>
        <p class="control">
            <button class="button is-primary" @click="saveSubmission(currentSurvey)">
                Submit Survey
            </button>
        </p>
    </div>
</template>

<script>
import { useTakeSurvey } from './../functions/takeSurvey'

export default {
    name: 'TakeForm',
    props: {
        currentSurvey: Object
    },
    setup(props){
        //Loads survey submission from the linked composition api function
        const { saveSubmission } = useTakeSurvey();

        return {
            props,
            saveSubmission
        }
    }
}
</script>
<style lang="scss">
.entry-form {
    width: 70%; 
    float: right;
    padding-right: 1em;
}
</style>