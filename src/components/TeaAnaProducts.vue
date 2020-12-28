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
          <!-- <div class="input-group">
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
          </div> -->
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
            <form
              @submit.prevent="insertProduct"
              enctype="multipart/form-data"
              method="post"
              v-if="savebtn"
            >
              <div class="form-group text-left">
                <input
                  type="file"
                  id="file"
                  ref="fileupload"
                  accept="image/*"
                  @change="onFileSelected"
                  required
                  class="form-control-file"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>

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
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Product Category</small>
                <select
                  class="form-control custom-select"
                  v-model.number="category_id"
                >
                  <option value="1">Milktea</option>
                  <option value="2">Coffee</option>
                  <option value="3">Wings</option>
                  <option value="4">Takoyaki</option>
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
                  type="submit"
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
            <form
              @submit.prevent="updateProduct(eachofprods.id)"
              enctype="multipart/form-data"
              method="post"
              v-if="savebtn"
            >
              <div class="form-group text-left">
                <img
                  class="img img-fluid w-75 m-auto border-0 form-control"
                  alt="Tea-ana-product"
                  style="height: 250px; width: 250px"
                  :src="path + eachofprods.imagePath"
                  fluid
                />

                <input
                  type="file"
                  id="file"
                  ref="fileupload"
                  accept="image/*"
                  @change="onFileSelected2"
                  required
                  class="form-control-file"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
              </div>

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
                />
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Product Category</small>
                <select
                  class="form-control custom-select"
                  v-model.number="eachofprods.category_id"
                >
                  <option value="1">Milktea</option>
                  <option value="2">Coffee</option>
                  <option value="3">Wings</option>
                  <option value="4">Takoyaki</option>
                </select>
              </div>

              <div class="form-group text-left">
                <small class="pb-3">Product type</small>
                <select
                  class="form-control custom-select"
                  v-model="eachofprods.productType"
                  required
                >
                  <option value="New">New</option>
                  <option value="Featured">Featured</option>
                  <option value="Best-Selling">Best-Selling</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="submit"
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
            <th>Product name</th>
            <th>Price</th>
            <th>Category ID</th>
            <th>Product Type</th>
            <th style="width: 120px !important" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody v-for="(product, idx) in products" v-bind:key="idx">
          <tr>
            <td>
              <img
                class="img img-fluid w-75 m-auto border-0 form-control"
                alt="Tea-ana-product"
                style="height: auto"
                :src="path + product.imagePath"
                fluid
              />
            </td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category.name }}</td>
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
      productType: null,
      imagePath: null,

      path: "https://api.tea-ana.com/uploads/",
      savebtn: true,
    };
  },
  async created() {
    // fetch the data pag ka load
    this.getProducts();
  },

  methods: {
    onFileSelected(event) {
      this.imagePath = event.target.files[0];
      console.log(event);
    },
    onFileSelected2(event) {
      this.imagePath = event.target.files[0];
      console.log(event);
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
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("category_id", this.category_id);
      formData.append("productType", this.productType);
      formData.append("file", this.imagePath, this.imagePath.name);
      axios
        .post("https://api.tea-ana.com/v1/products", formData)
        .then((response) => {
          console.log(response);
          $("#newproducts").modal("hide");
          swal("Record Added!", "New changes are applied!", "success");
          this.getProducts();
          this.clear();
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    updateProduct: function (id) {
      const formData = new FormData();
      formData.append("name", this.eachofprods.name);
      formData.append("price", this.eachofprods.price);
      formData.append("category_id", this.eachofprods.category_id);
      formData.append("productType", this.eachofprods.productType);
      formData.append("file", this.imagePath, this.imagePath.name);

      axios
        .put("https://api.tea-ana.com/v1/products/" + id, formData)
        .then((response) => {
          console.log(response);
          $("#upProducts").modal("hide");

          swal("Record Updated!", "New changes are applied!", "success");
          this.getProducts();
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
          this.getProducts();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    clear: function () {
      (this.savebtn = true),
        (this.name = ""),
        (this.price = ""),
        (this.category_id = ""),
        (this.productType = "");
      this.$refs.fileupload.value = null;
    },
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