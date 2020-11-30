<template>
  <section class="container-fluid">
    <div
      class="bg-white shadow-sm row p-0"
      style="border-radius: 20px !important"
    >
      <div class="col-lg-6 p-3">
        <h4 class="font-weight-bold">Addons</h4>
      </div>
      <div class="col-lg-6 p-3">
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <button
              class="btn btn-sm text-white"
              style="background-color: #028476"
              data-toggle="modal"
              data-target="#newAddons"
            >
              New Addon
            </button>
          </div>
          <!-- <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fas fa-search"></i
              ></span>
            </div>
            <input
              type="search"
              v-model="search"
              class="form-control"
              required
              placeholder="search"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </div> -->
        </div>
      </div>
    </div>
    <!-- insert form product -->

    <div
      class="modal fade"
      id="newAddons"
      tabindex="-1"
      aria-labelledby="newAddons"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newAddons">New Addon</h5>
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
                <small class="pb-3">Addon Name</small>

                <input
                  type="text"
                  class="form-control"
                  required
                  v-model="name"
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Addon Price</small>

                <input
                  type="number"
                  class="form-control"
                  v-model.number="price"
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Addon Category</small>
                <select
                  class="form-control custom-select"
                  required
                  v-model.number="category_id"
                >
                  <option
                    v-for="(category, idx) in categories"
                    :value="category.id"
                    v-bind:key="idx"
                  >
                    {{ category.id }} - {{ category.name }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <input
                  type="button"
                  @click="insertAddon()"
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
      id="upAddons"
      tabindex="-1"
      aria-labelledby="upAddonssss"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newAddons">Update Addon</h5>
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
                <small class="pb-3">Addon Name</small>
                <input
                  type="text"
                  class="form-control"
                  v-model="eachofaddon.name"
                />
              </div>
              <div class="form-group text-left">
                <small class="pb-3">Addon Price</small>

                <input
                  type="number"
                  class="form-control"
                  v-model.number="eachofaddon.price"
                  required
                />
              </div>
              <div class="form-group text-left">
                <small class="pb-3">Addon type</small>
                <select
                  v-model.number="eachofaddon.category_id"
                  @change="onChange"
                  class="form-control custom-select"
                  required
                >
                  <!--                   <option selected disabled>--- select type ---</option>
 -->
                  <option
                    v-for="(category, idx) in categories"
                    :value="category.id"
                    v-bind:key="idx"
                  >
                    {{ category.id }} - {{ category.name }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <input
                  type="button"
                  @click="updateAddon(eachofaddon.id)"
                  class="btn btn-sm float-right pl-3 pr-3 text-white"
                  style="background-color: #028476; border-radius: 20px"
                  value="update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end update of each product -->
    <div class="scrollable overflow-auto mt-3">
      <table class="table prodlist sticky table-borderless col-lg-12">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category ID</th>

            <th style="width: 120px !important" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody id="#myTable" v-for="(addon, idx) in addons" v-bind:key="idx">
          <tr>
            <td>{{ addon.name }}</td>
            <td>{{ addon.price }}</td>
            <td>{{ addon.category_id }}</td>
            <td>
              <button
                class="btn btn-sm"
                data-toggle="modal"
                data-target="#upAddons"
                @click="eachAddon(addon.id)"
                style="background-color: #5cd85c"
              >
                <i class="far fa-edit text-white"></i>
              </button>
            </td>
            <td>
              <button
                type="submit"
                data-toggle="modal"
                class="btn btn-sm"
                @click="deleteAddon(addon.id)"
                style="background-color: #028476"
              >
                <i class="far fa-trash-alt text-white"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- update per addon -->

    <!--end of update per addon -->
  </section>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
import $ from "jquery";
export default {
  data() {
    return {
      addons: [],
      eachofaddon: [],
      name: null,
      price: null,
      category_id: null,
      val: null,
      search: null,
      categories: [],
    };
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    },

    /* fetch */
    async getAddons() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/addons/" //endpoint
      );
      this.addons = response.data.data;
      console.log(this.addons);
    },
    /* get id */
    async eachAddon(id) {
      axios.get(`https://api.tea-ana.com/v1/addons/` + id).then((response) => {
        this.eachofaddon = response.data.data;
      });
      console.log(this.eachofaddon);
    },
    /* insert */

    insertAddon: async function () {
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
    /* update */
    updateAddon: function (id) {
      axios
        .put("https://api.tea-ana.com/v1/addons/" + id, {
          name: this.eachofaddon.name,
          price: this.eachofaddon.price,
          category_id: this.eachofaddon.category_id,
        })
        .then((response) => {
          console.log(response);
          $("#upAddons").modal("hide");
          swal("Record Updated!", "New changes are applied!", "success");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    /* delete */
    async deleteddon(id) {
      axios
        .delete(`https://api.tea-ana.com/v1/addons/` + id)
        .then((res) => {
          console.log(res);
          swal("Record Delete!", "New changes are applied!", "success");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getCategory() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/categories" //endpoint
      );

      this.categories = response.data.data;
      console.log(this.categories);
    },
  },
  computed: {},
  async created() {
    // fetch the data pag ka load
    this.getAddons();
    this.getCategory();
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