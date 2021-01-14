<template>
    <div class="sidebar-page">
            <b-sidebar
            position="static"
            mobile="reduce"
            :expand-on-hover=false
            :reduce=false
            :fullheight=true
            type="is-light"
            open
        >
            <div class="p-1">
                <b-menu class="is-custom-mobile">
                    <b-menu-list label="Surveys">
                        <div v-for="(survey, surveyCounter) in surveyList" v-bind:key="surveyCounter">
                            <b-menu-item icon="information-outline" v-bind:label="survey.title" @click="onClickSurvey(survey.id)"></b-menu-item>
                        </div>
                    </b-menu-list>
                </b-menu>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
      surveyList: Array
  },
  setup() {
    function onClickSurvey(surveyId) {
        this.$emit('clickedSurvey', surveyId);
    }

    return {
        onClickSurvey
    }
  }
};
</script>

<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 30%;
    float: left;
    min-height: 100%;
    height: 100%;
    // min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
        // min-height: 100vh;
    }
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>