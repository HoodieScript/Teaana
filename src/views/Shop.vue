<template>
  <div>
    <NavBar />
    <ProductList />
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

import ProductList from "@/components/ProductList.vue";
import Footer from "@/components/NavFooter.vue";

/* import AddItem from "@/components/AddItem.vue";
 */ export default {
  components: {
    NavBar,
    ProductList,
    Footer,
    /*     AddItem,
     */
  },
};
</script>
