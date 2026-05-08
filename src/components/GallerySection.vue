<template>
  <section class="section">

    <div class="container">

      <h2>风景展示</h2>

      <div class="gallery">

        <img src="../assets/images/village1.png">

        <img src="../assets/images/village2.png">

        <img src="../assets/images/village3.png">

      </div>

    </div>

  </section>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
}

.gallery img {
  height: 300px;
  object-fit: cover;

  border-radius: 20px;

  transition: .35s;
}

.gallery img:hover {
  transform: scale(1.03);
}

@media (max-width: 992px) {

  .gallery {
    grid-template-columns: repeat(2,1fr);
  }

}

@media (max-width: 768px) {

  .gallery {
    grid-template-columns: 1fr;
  }

}
</style>