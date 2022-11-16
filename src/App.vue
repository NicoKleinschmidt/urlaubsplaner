<template>
  <router-view />
</template>

<script setup lang="ts">
import { colors, useQuasar } from 'quasar';

const q = useQuasar();

q.dark.set(true);
</script>
