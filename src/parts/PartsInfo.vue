<template>
    <div>
        <h1>{{ part.title}}</h1>
        <div>
            {{ part.description}}
        </div>
    </div>
</template>

<script>
// import parts from '../data/parts';
import getPartsMixins from './get-parts-mixins';

export default {
  name: 'PartInfo',
  mixins: [
    getPartsMixins,
  ],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this;
      return this.parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
