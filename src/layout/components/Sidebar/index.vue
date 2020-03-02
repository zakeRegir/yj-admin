<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
  </div>
</template>

<script>
import Logo from './Logo'
export default {
  components: { Logo }
}
</script>

<style></style>
