<template>
  <section class="container-fluid">
    <div
      class="bg-white shadow-sm row p-0"
      style="border-radius: 20px !important"
    >
      <div class="col-lg-6 p-3">
        <h4 class="font-weight-bold">Orders</h4>
      </div>
    </div>

    <!-- update each product -->

    <div
      class="modal fade"
      id="upOrders"
      tabindex="-1"
      aria-labelledby="upOrderssss"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newOrders">Order Information</h5>
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
            <form class="col-lg-12 row">
              <div class="col-lg-6">
                <div class="form-group text-left">
                  <small class="pb-3">Order Number</small>
                  <input
                    type="text"
                    class="form-control"
                    readonly
                    v-model="eachoford.uid"
                  />
                  <div class="form-group text-left">
                    <small class="pb-3">Customer Address</small>
                    <textarea
                      class="form-control"
                      readonly
                      v-model="eachoford.address"
                    >
                    </textarea>
                  </div>
                </div>
                <div class="form-group text-left">
                  <small class="pb-3">Payment Method</small>
                  <input
                    type="text"
                    class="form-control"
                    readonly
                    v-model="eachoford.paymentMethod"
                  />
                </div>
                <div class="form-group text-left">
                  <small class="pb-3">Total Order</small>
                  <input
                    type="text"
                    class="form-control"
                    readonly
                    v-model="eachoford.total"
                  />
                </div>
                <div class="form-group text-left">
                  <small class="pb-3">Status</small>
                  <select
                    class="form-control custom-select"
                    v-model.number="eachoford.status"
                    required
                  >
                    <option value="Pending" disabled>Pending</option>
                    <option value="1">Confirmed</option>
                    <option value="2">Canceled</option>
                  </select>
                </div>
              </div>

              <div class="col-lg-6">
                <div>
                  <div class="form-group text-left">
                    <small class="pb-3">Customer Info</small>

                    <ul
                      class="list-group"
                      v-for="(each, idx) in eachoford.user"
                      :key="idx"
                    >
                      <li class="list-group-item bordered-0">
                        <a class="text-dark text-decoration-none">
                          {{ each }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group text-left">
                  <small class="pb-3">Customer Order </small>

                  <ul
                    class="list-group"
                    v-for="(each, idx) in eachoford.supply_order_products"
                    :key="idx"
                  >
                    <li class="list-group-item bordered-0">
                      <a class="text-dark text-decoration-none">
                        Product: {{ each.supply.name }} - Quantity:
                        {{ each.quantity }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="form-group">
                <input
                  type="button"
                  @click="updateOrder(eachoford.uid)"
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
            <th>Order ID</th>
            <th>Address</th>
            <th>Payment method</th>
            <th>Total</th>
            <th>Status</th>
            <th style="width: 120px !important">Action</th>
          </tr>
        </thead>
        <tbody id="#myTable" v-for="(order, idx) in orders" v-bind:key="idx">
          <tr>
            <td>{{ order.uid }}</td>
            <td>{{ order.address }}</td>
            <td>{{ order.paymentMethod }}</td>
            <td>{{ order.total }}</td>
            <td>{{ order.status }}</td>
            <td>
              <button
                class="btn btn-sm"
                data-toggle="modal"
                data-target="#upOrders"
                @click="eachOrder(order.uid)"
                style="background-color: #5cd85c"
              >
                <i class="far fa-edit text-white"></i>
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
      orders: [],
      eachoford: [],
      uid: null,
      price: null,
      address: null,
      paymentMethod: null,
      total: null,
      status: null,
      quantity: null,
      user: null,
      supply: null,
    };
  },
  async created() {
    // fetch the data pag ka load
    this.getOrders();
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    },

    /* fetch */
    async getOrders() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/orders/supplies" //endpoint
      );
      this.orders = response.data.data;
      console.log(this.orders);
    },
    /* get id */
    eachOrder: async function (uid) {
      axios
        .get(`https://api.tea-ana.com/v1/orders/supplies/` + uid)
        .then((response) => {
          this.eachoford = response.data.data;
        });
      console.log(this.eachoford);
    },
    /* update */
    updateOrder: async function (uid) {
      axios
        .put("https://api.tea-ana.com/v1/orders/supplies/" + uid, {
          status: this.eachoford.status,
        })
        .then((response) => {
          console.log(response.data.data);
          $("#upOrders").modal("hide");
          swal("Record Updated!", "New changes are applied!", "success");
          this.getOrders();
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },

  computed: {},
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