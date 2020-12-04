<template>
  <section class="container-fluid">
    <div
      class="bg-white shadow-sm row p-0"
      style="border-radius: 20px !important"
    >
      <div class="col-lg-6 p-3">
        <h4 class="font-weight-bold">Supplies</h4>
      </div>
      <div class="col-lg-6 p-3">
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <button
              class="btn btn-sm text-white"
              style="background-color: #028476"
              data-toggle="modal"
              data-target="#newSupplies"
            >
              New Supply
            </button>
          </div>
          <!-- <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fas fa-search"></i
              ></span>
            </div>
            <input
              type="text"
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
      id="newSupplies"
      tabindex="-1"
      aria-labelledby="newSupplies"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newSupplies">New Supply</h5>
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
              <!-- <div class="form-group text-left">
                <small class="pb-3">Image File</small>

                <input
                  type="file"
                  class="form-control"
                  required
                  @change="onFileSelected"
                />
              </div> -->
              <div class="form-group text-left">
                <small class="pb-3">Supply Name</small>

                <input
                  type="text"
                  class="form-control"
                  required
                  v-model="name"
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Supply Price</small>

                <input
                  type="number"
                  class="form-control"
                  v-model.number="price"
                  @input="handleInput"
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Suppy Category</small>
                <select
                  class="form-control custom-select"
                  required
                  v-model.number="categoryId"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Supply type</small>
                <select
                  class="form-control custom-select"
                  v-model="type"
                  required
                >
                  <option value="Wholesale">Wholesale</option>
                  <option value="Retail">Retail</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="button"
                  @click="insertSupply()"
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
      id="upSupplies"
      tabindex="-1"
      aria-labelledby="upSuppliessss"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newSupplies">Update Supply</h5>
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
              <div class="form-group">
                <img
                  class="img img-fluid w-75 m-auto border-0 form-control"
                  alt="Tea-ana-product"
                  style="height: auto"
                  :src="path + eachofsupp.imagePath"
                  fluid
                />
              </div>
              <div class="form-group text-left">
                <small class="pb-3">Supply Name</small>
                <input
                  type="text"
                  class="form-control"
                  v-model="eachofsupp.name"
                />
              </div>
              <div class="form-group text-left">
                <small class="pb-3">Supply Price</small>

                <input
                  type="number"
                  class="form-control"
                  v-model.number="eachofsupp.price"
                  required
                  @input="handleInput"
                />
              </div>
              <div class="form-group text-left">
                <small class="pb-3">Supply type</small>
                <select
                  v-model.number="eachofsupp.categoryId"
                  @change="onChange"
                  class="form-control custom-select"
                  required
                >
                  <!--                   <option selected disabled>--- select type ---</option>
 -->
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div class="form-group text-left">
                <small class="pb-3">Supply type</small>
                <!-- @change="watchSelectedItemId($event)" -->
                <select
                  v-model="eachofsupp.type"
                  @change="onChange"
                  class="form-control custom-select"
                  required
                >
                  <option selected disabled>--- select type ---</option>

                  <option value="Retail">Retail</option>
                  <option value="Wholesale">Wholesale</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="button"
                  @click="updateSupply(eachofsupp.id)"
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
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category ID</th>
            <th>Type</th>
            <th style="width: 120px !important" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody id="#myTable" v-for="(supply, idx) in supplies" v-bind:key="idx">
          <tr>
            <td>
              <img
                class="img img-fluid w-75 m-auto border-0 form-control"
                alt="Tea-ana-product"
                style="height: auto"
                :src="path + supply.imagePath"
                fluid
              />
            </td>
            <td>{{ supply.name }}</td>
            <td>{{ supply.price }}</td>
            <td>{{ supply.categoryId }}</td>
            <td>{{ supply.type }}</td>
            <td>
              <button
                class="btn btn-sm"
                data-toggle="modal"
                data-target="#upSupplies"
                @click="eachSupply(supply.id)"
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
                @click="deleteSupply(supply.id)"
                style="background-color: #028476"
              >
                <i class="far fa-trash-alt text-white"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- update per supply -->

    <!--end of update per supply -->
  </section>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
import $ from "jquery";
export default {
  data() {
    return {
      supplies: [],
      eachofsupp: [],
      name: null,
      price: null,
      imagePath: null,
      categoryId: null,
      val: null,
      type: null,
      path: "https://api.tea-ana.com/uploads/",
      selectedFile: null,
    };
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    },
    /*    watchSelectedItemId: function (event) {
      console.log(
        event.target.options[event.target.selectedIndex].attributes[
          "data-item-type"
        ].value
      );
    }, */

    handleInput(e) {
      this.val = e.target.value.replace(/[^\d]/g, "");
    },

    /* fetch */
    async getSupplies() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/supplies/" //endpoint
      );
      this.supplies = response.data.data;
      console.log(this.supplies);
    },
    /* get id */
    async eachSupply(id) {
      axios
        .get(`https://api.tea-ana.com/v1/supplies/` + id)
        .then((response) => {
          this.eachofsupp = response.data.data;
        });
      console.log(this.eachofsupp);
    },
    /* insert */
    /* onFileSelected(event) {
      this.imagePath = event.target.files[0];
    }, */
    insertSupply: async function () {
      /*   const fd = new FormData();
      fd.append("image", this.imagePath, this.imagePath);
    axios
        .post(
          "https://api.tea-ana.com/v1/supplies",
        )
       */
      axios
        .post(
          "https://api.tea-ana.com/v1/supplies",

          {
            name: this.name,
            price: this.price,
            categoryId: this.categoryId,
            type: this.type,
          }
        )
        .then((response) => {
          console.log(response);
          $("#newSupplies").modal("hide");
          swal("Record Created!", "New changes are applied!", "success");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    /* update */
    updateSupply: function (id) {
      axios
        .put("https://api.tea-ana.com/v1/supplies/" + id, {
          name: this.eachofsupp.name,
          price: this.eachofsupp.price,
          categoryId: this.eachofsupp.categoryId,
          type: this.eachofsupp.type,
        })
        .then((response) => {
          console.log(response);
          $("#upSupplies").modal("hide");
          swal("Record Updated!", "New changes are applied!", "success");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    /* delete */
    async deleteSupply(id) {
      axios
        .delete(`https://api.tea-ana.com/v1/supplies/` + id)
        .then((res) => {
          console.log(res);
          swal("Record Delete!", "New changes are applied!", "success");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  computed: {},
  async created() {
    // fetch the data pag ka load
    this.getSupplies();
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