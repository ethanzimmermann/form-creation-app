<template>
    <div class="checkbox-section">
        <b-field horizontal label="Question Text" message="Please enter a subject">
            <b-input name="checkboxtext" v-model="question.text" expanded></b-input>
        </b-field>
    </div>
</template>

<script>
export default {
    name: 'CreateCheckboxQuestion',
    props: {
        question: Object
    }
}
</script>