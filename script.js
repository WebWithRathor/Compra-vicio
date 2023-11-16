gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.to(".strip1 img",{
  x:"100%",
  ease:"linear",
  duration:2,
  scrollTrigger:{
    scroller:"#main",
    trigger:".strip",
    start:"top 0%",
    end:"top -500%",
    scrub:2
  }
},"a")
gsap.to(".strip2 img",{
  y:"-100%",
  ease:"linear",
  duration:2,

scrollTrigger:{
  scroller:"#main",
  trigger:".strip",
  start:"top 0%",
  end:"top -500%",
  scrub:2
}
},"a")
gsap.to(".strip3 img",{
  x:"-100%",
  ease:"linear",
  duration:2,
scrollTrigger:{
  scroller:"#main",
  trigger:".strip",
  start:"top 0%",
  end:"top -500%",
  scrub:2
}},"a")
gsap.to(".strip4 img",{
  y:"100%",
  ease:"linear",
  duration:2,
  scrollTrigger:{
    scroller:"#main",
    trigger:".strip",
    start:"top 0%",
    end:"top -505%",
    scrub:2
  }
},"a")

var tm=gsap.timeline()
tm.to("#page1 .p1box1 img:nth-child(1)",{
  delay:1,
  width:"66vw",
  height:"calc(80vh/3)",
  duration:2,
})
tm.to("#page1 .p1box1 img:nth-child(2)",{
  height:"calc(80vh/3)",
  width:"66vw",
  duration:1,
})
tm.to("#page1 .p1box1 img:nth-child(3)",{
  height:"10vh",
  width:"66vw",
  duration:1,
})
tm.to("#page1 .p1box1 img:nth-child(4)",{
  height:"calc(80vh/3)",
  width:"66vw",
  duration:1,
})
.from("#page1 .p1box2",{
  x:"100%"
})


var abs= gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    start:"top 0%",
    pin:true,
    scrub:2
  }
})
abs
.to("#page3 .p32-2",{
  top:"-100%",
  duration:10

},"a")
.to("#page3 .abs1",{
  top:".5%",
  duration:10

},"a")
.to("#page3 .p32-2",{
  duration:30,
  top:"-525.5%",

})

gsap.to(".infi h1",{
    x:"-100%",
    repeat:-1,
    ease:"linear",
    duration:2,
  })


document.querySelectorAll(".burger .burg").forEach(function(e){
  e.addEventListener("mouseenter",function(){
    e.childNodes[3].childNodes[1].childNodes[1].play();
    gsap.to(e,{
      y:-10
    })
  })
  e.addEventListener("mouseleave",function(){
    e.childNodes[3].childNodes[1].childNodes[1].pause();
    gsap.to(e,{
      y:0
    })
  })
})

var ques=[{h1:"can i invest if i've never invested before ?",p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ex quidem ad earum! Quisquam cumque atque, neque libero, earum reiciendis enim beatae ex nesciunt nisi, porro quos necessitatibus veniam corrupti?"},
{h1:"how can i invest ?",p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat porro atque ullam voluptates, optio fugiat voluptatem voluptatum perspiciatis voluptate dicta repellat consequuntur, incidunt quae!"},
{h1:"can i put 4 milion on ?",p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit voluptatem doloribus, recusandae laudantium totam reprehenderit blanditiis accusamus, officiis inventore excepturi molestiae laboriosam provident earum neque expedita, sunt incidunt fugiat atque esse illo eveniet! Sapiente expedita et obcaecati est laboriosam."},
{h1:"when does the campaign start ?",p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit voluptatem doloribus, recusandae laudantium totam reprehenderit blanditiis accusamus, officiis inventore excepturi molestiae laboriosam provident earum neque expedita, sunt incidunt fugiat atque esse illo eveniet! Sapiente expedita et obcaecati est laboriosam."},
{h1:"what stage is the brand in ?",p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit voluptatem doloribus, recusandae laudantium totam reprehenderit blanditiis accusamus, officiis inventore excepturi molestiae laboriosam provident earum neque expedita, sunt incidunt fugiat atque esse illo eveniet! Sapiente expedita et obcaecati est laboriosam."},
{h1:"why a crowdfunding campaign ?",p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit voluptatem doloribus, recusandae laudantium totam reprehenderit blanditiis accusamus, officiis inventore excepturi molestiae laboriosam provident earum neque expedita, sunt incidunt fugiat atque esse illo eveniet! Sapiente expedita et obcaecati est laboriosam."}
];
var clutter='';
ques.forEach(function(e,index){
  clutter+=`
  <div class="ans">
  <h1><span>${`0`+index}</span> ${e.h1}</h1>
  <p>${e.p}</p>
  <div class="icon"><i class="ri-arrow-right-down-line"></i></div>
</div>
  `;
})
document.querySelector(".ques").innerHTML=clutter;
document.querySelectorAll(".ans").forEach(function(e,index){
  var flag=1;
  console.log(e.childNodes[3].textContent.length)
  e.addEventListener("click",function(){
    if(flag==1){
      gsap.to(e,{
        height:`${e.childNodes[3].textContent.length/2}+"vh"`
      })
      gsap.to(e.childNodes[5].childNodes[0],{
        rotate:-90,
        fontSize:"5vw"
      })
      flag=0;
    }else{
      gsap.to(e,{
        height:"6vh"
      })
      gsap.to(e.childNodes[5].childNodes[0],{
        rotate:0,
        fontSize:"1.7vw"
      })
      flag=1;
    }
  })
})
var glitch = gsap.timeline({
  repeat:-1,
})

glitch
.from(".i1",{
  opacity:0,
  rotate:-10,
  transform:"rotateY(30deg)",
  transform:"rotateX(10deg)"
})
.from(".glitch1",{
  opacity:0,
  
})
.to(".i1",{
  opacity:0,
})
.to(".glitch1",{
  opacity:0,
  
})
.from(".i2",{
  opacity:0,
  rotate:-10,
  transform:"rotateY(30deg)",
  transform:"rotateX(10deg)"
})
.from(".glitch2",{
  opacity:0,
  
})
.to(".i2",{
  opacity:0,
})
.to(".glitch2",{
  opacity:0,
  
})
.from(".i3",{
  opacity:0,
  rotate:-10,
  transform:"rotateY(30deg)",
  transform:"rotateX(10deg)"
})
.from(".glitch3",{
  opacity:0,
  
})
.to(".i3",{
  opacity:0,
})
.to(".glitch3",{
  opacity:0,
  
})
.from(".i4",{
  opacity:0,
  rotate:-10,
  transform:"rotateY(30deg)",
  transform:"rotateX(10deg)"
})
.from(".glitch4",{
  opacity:0,
  
})
.to(".i4",{
  opacity:0,
})
.to(".glitch4",{
  opacity:0,
  
})
.from(".i5",{
  opacity:0,
  rotate:-10,
  transform:"rotateY(30deg)",
  transform:"rotateX(10deg)"
})
.from(".glitch5",{
  opacity:0,
  
})
.to(".i5",{
  opacity:0,
})
.to(".glitch5",{
  opacity:0,
  
})

