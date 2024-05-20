<script>
  import { slide } from 'svelte/transition';
  import ANUStar from '$lib/img/icons/ANU_Star.svg';
    import { onMount } from 'svelte';

  let carouselRef;

  let hamburgerRef;
  let mobileMenuRef;

  const duplicateCarousel = () => {
    const carousel = document.querySelector('.feature.two .carousel');
    const carouselContent = Array.from(carousel.children);

    carouselContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      carousel.appendChild(duplicatedItem);
    });
  }

  onMount(() => {
    duplicateCarousel();
  });

  const ToggleHamburger = () => {
    if (!mobileMenuRef.classList.contains('active')) {
      // Mobile menu is not visible; show it.
      mobileMenuRef.classList.add('active');
      hamburgerRef.classList.add('active');
    } else {
      // Mobile menu is visible; hide it.
      mobileMenuRef.classList.remove('active');
      hamburgerRef.classList.remove('active');
    }
  }
</script>

<style>
  @import '../lib/css/home.css';
  @import '../lib/css/NavMenu.css';
</style>

<section id='app'>
  <div id='main'>
    <div id='nav-container'>
      <div id='title'>
        <img src={ANUStar} alt='ANU' class='logo'/>
      </div>
      
      <div id='nav-items'>
        <button name='contact' class='nav-btn'>CONTACT</button>
        <button name='about' class='nav-btn'>ABOUT</button>
        <button name='projects' class='nav-btn'>PRODUCT</button>
      </div>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div id='hamburger' bind:this={hamburgerRef} on:click={ToggleHamburger} role='button' tabindex='0'>
        <span id='top' class='line'></span>
        <span id='mid' class='line'></span>
        <span id='bot' class='line'></span>
      </div>

      <div id='mobile-menu' bind:this={mobileMenuRef} transition:slide={{ duration: 200 }}>
        <button name='contact' class='nav-btn'>CONTACT</button>
        <button name='about' class='nav-btn'>ABOUT</button>
        <button name='projects' class='nav-btn'>PRODUCT</button>
      </div>
    </div>

    <div id="n60-container">
      <div class="header">
        <div class="intro">
          <h3>INTRODUCING</h3>
          <hr>
        </div>
        <h1>INANNA-N60</h1>
      </div>
      <div class="slide">
        <div class="slide-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum. Phasellus placerat, ex ac lacinia sodales, purus ex luctus quam, eget molestie libero leo nec lectus. Fusce neque purus, sodales et rhoncus eget, mattis eu velit. 
          </p>
          <button>LEARN&nbsp;MORE</button>
        </div>
        <div class="slide-footer">
          <p>If you are interested in participating in the group buy, please fill out the interest check form.</p>
          <button>FILL&nbsp;FORM</button>
        </div>
        
      </div>
      <div class="feature one">
        <div></div>
        <ul>
          <li>Feature you're missing out on</li>
          <li>Another feature you're missing out on</li>
          <li>Another feature you're missing out on</li>
          <li>Another feature you're missing out on</li>
          <li>Another feature you're missing out on</li>
          <li>Another feature you're missing out on</li>
          <li>Another feature you're missing out on</li>
          <li>Another feature you're missing out on</li>
        </ul>
      </div>
      <div class="feature two">
        <ul class="carousel">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum. Phasellus placerat, ex ac lacinia sodales, purus ex luctus quam, eget molestie libero leo nec lectus. Fusce neque purus, sodales et rhoncus eget, mattis eu velit. In sit amet nunc pharetra, sollicitudin sapien in, dignissim metus. 
        </p>
      </div>

      <div class="feature three">
        <div class="title">
          <h2>TYPING&nbsp;EXPERIENCE</h2>
          <hr>
        </div>
        <div class="content">
          <div class="text">
            <h4 class="feature-title">TYPING&nbsp;ANGLE</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum.</p>
          </div>
          <div class="placeholder"></div>
        </div>
      </div>

      <div class="feature four">
        <div class="placeholder"></div>
        <div class="text">
          <h4 class="feature-title">PLATE&nbsp;MATERIAL</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum.</p>
        </div>
      </div>

      <div class="feature five">
        <div class="text">
          <h4 class="feature-title">MOUNTING</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum.</p>
        </div>
        <div class="container">
          <div class="placeholder"></div>
          <div class="dots">
            <span class="active">&#x2022;</span>
            <span>&#x2022;</span>
            <span>&#x2022;</span>
          </div>
        </div>
      </div>

      <div class="feature six">
        <div class="text">
          <h4 class="feature-title">PLATE&nbsp;MATERIALS</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum.</p>
        </div>
        <div class="container">
          <div class="placeholder"></div>
          <div class="placeholder"></div>
        </div>
      </div>

      <div class="feature seven">
        <div class="title">
          <h2>BUILD&nbsp;AND&nbsp;FEATURES</h2>
          <hr>
        </div>
        <div class="content">
          <div class="text">
            <h4 class="feature-title">CASE&nbsp;MATERIALS</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum.</p>
          </div>
          <div class="container">
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
          </div>
        </div>
      </div>

      <div class="feature eight">
        <div class="text">
          <h4 class="feature-title">NUMPAD</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum.</p>
        </div>
        <div class="placeholder"></div>
      </div>

      <div class="feature nine">
        <div class="rubber-feet"></div>
        <div class="text">
          <h4 class="feature-title">RUBBER&nbsp;FEET</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum.</p>
        </div>
      </div>

      <div class="feature ten">
        <div class="placeholder"></div>
      </div>

      <div class="feature eleven">
        <div class="text">
          <h4 class="feature-title">LAYOUT</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor eros vitae lorem imperdiet rutrum.</p>
        </div>
        <div class="placeholder"></div>
      </div>

      <div class="feature twelve">
        <div class="title">
          <h2>SPECIFICATIONS</h2>
          <hr>
        </div>
        <div class="content">
          <div class="text">
            <h4 class="feature-title">LAYOUT</h4>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div class="text">
            <h4 class="feature-title">CASE&nbsp;MATERIALS</h4>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div class="text">
            <h4 class="feature-title">LAYOUT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="text">
            <h4 class="feature-title">CASE&nbsp;MATERIALS</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="text">
            <h4 class="feature-title">LAYOUT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="text">
            <h4 class="feature-title">CASE&nbsp;MATERIALS</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>