// --- CONFIGURATION ---
        const CONFIG = {
            itemCount: 26,
            starCount: 150,
            zGap: 1200,
            loopSize: 0, // Calculated
            camSpeed: 1.5,
            colors: ['#ff003c', '#00f3ff', '#ccff00', '#ffffff']
        };
        CONFIG.loopSize = CONFIG.itemCount * CONFIG.zGap;

        const headingTexts = ["Danas je\ndivan dan",
             "Ne kao i svi ostali",
             "Danas je\nspecijalan",
             "Danas možeš da\nzaboraviš sve loše\ntrenutke iz prošlosti",
             "I spremiš se\nza one najlepše\nkoji te čekaju!",
             "Zato sto je danas…",
            "Tvoj Rođendan!",
            "Srećan rođendan!",
            "Najboljoj\nbudućoj doktorici",
            "I devojci koju\n bi iko ikada\n poželeo",
        "I želim još\nbezbroj njih sa tobom\nda proslavim!",
    "I još jednom"];
        const cardHeadings = ["Joj pitam se ko je ova kul teta",
             "Iluzije :O",
              "ha?",
            "So sad... Too bad :*(",
            "BEEEEEEE!",
            "Selfiiiiii ;D",
            "Nostalgija",
            "BRZINA-MAN",
            "Professional",
            "Krejzi vežbe",
            "Jaaao kako si lepaaaaa",
            "Jesi vala :)",
            "🖕",
            "To je sve..."];
        const cardTexts = ["Uvek mi je lepo da vidim kada ispoljavaš svoju kreativnost.\nOva slika ti baš priliči, zato što si u svetu mašte ti glavna ;)",
             "Sa tobom mi je svaki dan avntura...\nBilo mi je baš zabavno da ovaj dan provedem zajedno sa tobom i andrejem, i još ga se lepo sećam.\nIsto bi bilo lepo kad bi mogao da imam četiri Marte kao na ovoj slici...\nAaaali neeeko zabušava sa svojom magijom pa eto...   -____________-\nMoram nekako samo sa jednom da se zadovoljim.",
              "MOOOOOOLIMMM??",
               "Priznaj da je\nčokoladno mleko moja kravica™\nbolje od\nčokoladno mleko granice™ >:(\nali pusti sad to haha, iako nam svaki dan nije pun sreće i radosti... ja želim da ti u sećanju uvek ostanu samo radosni trenuci, a loši mogu da ostanu u tami zaborava. Zato što si uvek lepša nasmejana.\n\nAJDE DA VIDIM OSMEH BREE :D",
                "Uvek je lepo videti te nasmejanu i punu radosti. Mislim isto da su i ova dva mala gospodina prilično srećna što dobijaju ovako veeeelik zagrljaj od tebe, i što imaju tako nežnog čuvara.\nBaš si slatka sa malim ovčicama <3\nSamo poželim da se ja pretvorim u jednu hehe.",
                 "Ne znam zašto... ali mi se od svih ostalih ova slika najviše sviđa. Naravno meni si lepa na svakoj slici... Čak i na onim koje se tebi ne sviđaju. Ali meni je ova nekako najdraža.",
                  "Posle toliko vremena to si jošuvek ti...\nTu ipak ima jedna stvar koja se promenia...\nSada si samo moja, i tako će zauvek da ostane, jel jasno breeee?!\n\nJoš se sećam onog klimavog mosta i divne prirode u etno selu i svakog detalja, taj dan nam je bio baš lep.",
                "Kako je samo vreme samo proletelo...\nSad se osećam kao da je juče bio taj dan kada sam te pitao da mi bueš devojka...\nPitam se gde su proleteli svi ti dani...\nDa li je moglo da bude još lepše?\nAli sada to nije ni važno...\nOno što imamo ispred sebe je važnije.\nJedino možemo da se potrudimo da nam svaki predstojeći trenutak bude barem pedeset dva puta lepši od svega što je iza nas :D",
                "Kada sam pored tebe uvek se osećam sigurno...\nToliko da bi svaki bacil dobro razmislio da li mu se uopšte isplati da mi priđe,\nkad zna da je tu jedna opasna Doktorica uvek pored mene hehe :D",
                "Ali naravno nije svaki trenutak život i smrt hahah.\n\nZnam da je medicina stresna, ali ti uvek nađeš način da uživaš u tom poslu, zato si najbolja u tome.\nJedva čekam da vidim kako ćeš se osećati kada konačno budeš mogla da staviš to DR. pre imena :)",
                "Zato te volim naviše na svetu, jer kada zacrtaš da ćeš nesto postići, ti od toga ne odustaješ.\nI posle koliko god vremena to i postigneš.\nMnogi kažu kako će uraditi velike stvari, ali samo pojedini uspeju da istraju tu reč do kraja.\n\nI drago mi je da kažem da si ti tvrdoglava u najboljem smislu hahah :P",
                "Najlepša si kada veruješ u sebe, kada znaš ko je gazda. Tada imaš poseban žar u očima, energiju koju niko ne može da ti oduzme.\nZato te najviše volim, zbog tvoje snage i strasti sa kojim stojiš bez straha i sumlje.\nBaš tada si najlepša, ne samo spolja već i iznutra.\n Svaki put kad te vidim podsetim se kako mi je drago što te imam :D",
            "\t\t\t\t  ;D\n\n\n\n\n\n\n\n(moram malo nekad a te i zezam hehehe)",
            "Želim ti srećan rođendan dušiii!!\n🥰🥰🥰🥰🥰🥰🥰🥰\n\n\n\n\n\n"];
        const cardImages = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpg", "14.jpeg"];
        const isImages = [false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,true,true,false,true,false,true,false,true]
// --- STATE ---
        const state = {
            scroll: 0,
            velocity: 0,
            targetSpeed: 0,
            mouseX: 0,
            mouseY: 0
        };

        const world = document.getElementById('world');
        const viewport = document.getElementById('viewport');
        const items = [];
        const boxes = [];

        // --- INIT ---
        function init() {
                            var imagesCount = 0;
                var textCount = 0;
            // Create Items
            for (let i = 0; i < CONFIG.itemCount; i++) {
                const el = document.createElement('div');
                el.className = 'item';

                var isImage = isImages[i];


                if (!isImage) {
                    const txt = document.createElement('div');
                    txt.className = 'big-text';
                    txt.innerText = headingTexts[textCount % headingTexts.length];
                    console.log(textCount)
                    el.appendChild(txt);
                    items.push({
                        el, type: 'text',
                        x: 0, y: 0, rot: 0,
                        baseZ: -i * CONFIG.zGap
                    });
                    textCount+=1;
                } else {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.style.pointerEvents = 'none'
                    el.style.pointerEvents = 'none'
                    card.id = i;
                    el.id = i;
                    const randId = Math.floor(Math.random() * 9999);
                    card.innerHTML = `
                        <div class="card-header" >
                            ${cardHeadings[imagesCount % cardHeadings.length]}
                            
                        </div>
                        <h2 class="card-text">${cardTexts[imagesCount % cardTexts.length]}</h2>
                        <div class="card-footer">
                            <span></span>
                            <span></span>
                        </div>
                        <div style="position:absolute; bottom:2rem; right:2rem; font-size:4rem; opacity:0.03; font-weight:900;">${i}</div>
                        <div class="card-overlay" style="background-image: url('src/${cardImages[imagesCount % cardImages.length]}'); 
            background-size: cover; 
            background-position: center; 
            background-repeat: no-repeat;">
                        </div>
                    `;
                        el.style.pointerEvents = 'none';
   card.style.pointerEvents =  'none';
                    el.appendChild(card);

                    // Spiral / Chaos positioning
                    const angle = (imagesCount / CONFIG.itemCount) * Math.PI * 20;
                    const radius = 400 + Math.random() * 200;
                    const x = Math.cos(angle) * (window.innerWidth * 0.25); // More centered
                    const y = Math.sin(angle) * (window.innerHeight * 0.15);
                    const rot = (Math.random() - 0.5) * 30;

                    items.push({
                        el, type: 'card',
                        x, y, rot,
                        baseZ: -i * CONFIG.zGap
                    });
                    boxes.push({
                        el, type: 'card',
                        x, y, rot,
                        baseZ: -i * CONFIG.zGap
                    });
                    imagesCount+=1;
                }
                world.appendChild(el);
            }

            // Create Stars
            for (let i = 0; i < CONFIG.starCount; i++) {
                const el = document.createElement('div');
                el.className = 'star';
                world.appendChild(el);
                items.push({
                    el, type: 'star',
                    x: (Math.random() - 0.5) * 3000,
                    y: (Math.random() - 0.5) * 3000,
                    baseZ: -Math.random() * CONFIG.loopSize
                });
            }

            // Events
            window.addEventListener('mousemove', (e) => {
                state.mouseX = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
                state.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            });
        }
        init();

        // --- LENIS ---
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.03, // Increased weight for heavy feel
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothTouch: true
        });

        lenis.on('scroll', ({ scroll, velocity }) => {
            state.scroll = scroll;
            state.targetSpeed = velocity;
        });

        // --- RAF LOOP ---
        const feedbackVel = document.getElementById('vel-readout');
        const feedbackFPS = document.getElementById('fps');
        let lastTime = 0;

        function raf(time) {
            lenis.raf(time);

            // FPS
            const delta = time - lastTime;
            lastTime = time;
            //if (time % 10 < 1) feedbackFPS.innerText = Math.round(1000 / delta);

            // Smooth Velocity
            state.velocity += (state.targetSpeed - state.velocity) * 0.1;

            // HUD Updates
            feedbackVel.innerText = Math.abs(state.velocity).toFixed(2);
            document.getElementById('coord').innerText = `${state.scroll.toFixed(0)}`;

            // --- RENDER LOGIC ---

            // 1. Camera Tilt & Shake
            // Add slight noise based on velocity
            const shake = state.velocity * 0.2;
            const tiltX = -(state.mouseY * 15 - state.velocity * 0.5);
            const tiltY = state.mouseX * 15;

            world.style.transform = `
                rotateX(${tiltX}deg) 
                rotateY(${tiltY}deg)
            `;

            // 2. Dynamic Perspective (Warp)
            const baseFov = 1000;
            const fov = baseFov - Math.min(Math.abs(state.velocity) * 10, 600);
            viewport.style.perspective = `${fov}px`;

            // 3. Chromatic Aberration Simulation (simulated via global filter or just on elements)
            // Just applying a subtle shift to the body might be heavy, let's do it on text maybe?
            // Or use the scanline color offset

            // 4. Item Loop
            const cameraZ = state.scroll * CONFIG.camSpeed;

            items.forEach(item => {
                // Calculate position relative to camera
                // item.baseZ is negative. 

                let relZ = item.baseZ + cameraZ;

                // Infinite Wrapping modulo
                // But simplified: 
                const modC = CONFIG.loopSize;

                // Centering the repeat
                // ((relZ % modC) + modC) % modC  -> maps to [0, modC]

                let vizZ = ((relZ % modC) + modC) % modC;
                if (vizZ > 500) vizZ -= modC; // Wrap back if too close/behind

                // Determine Opacity
                // Fade in at -4000, fade out at 200
                // Opacity logic
                let alpha = 1;
                if (vizZ < -3000) alpha = 0;
                else if (vizZ < -2000) alpha = (vizZ + 3000) / 1000;

                if (vizZ > 100 && item.type !== 'star') alpha = Math.min(1 - ((vizZ - 100) / 400),1);

                if (alpha < 0) alpha = 0;
                item.el.style.opacity = alpha;



                if (alpha > 0) {
                   let trans = `
    translate3d(-50%, -50%, 0)
    translate3d(${item.x}px, ${item.y}px, ${vizZ}px)
`;

                    if (item.type === 'star') {
                        // Warp Stars
                        const stretch = Math.max(1, Math.min(1 + Math.abs(state.velocity) * 0.1, 10));
                        trans += ` scale3d(1, 1, ${stretch})`;
                    } else if (item.type === 'text') {
                        trans += ` rotateZ(${item.rot}deg)`;
                        // RGB Split effect on text (simulated with text-shadow)
                        if (Math.abs(state.velocity) > 1) {
                            const offset = state.velocity ;
                            item.el.style.textShadow = `${offset}px 0 orange, ${-offset}px 0 red`;
                        } else {
                            item.el.style.textShadow = 'none';
                        }
                    } else {
                        // Card floats
                        const t = time * 0.001;
                        const float = Math.sin(t + item.x) * 10;
                        trans += ` rotateZ(${item.rot}deg) rotateY(${float}deg)`;
                    }

                    item.el.style.transform = trans;
                }
            });


boxes.forEach(item => {

alpha = item.el.style.opacity;
    item.el.style.pointerEvents = alpha > 0.2 ? 'auto' : 'none';
     //item.style.pointerEvents = alpha > 0.2 ? 'auto' : 'none';

});

            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);



/*document.addEventListener('mouseover', (e) => {
feedbackFPS.innerText =e.target.className + " - " +e.target.id;
  //console.log('Hovering on:', e.target);
}); */