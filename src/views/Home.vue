<template>
  <div style="height:100%;">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="es6">

  export default {
    components: {},
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate(to, from, next) {
      if (this.in_array(to.path, this.$route.meta.from)) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      setTimeout(() => {
        next()
      }, 60)
    },
    methods: {
      //设置底栏高亮项
      active() {
        return '/' + this.$route.path.split("/")[1];
      },
      //  判断数组中是否包含某个值
      in_array(v, arr) {
        var output = false;
        for (var i in arr) {
          if (v == arr[i]) {
            output = true;
            return output;
          }
        }
        output = false;
        return output;
      }
    },
    mounted() {

    }
  }
</script>
<style scoped>
  .child-view {
    position: absolute;
    transition: all .4s cubic-bezier(.55, 0, .1, 1);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    will-change: transform;
  }

  .slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    z-index: 1;
  }

  .slide-left-leave-active, .slide-right-enter {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    z-index: -1;
  }
</style>
