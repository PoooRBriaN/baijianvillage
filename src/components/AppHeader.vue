<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="['header', { scrolled }]">
    <div class="inner">

      <div class="logo">白涧村</div>

      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">村庄介绍</router-link>
        <router-link to="/news">新闻公告</router-link>
        <router-link to="/contact">联系我们</router-link>
      </nav>

    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 72px;

  display: flex;
  justify-content: center;

  background: rgba(0,0,0,0.55);
  transition: 0.3s;
}

.header.scrolled {
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
}

.inner {
  width: 100%;
  max-width: 1280px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
}

nav a {
  margin-left: 20px;
  color: white;
}
</style>