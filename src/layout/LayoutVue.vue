<template>
    <div>
        <HeaderVue />
        <slot />
        <FooterVue />
    </div>
</template>

<script>
import HeaderVue from "./HeaderVue.vue";
import FooterVue from "./FooterVue.vue";
export default {
    components: {
        HeaderVue,
        FooterVue,
    }
}
</script>