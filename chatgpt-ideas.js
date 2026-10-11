const scriptedIdea = (id, title, desc, scenes) => ({
  id, title, desc, ref: "Original format: repeated road-trip structure + honest group comedy + practical payoff",
  scenes: scenes.map((what, index) => ({id:`${id}-${index + 1}`, what, done:false, p:["Portrait","Video","Friend","Still",index === scenes.length - 1 ? "Wide" : "Medium"]}))
});

const chatGPTVideoIdeas = [
  {
    id: "chatgpt-daxton-class-to-tetons",
    title: "Daxton's Idea: Fell Asleep in Fayetteville, Woke Up in the Tetons",
    desc: "Original transition concept by Daxton. Hook: an exhausted student drops his head in class and lands in the Tetons. Aim for 18–25 seconds, a fast first-second setup, one seamless impact cut, escalating outdoor reveals, and a loop back to class.",
    ref: "Format research: immediate hook + original short-form transition + rewatchable loop",
    scenes: [
      {id:"chatgpt-daxton-1",what:"HOOK — Fayetteville classroom, 0:00–0:02. Lock the phone vertically on a tripod at desk height. Show a notebook labeled 'Still in class…' and Daxton fighting to keep his eyes open. On-screen text: 'When your brain leaves Fayetteville before you do.' Props: desk, notebook, backpack, hoodie.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-daxton-2",what:"CLASSROOM BUILD — 0:02–0:05. Tight close-up from the same side: elbow on desk, cheek resting in palm. Let the head dip twice. Whisper: 'I just need five minutes.' Make the third drop larger so it crosses the frame and creates motion blur.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-daxton-3",what:"MATCH-CUT SETUP — Mark the exact phone height, lens, desk edge, head position, fall direction, wardrobe, and lighting side. Record the final drop several times. End the classroom clip on the first frame where Daxton's forehead or hair reaches the table.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-daxton-4",what:"TETONS MATCH CUT — Recreate the composition at an outdoor picnic table: same hoodie, elbow angle, camera height, fall direction, and head position. Start with Daxton's head already contacting the table, then continue the motion. Cut exactly on impact and bridge both locations with one desk-thump sound.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-daxton-5",what:"REVEAL — 0:05–0:09. Daxton slowly raises his head, hears wind or birds, and looks confused. Pull back to reveal the Tetons. Dialogue: 'This is not Fayetteville.' Hold the mountain reveal long enough to register; keep the reaction deadpan.",done:false,p:["Portrait","Video","Friend","Zoom/Pan","Wide"]},
      {id:"chatgpt-daxton-6",what:"ESCALATION MONTAGE — 0:09–0:16. Three 1–2 second cuts: Daxton carries the classroom notebook on a trail; answers attendance beside a lake with 'Present'; opens the backpack to reveal hiking gear instead of textbooks. Cut each action on the beat.",done:false,p:["Portrait","Video","Friend","Walk","Medium"]},
      {id:"chatgpt-daxton-7",what:"PAYOFF — 0:16–0:20. At the scenic table, Daxton opens the notebook. Inside, write: 'Field trip approved.' Look straight at camera and say, 'Best class I've taken.' End on a wide mountain shot.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-daxton-8",what:"LOOP OPTION — 0:20–0:23. Daxton gets sleepy at the Tetons table and drops his head again. Cut on the same impact back to the original Fayetteville classroom opening frame. Keep the thump continuous so the replay feels intentional.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]}
    ]
  },
  {
    id: "chatgpt-weekend-you-have",
    title: "Use the Weekend You Already Have",
    desc: "A grounded 22–28 second mini-story showing that a memorable trip can fit between Friday afternoon and Sunday night. The message is practical, not inspirational: leave from real life, keep the plan small, and come home on time.",
    ref: "Original format: time-stamped micro-itinerary + honest travel friction + earned scenic payoff",
    scenes: [
      {id:"chatgpt-weekend-1",what:"HOOK — 0:00–0:02. Close-up of a phone changing from 4:59 to 5:00 PM on Friday beside a half-finished assignment or work bag. On-screen text: 'You do not need a free month.' Use natural room sound; no dramatic voice-over.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-weekend-2",what:"LEAVE REAL LIFE — 0:02–0:06. Three half-second cuts: laptop closes, cheap duffel zips, apartment door shuts. Dialogue from a friend off camera: 'Are we actually going?' Daxton: 'For thirty-six hours.' Props: normal backpack, cooler, keys; avoid polished travel gear.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-weekend-3",what:"SHOW THE FRICTION — 0:06–0:10. Gas-station receipt, wrong highway turn, friend asleep against the window, convenience-store dinner. On-screen text: 'Not glamorous. Still counts.' Keep one imperfect laugh or missed turn in the edit.",done:false,p:["Portrait","Video","Friend","Walk","Medium"]},
      {id:"chatgpt-weekend-4",what:"ARRIVAL — 0:10–0:15. Match the apartment door closing to the car door opening at a trailhead. Step out into the wide view. Do not cheer; let everyone quietly take it in for one beat. Timestamp: 'Saturday · 7:14 AM.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-weekend-5",what:"THE ACTUAL TRIP — 0:15–0:21. Four honest one-second clips: instant coffee, boots in mud, someone laughing mid-sentence, sunset from camp. Favor faces and small moments over a generic landscape montage.",done:false,p:["Portrait","Video","Friend","Walk","Medium"]},
      {id:"chatgpt-weekend-6",what:"PAYOFF — 0:21–0:26. Sunday night: put the same bag beside the same desk. On-screen text: 'Home by 9:41. Still worth going.' End on the phone alarm being set for Monday, then one final half-second flash of the group laughing.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]}
    ]
  },
  {
    id: "chatgpt-nobody-ready",
    title: "Nobody Felt Ready",
    desc: "A dry, reassuring group skit where every friend admits one ordinary reason they almost skipped the trip. The joke is that nobody becomes magically prepared; they simply get into the car together.",
    ref: "Original format: rapid character confession + stereotype reversal + sincere visual payoff",
    scenes: [
      {id:"chatgpt-ready-1",what:"HOOK — 0:00–0:03. Daxton stands beside an open car trunk and asks, 'Who here felt ready for this trip?' Whip-pan across four friends. Every person immediately says, 'No.' On-screen text: 'Good news about traveling…'",done:false,p:["Portrait","Video","Friend","Swing","Medium"]},
      {id:"chatgpt-ready-2",what:"CONFESSION ONE — 0:03–0:06. Friend holding one tiny grocery bag: 'I packed twelve minutes ago.' Cut before they finish smiling. Label them on screen: 'The planner.' Props: grocery bag and one loose sock.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-ready-3",what:"CONFESSION TWO — 0:06–0:09. Friend staring at the gas gauge: 'I have fourteen dollars.' Daxton silently holds up the shared gas-money envelope. Label: 'The financier.' Keep delivery completely serious.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-ready-4",what:"CONFESSION THREE — 0:09–0:12. Friend in obviously new hiking boots: 'I watched one video about blisters.' Another friend tosses them duct tape. Label: 'The expert.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-ready-5",what:"DECISION — 0:12–0:16. Daxton looks at the chaotic trunk, then the group: 'So… leave anyway?' Everyone gets in without answering. Slam the trunk toward the lens for a black-frame transition.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-ready-6",what:"PAYOFF — 0:16–0:23. Open from the black frame on a tent flap revealing morning mountains. Show the same friends sharing coffee and laughing. Text: 'You can figure out the small stuff together.' End with the newest hiker saying, 'The duct tape worked.'",done:false,p:["Portrait","Video","Friend","Zoom/Pan","Wide"]}
    ]
  },
  {
    id: "chatgpt-excuse-checkout",
    title: "Checking Out With Excuses",
    desc: "A fast parody where excuses are scanned like groceries, then replaced with one small, realistic trip plan. It encourages action without pretending travel is free, effortless, or life-changing.",
    ref: "Original format: familiar retail stereotype + escalating prop comedy + practical call to action",
    scenes: [
      {id:"chatgpt-excuse-1",what:"HOOK — 0:00–0:03. Set a table like a checkout counter. Friend slides over index cards labeled 'Too busy,' 'Too expensive,' and 'Nobody to go with.' Daxton scans the first card and makes a barcode beep. Cashier line: 'Anything else stopping you today?'",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-excuse-2",what:"ESCALATE — 0:03–0:08. Customer unloads increasingly specific cards: 'Need better boots,' 'Weather might be weird,' 'Group chat said maybe.' Scan each faster. Put the running total on screen: '$0.00 — excuses are free.' Props: marker cards, phone calculator, reusable bag.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-excuse-3",what:"REALITY CHECK — 0:08–0:13. Cashier stops joking and asks, 'What could you actually do this weekend?' Customer answers: 'One night. Two hours away. Split gas four ways.' Type each constraint into the calculator so the plan visibly becomes smaller.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-excuse-4",what:"TRANSITION — 0:13–0:16. Cashier puts a trail map into the reusable bag and pushes it straight into the lens. Pull the same bag away from the lens at a trailhead, matching hand position and motion.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-excuse-5",what:"PAYOFF — 0:16–0:23. The two characters sit at a simple campsite eating grocery-store sandwiches. Customer: 'So this was the plan?' Daxton: 'This was enough.' End card: 'Make the trip smaller. Not someday.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-doorway-fayetteville-west",
    title: "The Doorway Out of Fayetteville",
    desc: "A repeatable location-transition series: every ordinary Fayetteville doorway opens onto a different outdoor place. The first episode turns a draining day into a believable weekend departure instead of a fantasy escape.",
    ref: "Original format: doorway match cut + repeated visual rule + destination reveal",
    scenes: [
      {id:"chatgpt-door-1",what:"HOOK — 0:00–0:03. In Fayetteville, film Daxton walking toward a classroom or apartment door carrying the same backpack used outside. On-screen text: 'What if this door went somewhere useful?' Camera follows directly behind at shoulder height.",done:false,p:["Portrait","Video","Friend","Walk","Medium"]},
      {id:"chatgpt-door-2",what:"MATCH-CUT SETUP — 0:03–0:06. Daxton reaches with the right hand, opens the door toward the lens, and lets the dark door surface fill the entire frame. Record camera height, walking speed, hand position, lens, wardrobe, and direction.",done:false,p:["Portrait","Video","Friend","Walk","Close-up"]},
      {id:"chatgpt-door-3",what:"DESTINATION MATCH — Start with the frame fully covered by a dark tent flap or car hatch near the Tetons. Pull it away in the same direction and continue the same walking pace. Carry the identical backpack. Bridge the cut with one continuous door-hinge sound that becomes wind.",done:false,p:["Portrait","Video","Friend","Walk","Close-up"]},
      {id:"chatgpt-door-4",what:"REVEAL — 0:06–0:11. Keep following as Daxton steps into the wide landscape, then stop while he continues. He turns back once and says, 'You coming?' Do not add a speech; hold the view for two seconds.",done:false,p:["Portrait","Video","Friend","Walk","Wide"]},
      {id:"chatgpt-door-5",what:"MAKE IT ATTAINABLE — 0:11–0:17. Overlay three plain details on candid travel clips: 'Left Friday after class · Split gas · Back Sunday night.' Include the gas stop and crowded car, not only the destination.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-door-6",what:"SERIES PAYOFF — 0:17–0:22. At camp, Daxton opens the tent flap toward the lens until it goes dark. Text: 'Where should the next door open?' Future episodes can match that darkness to a beach bathroom, office stairwell, dorm closet, or trail shelter.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]}
    ]
  },
  {
    id: "chatgpt-trunk-tetris",
    title: "Trunk Tetris: The Road Trip Draft",
    desc: "Treat packing the car like a live sports broadcast. Every bag becomes a questionable draft pick, giving you useful loading footage and a funny introduction to each traveler.",
    ref: "Original format: sports commentary parody + packing montage + recurring character introductions",
    scenes: [
      {id:"chatgpt-trunk-1",what:"HOOK — 0:00–0:03. Wide shot of the empty trunk. Announcer voice: 'Welcome to the 2026 Road Trip Packing Draft.' Friend walks in carrying an absurdly large pillow. Add a crowd-cheer sound and the label 'First overall pick.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-trunk-2",what:"PLAYER INTRODUCTIONS — 0:03–0:08. Film each friend approaching the trunk with one item. Freeze for half a second and label their role: 'Cooler specialist,' 'Brought zero socks,' 'Owns every charger,' and 'Personal-item negotiator.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-trunk-3",what:"TETRIS ROUND — 0:08–0:14. Overhead or high rear angle as bags enter rapidly on the beat. Commentary: 'Bold cooler placement. Terrible use of the left corner.' Include hands removing and repacking the same bag twice.",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-trunk-4",what:"CONFLICT — 0:14–0:18. Someone arrives late holding another duffel. Cut to the completely full trunk, then four silent faces. Late friend: 'There is definitely room.' Hold the silence for one beat.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-trunk-5",what:"TRANSITION — 0:18–0:21. Slam the trunk directly toward the camera. Cut on impact to the trunk opening at the first scenic stop with every bag still packed. Use one continuous trunk-slam sound.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-trunk-6",what:"PAYOFF — 0:21–0:25. The giant pillow falls out first. Announcer: 'And the first-round pick immediately contributes.' End with the group laughing while unloading.",done:false,p:["Portrait","Video","Friend","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-before-we-leave",
    title: "The Things Everyone Says Before Leaving",
    desc: "A quick stereotype sketch built from real departure chaos: repeated bathroom trips, missing keys, fake punctuality, and the one friend already eating the road snacks.",
    ref: "Original format: recognizable group stereotypes + escalating repetition + departure payoff",
    scenes: [
      {id:"chatgpt-leave-1",what:"HOOK — 0:00–0:02. Camera inside the car facing the open passenger door. On-screen text: 'Leaving at 6:00 AM.' Daxton checks the dashboard clock: 6:47. Say nothing.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-leave-2",what:"THE CHECKER — 0:02–0:05. Friend leans into the car: 'Did everyone use the bathroom?' Three voices say yes. The same friend immediately says, 'Wait, I have to go.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-leave-3",what:"THE KEY SEARCH — 0:05–0:08. Driver pats every pocket while everyone watches. Passenger points silently; keys are already in the ignition. Add on-screen label: 'Team leadership.'",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-leave-4",what:"THE SNACK THIEF — 0:08–0:11. Close-up of a sealed snack bag labeled 'FOR LATER.' Cut to a friend eating it before the car moves. Friend whispers: 'It is later than 6:00.'",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-leave-5",what:"FALSE START — 0:11–0:15. Car rolls five feet, stops, and reverses. Driver opens the door: 'Forgot my wallet.' Repeat the original clock shot, now reading 7:03.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-leave-6",what:"PAYOFF — 0:15–0:20. Finally pull away. Text changes from 'Leaving at 6:00' to 'Left eventually.' Inside-car cheer lasts one second, then everyone immediately goes quiet and sleepy.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-road-trip-jobs",
    title: "Everyone Gets a Road Trip Job",
    desc: "Introduce the group through the jobs they claim in the car versus what they actually do. Film it across the drive so the running joke naturally documents the journey.",
    ref: "Original format: role assignment + expectation-versus-reality + road-trip progression",
    scenes: [
      {id:"chatgpt-jobs-1",what:"HOOK — BEFORE DEPARTURE. Daxton points at everyone beside the packed car: 'Long drive. Everybody needs a job.' Film each person raising a hand too confidently. On-screen text: 'The road trip staff meeting.'",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-jobs-2",what:"NAVIGATOR — Film passenger saying, 'I will not let us miss a turn.' Later, capture them asleep with the map open while the driver says, 'Was that our exit?' Show the missed-turn reroute on the dashboard without filming while driving.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-jobs-3",what:"DJ — Friend announces, 'I made a playlist for everyone.' Cut to three different passengers skipping the first three songs. DJ quietly plugs in headphones. Capture hands and reactions from a passenger-held camera.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-jobs-4",what:"SNACK MANAGER — At the first stop, film the manager carefully rationing snacks. Ten minutes later, show the empty bag and crumbs on their shirt. Dialogue: 'Inventory issue.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-jobs-5",what:"MORALE OFFICER — At a boring stretch, friend says, 'Only six more hours!' Everyone groans. Later, film that same person starting a ridiculous car singalong that finally gets the group laughing.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-jobs-6",what:"PAYOFF — At arrival, line everyone up beside the dirty car. Daxton: 'Performance reviews?' Group answers together: 'We made it.' Freeze on the group with each fake job title underneath.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-gas-station-pit-crew",
    title: "Gas Station Pit Crew",
    desc: "Turn an ordinary fuel stop into an over-serious racing pit stop, while capturing fuel, windows, snacks, bathroom runs, driver swaps, and the changing landscape.",
    ref: "Original format: cinematic genre parody + synchronized group action + roadside visual checklist",
    scenes: [
      {id:"chatgpt-pit-1",what:"HOOK — 0:00–0:03. Exterior wide shot as the car pulls slowly into a gas station. Add racing radio audio: 'Box, box, box.' On-screen text: 'Four hours in. The crew is fading.' Film from a safe parking-space position.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-pit-2",what:"CREW DEPLOYMENT — 0:03–0:07. Car stops and every door opens on the same beat. Assign jobs before filming: fuel, windows, trash, snacks, bathroom. Shoot one wide take, then close-ups of feet hitting pavement and hands grabbing supplies.",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-pit-3",what:"THE TASKS — 0:07–0:13. Fast cuts: pump clicks in, squeegee wipes glass, trash bag ties, cooler receives drinks, new driver adjusts the seat. Add fake radio lines: 'Hydration secured.' 'Windshield visibility restored.'",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-pit-4",what:"COMPLICATION — 0:13–0:16. Everyone is ready except one friend still choosing snacks inside. Film through the store window as they compare two identical bags. Radio line: 'We have lost snack control.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-pit-5",what:"DRIVER SWAP — 0:16–0:19. Previous driver hands the keys across the roof to the next driver like a relay baton. Match-cut the key handoff to a later stop, showing a new landscape behind them.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-pit-6",what:"PAYOFF — 0:19–0:24. Doors close together and the car pulls away. Timer graphic stops at an unimpressive '18:42.' Radio voice: 'Personal best.' End on someone opening the wrong snack inside the car.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-receipts-to-tetons",
    title: "Every Receipt Between Fayetteville and the Tetons",
    desc: "Build the journey from real receipts and tiny stop details, showing what the trip actually cost without turning it into a lecture. The receipts become physical transitions between Arkansas, the highway, and the Tetons.",
    ref: "Original format: transparent cost counter + tactile match cuts + honest road-trip diary",
    scenes: [
      {id:"chatgpt-receipts-1",what:"HOOK — BEFORE DEPARTURE, 0:00–0:03. Place an empty mason jar or clear envelope on the dashboard while parked. Label it 'Fayetteville → Tetons.' Daxton says: 'We kept every receipt so you can see what getting there actually took.' Props: jar, marker label, phone calculator.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-receipts-2",what:"FIRST FUEL STOP — 0:03–0:07. Close-up of pump numbers stopping, then the receipt printing. Write each person's split beside the total before dropping it into the jar. On-screen counter: 'Gas stop 1 · $___ total · $___ each.' Never show card numbers or personal details.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-receipts-3",what:"FOOD STOP — 0:07–0:11. Film the cheapest and most questionable food choices hitting the counter. Friend holds up a banana and three energy drinks: 'Balanced.' Add the receipt to the jar and update the running personal total.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-receipts-4",what:"RECEIPT TRANSITIONS — At each stop, push the new receipt flat into the lens until white fills the frame. Start the next location with another receipt pulling away from the lens, revealing new weather, light, or scenery behind it. Keep hand position and movement consistent.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-receipts-5",what:"THE UNPLANNED COST — 0:11–0:16. Capture one honest mistake: forgotten ice, unexpected parking, or replacing a charger. Friend reads the receipt and says, 'This is why the budget had a dumb decision category.' Add it without pretending the plan was perfect.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-receipts-6",what:"PAYOFF — 0:16–0:23. At the Tetons, spread the receipts on a picnic table, then tilt up to the group and mountains. Show total cost, cost per person, and trip length. Daxton: 'Not free. Not impossible. Easier because we split it.' End with one friend asking, 'Can I throw these away now?'",done:false,p:["Portrait","Video","Friend","Zoom/Pan","Wide"]}
    ]
  },
  {
    id: "chatgpt-one-second-every-stop",
    title: "One Second From Every Stop",
    desc: "A simple filming rule that turns ordinary stops into a visual timeline: record the same one-second action everywhere, then let the scenery, weather, energy, and group gradually change around it.",
    ref: "Original format: repeated composition + geographic progression + human-energy arc",
    scenes: [
      {id:"chatgpt-second-1",what:"HOOK — FAYETTEVILLE, 0:00–0:03. Lock a vertical camera beside the packed car. Everyone walks through frame left to right and one person claps directly in front of the lens. Text: 'One second from every stop until the Tetons.' This clap becomes the cut point every time.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-second-2",what:"SET THE RULE — At each fuel, food, bathroom, or roadside stop, place the camera chest-high and frame the car in the same third of the image. Group crosses left to right, the last person claps over the lens, and recording stops. Keep every final clip exactly one second.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-second-3",what:"LET THE JOURNEY CHANGE — Do not stage matching energy. Early stop: everyone rushes through. Night stop: sleepy shuffle. Windy stop: jackets appear. Morning stop: coffee cups. One person can gradually acquire increasingly strange gas-station items.",done:false,p:["Portrait","Video","Friend","Walk","Wide"]},
      {id:"chatgpt-second-4",what:"SAFE DRIVING INSERTS — Between stops, passengers record one-second details only: dashboard clock, rain on glass, state sign from the passenger side, sleeping friend, shared snack, changing terrain. Never ask the driver to film or perform.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-second-5",what:"ARRIVAL VARIATION — At the Tetons, recreate the crossing shot but everyone stops in the frame instead of leaving it. The final person raises a hand toward the lens, pauses, then lowers it to reveal the whole group and mountains.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-second-6",what:"PAYOFF — Edit every clap as a continuous pop-pop-pop rhythm, then remove the music for the final reveal. Text: 'We were tired before it got good.' Hold the real wind and group reaction for three seconds instead of rushing the payoff.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-last-bag-relay",
    title: "The Last Bag Relay",
    desc: "Turn loading the final pieces into a relay race that introduces the group and ends with a moving departure transition.",
    ref: "Original format: handoff chain + object-led match cut + group payoff",
    scenes: [
      {id:"chatgpt-relay-1",what:"HOOK — 0:00–0:03. Wide shot beside the open trunk. Daxton holds one duffel and says, 'Nobody wanted to carry the last bag.' Blow a whistle and sprint it toward the first friend.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-relay-2",what:"HANDOFFS — 0:03–0:09. Each friend receives the duffel from frame left and throws it frame right in a new spot: bedroom, stairs, front porch, driveway. Keep the bag height and direction matched across cuts.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-relay-3",what:"COMPLICATION — 0:09–0:12. Final friend catches it beside the car, tries the full trunk, and looks at camera. Dialogue: 'This was your one job.' Reveal the bag is mostly pillows.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-relay-4",what:"PACKING PAYOFF — 0:12–0:16. Group compresses the duffel together while someone commentates like a finish-line announcer. Capture hands, zipper strain, and the trunk finally closing.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-relay-5",what:"DEPARTURE TRANSITION — 0:16–0:21. Car passes close across the lens from left to right. Cut behind the moving car to the same direction at the first scenic stop. Text: 'The bag made it. Somehow.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-passenger-window-time-machine",
    title: "Passenger Window Time Machine",
    desc: "Use one passenger's unchanged pose to show hours of driving, weather, stops, and landscape passing around them.",
    ref: "Original format: locked composition + environmental time jump + deadpan character continuity",
    scenes: [
      {id:"chatgpt-window-1",what:"HOOK — PARKED IN FAYETTEVILLE. Mount or handhold the phone from the back seat, framing one passenger in profile. Passenger taps the window and says, 'Wake me up when Arkansas changes.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-window-2",what:"REPEATABLE FRAME — At safe stops only, recreate the same face position and camera height with a different background: city, highway services, plains, rain, sunrise, mountains. Passenger keeps eyes closed through every cut.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-window-3",what:"PROPS EVOLVE — Add one new item at each jump: neck pillow, snack wrapper, sunglasses, hoodie, gas-station hat. Keep the seat belt visible and correctly worn in every shot.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-window-4",what:"FALSE ARRIVAL — Passenger opens eyes at an ordinary fuel pump and whispers, 'The Tetons?' Driver off camera: 'Kansas.' Passenger immediately closes eyes again.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-window-5",what:"PAYOFF — Recreate the frame parked at the destination overlook. Passenger opens eyes, sees the mountains, and quietly says, 'Okay, that changed.' Cut wide to everyone stretching beside the car.",done:false,p:["Portrait","Video","Friend","Zoom/Pan","Wide"]}
    ]
  },
  {
    id: "chatgpt-snack-court",
    title: "Gas Station Snack Court",
    desc: "At a real stop, put each questionable snack purchase on trial before the group votes whether it enters the car.",
    ref: "Original format: courtroom parody + product close-ups + recurring group vote",
    scenes: [
      {id:"chatgpt-court-1",what:"HOOK — Outside the gas station, Daxton bangs a water bottle like a gavel: 'Snack Court is now in session.' Friend places an alarming food combination on the car hood.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-court-2",what:"PROSECUTION — Close-up of the snack. Daxton: 'This costs six dollars, contains no recognizable ingredient, and will smell for three states.' Add dramatic evidence labels pointing to the package.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-court-3",what:"DEFENSE — Buyer gives a completely serious defense: 'It has protein, texture, and a resealable bag.' Another friend silently checks whether the bag actually reseals.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-court-4",what:"JURY VOTE — Three friends raise thumbs up or down together. If approved, toss the snack through the open window. If rejected, buyer keeps it and sits alone for one beat.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-court-5",what:"PAYOFF — Later, passenger films everyone secretly eating the supposedly rejected snack. Buyer looks into camera: 'I would like the record corrected.' Text: 'Appeal granted.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]}
    ]
  },
  {
    id: "chatgpt-bathroom-stop-olympics",
    title: "Roadside Stop Olympics",
    desc: "Score the harmless chaos around bathroom stops without filming anyone inside or embarrassing strangers.",
    ref: "Original format: sports graphics + timed mundane tasks + escalating team failure",
    scenes: [
      {id:"chatgpt-olympics-1",what:"HOOK — Film the parked car and a visible public restroom sign. Announcer: 'Next event: getting five people back into the car in under eight minutes.' Start an oversized phone timer.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-olympics-2",what:"THE SPRINT — From a respectful distance outdoors, film friends walking quickly toward the entrance. Add lane numbers above them. Do not film inside, near restroom doors, or include identifiable strangers.",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-olympics-3",what:"SIDE QUESTS — One friend returns with coffee, another studies a brochure rack, and another starts stretching. Score each distraction with graphics: '+2 hydration,' '-3 sense of urgency.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-olympics-4",what:"FALSE FINISH — Four people buckle in and celebrate. Driver counts heads, then everyone notices the snack buyer still inside the store. Freeze the timer and add a buzzer.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-olympics-5",what:"PAYOFF — Missing friend casually returns with one postcard. Timer reads 14:37. They ask, 'Did I win?' Group: 'Get in.' Award graphic: 'Participation medal.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-driver-swap-transform",
    title: "The Driver Swap Transformation",
    desc: "Repeat the same key handoff at every stop while the people, daylight, outfits, and scenery show the trip progressing west.",
    ref: "Original format: repeated key-handoff match cut + visual progression + exhaustion comedy",
    scenes: [
      {id:"chatgpt-swap-1",what:"HOOK — Fayetteville driveway. Close-up across the car roof as the first driver confidently catches the keys. Text: 'Driver one: unreasonable confidence.' Record the exact camera height and key path.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-swap-2",what:"MATCHED HANDOFFS — At every safe stop, repeat the keys traveling left to right across the roof. Change drivers, clothes, weather, and background while matching the catch frame. Never film the exchange while the car is moving.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-swap-3",what:"ENERGY ARC — First catch is athletic; second is casual; third driver nearly drops them; predawn driver catches keys plus coffee. Add labels: 'Playlist era,' 'Silent era,' 'Everybody asleep era.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-swap-4",what:"RUNNING JOKE — The same passenger exits at every swap asking, 'Are we there?' Background progresses from Fayetteville parking lot to plains to foothills. Each driver answers a flatter version of 'No.'",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-swap-5",what:"PAYOFF — Final handoff at the Tetons overlook. New driver catches the keys, looks at the destination, then hands them back: 'I think we walk from here.' Pull focus from keys to mountains and end on the group leaving the car.",done:false,p:["Portrait","Video","Tripod","Zoom/Pan","Wide"]}
    ]
  },
  {
    id: "chatgpt-dashboard-bingo",
    title: "Road Trip Dashboard Bingo",
    desc: "Give the group a bingo card of ordinary road-trip moments and let the real drive complete the story.",
    ref: "Original format: interactive checklist + candid payoff + recurring visual counter",
    scenes: [
      {id:"chatgpt-bingo-1",what:"HOOK — Before leaving, hold a handwritten bingo card to camera: missed exit, weird roadside statue, driver sings alone, emergency bathroom request, snack spill. Daxton: 'First person to five picks the campsite dinner.'",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-bingo-2",what:"SETUP — Film each friend choosing one square they guarantee will happen. Add their name beside it. Capture the packed car and clock so the game starts with the actual departure.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-bingo-3",what:"DRIVE MONTAGE — Passengers capture each safe moment from their seats or while stopped. Freeze briefly, stamp the matching square, and keep a running board in the corner. Never ask the driver to film.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-bingo-4",what:"FALSE WIN — Someone shouts 'Bingo!' at a fuel stop. Group checks the card and rejects 'saw a cow' because it was a billboard. Add referee whistle and reverse the celebration.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-bingo-5",what:"PAYOFF — Final square happens near arrival when everyone says 'Whoa' at the same view. Winner circles it quietly and chooses cheap camp tacos. Text: 'The ordinary parts were the trip too.'",done:false,p:["Portrait","Video","Friend","Zoom/Pan","Wide"]}
    ]
  },
  {
    id: "chatgpt-state-line-costume",
    title: "State-Line Outfit Changes",
    desc: "Use safe parked state-line or welcome-center stops for a wardrobe transition that tracks weather and distance.",
    ref: "Original format: repeated jump cut + geographic chapters + escalating costume practicality",
    scenes: [
      {id:"chatgpt-state-1",what:"HOOK — Park safely at the first welcome center. Daxton jumps in front of the sign wearing Fayetteville clothes. Text: 'One jump for every state.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-state-2",what:"MATCH RULE — Keep tripod height, body position, jump direction, and backpack identical at every stop. Cut at the highest point so each landing reveals a new sign and outfit layer.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-state-3",what:"ESCALATION — Start with T-shirt, then hoodie, rain shell, beanie, and finally absurd blanket. Let hair, tired eyes, and dirty shoes show the real passage of time.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-state-4",what:"GROUP VERSION — At one stop everyone jumps except the friend asleep in the car. At the next stop that friend appears fully energized while everyone else barely leaves the ground.",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-state-5",what:"PAYOFF — Final jump lands at the Tetons trailhead, but Daxton is overdressed in sunshine. Friend removes the blanket and says, 'You can stop becoming Wyoming now.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-stop-interviews",
    title: "How Is the Trip Going? Stop Interviews",
    desc: "Ask the same five-second question at each stop and let confidence unravel into honest road-trip comedy.",
    ref: "Original format: repeated interview prompt + time progression + authentic group chemistry",
    scenes: [
      {id:"chatgpt-interview-1",what:"HOOK — Before departure, hold a pretend microphone beside the packed car. Ask each friend: 'How is the trip going?' Everyone answers too confidently even though the car has not moved.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-interview-2",what:"FIRST STOP — Ask the identical question at fuel. Answers stay short: 'Great.' 'Hungry.' 'Why is he driving barefoot?' Keep the same framing and microphone hand.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-interview-3",what:"NIGHT STOP — Film under safe parking-lot light. One friend answers while half asleep; another gives an overly detailed weather report. Add stop number and miles remaining.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-interview-4",what:"MORNING STOP — Ask again with everyone holding coffee. Leave in the pause before answers. Someone finally says, 'Ask after the bathroom.' Do not film near restroom entrances.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-interview-5",what:"PAYOFF — Ask at the first mountain view. Friends ignore the microphone and look outward. After two seconds someone says, 'Okay, now it is going.' End on natural sound.",done:false,p:["Portrait","Video","Friend","Zoom/Pan","Wide"]}
    ]
  },
  {
    id: "chatgpt-roadside-jury",
    title: "The Roadside Attraction Jury",
    desc: "Let the group vote on one strange roadside stop, then judge whether the detour deserved its time.",
    ref: "Original format: group decision + detour mini-story + verdict payoff",
    scenes: [
      {id:"chatgpt-jury-1",what:"HOOK — Passenger shows a roadside-attraction sign while parked. Daxton: 'This will add twenty-two minutes. Court is in session.' Put a visible timer and route estimate on screen.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-jury-2",what:"OPENING ARGUMENTS — One friend gets five seconds for the detour: 'Largest prairie dog. Historic. Probably life-changing.' Another argues: 'We have mountains to reach.'",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-jury-3",what:"VOTE — Everyone points left for stop or right for continue. Losing side groans. Capture the actual turn from a passenger-held camera without distracting the driver.",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-jury-4",what:"EVIDENCE — Film three specific details at the attraction: entrance sign, group reaction, strangest object. Keep this chapter under six seconds and show the actual added time.",done:false,p:["Portrait","Video","Friend","Walk","Medium"]},
      {id:"chatgpt-jury-5",what:"VERDICT — Back at the car, each person gives one word. End on 'Worth it' or 'Never again,' then show the object shrinking through the rear window as the trip continues.",done:false,p:["Portrait","Video","Friend","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-car-cleanliness-timeline",
    title: "The Car Gets Progressively Worse",
    desc: "Repeat the same clean-car shot at every stop as snacks, blankets, receipts, and tired passengers slowly take over.",
    ref: "Original format: locked-frame degradation + visual continuity + cleanup reversal",
    scenes: [
      {id:"chatgpt-mess-1",what:"HOOK — Before loading, film the perfectly clean back seat from the open door. Daxton says, 'We are keeping it clean this time.' Hold on every friend nodding seriously.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-mess-2",what:"REPEATABLE SHOT — At every stop, park safely and film the same open-door angle for one second. First add one bottle, then blanket, wrappers, shoes, maps, and sleeping people.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-mess-3",what:"BLAME GAME — At the third stop, interview each person beside the mess. Everyone points to someone else. Cut answers rapidly: 'Not mine.' 'Never seen it.' 'That receipt was here already.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-mess-4",what:"BREAKING POINT — One passenger opens the door and a pillow or empty bottle falls out. Add nature-documentary narration: 'The vehicle can no longer contain its ecosystem.'",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-mess-5",what:"PAYOFF — At arrival, reverse the montage as everyone cleans together. End on the original clean frame, then one hidden wrapper falls from above. Text: 'Almost left no trace.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-playlist-treaty",
    title: "The Road Trip Playlist Peace Treaty",
    desc: "Document the group negotiating music before departure, then reveal how quickly every rule collapses.",
    ref: "Original format: mock diplomacy + recurring rule violations + singalong payoff",
    scenes: [
      {id:"chatgpt-music-1",what:"HOOK — Around the packed car, Daxton presents a handwritten 'Playlist Peace Treaty.' Rule one: everyone gets three songs. Rule two: no skipping before the chorus. Everyone signs too seriously.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-music-2",what:"FIRST VIOLATION — Passenger presses play, another hand immediately reaches to skip, and the group shouts 'Treaty!' Freeze on the guilty hand with a red warning graphic.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-music-3",what:"GENRE BORDER — At a safe stop, interview each person about the current song. Answers: 'Too sad,' 'Not sad enough,' and 'This is eleven minutes long.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-music-4",what:"COLLAPSE — Passenger safely records everyone arguing over one chorus while the driver keeps attention forward. Add scoreboard: skips, vetoes, and unauthorized repeats.",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-music-5",what:"PAYOFF — Near arrival, the most rejected song returns and everyone unexpectedly sings it. Text: 'Treaty broken. Group intact.' End on the real laughter after the chorus.",done:false,p:["Portrait","Video","Friend","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-weather-wardrobe-relay",
    title: "The Weather Wardrobe Relay",
    desc: "Use clothing handoffs at parked stops to show the drive changing from Arkansas warmth to mountain cold.",
    ref: "Original format: prop handoff + weather progression + practical packing comedy",
    scenes: [
      {id:"chatgpt-weather-1",what:"HOOK — Fayetteville driveway. Friend tosses Daxton sunglasses across frame. He catches them wearing a T-shirt. Text: 'Packing for every forecast except the correct one.'",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-weather-2",what:"HANDOFF RULE — At each parked stop, throw one clothing item in the same direction: hoodie, rain shell, beanie, gloves. Match the catch and body position across every cut.",done:false,p:["Portrait","Video","Tripod","Still","Medium"]},
      {id:"chatgpt-weather-3",what:"WRONG CHOICES — Show one friend in shorts during rain and another wearing a coat in sunshine. Each insists, 'I checked the weather.' Add actual temperature text.",done:false,p:["Portrait","Video","Friend","Still","Wide"]},
      {id:"chatgpt-weather-4",what:"BORROWING — At a windy overlook, friends silently trade layers until nobody wears their own clothes. Close-ups identify each borrowed item by owner.",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-weather-5",what:"PAYOFF — Tetons reveal: Daxton catches the final jacket, puts it on, and says, 'Okay, this one was necessary.' Wind immediately steals the hood. End on laughter.",done:false,p:["Portrait","Video","Friend","Zoom/Pan","Wide"]}
    ]
  },
  {
    id: "chatgpt-pump-predictions",
    title: "Predictions at Every Gas Pump",
    desc: "Ask one practical or ridiculous prediction at each fuel stop, then score everyone at arrival.",
    ref: "Original format: repeated question + journey callbacks + final scoreboard",
    scenes: [
      {id:"chatgpt-predict-1",what:"HOOK — First fuel stop. Beside the parked car, ask: 'What goes wrong before the next tank?' Predictions: missed exit, spilled drink, or everyone asleep.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-predict-2",what:"RECEIPT BOARD — Write predictions on the back of each receipt and place them safely in an envelope. Show fuel cost and mileage without card or personal details.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-predict-3",what:"RESULT — Passenger records the harmless prediction coming true, or restage it while parked. Stamp the receipt 'correct' with a sound effect.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-predict-4",what:"ESCALATION — Later predictions become specific: 'Jonny buys another hat' or 'Daxton says we are almost there.' Cut directly to the evidence at the next stop.",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-predict-5",what:"PAYOFF — At arrival, read the winning predictions beside the view. Winner says, 'I predicted mountains.' Group rejects it. Final scoreboard awards 'least wrong.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  {
    id: "chatgpt-postcard-stops",
    title: "Postcards We Never Sent",
    desc: "Create one candid moving postcard at every stop using a fixed five-second recipe.",
    ref: "Original format: repeated micro-documentary + handwritten captions + cumulative travel diary",
    scenes: [
      {id:"chatgpt-card-1",what:"HOOK — Before departure, show five blank postcards. Text: 'One honest postcard from every stop.' Write 'Fayetteville: packed too much' over loading footage.",done:false,p:["Portrait","Video","Tripod","Still","Close-up"]},
      {id:"chatgpt-card-2",what:"FIVE-SECOND RECIPE — At each safe stop record: one wide place shot, one face, one weird detail, and one handwritten sentence. Keep clips candid rather than posing everyone.",done:false,p:["Portrait","Video","Friend","Walk","Wide"]},
      {id:"chatgpt-card-3",what:"FOOD CARD — Film the table, first bite, receipt, and somebody trading food. Caption: 'Somewhere in Kansas: ordered by pointing.'",done:false,p:["Portrait","Video","Friend","Still","Medium"]},
      {id:"chatgpt-card-4",what:"NIGHT CARD — Under safe parking-lot light, capture headlights, tired eyes, coffee, and the route. Caption: 'Still friends. Barely awake.'",done:false,p:["Portrait","Video","Friend","Still","Close-up"]},
      {id:"chatgpt-card-5",what:"PAYOFF — At the Tetons, fan every postcard toward the lens, then lower them to reveal the group. Final caption: 'Wish you had come. Come next time.'",done:false,p:["Portrait","Video","Tripod","Zoom/Pan","Wide"]}
    ]
  },
  {
    id: "chatgpt-before-after-portraits",
    title: "Before-and-After Car Portraits",
    desc: "Repeat one group portrait before departure and after arrival so the journey writes the joke itself.",
    ref: "Original format: identical composition + visible time passage + human payoff",
    scenes: [
      {id:"chatgpt-portrait-1",what:"HOOK — Clean car in Fayetteville. Tripod portrait with everyone standing by assigned door, bags hidden, clothes clean, forced smiles perfect. Text: 'Before twelve hours together.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-portrait-2",what:"POSITION MAP — Photograph foot positions and tripod height so the composition can be recreated. Have each person choose one pose they must maintain at every stop.",done:false,p:["Portrait","Photo","Tripod","Still","Wide"]},
      {id:"chatgpt-portrait-3",what:"MIDPOINT — Recreate the portrait at a fuel stop: one person missing, another eating, driver stretching, car visibly messier. Text: 'Halfway. Formation compromised.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-portrait-4",what:"PRE-ARRIVAL — Repeat at the final stop with hoodies, tired faces, and borrowed pillows. Let nobody fix hair or clean the car.",done:false,p:["Portrait","Video","Tripod","Still","Wide"]},
      {id:"chatgpt-portrait-5",what:"PAYOFF — Tetons portrait uses identical positions, but smiles are real and everyone faces the view after one second. Swipe between first and final frames. Text: 'Same people. Better background.'",done:false,p:["Portrait","Video","Tripod","Still","Wide"]}
    ]
  },
  scriptedIdea("chatgpt-forgotten-roll-call", "The Forgotten Item Roll Call", "A departure roll call where every claimed essential returns as a joke at later stops.", [
    "HOOK — Beside the open trunk, Daxton calls out: 'Wallet, water, tent, dignity?' Friends answer yes until dignity gets silence. Show a handwritten checklist and packed car.",
    "FALSE CONFIDENCE — Each friend holds up the item they were assigned. One person presents something almost correct, like a phone cable without the charging block. Label roles on screen.",
    "FIRST CALLBACK — At the first fuel stop, someone asks for the missing item. Cut back to their confident departure answer, then return to the group's stare. Buy or improvise only what is genuinely needed.",
    "ESCALATION — Repeat at food and rest stops with harmless items: spoon, sunglasses, pillow. Keep a counter titled 'Things we definitely packed.' Film only while parked.",
    "PAYOFF — At camp, run the roll call again. Everything is present except the checklist, now visible under the windshield wiper. Text: 'Prepared enough.'"
  ]),
  scriptedIdea("chatgpt-mile-marker-confessions", "Mile Marker Confessions", "Passengers answer one honest question whenever the mileage crosses a planned checkpoint.", [
    "HOOK — Parked before departure, show the odometer and write three mileage checkpoints on a card. Question one: 'What almost made you stay home?' Keep each answer under three seconds.",
    "CHECKPOINT RULE — When a checkpoint arrives, wait for the next safe stop. Film the same passenger-seat framing and display miles completed, miles remaining, and the next question.",
    "MIDDLE QUESTION — Ask: 'What part has been better than expected?' Mix honest answers with one deadpan answer about the gas-station bathroom or shared snacks.",
    "TIRED QUESTION — Near the final checkpoint ask: 'Who is hardest to travel with?' Everyone points at the camera operator. Leave the unplanned laughter in.",
    "PAYOFF — At the destination ask: 'Would you do the drive again?' Cut the immediate groans against a quiet wide view, then show everyone nodding anyway."
  ]),
  scriptedIdea("chatgpt-window-reflection", "The Window Reflection Changes First", "A reflection match cut moves from Fayetteville streets to plains and mountains without filming the driver.", [
    "HOOK — While parked in Fayetteville, frame one passenger's reflection in the closed side window. They say, 'Same face until Wyoming.' Mark phone height and face position.",
    "SAFE REPEATS — Recreate the reflection only at parked stops with city lights, sunrise, plains, rain, and foothills behind the glass. Keep the passenger still while backgrounds change.",
    "HUMAN PROGRESSION — Add tired eyes, new hoodie, snack crumbs, and borrowed sunglasses across cuts. Let the reflection stay serious while friends act chaotic behind it.",
    "NEAR ARRIVAL — Reflection looks unchanged until the passenger notices mountains behind them. Their eyes shift first; camera slowly changes focus from face to background.",
    "PAYOFF — Lower the window so the reflection disappears and the real landscape remains. Passenger says, 'Okay, that was worth staying awake for.'"
  ]),
  scriptedIdea("chatgpt-stop-museum", "The Museum of Road Trip Stops", "Collect one harmless object from each purchased stop and curate them like priceless artifacts.", [
    "HOOK — Before leaving, clear one cup holder and label it 'Museum Collection.' Daxton announces: 'One artifact from every stop, nothing stolen and no litter.'",
    "FIRST ACQUISITION — Add a clean receipt or approved paper wrapper after fuel. Film a dramatic slow push-in and museum label: location, time, cost, historical importance: questionable.",
    "CURATOR COMMENTARY — At the food stop, a friend presents a sauce packet with white gloves or napkins. Dialogue: 'An excellent example of regional ketchup.'",
    "COLLECTION GROWS — Safely film the cup holder at parked stops as receipts, postcards, and sealed small purchases accumulate. Never collect natural objects or leave waste behind.",
    "PAYOFF — At camp, arrange the artifacts on a table in route order, then recycle or pack everything out. Text: 'Admission was gas money.'"
  ]),
  scriptedIdea("chatgpt-arrival-soundcheck", "The Arrival Soundcheck", "Record one sound at every stage until road noise gives way to the destination's natural quiet.", [
    "HOOK — Close-ups before departure: trunk slam, seat-belt click, engine start. Text: 'What the trip sounded like before the view.' Keep each sound clean and music off.",
    "DRIVING CHAPTER — Passengers capture safe interior audio: indicator click while parked, snack bag, soft snoring, group laugh. Do not record or direct the driver.",
    "STOP CHAPTER — At fuel and food stops record pump click, receipt tear, cup lid, footsteps, and car doors. Match each sound to a tight visual detail.",
    "APPROACH — Gradually reduce speech and mechanical sounds. Use tires on gravel from outside while parked, jacket zipper, boots, then wind. Let cuts slow down.",
    "PAYOFF — At the Tetons, hold a wide silent shot for three seconds with only wind and birds. One friend whispers, 'Soundcheck,' and everyone stays quiet."
  ]),
  scriptedIdea("chatgpt-departure-security", "Road Trip Security Check", "Run every bag through an absurd driveway security checkpoint before it enters the trunk.", [
    "HOOK — Set a folding table beside the car and announce: 'All luggage must clear security.' Friend places a normal backpack down while Daxton puts on dish-glove inspection gear.",
    "INSPECTION — Pull out one harmless strange item from each bag: six granola bars, three cameras, or a full-size pillow. Ask the owner to explain it in one sentence.",
    "CONTRABAND — Hold up something bulky and declare: 'This exceeds emotional baggage limits.' Group votes whether it earns trunk space. Never expose medication, documents, or personal belongings.",
    "APPROVAL — Stamp a sticky note 'CLEARED' and attach it to each bag. Film bags moving from table to trunk in rapid matched cuts.",
    "PAYOFF — At the first stop, somebody asks for the rejected item. Security officer silently reveals it was packed anyway. Text: 'Screening failure.'"
  ]),
  scriptedIdea("chatgpt-cupholder-census", "The Cupholder Census", "Track who controls every cupholder as drinks multiply and alliances shift across the drive.", [
    "HOOK — Before departure, film every empty cupholder. Daxton assigns them formally: 'Driver, navigator, community, emergency.' Add labeled arrows.",
    "FIRST TAKEOVER — At a coffee stop, reveal one person using three holders. Interview them beside the parked car: 'I have hydration needs.'",
    "NEGOTIATION — Friends trade cupholder space for snacks, charger access, or playlist control. Show the terms as a fake legal contract.",
    "CRISIS — A new drink arrives with nowhere to go. Everyone proposes increasingly bad locations while the car remains parked. Resolve it safely before driving.",
    "PAYOFF — At arrival, count cups and owners. The original community holder contains one pinecone-shaped souvenir. Text: 'Government collapsed by mile 200.'"
  ]),
  scriptedIdea("chatgpt-nap-documentary", "The Passenger Nap Documentary", "Narrate one passenger's changing sleep positions like a serious wildlife film without disturbing them.", [
    "HOOK — Passenger safely frames a sleeping friend from another seat. Whispered narration: 'Here we observe the road-trip sleeper before their first neck injury.'",
    "POSITION ONE — Capture head against glass, seat belt correctly worn. Add species label: 'Window leaner.' Do not use flash, touch them, or distract the driver.",
    "POSITION TWO — At the next parked stop, film the sleeper waking confused with pillow marks. Ask only: 'What state are we in?' Keep the genuine wrong answer.",
    "HABITAT CHANGE — Later show hoodie cocoon, snack-pillow nest, and borrowed blanket through safe passenger clips or parked recreations.",
    "PAYOFF — Sleeper wakes for the first mountain view and says, 'I drove most of it emotionally.' End with everyone disputing that claim."
  ]),
  scriptedIdea("chatgpt-stop-rating-system", "The Completely Unfair Stop Rating System", "Rate every ordinary stop using categories that become more ridiculous as everyone gets tired.", [
    "HOOK — First fuel stop. Daxton holds a scorecard: bathroom, snacks, scenery, and parking-lot vibes. Say: 'Every stop gets an official rating.'",
    "FIRST REVIEW — Film exterior sign, one purchased snack, clean public area, and group reaction without recording strangers. Give fast honest scores from zero to ten.",
    "NEW CATEGORIES — Add increasingly specific categories: sink pressure, postcard selection, distance from highway, and probability of seeing the group again.",
    "CONTROVERSY — One friend awards ten for snacks while another gives two. Settle it with a parked-car coin flip and update the leaderboard.",
    "PAYOFF — At the Tetons overlook, attempt to rate the view. Everyone refuses numbers. Final card reads: 'Bathrooms unavailable. Scenery wins.'"
  ]),
  scriptedIdea("chatgpt-first-view-freeze", "Freeze When You First See It", "Capture each friend's unprompted first reaction to the destination and build a quiet group reveal.", [
    "HOOK — Before leaving, ask each friend what their face will look like at the first Tetons view. Freeze their exaggerated predictions with names underneath.",
    "APPROACH — At the final safe pullout, place the camera facing passengers before they exit. Tell them only to look outside; do not script reactions.",
    "ONE AT A TIME — Film each person stepping into the same marked spot and seeing the view. Hold two seconds before and after their expression changes.",
    "PREDICTION CHECK — Split-screen each real reaction against their departure prediction. Keep small laughs, silence, or understated 'wow' instead of forcing excitement.",
    "PAYOFF — Group enters the frame together, backs to camera. Text: 'The drive was loud. This part was not.' End on natural wind."
  ]),
  scriptedIdea("chatgpt-last-five-minutes", "The Last Five Minutes Before Leaving", "Turn the supposedly quick departure into a timestamped comedy about the tiny jobs every real trip requires.", [
    "HOOK — Film the packed car and a phone reading 6:00 AM. Daxton says, 'We leave in five minutes.' Add a clean countdown graphic and keep the camera by the driveway.",
    "MINUTE ONE — Rapid close-ups: one friend fills water bottles, another checks tire pressure, and somebody runs back for a charger. Label each task 'the last thing.'",
    "MINUTE FIVE — Repeat the clock shot at 6:05 while everyone is still outside. One friend asks, 'Did anyone lock the back door?' Cut to three people pointing at each other.",
    "REAL DEPARTURE — At 6:17, capture doors closing, seat belts clicking, and the car safely pulling away from a fixed tripod. Text: 'Five road-trip minutes later.'",
    "PAYOFF — At the first stop, reveal the forgotten travel mug still sitting on the driveway via a photo from home. Dialogue: 'At least we checked the tires.'"
  ]),
  scriptedIdea("chatgpt-snack-draft", "The Gas Station Snack Draft", "Give every friend a strict budget and sixty seconds to draft one road-trip snack for the whole car.", [
    "HOOK — Outside the store, show a ten-dollar bill and timer. Daxton: 'Sixty seconds, one snack each, no duplicates.' Keep payment details and strangers off camera.",
    "THE PICKS — Film tight product shots and each friend placing a choice in the basket. Add sports-draft graphics: sweet, salty, practical, and immediately questionable.",
    "EXPLANATIONS — Back at the parked car, each buyer gets one sentence to defend the pick. Cut quickly between claims like 'protein' and 'the bag reseals.'",
    "TASTE TEST — Everyone tries one bite while parked, then silently ranks choices with fingers. Show the actual total and per-person cost without pretending the stop was free.",
    "PAYOFF — Hours later, film the supposedly worst snack as the only empty bag. Its buyer looks at camera: 'The numbers speak for themselves.'"
  ]),
  scriptedIdea("chatgpt-navigation-apology", "A Formal Apology From the Navigator", "Stage a roadside press conference after a harmless wrong turn and reveal what the detour unexpectedly found.", [
    "HOOK — At the next safe parking area, navigator approaches a phone used as a microphone: 'I take full responsibility for adding nineteen minutes.' Display the corrected route.",
    "PRESS QUESTIONS — Friends ask dead-serious questions: 'Were you looking at the map?' and 'What did you think north meant?' Navigator answers without blaming the driver.",
    "RECONSTRUCTION — Use parked close-ups of the missed-exit sign, map arrow, and passenger reaction. Never recreate a distraction or ask the driver to perform while moving.",
    "UNEXPECTED FIND — Film one good detail from the detour: a view, strange sign, or local food stop. Add text: 'Evidence for the defense.'",
    "PAYOFF — At arrival, navigator announces, 'We still got here.' Driver hands them a paper map labeled 'probation.' End on real group laughter."
  ]),
  scriptedIdea("chatgpt-stop-same-frame", "Same Frame, Different State", "Repeat one five-person composition at every stop so changing landscape and energy tell the whole journey.", [
    "HOOK — In Fayetteville, line everyone beside the car with one person holding a cardboard state label. Mark tripod position and say, 'Same pose until the mountains.'",
    "FIRST REPEAT — At a safe fuel stop, recreate the formation exactly but let one person eat, stretch, or look exhausted. Swap in the current state label.",
    "NIGHT FRAME — Under legal parking-lot lighting, repeat with hoodies and coffee. Keep headlights off, avoid identifiable strangers, and preserve the same two-second hold.",
    "MORNING FRAME — Repeat after sunrise with messy hair and changing terrain. One friend accidentally stands backward; everyone else stays committed to the pose.",
    "PAYOFF — At the Tetons, begin in the same formation, then everyone breaks pose and turns toward the view. Text: 'You do not need a perfect trip—just a starting frame.'"
  ]),
  scriptedIdea("chatgpt-driver-swap-resume", "Driver Swap Job Interview", "Treat each parked driver change like a serious hiring interview based on the previous shift's performance.", [
    "HOOK — At the first safe stop, outgoing driver sits beside the car. Daxton asks, 'Why should we renew your contract?' Add a résumé graphic: miles, missed exits, snack incidents.",
    "REFERENCE CHECK — Ask two passengers for five-second reviews. One says, 'Excellent lane discipline.' Another adds, 'Repeated one song four times.'",
    "NEW APPLICANT — Incoming driver presents qualifications while holding the keys: rested, caffeinated, valid license, and willing. Keep the car parked throughout the bit.",
    "HANDOFF — Film a close-up handshake and key transfer. On-screen terms: seat belts, planned breaks, no filming by the driver, switch again when tired.",
    "PAYOFF — At arrival, give every driver a mock performance award. Final title: 'Everyone hired. Nobody drove exhausted.' End with the keys safely pocketed."
  ]),
  scriptedIdea("chatgpt-cooler-inventory", "The Cooler Inventory Crisis", "Follow one carefully packed cooler as five friends immediately destroy its organization across the drive.", [
    "HOOK — In the driveway, film a perfectly organized cooler from above. Daxton points to labeled rows: breakfast, lunch, drinks, emergency cheese. Text: 'This system will last all weekend.'",
    "FIRST RAID — At the first safe stop, open the cooler from the identical overhead angle. One drink is missing and every row has shifted. Friend insists, 'I put it back exactly.'",
    "AUDIT — Assign one friend as inventory manager. They count items with a clipboard while everyone requests snacks at once. Add red arrows to three items nobody remembers packing.",
    "COLLAPSE — At the food stop, reveal melted ice, floating wrappers, and one crushed sandwich. Keep food safe, drain only where permitted, and repack before driving.",
    "PAYOFF — At camp, the only untouched item is emergency cheese. Everyone cheers as if it saved the expedition. Text: 'The system worked once.'"
  ]),
  scriptedIdea("chatgpt-friend-arrival-intros", "How Everyone Arrives for the Trip", "Introduce each friend through the completely different way they appear at the departure point.", [
    "HOOK — Locked driveway shot and text: 'Same departure time. Five interpretations.' Daxton waits beside the open trunk and checks the clock.",
    "THE EARLY ONE — Friend enters frame with coffee, printed itinerary, and concern. Dialogue: 'I have been here eighteen minutes.' Freeze-frame their name and unofficial role.",
    "THE CHAOTIC ONE — Match the entrance as another friend runs in carrying loose shoes and an unzipped bag. Something harmless falls out; they keep moving without noticing.",
    "THE MINIMALIST — Third friend arrives with one tiny backpack, looks at the packed trunk, and asks, 'Are we moving there?' Keep every entrance framed identically.",
    "PAYOFF — The late friend finally appears eating breakfast and says, 'Perfect timing.' Everyone closes the trunk behind them. Cut to the car pulling away safely."
  ]),
  scriptedIdea("chatgpt-rest-stop-one-line", "One Line From Every Rest Stop", "Build an honest travel diary by letting each friend contribute exactly one sentence at every stop.", [
    "HOOK — At the first safe stop, hold up a card reading 'One sentence. No retakes.' Friend says, 'We have been driving forty minutes and already need a break.'",
    "ROTATION — At each later stop, a different friend stands beside the parked car in the same framing. Display location, elapsed time, and miles remaining.",
    "MIDDLE TRUTH — Keep imperfect lines: 'I regret the energy drink,' 'The playlist has become hostile,' or 'Kansas is wider than expected.' Avoid filming strangers or restroom entrances.",
    "CALLBACK — One person repeatedly begins with 'Honestly, great' while looking progressively more tired. Cut the versions together as a three-beat running joke.",
    "PAYOFF — At the destination, everyone tries to speak at once, then goes quiet at the view. Final line: 'That is the sentence.' Hold natural sound."
  ]),
  scriptedIdea("chatgpt-daylight-dashboard", "The Dashboard Daylight Clock", "Use a parked dashboard composition to show one full travel day changing through light, weather, and mileage.", [
    "HOOK — Before sunrise and before moving, frame the dashboard clock, windshield, and one coffee. Text: 'One frame until the mountains.' Record the exact phone position.",
    "SAFE REPEATS — At each parked stop, recreate the frame with the new time, sky, mileage, and passenger-seat object. Never mount, adjust, or operate the camera while driving.",
    "OBJECT STORY — Coffee becomes water, then snacks, a paper map, sunglasses, and a borrowed beanie. Keep hands entering from the same edge for clean match cuts.",
    "WEATHER TURN — Use one rainy stop and one bright stop to jump the windshield from gray to gold. Add only place and time; let the visual change carry the story.",
    "PAYOFF — Final parked frame shows mountains through the windshield. A hand removes the last receipt, revealing the view. Text: 'A whole day, one seat.'"
  ]),
  scriptedIdea("chatgpt-roadside-photo-director", "The Roadside Photo Director", "Let a different friend direct one deliberately awkward group photo at each safe roadside stop.", [
    "HOOK — At the first stop, Daxton announces: 'Everyone gets one photo and absolute creative control.' Show a tripod, timer, and blank five-photo grid.",
    "DIRECTOR ONE — Friend arranges everyone like a serious album cover beside the parked car. Capture their instructions and the final still with a camera-shutter transition.",
    "DIRECTOR TWO — At a legal scenic stop, next friend demands an overcomplicated jumping pose. Show three failed attempts before the least-bad photo lands in the grid.",
    "TIRED DIRECTOR — Late in the drive, a friend simply says, 'Sit wherever.' The candid result becomes the best image. Keep the car parked and stay clear of traffic.",
    "PAYOFF — At arrival, reveal all five photos in route order. The group chooses the imperfect candid as the trip cover. Text: 'Nobody needed a professional pose.'"
  ])
];

window.ChatGPTVideoIdeas = {
  category: "CHATGPT'S VIDEO IDEAS",
  firstIdea: chatGPTVideoIdeas[0],
  ideas: chatGPTVideoIdeas
};
