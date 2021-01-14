<template>
    <div class="entry-form">
        <b-field horizontal label="Survey Title">
            <b-input name="Title" v-model="title" expanded></b-input>
        </b-field>
        <div v-for="(section, counter) in questionSections" v-bind:key="counter">
            <CreateSection v-bind:section="section" v-bind:counter="counter" @addQuestion="addQuestion" @addOption="addOption"/>
        </div>

        <b-field horizontal>
            <p class="control">
                <button class="button is-primary" @click="addSection">
                Add Section
                </button>
            </p>
            <p class="control">
                <button class="button is-primary" @click="saveData">
                Save Survey
                </button>
            </p>
        </b-field>
    </div>
</template>

<script>
import CreateSection from './CreateSection'
import { useCreateSurvey } from './../functions/createSurvey'

export default {
    name: 'CreateForm',
    setup() {
        //Get new survey data and methods from the linked Composition Api function
        const { title, questionSections, addSection, addQuestion, addOption, pushData } = useCreateSurvey()
        
        //Emit survey list reload on save
        function saveData(){
            pushData();
            this.$emit('reload');
        }

        return {
            title,
            questionSections,
            saveData,
            addSection,
            addQuestion,
            addOption
        }
    },
    components:{
        CreateSection
    },
}
</script>
<style lang="scss">
.entry-form {
    width: 70%; 
    float: right;
    padding-right: 1em;
}
.section {
    border: 1px solid black;
    padding-bottom: 1em;
}
.checkbox-section {
    background-color: yellow;
    padding: 1em; 
}
.radiobutton-section {
    background-color: red;
    padding: 1em; 
}
.textarea-section {
    background-color: lightblue;
    padding: 1em; 
}
</style>