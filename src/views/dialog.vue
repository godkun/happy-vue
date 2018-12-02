<template>
  <div class="home">
    <button class="dao-btn blue"
      @click="dialogConfig[0].visible = true">
      显示对话框
    </button>
    <HappyDialog
      :config="dialogConfig[0].config"
      :visible.sync="dialogConfig[0].visible">
      <div class="pure-text">
        body<br />
        body<br />
        body<br />
        body<br />
        body<br />
        body<br />
      </div>
    </HappyDialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogConfig: [
        {
          config: {
            title: '这是个标题'
          },
          visible: false,
        },
      ],
    }
  },

  methods: {
  },
}
</script>

<style lang='scss' scoped>
  .pure-text {
    padding: 20px;
  }
</style>


