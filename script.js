(() => {
  const offer = 'surf_and_yoga';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('[data-header]');
  const mobileBook = document.querySelector('.mobile-book');

  const updateChrome = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 48);
    mobileBook?.classList.toggle('is-visible', window.scrollY > 620);
  };
  updateChrome();
  window.addEventListener('scroll', updateChrome, { passive: true });

  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  const surfLine = document.querySelector('[data-surf-line]');
  const surfPath = surfLine?.querySelector('[data-surf-path]');
  const surfer = surfLine?.querySelector('[data-surfer]');

  if (surfLine && surfPath && surfer) {
    const pathLength = surfPath.getTotalLength();
    let surfFrame;

    const placeSurfer = (progress) => {
      const distance = Math.min(pathLength - 1, Math.max(1, progress * pathLength));
      const point = surfPath.getPointAtLength(distance);
      const nextPoint = surfPath.getPointAtLength(Math.min(pathLength, distance + 2));
      const scaleX = surfLine.clientWidth / 1000;
      const scaleY = surfLine.clientHeight / 96;
      const x = point.x * scaleX;
      const y = point.y * scaleY;
      const angle = Math.atan2(
        (nextPoint.y - point.y) * scaleY,
        (nextPoint.x - point.x) * scaleX
      ) * 180 / Math.PI;

      surfer.style.transform = `translate3d(${x}px,${y}px,0) rotate(${angle}deg) translate(-50%,-78%)`;
    };

    const updateSurfer = () => {
      surfFrame = undefined;
      const bounds = surfLine.closest('.reframe').getBoundingClientRect();
      const travel = window.innerHeight + bounds.height;
      const progress = Math.min(.96, Math.max(.04, (window.innerHeight - bounds.top) / travel));
      placeSurfer(progress);
    };

    const queueSurferUpdate = () => {
      if (surfFrame) return;
      surfFrame = window.requestAnimationFrame(updateSurfer);
    };

    if (reducedMotion) {
      placeSurfer(.58);
    } else {
      updateSurfer();
      window.addEventListener('scroll', queueSurferUpdate, { passive: true });
      window.addEventListener('resize', queueSurferUpdate, { passive: true });
    }
  }

  const heroSlides = [...document.querySelectorAll('.hero-slide')];
  const heroProgress = document.querySelector('[data-hero-progress]');
  let heroIndex = 0;
  let heroTimer;

  const restartHeroProgress = () => {
    if (!heroProgress || reducedMotion) return;
    heroProgress.classList.remove('is-running');
    void heroProgress.offsetWidth;
    heroProgress.classList.add('is-running');
  };

  const showHero = (index) => {
    heroSlides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === index));
    restartHeroProgress();
  };

  const startHero = () => {
    if (reducedMotion || heroSlides.length < 2) return;
    window.clearInterval(heroTimer);
    restartHeroProgress();
    heroTimer = window.setInterval(() => {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      showHero(heroIndex);
    }, 6400);
  };
  startHero();
  document.addEventListener('visibilitychange', () => document.hidden ? window.clearInterval(heroTimer) : startHero());

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const viewport = carousel.querySelector('[data-carousel-viewport]');
    if (!track || !viewport) return;
    const slides = [...track.children];
    const previous = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const current = carousel.querySelector('[data-carousel-current]');
    const testimonials = carousel.dataset.carousel === 'testimonials';
    let index = 0;
    let timer;

    const render = () => {
      const slideWidth = viewport.clientWidth;
      slides.forEach((slide) => {
        slide.style.flexBasis = `${slideWidth}px`;
        slide.style.minWidth = `${slideWidth}px`;
      });
      track.style.transform = `translate3d(-${index * slideWidth}px,0,0)`;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === index;
        slide.classList.toggle('is-current', active);
        slide.setAttribute('aria-hidden', String(!active));
        slide.inert = !active;
      });
      if (current) current.textContent = String(index + 1).padStart(2, '0');
    };

    const goTo = (nextIndex, restart = true) => {
      index = (nextIndex + slides.length) % slides.length;
      render();
      if (restart) startAutoplay();
    };

    const startAutoplay = () => {
      window.clearInterval(timer);
      if (reducedMotion || slides.length < 2) return;
      timer = window.setInterval(() => goTo(index + 1, false), testimonials ? 7600 : 5600);
    };

    previous?.addEventListener('click', () => goTo(index - 1));
    next?.addEventListener('click', () => goTo(index + 1));
    carousel.addEventListener('mouseenter', () => window.clearInterval(timer));
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', () => window.clearInterval(timer));
    carousel.addEventListener('focusout', (event) => {
      if (!carousel.contains(event.relatedTarget)) startAutoplay();
    });
    carousel.addEventListener('keydown', (event) => {
      if (event.target !== carousel || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'ArrowLeft') goTo(index - 1);
      if (event.key === 'ArrowRight') goTo(index + 1);
      if (event.key === 'Home') goTo(0);
      if (event.key === 'End') goTo(slides.length - 1);
    });

    let touchStart = 0;
    carousel.addEventListener('touchstart', (event) => {
      touchStart = event.changedTouches[0].clientX;
      window.clearInterval(timer);
    }, { passive: true });
    carousel.addEventListener('touchend', (event) => {
      const delta = event.changedTouches[0].clientX - touchStart;
      if (Math.abs(delta) > 44) goTo(index + (delta < 0 ? 1 : -1));
      else startAutoplay();
    }, { passive: true });

    render();
    if ('ResizeObserver' in window) {
      new ResizeObserver(render).observe(viewport);
    } else {
      window.addEventListener('resize', render, { passive: true });
    }
    startAutoplay();
  });

  const levelContent = {
    beginner: {
      label: 'level-beginner',
      title: 'Learn the foundations with clear instruction and a safe progression into the ocean.',
      items: [
        'Understand equipment, beach safety and basic ocean awareness',
        'Build an efficient paddle and stable take-off',
        'Ride broken waves with growing control',
        'Use supervised practice to repeat the essentials'
      ]
    },
    intermediate: {
      label: 'level-intermediate',
      title: 'Turn existing confidence into better positioning, cleaner decisions and more consistent green waves.',
      items: [
        'Improve paddle timing and wave selection',
        'Refine take-offs on unbroken waves',
        'Work on speed and turns in both directions',
        'Develop stronger understanding of rips, tides and etiquette'
      ]
    },
    advanced: {
      label: 'level-advanced',
      title: 'Use professional or local guidance to make better decisions and more of the available conditions.',
      items: [
        'Surf independently with confident board control',
        'Use condition-led spot selection and local context',
        'Refine positioning, timing and line choice',
        'Balance demanding sessions with deliberate evening recovery'
      ]
    }
  };
  const levelButtons = [...document.querySelectorAll('[data-level]')];
  const levelPanel = document.querySelector('[data-level-panel]');

  const selectLevel = (button, focus = false) => {
    levelButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-selected', String(active));
      candidate.tabIndex = active ? 0 : -1;
    });
    const content = levelContent[button.dataset.level];
    levelPanel.setAttribute('aria-labelledby', content.label);
    levelPanel.innerHTML = `<h3>${content.title}</h3><ul>${content.items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
    if (focus) button.focus();
    window.dataLayer?.push({ event: 'level_tab_select', offer, surf_level: button.dataset.level });
  };

  levelButtons.forEach((button, buttonIndex) => {
    button.addEventListener('click', () => selectLevel(button));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = buttonIndex;
      if (event.key === 'ArrowRight') nextIndex = (buttonIndex + 1) % levelButtons.length;
      if (event.key === 'ArrowLeft') nextIndex = (buttonIndex - 1 + levelButtons.length) % levelButtons.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = levelButtons.length - 1;
      selectLevel(levelButtons[nextIndex], true);
    });
  });
  if (levelButtons[0]) selectLevel(levelButtons[0]);

  const stayContent = {
    room: {
      eyebrow: 'Sleep well',
      title: 'Choose the room that fits how you travel.',
      copy: 'Shared room, double or twin, junior suite and master suite options are available. All room types include an en-suite bathroom, air conditioning and Wi-Fi.',
      image: 'assets/stay-room.webp',
      alt: 'Warm interior detail at The Surf Hotel',
      list: [
        ['Shared room', 'Social and practical'],
        ['Double / twin', 'Private and flexible'],
        ['Junior suite', 'More space to unwind'],
        ['Master suite', 'Separate living area']
      ],
      cta: true
    },
    food: {
      eyebrow: 'Eat well',
      title: 'Food that supports the whole day.',
      copy: 'Start with breakfast, take lunch to the beach and come back for dinner on the rooftop. Healthy, generous meals are part of the rhythm, with selected dietary needs available on request.',
      image: 'assets/stay-food.webp',
      alt: 'A chef preparing food at The Surf Hotel',
      list: [
        ['Breakfast', 'Start with real energy'],
        ['Beach lunch', 'Practical fuel between sessions'],
        ['Rooftop dinner', 'Slow down and eat together'],
        ['Dietary needs', 'Share them before arrival']
      ],
      cta: true
    },
    life: {
      eyebrow: 'Reset together',
      title: 'Connection when you want it. Space when you need it.',
      copy: 'Rooftop sunsets, lounge spaces, games and the yoga room let the day taper naturally after the final session.',
      image: 'assets/stay-life.webp',
      alt: 'Guests relaxing together on The Surf Hotel rooftop',
      list: [
        ['Rooftop', 'Sunset and sea views'],
        ['Ping-pong', 'Easy post-surf competition'],
        ['Yoga space', 'Stretch and reset'],
        ['Lounge', 'Slow down between sessions']
      ],
      cta: true
    }
  };
  const stayButtons = [...document.querySelectorAll('[data-stay]')];
  const stayPanel = document.querySelector('[data-stay-panel]');

  const selectStay = (button, focus = false) => {
    stayButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-selected', String(active));
      candidate.tabIndex = active ? 0 : -1;
    });
    const content = stayContent[button.dataset.stay];
    stayPanel.setAttribute('aria-labelledby', button.id);
    stayPanel.innerHTML = `
      <div class="stay-media"><img src="${content.image}" width="1600" height="2000" alt="${content.alt}" loading="lazy" /></div>
      <div class="stay-content">
        <p class="eyebrow">${content.eyebrow}</p>
        <h3>${content.title}</h3>
        <p>${content.copy}</p>
        <ul class="room-types">${content.list.map(([name, note]) => `<li><span>${name}</span><small>${note}</small></li>`).join('')}</ul>
        ${content.cta ? '<a class="button button--dark booking-link" data-event="stay_cta_click" href="https://bookings.thesurfhotelmorocco.com/en/product/surf-and-yoga">Check dates &amp; rooms <span>↗</span></a>' : ''}
      </div>`;
    if (focus) button.focus();
    attachBookingTracking(stayPanel);
    window.dataLayer?.push({ event: 'hotel_experience_tab', offer, experience_tab: button.dataset.stay });
  };

  stayButtons.forEach((button, buttonIndex) => {
    button.addEventListener('click', () => selectStay(button));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = buttonIndex;
      if (event.key === 'ArrowRight') nextIndex = (buttonIndex + 1) % stayButtons.length;
      if (event.key === 'ArrowLeft') nextIndex = (buttonIndex - 1 + stayButtons.length) % stayButtons.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = stayButtons.length - 1;
      selectStay(stayButtons[nextIndex], true);
    });
  });

  document.querySelectorAll('[data-video-id]').forEach((feature) => {
    const button = feature.querySelector('.video-poster');
    button?.addEventListener('click', () => {
      const id = feature.dataset.videoId;
      const iframe = document.createElement('iframe');

      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&playsinline=1&enablejsapi=1`;
      iframe.title = 'Surf & Yoga in Morocco video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      button.replaceWith(iframe);
      window.dataLayer?.push({ event: 'video_testimonial_play', offer, video_id: id, playback: 'youtube_inline' });
    });
  });

  document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      window.dataLayer?.push({ event: 'faq_open', offer, faq_topic: detail.querySelector('summary')?.textContent.replace('+', '').trim() });
    });
  });

  function attachBookingTracking(root = document) {
    root.querySelectorAll('.booking-link:not([data-tracking-ready])').forEach((link) => {
      link.dataset.trackingReady = 'true';
      link.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: link.dataset.event || 'booking_redirect',
          offer,
          booking_url: link.href,
          duration: link.dataset.duration || undefined
        });
      });
    });
  }
  attachBookingTracking();
})();
