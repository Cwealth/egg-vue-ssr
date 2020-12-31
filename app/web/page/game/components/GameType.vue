<template>
  <div class="line-item">
    <div class="title">{{ title }}:</div>
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        :class="activeId == item.id?'active':''"
        @click="handleSelect(item)"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null
    },
    keyValue: {
      type: String,
      default: null
    },
    activeId: {
      type: [Number, String],
      default: null
    }
  },
  methods: {
    handleSelect(d) {
      const obj = {
        key: this.keyValue,
        id: d.id
      }
      this.$emit('handle-select', obj)
    }
  }
}
</script>

<style lang="scss" scoped >
@import '@/styles/variables.scss';
.line-item {
    height: auto;
    overflow: hidden;
    padding: 9px 0px;
    .title {
        float: left;
        width: 85px;
        // margin-right: 20px;
        font-size: 14px;
        color: #333333;
    }
    ul {
        float: left;
        font-size: 13px;
        list-style: none;
        max-width: 970px;
        li {
            display: inline-block;
            font-size: 13px;
            color: #666666;
            margin-left: 18px;
            padding: 2px 8px;
            border-radius: 4px;
            margin-bottom: 10px;
            cursor: pointer;
            &.active {
                background-color: $mainColor;
                color: white;
            }
            &:hover {
                background-color: $mainColor;
                color: white;
            }
        }
    }
}
</style>
