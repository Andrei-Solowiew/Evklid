document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work__item').forEach(function(work__item){
    work__item.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.work__bottom').forEach(function(work__bottom) {
        work__bottom.classList.remove('work__bottom_active')
      })
      document.querySelectorAll(".work__item").forEach(function(work__item) {
        work__item.classList.remove("work__item_active");
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('work__bottom_active')
      document.querySelector(`[data-path="${path}"]`).classList.add("work__item_active");
  })
})
})