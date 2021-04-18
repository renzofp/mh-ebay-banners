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

    //Create a custom bounce ease:
    // CustomBounce.create("myBounce", {strength:0.6, squash:3, squashID:"myBounce-squash"});

    /* ***** JS Target Variables ***** */
    var contentBanner = document.querySelectorAll(".content-banner");
    var contentBg = document.querySelectorAll(".content-bg");
    var fullBlock1 = document.querySelectorAll(".content-animate-full-1 .block-1");
    // var fullBlock2 = document.querySelectorAll(".content-animate-full-1 .block-2");
    // var fullBlock3 = document.querySelectorAll(".content-animate-full-1 .block-3");
    // var fullBlock4 = document.querySelectorAll(".content-animate-full-1 .block-4");
    
    var frame1 = document.querySelectorAll(".content-frame-1");
    var frame1_contentText = document.querySelectorAll(".content-frame-1 .content-text");
    var frame1_text = document.querySelectorAll(".content-frame-1 .text");
    var frame1_cta = document.querySelectorAll(".content-frame-1 .cta");
    var frame1_ctaArrow = document.querySelectorAll(".content-frame-1 .cta-arrow");
    var frame1_blockText = document.querySelectorAll(".content-frame-1 .block-text");
    var frame1_blockCta = document.querySelectorAll(".content-frame-1 .block-cta");
    var frame1_block2 = document.querySelectorAll(".content-frame-1 .block-2");
    var frame1_block3 = document.querySelectorAll(".content-frame-1 .block-3");
    var frame1_block4 = document.querySelectorAll(".content-frame-1 .block-4");
    
    tl.set(contentBg, {x:30});
    tl.set(frame1_contentText, {scale:1, x:40, y:0});
    tl.set([frame1_blockCta, frame1_block2, frame1_block3, frame1_block4, frame1_cta], {x:100, y:0});
    tl.set([frame1_text], {autoAlpha:0, x:60});
    tl.set(frame1_blockText, {scaleX:1.74, scaleY:1.51});
    tl.set(frame1_ctaArrow, {scaleX:0.9, autoAlpha:0, x:0});

    /* ***** Base Gsap Timeline ***** */
    tl.to(contentBanner, {duration:0.6, autoAlpha:1, ease: "power2.out"});
    tl.addLabel("start");

    /* ***** Start Coding Here ***** */

        /* ***** Custom Gsap Timeline ***** */
        tl.addLabel("frame1");
        tl.to(fullBlock1, {duration:0.8, x:"-100%", ease: "power4.out"}, "frame1");
        tl.to(contentBg, {duration:1, x:0, ease: "power3.out"}, "frame1");        
        tl.to(frame1_text, {duration:1, stagger:1, autoAlpha:1, x:55, ease: "power3.out"}, "frame1");
        tl.to(frame1_text, {duration:1, autoAlpha:1, x:0, ease: "back.out"}, "frame1+=2");
        tl.to(frame1_contentText, {duration:1, scale:1, x:0, y:0, ease: "back.out"}, "frame1+=2");
        tl.to(frame1_blockText, {duration:1, scale:1, ease: "back.out"}, "frame1+=2");
        tl.to([frame1_blockCta, frame1_block2, frame1_block3, frame1_block4, frame1_cta], {duration:0.8, autoAlpha:1, x:0, ease: "back.out"}, "frame1+=2");

        //do the bounce by affecting the "y" property.
        // TweenMax.from([frame1_blockCta, frame1_block2, frame1_block3, frame1_block4], 2, {x:100, ease:"myBounce"});
        // //and do the squash/stretch at the same time:
        // TweenMax.to([frame1_blockCta, frame1_block2, frame1_block3, frame1_block4], 2, {scaleX:140, scaleY:60, ease:"myBounce-squash", transformOrigin:"center bottom"});
        
        // tl.to(frame1_ctaArrow, {duration:0.2, autoAlpha:1, x:0, ease: "power3.out"}, "frame1+=2.5");
        // tl.to(frame1_ctaArrow, {duration:0.2, scaleX:0.7, autoAlpha:0, x:10, ease: "power4.out"}, "frame1+=1");
        tl.to(frame1_ctaArrow, {duration:0.4, scaleX:1, autoAlpha:1, x:0, ease: "power4.out"}, "frame1+=2.7");

        
        tl.addLabel("frame3", "+=2.2");
        tl.to(frame1_ctaArrow, {duration:0.2, scaleX:0.7, autoAlpha:0, x:10, ease: "power4.out"}, "frame3");
        tl.to(frame1_ctaArrow, {duration:0.5, scaleX:1, autoAlpha:1, x:0, ease: "power4.out"}, "frame3+=0.4");
        
        tl.addLabel("frame4", "+=2.2");
        tl.to(frame1_ctaArrow, {duration:0.2, scaleX:0.7, autoAlpha:0, x:10, ease: "power4.out"}, "frame4");
        tl.to(frame1_ctaArrow, {duration:0.5, scaleX:1, autoAlpha:1, x:0, ease: "power4.out"}, "frame4+=0.4");
        
        tl.addLabel("frame5", "+=2.2");
        tl.to(frame1_ctaArrow, {duration:0.2, scaleX:0.7, autoAlpha:0, x:10, ease: "power4.out"}, "frame5");
        tl.to(frame1_ctaArrow, {duration:0.5, scaleX:1, autoAlpha:1, x:0, ease: "power4.out"}, "frame5+=0.4");
        
    /* ***** End Coding Here ***** */
}