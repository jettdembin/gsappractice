const tl = gsap.timeline({defaults: { ease: "power1.out" } });

tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration:  1.5, delay: 0.5 });
tl.to('.intro', { y: "-100%", duration: 1 }, "-=1.025");
tl.fromTo('nav', { opacity: 0}, { opacity: 1, duration: 1.25 });
tl.fromTo('.title', { opacity: 0}, { opacity: 1, duration: 2.5 }, "-=1");
tl.to('.info-hide', { y: "0%", duration: 1, stagger: 0.5 }, "-=2.5");
tl.fromTo('button', { opacity: 0}, { opacity: 1, duration: 2 }, "-=1.5");
tl.fromTo('img', { opacity: 0}, { opacity: 1, duration: 3 }, "-=3");
tl.fromTo('img', { x: "100%"}, { x: "0%" , duration: 2}, "-=3.5");
tl.fromTo('#logo', { x: "-100%"}, { x: "0%" , duration: 2}, "-=6");
tl.fromTo('ul', { x: "50%"}, { x: "0%" , duration: 2}, "-=6");
