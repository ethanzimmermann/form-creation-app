import { ref, computed } from "@vue/composition-api";

export function useUpdateView() {
    const currentView = ref("");

    //Change the current view between take a surve, create a survey, and report on a survey
    function updateView(newView){
        currentView.value = newView;
    }

    return {
        currentView: computed(() => currentView.value),
        updateView
    }
}