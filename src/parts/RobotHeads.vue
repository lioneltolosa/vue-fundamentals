<template>
  <div>
    <h2>Heads</h2>
    The head is where the brain of your robot will reside. Heads have
    different capabilities so be sure to choose the one that fits your needs.
    <div v-for="(head, idx) in parts.heads" :key="idx">
      <h4>{{head.title}}</h4>
      <div>{{head.description}}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixins from './get-parts-mixins';

export default {
  name: 'RobotHeads',
  mixins: [
    getPartsMixins,
  ],
};
</script>
