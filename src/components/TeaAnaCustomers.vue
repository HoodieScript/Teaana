<template>
  <section class="container-fluid">
    <div
      class="bg-white shadow-sm row p-0"
      style="border-radius: 20px !important"
    >
      <div class="col-lg-6 p-3">
        <h4 class="font-weight-bold">Customers</h4>
      </div>
    </div>

    <div class="scrollable overflow-auto mt-3">
      <table class="table prodlist sticky table-borderless col-lg-12">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody id="#myTable" v-for="(user, idx) in users" v-bind:key="idx">
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import axios from "axios";
/* import swal from "sweetalert";
import $ from "jquery"; */
axios.defaults.withCredentials = true;

export default {
  data() {
    return {
      users: [],
      name: null,
      phone: null,
      email: null,
      password: null,
    };
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    },

    /* fetch */
    async getUsers() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/auth/users" //endpoint
      );
      this.users = response.data.data;
    },

    /* insert */

    /*    insertAddon: async function () {
      axios
        .post(
          "https://api.tea-ana.com/v1/addons",

          {
            name: this.name,
            price: this.price,
            category_id: this.category_id,
          }
        )
        .then((response) => {
          console.log(response);
          $("#newAddons").modal("hide");
          swal("Record Created!", "New changes are applied!", "success");

        })
        .catch((error) => {
          console.log(error.response);
        });
    },
 */
  },

  computed: {},
  async created() {
    // fetch the data pag ka load
    
    setInterval(
      function () {
        this.getUsers();
      }.bind(this),
      500
    );
  },
};
</script>
<style scoped>
.scrollable {
  height: 60vh;
}

.scrollable table.sticky th {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}
.scrollable table {
  table-layout: fixed;
}
</style>