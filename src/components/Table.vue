<template>
  <div class="row">
    <table v-if="showTable" class="table my-3">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Salary</th>
          <th scope="col">Joined</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" v-bind:key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.salary }}</td>
          <td>{{ item.joined }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div>{{ tableData.fileData }}</div> -->
  </div>
</template>
<script>
import _ from "lodash";
import store from "@/store";
export default {
  props: {},
  computed: {
      tableData: () => store.state.fileData,
      showTable: function () { return store.state.fileData.hasOwnProperty('length') && store.state.fileData.length > 0 }
  }
};
</script>
<style scoped>
/*scoped styles*/
</style>

