<template>
  <UtilityHeader></UtilityHeader>
  <router-view></router-view>
</template>

<script>
import UtilityHeader from '@/components/common/UtilityHeader.vue';

export default {
  name: 'UtilitiesView',
  components: { UtilityHeader },
};
</script>

<style scoped>

</style>
