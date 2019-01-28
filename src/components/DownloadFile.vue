<template>
  <div class="row">
    <button class="btn btn-secondary mx-auto" @click="doDownload">{{ btnTitle }}</button>
    <a ref="downloadLink" class="invisible"></a>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: {
    btnTitle: {
      type: String,
      default: `Download`
    },
    initText: {
      type: String,
      default: `some test data`
    },
    fileName: {
      type: String,
      default: `test.txt`
    }
  },
  computed: {
    textData: function() {
      return this.initText;
    }
  },
  methods: {
    doDownload: function () {
        var element = this.$refs.downloadLink;
        element.setAttribute(
          "href",
          "data:text/plain;charset=utf-8," + encodeURIComponent(this.textData)
        );
        element.setAttribute("download", this.fileName);
        element.click();
    }
  }
};
</script>
<style scoped>
/*scoped styles*/
</style>

