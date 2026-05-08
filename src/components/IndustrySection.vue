<template>
  <section class="section bg">

    <div class="container">

      <h2>特色产业</h2>

      <div class="industry-grid">

        <div class="item">
          🌾 有机农业
        </div>

        <div class="item">
          🍎 水果种植
        </div>

        <div class="item">
          🏡 乡村旅游
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.bg {
  background: #f5f7fa;
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 24px;
}

.item {
  background: white;
  border-radius: 20px;

  padding: 60px 30px;

  text-align: center;

  font-size: 24px;

  transition: .35s;
}

.item:hover {
  transform: translateY(-10px);
}

@media (max-width: 992px) {

  .industry-grid {
    grid-template-columns: repeat(2,1fr);
  }

}

@media (max-width: 768px) {

  .industry-grid {
    grid-template-columns: 1fr;
  }

}
</style>