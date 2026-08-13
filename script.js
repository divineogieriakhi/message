/* =====================================
   OPEN WEBSITE + START MUSIC
===================================== */

const enterButton =
    document.getElementById("enterButton");

const opening =
    document.getElementById("opening");

const mainContent =
    document.getElementById("mainContent");


/* =====================================
   MUSIC
===================================== */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

let musicPlaying = false;


/* =====================================
   OPEN WEBSITE
===================================== */

enterButton.addEventListener("click", () => {

    /*
        Start music when she clicks
        "Open my little world 💗"
    */

    if (music) {

        music.volume = 0.35;

        music.play()
            .then(() => {

                musicPlaying = true;

                if (musicButton) {
                    musicButton.innerText = "⏸️";
                }

            })
            .catch((error) => {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    }


    /*
        Hide opening screen
    */

    opening.classList.add("hide");


    setTimeout(() => {

        opening.style.display = "none";

        mainContent.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

});



/* =====================================
   MUSIC PLAY / PAUSE BUTTON
===================================== */

if (musicButton) {

    musicButton.addEventListener("click", () => {

        if (!music) return;


        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicButton.innerText = "🎵";

        } else {

            music.volume = 0.35;

            music.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.innerText = "⏸️";

                })
                .catch((error) => {

                    console.log(
                        "Music could not start:",
                        error
                    );

                });

        }

    });

}



/* =====================================
   FLOATING HEARTS / FLOWERS / BOWS
===================================== */

const decorationContainer =
    document.getElementById("floatingDecorations");

const decorations = [
    "♡",
    "♥",
    "🌸",
    "🌷",
    "🎀",
    "🦋",
    "✦",
    "✨"
];


function createDecoration() {

    if (!decorationContainer) return;


    const element =
        document.createElement("div");


    element.className =
        "floating";


    element.innerText =
        decorations[
            Math.floor(
                Math.random() *
                decorations.length
            )
        ];


    element.style.left =
        Math.random() * 100 + "%";


    element.style.fontSize =
        Math.random() * 18 + 12 + "px";


    element.style.animationDuration =
        Math.random() * 8 + 8 + "s";


    decorationContainer.appendChild(element);


    setTimeout(() => {

        element.remove();

    }, 17000);

}


setInterval(createDecoration, 700);



/* =====================================
   MOOD BUTTONS
===================================== */

const moodCards =
    document.querySelectorAll(".mood-card");

const moodResult =
    document.getElementById("moodResult");


const moods = {

    comfort:
        "🧸 Come here. Imagine I'm wrapping you in the biggest, softest blanket right now. You don't have to do anything. Just rest. ❤️",

    hug:
        "🫂 EMERGENCY HUG DEPLOYED. Please remain still while approximately 47 imaginary hugs are delivered to you.",

    happy:
        "🍓 Congratulations. You have been selected for today's random dose of nonsense. You are officially too cute to be allowed to have a bad day.",

    love:
        "💌 In case nobody has told you today: you are cared for, appreciated, important, and very, very loved. Don't forget that."

};


moodCards.forEach(card => {

    card.addEventListener("click", () => {

        const mood =
            card.dataset.mood;


        moodResult.style.opacity = "0";


        setTimeout(() => {

            moodResult.innerText =
                moods[mood];

            moodResult.style.opacity =
                "1";

        }, 150);


        createMiniExplosion(card);

    });

});



/* =====================================
   LITTLE CLICK EXPLOSION
===================================== */

function createMiniExplosion(element) {

    const rect =
        element.getBoundingClientRect();


    for (let i = 0; i < 8; i++) {

        const sparkle =
            document.createElement("span");


        sparkle.innerText =
            ["💗", "✨", "🌸", "🎀"][
                Math.floor(
                    Math.random() * 4
                )
            ];


        sparkle.style.position =
            "fixed";


        sparkle.style.left =
            rect.left +
            rect.width / 2 +
            "px";


        sparkle.style.top =
            rect.top +
            rect.height / 2 +
            "px";


        sparkle.style.zIndex =
            "200";


        sparkle.style.pointerEvents =
            "none";


        document.body.appendChild(sparkle);


        const x =
            (Math.random() - .5) * 180;


        const y =
            (Math.random() - .5) * 150;


        sparkle.animate(

            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1)`,

                    opacity: 0
                }
            ],

            {
                duration: 800
            }

        );


        setTimeout(
            () => sparkle.remove(),
            850
        );

    }

}



/* =====================================
   FUNNY DOCTOR SECTION
===================================== */

const doctorButton =
    document.getElementById("doctorButton");

const diagnosis =
    document.getElementById("diagnosis");

const prescription =
    document.getElementById("prescription");


const diagnoses = [

    [
        "SEVERE CUTENESS",
        "2 hugs + snacks + being told you're pretty"
    ],

    [
        "CHRONIC NEED-TO-BE-PAMPERED SYNDROME",
        "Unlimited comfort + zero unnecessary arguments"
    ],

    [
        "ACUTE PRINCESS CONDITION",
        "Royal treatment immediately. This is non-negotiable."
    ],

    [
        "EXTREME SILLINESS DEFICIENCY",
        "One terrible joke and one aggressively supportive boyfriend"
    ],

    [
        "TERMINAL 'I DESERVE TO REST' DISEASE",
        "Prescription: literally go lie down 😭"
    ],

    [
        "VERY SERIOUS CASE OF BEING HER",
        "No known cure. Researchers have stopped looking."
    ]

];


if (doctorButton) {

    doctorButton.addEventListener("click", () => {

        const random =
            diagnoses[
                Math.floor(
                    Math.random() *
                    diagnoses.length
                )
            ];


        diagnosis.innerHTML =
            `<span>${random[0]}</span>`;


        prescription.innerText =
            random[1];


        diagnosis.animate(

            [
                {
                    transform:
                        "scale(.7) rotate(-5deg)"
                },

                {
                    transform:
                        "scale(1.1) rotate(3deg)"
                },

                {
                    transform:
                        "scale(1)"
                }
            ],

            {
                duration: 500
            }

        );

    });

}



/* =====================================
   COMPLIMENT BUTTON
===================================== */

const complimentButton =
    document.getElementById("complimentButton");

const complimentText =
    document.getElementById("complimentText");


const compliments = [

    "You have one of those smiles that deserves its own warning label. 💗",

    "You're genuinely one of my favorite people. 🎀",

    "You make ordinary moments feel special. 🌷",

    "You're allowed to have bad days and still be amazing. 🦋",

    "You are so much more appreciated than you probably realize. ❤️",

    "Someone out there thinks you're absolutely wonderful. That someone is me. 😭",

    "You don't need to be perfect to be loved. You just need to be you. 🧸",

    "You're pretty. You're loved. You're important. That's the announcement. 🎀"

];


if (complimentButton) {

    complimentButton.addEventListener("click", () => {

        const random =
            compliments[
                Math.floor(
                    Math.random() *
                    compliments.length
                )
            ];


        complimentText.innerText =
            random;


        complimentText.animate(

            [
                {
                    opacity: 0,
                    transform:
                        "translateY(10px)"
                },

                {
                    opacity: 1,
                    transform:
                        "translateY(0)"
                }
            ],

            {
                duration: 500
            }

        );

    });

}



/* =====================================
   OPEN WHEN LETTERS
===================================== */

const letters =
    document.querySelectorAll(".letter");

const letterResult =
    document.getElementById("letterResult");


const letterMessages = {

    sad:
        "💌 Hey. It's okay if you're having a rough moment. You don't have to hide it or pretend everything is perfect. Take a breath, get comfortable, and remember that one bad moment doesn't make a bad day. ❤️",

    angry:
        "💌 First of all... breathe 😭. Secondly, whatever annoyed you can wait. You deserve a little peace. Get comfortable, put on something you like, and let the world survive without your attention for a while. 🎀",

    miss:
        "💌 If you're reading this because you miss me, then just know there's probably someone on the other side of the screen who misses you too. 🥹❤️"

};


letters.forEach(letter => {

    letter.addEventListener("click", () => {

        const type =
            letter.dataset.letter;


        letterResult.innerText =
            letterMessages[type];


        letterResult.classList.remove("show");


        setTimeout(() => {

            letterResult.classList.add("show");

        }, 50);

    });

});



/* =====================================
   SECRET FLOWER GARDEN
===================================== */

const growButton =
    document.getElementById("growButton");

const garden =
    document.getElementById("garden");

const gardenCount =
    document.getElementById("gardenCount");


let growth = 0;


const flowers = [
    "🌱",
    "🌿",
    "🌷",
    "🌸",
    "🌺",
    "💐"
];


if (growButton) {

    growButton.addEventListener("click", () => {

        if (growth < 5) {

            growth++;


            garden.innerText =
                flowers[growth];


            gardenCount.innerText =
                `${growth} / 5`;


            garden.classList.remove("bloom");


            void garden.offsetWidth;


            garden.classList.add("bloom");

        }


        if (growth === 5) {

            growButton.innerText =
                "You grew a whole flower garden! 🌸";


            gardenCount.innerText =
                "🌷 You did it! 🌷";


            flowerExplosion();

        }

    });

}



/* =====================================
   FLOWER EXPLOSION
===================================== */

function flowerExplosion() {

    for (let i = 0; i < 25; i++) {

        const flower =
            document.createElement("div");


        flower.innerText =
            ["🌸", "🌷", "🦋", "✨", "💗"][
                Math.floor(
                    Math.random() * 5
                )
            ];


        flower.style.position =
            "fixed";


        flower.style.left =
            "50%";


        flower.style.top =
            "60%";


        flower.style.fontSize =
            Math.random() * 20 + 15 + "px";


        flower.style.zIndex =
            "100";


        document.body.appendChild(flower);


        const x =
            (Math.random() - .5) * 500;


        const y =
            (Math.random() - .5) * 400;


        flower.animate(

            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1)`,

                    opacity: 0
                }
            ],

            {
                duration: 1300
            }

        );


        setTimeout(
            () => flower.remove(),
            1400
        );

    }

}



/* =====================================
   SECRET BUTTON
===================================== */

const secretButton =
    document.getElementById("secretButton");

const secretMessage =
    document.getElementById("secretMessage");


if (secretButton) {

    secretButton.addEventListener("click", () => {

        secretMessage.classList.add("show");


        secretButton.innerText =
            "🎀 Secret discovered!";


        secretButton.disabled =
            true;


        flowerExplosion();

    });

}



/* =====================================
   FINAL SURPRISE
===================================== */

const finalButton =
    document.getElementById("finalButton");

const finalMessage =
    document.getElementById("finalMessage");


if (finalButton) {

    finalButton.addEventListener("click", () => {

        finalMessage.classList.add("show");


        finalButton.innerText =
            "🥹 Okay... that's everything";


        finalButton.disabled =
            true;


        massiveHeartExplosion();

    });

}



/* =====================================
   MASSIVE HEART EXPLOSION
===================================== */

function massiveHeartExplosion() {

    const items = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "🌸",
        "🎀",
        "🦋",
        "✨"
    ];


    for (let i = 0; i < 60; i++) {

        const item =
            document.createElement("div");


        item.innerText =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            "50%";


        item.style.top =
            "60%";


        item.style.fontSize =
            Math.random() * 25 + 15 + "px";


        item.style.zIndex =
            "999";


        item.style.pointerEvents =
            "none";


        document.body.appendChild(item);


        const x =
            (Math.random() - .5) * 900;


        const y =
            (Math.random() - .5) * 700;


        item.animate(

            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    Math.random() * 1200 + 1000,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }

        );


        setTimeout(
            () => item.remove(),
            2500
        );

    }

}