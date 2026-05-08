<template>
  <section class="section">

    <div class="container">

      <h2>新闻公告</h2>

      <div class="cards">

        <el-card>
          春季环境整治活动正式启动
        </el-card>

        <el-card>
          白涧村乡村旅游文化节开幕
        </el-card>

        <el-card>
          新农村道路建设顺利完工
        </el-card>

      </div>

    </div>

  </section>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 24px;
}

@media (max-width: 992px) {

  .cards {
    grid-template-columns: repeat(2,1fr);
  }

}

@media (max-width: 768px) {

  .cards {
    grid-template-columns: 1fr;
  }

}
</style>