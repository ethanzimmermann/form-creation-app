<template>
    <b-navbar centered="true">
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-success is-light" @click="updateView('takeView')">
                        <strong>Take a Survey</strong>
                    </a>
                    <a class="button is-primary is-light" @click="updateView('createView')">
                        <strong>Create a Survey</strong>
                    </a>
                    <a class="button is-info is-light" @click="updateView('reportView')">
                        <strong>Survey Reports</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>

export default {
    name: 'Header',
    setup() {
        function updateView(newView){
            this.$emit('updateView',newView)
        }
        return {
            updateView
        }
    },
}
</script>