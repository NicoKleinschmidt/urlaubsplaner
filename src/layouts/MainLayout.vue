<template>
  <q-layout view="lHh Lpr lFf">
    <main-sidebar :items="items" />

    <q-page-container>
      <h2>{{ currentRouteTitle }}</h2>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MainSidebar, { SidebarItem } from 'src/components/MainSidebar.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const leftDrawerOpen = ref(false);

// Collection of items displayed in sidebar
const items: SidebarItem[] = [
  {
    label: 'Dashboard',
    to: '/',
  },
  {
    label: 'Neuer Antrag',
    to: 'new',
  },
  {
    label: 'Kalendar',
    to: 'calendar',
  },
  {
    label: 'Profil',
    to: 'profile',
  },
];

const route = useRoute();
const currentRouteTitle = computed(() => {
  return (route.meta.title as string) ?? '';
});

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
