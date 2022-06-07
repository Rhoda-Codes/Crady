//Open the mobile menu
document.querySelector('.fa-solid.fa-bars').addEventListener('click', function () {
    document.querySelector('.mobile-nav').classList.remove('d-none');
})

//Close the mobile menu
document.querySelector('.fa-solid.fa-xmark').addEventListener('click', function () {
    document.querySelector('.mobile-nav').classList.add('d-none');
})

//Close the mobile menu on click any of the links
document.querySelectorAll('.mobile-nav a').forEach(element => {
    element.addEventListener('click', function () {
        document.querySelector('.mobile-nav').classList.add('d-none');
    })
})