<template>
  <m-popup @close-dialog="onClose" componentWidth="444">
    <template #content>
      <div class="popup__content">
        <div class="icon icon-48 icon--alert" v-if="showDialogOnType.alert"></div>
        <div class="icon icon-48 icon--warning" v-if="showDialogOnType.warning | showDialogOnType.selectable"></div>
        <div style="margin-left: 20px">
          {{text}}
        </div>
      </div>

    </template>
    <template #footer>
      <div id="alert" v-if="showDialogOnType.alert">
        <m-button text="Đóng" @click="onClose"></m-button>
      </div>
      <div id="warning" v-if="showDialogOnType.warning">
        <m-button text="Đồng ý" @click="onClose"></m-button>
      </div>
      <div id="selectable" v-if="showDialogOnType.selectable">
        <button class="button--cancel" @click="onClose">Không</button>
        <m-button text="Đồng ý" @click="onOk"></m-button>
      </div>
    </template>
  </m-popup>
</template>
<script>
import { DIALOG_TYPE } from '../../constants.js';

export default {
  props: {
    text: String,
    dialogType: String,
  },
  data() {
    return {
      showDialogOnType: {
        alert: false,
        warning: false,
        selectable: false
      }
    }

  },
  created() {
    if (this.dialogType === DIALOG_TYPE.ALERT) {
      this.showDialogOnType.alert = true;
    } else if (this.dialogType === DIALOG_TYPE.WARNING) {
      this.showDialogOnType.warning = true;
    } else {
      this.showDialogOnType.selectable = true;
    }
  },
  methods: {
    onClose() {
      this.$emit('close-warning');
    },
    onOK() {
      this.$emit('ok-warning');
    }
  },
  name: "m-warning",
}
</script>
<style scoped>
@import url(../../css/base/icon.css);

#alert {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  margin: 15px 0;
}
#warning {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 32px;
  margin: 15px 0;
}
#selectable {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  margin: 15px 0;
}
.popup__content {
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: inherit;
  padding: 0;
  align-items: center;
}
button {
  height: 32px;
  min-width: 70px;
  padding: 4px 12px;
}

button:hover {
  cursor: pointer;
}

.button--cancel {
  background-color: unset;
  color: #000;
  border: solid 1px #bbbbbb;
}

.button--cancel:hover,
.button--cancel:focus {
  background-color: #ccc;
}
</style>