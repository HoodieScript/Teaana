<template>
  <section class="container-fluid">
    <div
      class="bg-white shadow-sm row p-0"
      style="border-radius: 20px !important"
    >
      <div class="col-lg-6 p-3">
        <h4 class="font-weight-bold">Products</h4>
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
              New Products
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
            <h5 class="modal-title" id="newproducts">New Products</h5>
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
                <small class="pb-3">Product Name</small>

                <input
                  type="text"
                  class="form-control"
                  :required="true"
                  v-model="name"
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Product Price</small>

                <input
                  type="number"
                  class="form-control"
                  v-model.number="price"
                  @input="handleInput"
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Product Category</small>
                <select
                  class="form-control custom-select"
                  v-model="category_id"
                >
                  <option
                    v-for="(category, idx) in categories"
                    :value="category.id"
                    v-bind:key="idx"
                  >
                    {{ category.id }} -{{ category.name }}
                  </option>
                </select>
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Product type</small>
                <select
                  class="form-control custom-select"
                  v-model="productType"
                >
                  <option value="New">New</option>
                  <option value="Featured">Featured</option>
                  <option value="Best-Selling">Best-Selling</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="button"
                  @click="insertProduct()"
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
      aria-labelledby="upProductssss"
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
          <div class="modal-body">
            <form>
              <div class="form-group text-left">
                <small class="pb-3">Product Name</small>
                <input
                  type="text"
                  class="form-control"
                  v-model="eachofprods.name"
                />
              </div>
              <div class="form-group text-left">
                <small class="pb-3">Product Price</small>

                <input
                  type="number"
                  class="form-control"
                  v-model.number="eachofprods.price"
                  @input="handleInput"
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Product Category</small>
                <select
                  class="form-control custom-select"
                  v-model="eachofprods.category_id"
                  @change="onChange"
                >
                  <option
                    v-for="(category, idx) in categories"
                    v-bind:key="idx"
                    :value="category.id"
                  >
                    {{ category.id }} - {{ category.name }}
                  </option>
                </select>
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Product type</small>
                <select
                  class="form-control custom-select"
                  v-model="eachofprods.productType"
                  @change="this.onChange"
                  required
                >
                  <option value="New">New</option>
                  <option value="Featured">Featured</option>
                  <option value="Best-Selling">Best-Selling</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="button"
                  @click="updateProduct(eachofprods.id)"
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
            <th>Product name</th>
            <th>Price</th>
            <th>Category ID</th>
            <th>Product Type</th>
            <th style="width: 120px !important" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody v-for="(product, idx) in products" v-bind:key="idx">
          <tr>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category_id }}</td>
            <td>{{ product.productType }}</td>
            <td>
              <button
                class="btn btn-sm"
                data-toggle="modal"
                data-target="#upProducts"
                @click="eachProduct(product.id)"
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
                @click="deleteProduct(product.id)"
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
import swal from "sweetalert";
import $ from "jquery";
export default {
  data() {
    return {
      categories: [],
      products: [],
      eachofprods: [],
      name: null,
      price: null,
      category_id: null,
      val: null,
      productType: null,
      path: "https://api.tea-ana.com/uploads/",
    };
  },

  methods: {
    onChange(event) {
      console.log(event.target.value);
    },

    watchSelectedItemId: function (event) {
      console.log(
        event.target.options[event.target.selectedIndex].attributes[
          "data-item-type"
        ].value
      );
    },
    handleInput(e) {
      this.val = e.target.value.replace(/[^\d]/g, "");
    },
    async getCategory() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/categories" //endpoint
      );

      this.categories = response.data.data;
      console.log(this.categories);
    },
    async eachProduct(id) {
      axios
        .get(`https://api.tea-ana.com/v1/products/` + id)
        .then((response) => {
          this.eachofprods = response.data.data;
        });
      console.log(this.eachofprods);
    },
    async getProducts() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/products/" //endpoint
      );
      this.products = response.data.data;
      console.log(this.products);
    },
    insertProduct: async function () {
      axios
        .post("https://api.tea-ana.com/v1/products", {
          name: this.name,
          price: this.price,
          category_id: this.category_id,

          productType: this.productType,
        })
        .then((response) => {
          console.log(response);
          $("#newproducts").modal("hide");
          swal("Record Added!", "New changes are applied!", "success");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    updateProduct: function (id) {
      axios
        .put("https://api.tea-ana.com/v1/products/" + id, {
          name: this.eachofprods.name,
          price: this.eachofprods.price,
          productType: this.eachofprods.productType,
        })
        .then((response) => {
          console.log(response);
          $("#upProducts").modal("hide");

          swal("Record Updated!", "New changes are applied!", "success");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    async deleteProduct(id) {
      axios
        .delete(`https://api.tea-ana.com/v1/products/` + id)
        .then((res) => {
          console.log(res);
          swal("Record Deleted!", "New changes are applied!", "success");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  computed: {},
  async created() {
    // fetch the data pag ka load
    this.getCategory();
    this.getProducts();
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