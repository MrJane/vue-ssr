<template>
    <div>
        <input
           type="checkbox"
           class="toggle"
           v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button @click="delTodo" class="destory"></button>
    </div>
</template>

<script>
    export default {
      name: 'item',
      props: {
        todo: {
          type: Object,
          required: true
        }
      },
      methods: {
        delTodo () {
          console.log('deltodo')
        }
      }
    }
</script>

<style scoped>

</style>