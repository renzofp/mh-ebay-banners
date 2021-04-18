/* ********************************
********** Version : 2.0 **********
******************************** */
/* ***** References *****
Gsap - Getting Started : https://greensock.com/get-started
Gsap - Ease Visualizer : https://greensock.com/ease-visualizer
*/

/* ***** Function | Create Timeline ***** */
var tl;
function createTimeline(){
    // Gsap Timeline
    tl = gsap.timeline({
        repeat:1, // Number of Times the animation Repeat (0 = Play 1 time, 1 = Replay 1 time)
        repeatDelay:4, // Delay in "seconds" before the animation Loop
        onComplete: function(){
            /* ***** Timeline End ***** */
            document.getElementById("ad-container").className = "timeline-finished"; // AddClass "timeline-finished" to "#ad-container" (Hide the Replay Button)
        }
    });

    /* ***** JS Target Variables ***** */
    var contentBanner = document.querySelectorAll(".content-banner");
    var contentBg = document.querySelectorAll(".content-bg");
    var fullBlock1 = document.querySelectorAll(".content-animate-full-1 .block-1");
    var fullBlock2 = document.querySelectorAll(".content-animate-full-1 .block-2");
    var fullBlock3 = document.querySelectorAll(".content-animate-full-1 .block-3");
    
    var frame1 = document.querySelectorAll(".content-frame-1");
    var frame1_contentText = document.querySelectorAll(".content-frame-1 .content-text");
    var frame1_text = document.querySelectorAll(".content-frame-1 .text");
    var frame1_cta = document.querySelectorAll(".content-frame-1 .cta");
    var frame1_ctaArrow = document.querySelectorAll(".content-frame-1 .cta-arrow");
    var frame1_blockText = document.querySelectorAll(".content-frame-1 .block-text");
    
    tl.set(contentBg, {y:-30});
    tl.set(frame1_contentText, {scale:1.15, x:10, y:23});
    tl.set([frame1_text], {autoAlpha:0, y:-10});
    tl.set(frame1_blockText, {scaleX:1.18, scaleY:1.6});
    tl.set(frame1_cta, {autoAlpha:0, x:-20});
    tl.set(frame1_ctaArrow, {autoAlpha:0, x:-10});

    /* ***** Base Gsap Timeline ***** */
    tl.to(contentBanner, {duration:0.6, autoAlpha:1, ease: "power2.out"});
    tl.addLabel("start");

    /* ***** Start Coding Here ***** */

        /* ***** Custom Gsap Timeline ***** */
        tl.addLabel("frame1");
        tl.to(fullBlock1, {duration:0.8, y:"100%", force3D:"true", ease: "power4.out"}, "frame1");
        tl.to(fullBlock2, {duration:0.8, y:"100%", force3D:"true", ease: "power4.out"}, "frame1+=0.1");
        tl.to(fullBlock3, {duration:1, y:"100%", force3D:"true", ease: "power4.out"}, "frame1+=0.4");
        
        tl.to(contentBg, {duration:0.8, y:0, force3D:"true", ease: "power3.out"}, "frame1+=0.4");
        
        tl.to(frame1_text, {duration:1, stagger:1, autoAlpha:1, y:0, force3D:"true", ease: "power3.out"}, "frame1+=0.4");
        

        tl.addLabel("frame2", "+=1.2");
        tl.to(frame1_contentText, {duration:1, scale:1, x:0, y:0, force3D:"true", ease: "power3.out"}, "frame2");
        tl.to(frame1_blockText, {duration:0.8, scale:1, force3D:"true", ease: "power3.out"}, "frame2");

        tl.to([frame1_cta, frame1_ctaArrow], {duration:0.8, stagger:0.1, autoAlpha:1, x:0, force3D:"true", ease: "power3.out"}, "frame2+=0.4");

        
        tl.addLabel("frame3", "+=2.2");
        tl.to(frame1_ctaArrow, {duration:0.2, scaleX:0.7, autoAlpha:0, x:10, force3D:"true", ease: "power4.out"}, "frame3");
        tl.to(frame1_ctaArrow, {duration:0.5, scaleX:1, autoAlpha:1, x:0, force3D:"true", ease: "power4.out"}, "frame3+=0.4");
        
        tl.addLabel("frame4", "+=2.2");
        tl.to(frame1_ctaArrow, {duration:0.2, scaleX:0.7, autoAlpha:0, x:10, force3D:"true", ease: "power4.out"}, "frame4");
        tl.to(frame1_ctaArrow, {duration:0.5, scaleX:1, autoAlpha:1, x:0, force3D:"true", ease: "power4.out"}, "frame4+=0.4");
        
        tl.addLabel("frame5", "+=2.2");
        tl.to(frame1_ctaArrow, {duration:0.2, scaleX:0.7, autoAlpha:0, x:10, force3D:"true", ease: "power4.out"}, "frame5");
        tl.to(frame1_ctaArrow, {duration:0.5, scaleX:1, autoAlpha:1, x:0, force3D:"true", ease: "power4.out"}, "frame5+=0.4");
        
    /* ***** End Coding Here ***** */
}