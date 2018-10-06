<template>
    <div class="app">
        <div class="cover"></div>
        <m-header></m-header>
        <m-footer></m-footer>
        <m-todo></m-todo>
    </div>
</template>

<script>
    import MHeader from './views/MHeader.vue'
import MFooter from './views/MFooter.vue'
import Todo from './views/todo.vue'
export default {
      name: 'App',
      components: {
        'm-header': MHeader,
        'm-footer': MFooter,
        'm-todo': Todo
      },
      data () {
        return {
          msg: 'ffffff'
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .app
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        .cover
            position absolute
            left 0
            top 0
            right 0
            bottom 0
            background-color #999
            opacity .9
            z-index -1

</style>