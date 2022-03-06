import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useSidebarStore = defineStore("sidebar", () => {
  const visibility = ref(useStorage("visibility", true));

  const toggleVisibility = () => {
    visibility.value = !visibility.value;
  };

  const updateVisibility = (value) => {
    visibility.value = value;
  };

  const unfoldablity = ref(useStorage("unfoldablity", true));

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
