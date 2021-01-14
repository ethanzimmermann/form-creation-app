<template>
    <div class="entry-form">
        <h1 class="title">{{currentSurvey.title}}</h1>
        <h1 class="title">Checkbox Questions</h1>
        <div v-for="(checkboxQuestion, counterCheckbox) in dataCheckbox" v-bind:key="counterCheckbox" style="padding-bottom: 2em">
            <b-table :data="checkboxQuestion" :columns="columnsCheckbox"></b-table>
        </div>
        <h1 class="title">Radio Button Questions</h1>
        <div v-for="(radioQuestion, counterRadio) in dataRadio" v-bind:key="counterRadio" style="padding-bottom: 2em">
            <h2 class="subtitle">{{radioQuestion.questionText}}</h2>
            <b-table :data="radioQuestion.tableRows" :columns="columnsRadio"></b-table>
        </div>
    </div>
</template>

<script>
import { computed,reactive } from '@vue/composition-api';

export default {
    name: 'ReportForm',
    props: {
        submissionList: Array,
        currentSurvey: Object
    },
    setup(props) {
        const dataCheckbox = computed(() => {
            var tablesArray = [];
            for(var i = 0; i<props.currentSurvey.questionSections.length; i++){
                for(var j = 0; j<props.currentSurvey.questionSections[i].questions.length; j++){
                    if(props.currentSurvey.questionSections[i].questions[j].type == 'checkbox'){
                        var yesCount = 0;
                        var noCount = 0;
                        var tableRows = [];
                        for(var k = 0; k<props.submissionList.length; k++){
                            if(props.submissionList[k].questionSections[i].questions[j].value == true){
                                yesCount++;
                            } else if (props.submissionList[k].questionSections[i].questions[j].value == false ||
                                props.submissionList[k].questionSections[i].questions[j].value == ""){
                                noCount++;
                            }
                        }
                        tableRows.push(
                            {
                                text: props.currentSurvey.questionSections[i].questions[j].text,
                                answer: 'Yes',
                                total: yesCount,
                                percentage: Math.round((yesCount*100)/props.submissionList.length)
                            });
                        tableRows.push(
                            {
                                text: props.currentSurvey.questionSections[i].questions[j].text,
                                answer: 'No',
                                total: noCount,
                                percentage: Math.round((noCount*100)/props.submissionList.length)
                            });
                        tablesArray.push(tableRows);
                    }
                }
            }
            return tablesArray;
        });
        const dataRadio= computed(() => {
            var tablesArray = [];
            for(var i = 0; i<props.currentSurvey.questionSections.length; i++){
                for(var j = 0; j<props.currentSurvey.questionSections[i].questions.length; j++){
                    if(props.currentSurvey.questionSections[i].questions[j].type == 'radio'){
                        var questionData = { 
                            questionText: props.currentSurvey.questionSections[i].questions[j].text,
                            tableRows: []
                        };
                        for(var l = 0; l<props.currentSurvey.questionSections[i].questions[j].options.length; l++){
                            var valueCount = 0;
                            var val = props.currentSurvey.questionSections[i].questions[j].options[l].value;
                            for(var k = 0; k<props.submissionList.length; k++){
                                if(props.submissionList[k].questionSections[i].questions[j].value == val){
                                    valueCount++;
                                }
                            }
                            questionData.tableRows.push({
                                text: props.currentSurvey.questionSections[i].questions[j].options[l].text,
                                total: valueCount,
                                percentage: Math.round((valueCount*100)/props.submissionList.length)
                            })
                        }
                        tablesArray.push(questionData);
                    }
                }
            }
            return tablesArray;
        });
        const columnsCheckbox= reactive([
            {
                field: 'text',
                label: 'Question Text'
            },
            {
                field: 'answer',
                label: 'Answer'
            },
            {
                field: 'total',
                label: 'Response Total'
            },
            {
                field: 'percentage',
                label: 'Percentage'
            }
        ]);
        const columnsRadio= reactive([
            {
                field: 'text',
                label: 'Option Text'
            },
            {
                field: 'total',
                label: 'Response Total'
            },
            {
                field: 'percentage',
                label: 'Percentage'
            }
        ]);
        return {
            dataRadio,
            dataCheckbox,
            columnsCheckbox,
            columnsRadio,
            props
        }
    },
}
</script>
<style lang="scss">
.entry-form {
    width: 70%; 
    float: right;
    padding-right: 1em;
}
</style>