import { ref } from "vue";
import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const visibility = ref(true);

  const toggleVisibility = () => {
    visibility.value = !visibility.value;
  };

  const updateVisibility = (value) => {
    visibility.value = value;
  };

  const unfoldablity = ref(true);

  const toggleUnfoldablity = () => {
    unfoldablity.value = !unfoldablity.value;
  };

  const updateUnfoldablity = (value) => {
    unfoldablity.value = value;
  };

  return {
    visibility,
    toggleVisibility,
    updateVisibility,
    unfoldablity,
    toggleUnfoldablity,
    updateUnfoldablity,
  };
});
