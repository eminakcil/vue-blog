<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebar.unfoldablity"
    :visible="sidebar.visibility"
    @visible-change="sidebar.updateVisibility"
  >
    <CSidebarBrand>
      <CIcon custom-class-name="sidebar-brand-full" :icon="logo" :height="35" />
    </CSidebarBrand>
    <SidebarNav />
    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="sidebar.toggleUnfoldablity"
    />
  </CSidebar>
</template>

<script setup>
import { useSidebarStore } from "@/stores/sidebar";
import { SidebarNav } from "./SidebarNav";
import { logo } from "@/assets/logo";

const sidebar = useSidebarStore();
</script>
