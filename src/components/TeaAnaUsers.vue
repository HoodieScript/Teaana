
<template>
  <section class="container-fluid">
    <div
      class="bg-white shadow-sm row p-0"
      style="border-radius: 20px !important"
    >
      <div class="col-lg-6 p-3">
        <h4 class="font-weight-bold">Account</h4>
      </div>
      <div class="col-lg-6 p-3">
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <button
              class="btn btn-sm text-white"
              style="background-color: #028476"
              data-toggle="modal"
              data-target="#newproducts"
            >
              Create Account
            </button>
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fas fa-search"></i
              ></span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="search"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- insert form product -->

    <div
      class="modal fade"
      id="newproducts"
      tabindex="-1"
      aria-labelledby="newproducts"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newproducts">Account</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group text-left">
                <small class="pb-3">Account Name</small>

                <input type="text" class="form-control" v-model="name" />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Email</small>

                <input type="text" class="form-control" v-model="email" />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Password</small>

                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Admin</small>

                <input
                  type="number"
                  class="form-control"
                  v-model.number="admin"
                />
              </div>

              <div class="form-group">
                <input
                  type="button"
                  @click="insertUser()"
                  class="btn btn-sm float-right pl-3 pr-3 text-white"
                  style="background-color: #028476; border-radius: 20px"
                  value="create"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--end of  insert form product -->

    <!-- update each product -->

    <div
      class="modal fade"
      id="upProducts"
      tabindex="-1"
      aria-labelledby="upProducts"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newproducts">Update Products</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
        </div>
      </div>
    </div>
    <!-- end update of each product -->
    <div class="scrollable overflow-auto mt-3">
      <table class="table prodlist sticky table-borderless col-lg-12">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th style="width: 120px !important" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody v-for="(user, idk) in users" :key="idk">
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.admin }}</td>

            <td>
              <button
                class="btn btn-sm"
                data-toggle="modal"
                data-target="#upProducts"
                @click="eachProduct(user.id)"
                style="background-color: #5cd85c"
              >
                <i class="far fa-edit text-white"></i>
              </button>
            </td>
            <td>
              <button
                type="submit"
                data-toggle="modal"
                data-target="#delProducts"
                class="btn btn-sm"
                @click="deleteUsers(user.id)"
                style="background-color: #028476"
              >
                <i class="far fa-trash-alt text-white"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- update per product -->

    <!--end of update per product -->
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      eachuser: [],
      name: null,
      email: null,
      password: null,
      admin: null,
    };
  },
  methods: {
    handleInput(e) {
      this.val = e.target.value.replace(/[^\d]/g, "");
    },
    async getUsers() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/auth/users" //endpoint
      );

      this.users = response.data.data;
      console.log(this.users);
    },
    insertUser: async function () {
      axios
        .post("https://api.tea-ana.com/v1/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          admin: this.admin,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    async eachUser(id) {
      axios
        .get("https://api.tea-ana.com/v1/auth/users/" + id)
        .then((response) => {
          this.eachuser = response.data.data;
        });
      console.log(this.eachuser);
    },

    async deleteUsers(id) {
      axios
        .delete(`https://api.tea-ana.com/v1/auth/users` + id)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  computed: {},
  async created() {
    // fetch the data pag ka load
    this.getUsers();
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
