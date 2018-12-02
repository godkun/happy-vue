<template>
  <div class="hello">
    <h1>{{ msg }}hahahah</h1>
  </div>
</template>

<script>
export default {
  name: 'Happy',
  props: {
    msg: String
  }
}
</script>

<style scoped = 'scss'>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
