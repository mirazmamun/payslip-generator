<template>
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">PayWays</h3>
        <nav class="nav nav-masthead justify-content-center">
          <a
            class="nav-link"
            :class="{ active: activeMenuItem === 'home' }"
            @click="makeMenuActive"
            href="#"
          >Home</a>
          <a
            class="nav-link"
            :class="{ active: activeMenuItem === 'help' }"
            data-toggle="modal"
            data-target="#exampleModal"
            @click="makeMenuActive"
            href="#"
          >Help</a>
        </nav>
      </div>
    </header>

    <main role="main" class="inner cover">
      <h1 class="cover-heading">Payslip Generator</h1>
      <form class="form-inline">
        <select class="form-control mr-2" id="month">
          <option v-for="m in months">{{ m }}</option>
        </select>
        <select class="form-control mr-2" id="year">
          <option v-for="y in years" v-bind:selected="y == curYear">{{ y }}</option>
        </select>
        <div class="form-control custom-file">
          <input
            class="custom-file-input"
            type="file"
            id="files"
            name="files"
            @change="onFileChange"
          >
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
      </form>
      <app-table></app-table>
    </main>

    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>
          &copy; Miraz Al-Mamun
          <span>{{curYear}}</span>
        </p>
      </div>
    </footer>
    <help-modal/>
  </div>
</template>

<script>
import HelpModal from "@/components/Help";
import store from "@/store";
import AppTable from "@/components/Table";
import { readFileContent } from "@/lib/Utils";
export default {
  name: "HelloWorld",
  components: { HelpModal, AppTable },
  data: function() {
    //find the list of years
    let curYear = Number(new Date().getFullYear());
    let yearCount = 2;
    let yearList = Array();
    while (yearCount > 0) {
      --yearCount;
      yearList.push(curYear - yearCount);
    }
    return {
      activeMenuItem: "home",
      curYear,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      years: yearList
    };
  },
  methods: {
    makeMenuActive(e) {
      e.preventDefault();
      this.activeMenuItem = e.target.textContent.toLowerCase();
      //if this is help item,
    },
    onFileChange(e) {
      //get the file metadata
      if (e.target.files.length > 0) {
        let file = e.target.files[0];
        //validate the file types
        readFileContent(file).then(fileContentObj => {
          //commit the change in the store
          store.commit("fileHasChanged", fileContentObj.data);
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
