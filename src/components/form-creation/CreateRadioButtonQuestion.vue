<template>
    <div class="radiobutton-section">
        <b-field horizontal label="Radio Button Text">
            <b-input name="radiobuttontext" v-model="question.text" expanded></b-input>
        </b-field>
        <div v-for="(option, optionCounter) in question.options" v-bind:key="optionCounter">
            <b-field horizontal label="Radio Option Text">
                <b-input name="radiooptiontext" v-model="option.text" expanded></b-input>
            </b-field>
            <b-field horizontal label="Radio Option Value">
                <b-input name="radiooptionvalue" v-model="option.value" expanded></b-input>
            </b-field>
        </div>
        <b-field horizontal>
            <p class="control">
                <button class="button is-primary" @click="addRadioButtonOption()">
                Add Radio Option
                </button>
            </p>
        </b-field>
    </div>
</template>

<script>
export default {
    name: 'CreateRadioButtonQuestion',
    props: {
        question: Object
    },
    methods: {
        //Emits event to trigger adding a question option
        addRadioButtonOption(){
            this.$emit('addOption');
        }
    }
}
</script>