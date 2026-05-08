<template>
  <section class="hero">

    <div class="overlay">
      <h1>白涧村官方网站</h1>

      <p>
        生态宜居 · 和美乡村 · 产业兴旺
      </p>
    </div>

  </section>
</template>

<style scoped>
.hero {
  height: 100vh;

  background:
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
    url('../assets/images/banner.jpg');

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
}

.overlay {
  text-align: center;
  color: white;
  animation: fadeUp 1.5s ease;
}

.overlay p {
  margin-top: 20px;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>