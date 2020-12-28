<template>
  <div>
    <NavBar2 />
    <CartList />
    <Footer />
  </div>
</template>
<script>
import CartList from "@/components/SupplyCart.vue";
import Footer from "@/components/NavFooter.vue";
import NavBar2 from "@/components/NavBar2.vue";
export default {
  components: {
    NavBar2,
    CartList,

    Footer,
  },
};
</script>
<style scoped>
.cart {
  margin-top: 50px;
}
</style>
