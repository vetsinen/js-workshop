<template>
  <div id="app">
    <h1>hello, {{user}}</h1>
    <ul>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function (){
    return {
      user: "john",
      todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
