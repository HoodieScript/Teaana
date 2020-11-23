<template>
  <form class="row">
    <div class="col-lg-7 border-right">
      <div class="input-group">
        <input
          type="text"
          readonly
          class="form-control text-center bg-white font-weight-bold"
          style="color: #028476; border: none"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="input.name"
        />
      </div>

      <figure>
        <img
          class="img img-fluid w-75 m-auto border-0 form-control"
          alt="Tea-ana-product"
          style="height: auto"
          :src="path + `1601472795874-milktea1.png`"
          fluid
        />
      </figure>
    </div>
    <div class="col-lg-5">
      <div class="form-group">
        <select class="custom-select" v-model="size" id="inputGroupSelect01">
          <!-- <option selected>Size</option>
                      <option value="1">16 Oz</option>
                      <option value="2">22 Oz</option>
                      <option value="3">1 L</option>
                     -->
          <option
            v-for="opt in sizeopt"
            :key="opt.text"
            :selected="text === opt.text"
          >
            {{ opt.text || "No Label" }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <select
          class="custom-select"
          id="inputGroupSelect01"
          v-model="sugarlevel"
        >
          <option
            v-for="opt in sugarlevelopt"
            :key="opt.text"
            :selected="text === opt.text"
          >
            {{ opt.text || "No Label" }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <input type="number" class="form-control" placeholder="Quantity" />
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text bg-transparent border-0">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <label class="text-dark my-auto"
          >Black Pearl<small>(₱15.00)</small></label
        >
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text bg-transparent border-0">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <label class="text-dark my-auto"
          >Fruit Jelly<small>(₱18.00)</small></label
        >
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text bg-transparent border-0">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <label class="text-dark my-auto"
          >Nata De Coco<small>(₱22.00)</small></label
        >
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text bg-transparent border-0">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <label class="text-dark my-auto"
          >Cream Cheese<small>(₱35.00)</small></label
        >
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text bg-transparent border-0">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <label class="text-dark my-auto"
          >Pink Pearl<small>(₱15.00)</small></label
        >
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text bg-transparent border-0">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <label class="text-dark my-auto"
          >Coffee Pearl<small>(₱15.00)</small></label
        >
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text bg-transparent border-0">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <label class="text-dark my-auto"
          >Popping Boba<small>(₱15.00)</small></label
        >
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text bg-transparent border-0">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <label class="text-dark my-auto"
          >Crushed Oreo<small>(₱18.00)</small></label
        >
      </div>
      <hr />
      <div class="input-group">
        <input
          type="text"
          readonly
          class="form-control text-center bg-white font-weight-bold"
          style="color: #028476"
          placeholder="Price"
          aria-label="Price"
          aria-describedby="basic-addon1"
          v-model="input.price"
        />
      </div>
      <small>Price varies on selected order </small>
      <div class="input-group mt-3">
        <input
          type="submit"
          value="Add to cart"
          class="mx-auto w-50 btn btn-sm text-white"
          style="background-color: #028476"
        />
      </div>
    </div>
  </form>
</template>
<script>
export default {
  methods: {},
  //here put your other vue.js code
};
</script>