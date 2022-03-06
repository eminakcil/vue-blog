<script setup>
import { CContainer } from "@coreui/vue";
import AppFooter from "@/components/management/Footer.vue";
import AppHeader from "@/components/management/Header.vue";
import AppSidebar from "@/components/management/Sidebar.vue";
</script>

<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
        <CContainer lg>
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss" src="@/styles/management/style.scss"></style>
