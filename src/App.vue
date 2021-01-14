<template>
  <div id="app">
    <Header @updateView="updateView" />
    <Sidebar :surveyList="surveyList" @clickedSurvey="loadClickedSurvey"/>
    <CreateForm v-if="currentView == 'createView'" @reload="loadSurveyList()"/>
    <TakeForm v-if="currentView == 'takeView'" :currentSurvey="currentSurvey"/>
    <ReportForm v-if="currentView == 'reportView'" :currentSurvey="currentSurvey" :submissionList="submissionList"/>
  </div>
</template>

<script>
import Header from './components/general/Header'
import Sidebar from './components/general/Sidebar'
import CreateForm from './components/form-creation/CreateForm'
import TakeForm from './components/form-submission/TakeForm'
import ReportForm from './components/form-reporting/ReportForm'
import { computed } from "@vue/composition-api";

import { useLoadSurveyApi } from './components/functions/loadSurvey'
import { useUpdateView } from './components/functions/updateView'


export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    CreateForm,
    TakeForm,
    ReportForm
  },
  setup() {
    //Loads survey interactions from the linked composition api function
    const { survey, loadClickedSurvey, surveyList, loadSurveyList, submissionList } = useLoadSurveyApi();

    //Loads simple routing data from the linked composition api function
    const { currentView, updateView } = useUpdateView();

    //Load survey list on creation
    loadSurveyList();

    return {
      currentSurvey: computed(() => survey.value),
      updateView,
      loadClickedSurvey,
      loadSurveyList,
      submissionList,
      currentView: computed(() => currentView.value),
      surveyList: computed(() => surveyList.value)
    }
    
  }
}
</script>
