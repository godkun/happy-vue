<template>
  <transition name="hp-dialog">
    <div class="hp-dialog-backdrop"
      v-if="visible">
      <div class="hp-dialog-wrapper">
        <div class="hp-dialog-container">
          <HappyDialogHeader
            :title="config.title || ''"
            v-if="config.showHeader !== false "
            @close="doClose"
          ></HappyDialogHeader>
          <div class="hp-dialog-body">
            <slot></slot>
          </div>
          <div class="hp-dialog-footer"
            v-if="config.showFooter !== false">
            <slot name="footer">
              <button class="hp-btn ghost"
                @click="clickCancel">取消</button>
              <button class="hp-btn blue"
                @click="clickConfirm">确认</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import HappyDialogHeader from './happy-dialog-header/happy-dialog-header'

export default {
  name: 'HappyDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },

    config: {
      type: Object,
      required: true,
      default() {
        return {
          title: '',
          type: 'md',
          shoeHeader: true,
          showFooter: true,
        }
      },
    },

    step: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      steps: [],
      activeStep: 0
    }
  },

  computed: {
  },

  methods: {
    doClose() {
      this.$emit('update:visible', false)
    },
    clickCancel() {
      this.$emit('update:visible', false);
    },
     clickConfirm() {
      this.$emit('update:visible', false);
    }
  },

  watch: {

  },

  components: {
    HappyDialogHeader,
  }

}
</script>


<style lang='scss'>
@import './happy-dialog.scss'
</style>
