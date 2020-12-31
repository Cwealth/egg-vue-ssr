<template>
  <div class="game-view">
    <div v-for="item in list" :key="item.id" class="item">
      <div class="banner">
        <img :src="item.iconUrl" :alt="item.name" @error="errorGameLogoImg">
      </div>
      <div class="name">{{ item.name }}</div>
      <div class="type">{{ item.typeName }}</div>
      <div class="num">{{ item.clickNum }}人在玩</div>
      <button @click="$router.push(`/game/detail/${item.id}`)">开始游戏</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped >
@import '@/styles/variables.scss';
.game-view {
    height: auto;
    overflow: hidden;
    padding: 10px 0px;
    .item {
        float: left;
        width: 190px;
        padding: 15px 0px;
        text-align: center;
        border-radius: 10px;
        box-shadow: 2px 0px 10px rgba(174,174,174,0.45);
        margin: 0px 18px 18px 0px;
        &:nth-child(6n) {
            margin-right: 0px;
        }
        .banner {
            img {
                display: inline-block;
                width: 100px;
                height: 100px;
                border-radius: 20px;
            }
        }
        background-color: white;
        .name {
            font-size: 16px;
            color: #333333;
            margin-bottom: 5px;
        }
        .type {
            font-size: 13px;
            color: $mainColor;
            margin-bottom: 5px;
        }
        .num {
            font-size: 14px;
            color: #999999;
            margin-bottom: 10px;
        }
        button {
            width: 120px;
            height: 33px;
            background-color: transparent;
            color: $mainColor;
            border:1px solid $mainColor;
            font-size: 14px;
            border-radius: 4px;
            cursor: pointer;
            outline: none;
            &:hover {
                background-color: $mainColor;
                color: white;
            }
        }
    }
}
</style>
