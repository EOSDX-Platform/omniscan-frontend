<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <sp-theme :system.attr="'spectrum'" color="light" scale="large" class="custom-theme">
		<RouterView />
  </sp-theme>
</template>