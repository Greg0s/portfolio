const year = new Date().getFullYear();
const footer = `
<div class='container'>
<div class='row'>
  <div class='col-sm-6'>
    <p class='mb-1'>&copy; Grégoire Tinnes `
    + year +
    `</p>
    <div class='credits'>
      Based on MyPortfolio by <a target='_blank' href='https://bootstrapmade.com/'>BootstrapMade</a>
    </div>
  </div>
  <div class='col-sm-6 social text-md-end'>
    <a target='_blank' href='https://www.linkedin.com/in/gr%C3%A9goire-tinnes-6776a41a1/'><span class='bi bi-linkedin'></span></a>
    <a target='_blank' href='https://github.com/Greg0s/'><span class='bi bi-github'></span></a>
    <a target='_blank' href='https://www.instagram.com/grego_0s/'><span class='bi bi-instagram'></span></a>
    <a target='_blank' href='https://flickr.com/photos/167268474@N05/'><span class='fab fa-flickr'></span></a>
    
  </div>
</div>
</div>
`

const header = `
<div class="container py-2 py-md-5">
<div class="row align-items-start">
  <div class="col-md-2">
    <ul class="custom-menu">
        <li class="portfolioMenu"><a href="index.html">Portfolio</a></li>
        <li class="aboutMenu"><a data-localize="header.about" href="about.html">À propos</a></li>
        <li class="contactMenu"><a href="contact.html">Contact</a></li>
    </ul>
  </div>
  <!-- <div class="col-md-6 d-none d-md-block  mr-auto">
  </div> 
  <div class="col-md-4 d-none d-md-block ">
    <ul>
      <a target="_blank" href="https://www.linkedin.com/in/gr%C3%A9goire-tinnes-6776a41a1/"><span class="bi bi-linkedin"></span></a>
      <a target="_blank" href="https://www.instagram.com/grego_0s/"><span class="bi bi-instagram"></span></a>
      <a target="_blank" href="https://flickr.com/photos/167268474@N05/"><i class="fab fa-flickr"></i></a>
    </ul>
  </div> -->
</div>
</div>
`

const navbar =`
<div class="container">
<a class="navbar-brand" href="index.html">gregoiretinn.es</a>
<div class="divbtnlang">
  <button class="btnlang" onclick="langFR()"><span>FR</span></button>
  |
  <button class="btnlang" onclick="langEN()"><span>EN</span></button>
</div>
<a href="#" class="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
  <span></span>
</a>
</div>
`

window.onload= function() {
    document.querySelectorAll('.footer').forEach(element => {
        element.innerHTML = footer;
    });

    document.querySelector('#main-navbar').innerHTML = header;

    document.querySelectorAll('.custom-navbar').forEach(element => {
        element.innerHTML = navbar;
    });

    if(currentPage == 'portfolio'){
        document.querySelectorAll('.portfolioMenu').forEach(element => {
            element.classList.add('active');
        });
    }else if(currentPage == 'about'){
        document.querySelectorAll('.aboutMenu').forEach(element => {
            element.classList.add('active');
        });
    }else if(currentPage == 'contact'){
        document.querySelectorAll('.contactMenu').forEach(element => {
            element.classList.add('active');
        });
    }
}