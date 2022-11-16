<template>
  <q-drawer
    class="q-pa-md bg-darkpage"
    :behavior="'desktop'"
    show-if-above
    side="left"
  >
    <q-card>
      <q-list>
        <q-item v-for="item in items" :key="item.to" :to="item.to" exact>
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section> {{ item.label }} </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-drawer>
</template>

<script setup lang="ts">
export interface SidebarItem {
  label: string;
  icon?: string;
  to: string;
}

defineProps<{
  items: SidebarItem[];
}>();
</script>

<style>
.q-drawer {
  background-color: #121212;
}
</style>
