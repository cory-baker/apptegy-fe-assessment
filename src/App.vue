<template>
  <div class="hello">Hello world</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { $api } from './api';

onMounted(async () => {
  console.log(await $api.fetchWitchesAndWizards());
});
</script>
