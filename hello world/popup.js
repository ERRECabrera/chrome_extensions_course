$(() => {
  $('#name').keyup((e) => {
    $('#greet').text(`Hello ${e.target.value}`)
  })
})