<template>
    <div class="section">
        <b-field horizontal label="Section Name" :message="section.nameError">
            <b-input name="name" v-model="section.name" expanded></b-input>
        </b-field>
        <b-field horizontal label="Section Description" :message="section.descriptionError">
            <b-input name="description" v-model="section.description" expanded></b-input>
        </b-field>
        <div v-for="(question, questionCounter) in section.questions" v-bind:key="questionCounter">
            <CreateCheckboxQuestion v-if="question.type == 'checkbox'" v-bind:question="question"/>
            <CreateRadioButtonQuestion v-if="question.type == 'radio'" v-bind:question="question" @addOption="addOption(questionCounter)"/>
            <CreateTextareaQuestion v-if="question.type == 'textarea'" v-bind:question="question"/>
        </div>
        <b-field horizontal style="padding: 1em">
            <p class="control">
                <button class="button is-primary" @click="addQuestion('checkbox')">
                Add Checkbox Question
                </button>
            </p>
            <p class="control">
                <button class="button is-primary" @click="addQuestion('radio')">
                Add Radio Button Question
                </button>
            </p>
            <p class="control">
                <button class="button is-primary" @click="addQuestion('textarea')">
                Add Text Area Field
                </button>
            </p>
        </b-field>
    </div>
</template>

<script>
import CreateCheckboxQuestion from './CreateCheckboxQuestion'
import CreateRadioButtonQuestion from './CreateRadioButtonQuestion'
import CreateTextareaQuestion from './CreateTextareaQuestion'

export default {
    name: "CreateSection",
    components: {
        CreateCheckboxQuestion,
        CreateRadioButtonQuestion,
        CreateTextareaQuestion
    },
    props: {
        section: Object,
        counter: Number
    },
    methods: {
        //Emits event to trigger adding a question
        addQuestion(type){
            this.$emit('addQuestion', 
            {
                type: type,
                counter: this.counter
            })
        },
        //Emits event to trigger adding a question option
        addOption(questionCounter){
            this.$emit('addOption',
            {
                counter: this.counter,
                questionCounter: questionCounter
            })
        }
    }
}
</script>