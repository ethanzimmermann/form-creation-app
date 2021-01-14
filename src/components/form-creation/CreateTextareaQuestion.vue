<template>
    <div class="textarea-section">
        <b-field horizontal label="Question Text" message="Please enter a subject">
            <b-input name="subject" v-model="question.text" expanded></b-input>
        </b-field>   
        <b-field horizontal label="Question Filler Text" message="Please enter a subject">
            <b-input name="subject" v-model="question.filler" expanded></b-input>
        </b-field>   
    </div>
</template>
<script>
export default {
    name: 'CreateTextareaQuestion',
    props: {
        question: Object
    }
}
</script>