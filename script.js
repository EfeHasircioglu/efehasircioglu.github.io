const gradient1 = document.querySelector(".gradient-1");
const gradient2 = document.querySelector(".gradient-2");
const section2 = document.querySelector("#section-2");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // User has scrolled to section 2
      gradient1.classList.remove("visible");
      gradient2.classList.add("visible");
    } else {
      // User has scrolled away from section 2
      gradient1.classList.add("visible");
      gradient2.classList.remove("visible");
    }
  });
}, { threshold: 0.6 });

observer.observe(section2);

/* 
intersectionobserver kulanacaksan daha sonra burdan referans alabilirsin
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     const section = entry.target;

     if (section === sections[0]){
      document.body.style.background = "linear-gradient(135deg, #2d1e40, #204655, #1a2b3d)"
    }else{
      document.body.style.background = "linear-gradient(135deg, #395b72, #2f4f5c, #1a2b3d)"
    }
    }
  });
}, {
  threshold: 0.5  // <-- experiment with this number
});

sections.forEach(section => observer.observe(section)); */