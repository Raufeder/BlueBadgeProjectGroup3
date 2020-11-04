
// PRIMARY RANDOM FUNCITON FOR COMPLEX TABLES
function getRandomValueFromTuples( tuples ){
    let roll = Math.random();
    for(let i=0; i < tuples.length; i++ ){
        roll = roll - tuples[i][1];
        if( roll < 0 ){
          return tuples[i][0]; }
    }
}

//let hairColorTuples = [ ["blue", 0.1], ["cyan", 0.25], ["magenta", 0.25], ["pink", 0.2], ["red", 0.2] ];
//console.log( getRandomValueFromTuples(hairColorTuples) );

// Generates a random number from 1 to the chosen parameter
function rndDieRoll(die) {
  return Math.ceil ( Math.random() * die ) ;
};

// ***********************     THE AGE TABLE     ********************************
//                   #   age category     gray-mod  marry-cohort  base%
let ageTuples = [ [ [1,   "young",             0,        0],       0.04 ],
                  [ [2,   "youngish",          0,        0],       0.04 ],
                  [ [3,   "teen",              2,        0],       0.08 ],
                  [ [4,   "college-age",       3,        1],       0.07 ],
                  [ [5,   "twenties",          10,       1],       0.11 ],
                  [ [6,   "thirtyish",         30,       1],       0.04 ],
                  [ [7,   "thirties",          30,       1],       0.04 ],
                  [ [8,   "thirty-something",  30,       1],       0.04 ],
                  [ [9,   "fortyish",          40,       1],       0.04 ],
                  [ [10,  "forty-something",   40,       1],       0.03 ],
                  [ [11,  "fourties",          40,       1],       0.04 ],
                  [ [12,  "middle-aged",       50,       1],       0.05 ],
                  [ [13,  "fifties",           50,       2],       0.06 ],
                  [ [14,  "fifty-something",   50,       2],       0.05 ],
                  [ [15,  "sixties",           60,       2],       0.18 ],
                  [ [16,  "seventies",         70,       2],       0.05 ],
                  [ [17,  "old",               80,       3],       0.01 ],
                  [ [18,  "elderly",           90,       3],       0.01 ],
                  [ [19,  "eighties",          80,       3],       0.01 ],
                  [ [20,  "nineties",          90,       3],       0.01 ]
                ];
let rndAgeTableRow = getRandomValueFromTuples(ageTuples);   // This variable is used to pull age-related details [#, category, gray-mod, cohort]
  console.log("The random Base Age:", rndAgeTableRow);
// *******************************************************************************
let agenumber = rndAgeTableRow[0];                       // This variable is used to pull age-related details            DELETE
  console.log("The random Age Number:", agenumber);
let actualage = rndAgeTableRow[1];                       // This variable is used to pull age-related details            DELETE
  console.log("The random Age:", actualage);
let graymod = rndAgeTableRow[2];                       // This variable is used to pull age-related details            DELETE
  console.log("The age-based gray mod:", graymod);
let cohort = rndAgeTableRow[3];                       // This variable is used to pull age-related details            DELETE
  console.log("The age-based cohort:", cohort);


// ************************************************************************************************************************ //
// ***                                                  AGE                                                             *** //
//function randomAgeGeneration() {
  // CharAge... generates a random age category as well as a base chance of having gray hair
  //            percentages are generally accurate for US pop, BUT skewed slightly upwards from young-->teen
  //                   age category     gray-mod  marry-cohort  base%
  //let ageTuples = [ [ ["young",             0,        0],       0.04 ],
  //                  [ ["youngish",          0,        0],       0.04 ],
  //                  [ ["teen",              2,        0],       0.08 ],
  //                  [ ["college-age",       3,        1],       0.07 ],
  //                  [ ["twenties",          10,       1],       0.11 ],
  //                  [ ["thirtyish",         30,       1],       0.04 ],
  //                  [ ["thirties",          30,       1],       0.04 ],
  //                  [ ["thirty-something",  30,       1],       0.04 ],
  //                  [ ["fortyish",          40,       1],       0.04 ],
  //                  [ ["forty-something",   40,       1],       0.03 ],
  //                  [ ["fourties",          40,       1],       0.04 ],
  //                  [ ["middle-aged",       50,       1],       0.05 ],
  //                  [ ["fifties",           50,       2],       0.06 ],
  //                  [ ["fifty-something",   50,       2],       0.05 ],
  //                  [ ["sixties",           60,       2],       0.18 ],
  //                  [ ["seventies",         70,       2],       0.05 ],
  //                  [ ["old",               80,       3],       0.01 ],
  //                  [ ["elderly",           90,       3],       0.01 ],
  //                  [ ["eighties",          80,       3],       0.01 ],
  //                  [ ["nineties",          90,       3],       0.01 ]
  //                ];

  //let rndBaseAge = getRandomValueFromTuples(ageTuples);
  //let rndAgeNumber = rndBaseAge[0];
  //let rndCharAge = rndBaseAge[1];  //  THIS IS THE RANDOM AGE DESCRIPTOR
  //let rndcanBeMarried = rndBaseAge[3];       // Used in several locations as a sort of general age category or cohort

  //return rndCharAge;
//};

// ************************************************************************************************************************ //
// ***                                          HAIR                                                                    *** //
function randomHairColorGeneration() {
  let GrayHairfromAge = rndAgeTableRow[2]; // This is pulled from the Age Table a public variable
  let ageCohort = rndAgeTableRow[3];          // This is pulled from the Age Table a public variable
  

  // CharHair... generates hair length, texture and color AND calculates if hair is; MAY BE overridden by gray-hair chance
  // Hair Length
  let hairLengthTuples = [ ["short", 0.37], ["closely-cropped", 0.08], ["medium", 0.23], ["shoulder-length", 0.15], ["long", 0.13], ["cascading", 0.02], ["trailing", 0.1], ["flowing", 0.1] ];
  let rndHairLength = getRandomValueFromTuples(hairLengthTuples);  // THIS IS THE RANDOM HAIR LENGTH

  // Hair Texture
  let hairTextureList = ['bedhead', 'coarse', 'coiffed', 'coiled', 'crinkly', 'curly', 'disheveled', 'frizzy', 'kinky', 'loose curls', 'loose waves', 'lush', 'neat', 'parted', 'permed', 'shaggy', 'silky', 'sleek', 'straight', 'stringy', 'thick', 'tidy', 'tousled', 'uncombed', 'uncontrollable', 'unkempt', 'unruly', 'untamed', 'velvety', 'very coiled', 'very curly', 'wavy', 'well-groomed', 'windswept', 'yaki' ];
  let rollHairTextureList = Math.floor( Math.random() * hairTextureList.length );
  let rndHairTexture = hairTextureList[rollHairTextureList];  // THIS IS THE RANDOM HAIR TEXTURE

  // Hair color
    // hair color: blonde
    let blondeHairColorsList = ['apricot', 'bleach blonde', 'bleached', 'blonde', 'bottle blonde', 'dishwater blonde', 'flaxen', 'honey blonde', 'strawberry blonde', 'wheaten'];
    let rollBlondeHairColorsList = Math.floor( Math.random() * blondeHairColorsList.length );
    let blondeHairColorsListRndChoice = blondeHairColorsList[rollBlondeHairColorsList];  // This is the blonde hair color

    // hair color: black
    let blackHairColorsList = ['blue', 'cobalt', 'ebon', 'ebony', 'jet black', 'obsidian', 'off-black', 'raven', 'sable', 'black'];
    let rollBlackHairColorsList = Math.floor( Math.random() * blackHairColorsList.length );
    let blackHairColorsListRndChoice = blackHairColorsList[rollBlackHairColorsList];  // This is the black hair color

    // hair color: brown
    let brownHairColorsList = ['brunette', 'carmel', 'chestnut', 'chocolate', 'dark', 'dun', 'mousy', 'russet', 'sandy', 'brown', 'dark brown', 'light brown'];
    let rollBrownHairColorsList = Math.floor( Math.random() * brownHairColorsList.length );
    let brownHairColorsListRndChoice = brownHairColorsList[rollBrownHairColorsList];  // This is the brown hair color

    // hair color: red
    let redHairColorsList = ['burgundy', 'cinnamon', 'copper', 'ginger', 'bottle blonde', 'mahogany', 'red', 'saffron', 'tawny', 'flaming red', 'auburn'];
    let rollRedHairColorsList = Math.floor( Math.random() * redHairColorsList.length );
    let redHairColorsListRndChoice = redHairColorsList[rollRedHairColorsList];  // This is the red hair color

  // hair color: gray
  let grayHairColorsList = ['gray', 'frosted', 'ivory', 'platinum', 'salt & pepper', 'silvery white', 'snow white', 'white'];
  let rollGrayHairColorsList = Math.floor( Math.random() * grayHairColorsList.length );
  let graydHairColorsListRndChoice = grayHairColorsList[rollGrayHairColorsList];  // This is the gray hair color

  // Tuple to choose hair color (gray is based on separate chance)
  let hairColorTuples = [ [ [blondeHairColorsListRndChoice, 10], 0.20], [ [blackHairColorsListRndChoice, 0], 0.20], [ [brownHairColorsListRndChoice, 0], 0.50], [ [redHairColorsListRndChoice, 20], 0.10] ];
  let rndHairColorTuple = getRandomValueFromTuples(hairColorTuples);

  let rndHairColor = rndHairColorTuple[0];  // This is the random hair color
  let GrayHairfromHairColor = rndHairColorTuple[1];  // Addtional percent chance of gray hair based on hair color (red/blonde have increased incidence)

  // Determines a descriptor of how much gray there may be
  let amoutOfGray = "";
  if (ageCohort === 3 ) {
    let goingGrayDescriptorList = [ ["is going", 0.4], ["is partially", 0.25], ["is now mostly", 0.25], ["has gone", 0.2], ["is now", 0.2] ];
    amoutOfGray = getRandomValueFromTuples(goingGrayDescriptorList);
  } else {
    amoutOfGray = "is going";
  };

  // Actually check to see if hair is in some stage of going gray
  let grayHairMessage = "";                   // Description of, if any, the character's gray hair
  let finalChanceOfGrayHair = GrayHairfromAge + GrayHairfromHairColor
  let grayHairRoll = Math.ceil ( Math.random() * 100 ) ;
  if (grayHairRoll <= finalChanceOfGrayHair) {
    grayHairMessage = `that ${amoutOfGray} ` + graydHairColorsListRndChoice;
  } else {
    grayHairMessage = "";
  };

  let rndCharHair = `${rndHairLength} ${rndHairTexture} ${rndHairColor} hair ${grayHairMessage}` //  THIS IS THE WHOLE HAIR DESCRIPTION
  console.log("Hair is:", rndCharHair);
  console.log("___________________________________________");
  return rndCharHair;
};


// ************************************************************************************************************************ //
// ***                                          EYE COLOR                                                               *** //
function randomEyeColorGeneration() {
  // CharEyeColo... basic eye color based on general population percentage, specific color within is random

    // eye color: black
    let blackEyeColorsList = ['black', 'dark', 'jet black', 'midnight black', 'pitch black', 'smokey black'];
    let rollBlackEyeColorsList = Math.floor( Math.random() * blackEyeColorsList.length );
    let blackEyeColorsListRndChoice = blackEyeColorsList[rollBlackEyeColorsList];
    // eye color: blue
    let blueEyeColorsList = ['aquamarine', 'azure blue', 'baby blue', 'blue', 'cobalt blue', 'crystal blue', 'cyan', 'electric blue', 'light blue',
                        'pale blue','sapphire','sky blue','midnight blue'];
    let rollBlueEyeColorsList = Math.floor( Math.random() * blueEyeColorsList.length );
    let blueEyeColorsListRndChoice = blueEyeColorsList[rollBlueEyeColorsList];
    // eye color: brown
    let brownEyeColorsList = ['amber', 'brown', 'hazel', 'tawny', 'golden', 'dark brown', 'light brown', 'chestnut brown', 'chocolate brown',       
                          'cognac', 'honey brown', 'russet', 'deep brown', 'cocoa'];
    let rollBrownEyeColorsList = Math.floor( Math.random() * brownEyeColorsList.length );
    let brownEyeColorsListRndChoice = brownEyeColorsList[rollBrownEyeColorsList];
    // eye color: gray
    let grayEyeColorsList = ['charcoal gray', 'gray', 'gun metal gray', 'silver gray', 'slate gray', 'steel gray', 'stormy gray'];
    let rollGrayEyeColorsList = Math.floor( Math.random() * grayEyeColorsList.length );
    let grayEyeColorsListRndChoice = grayEyeColorsList[rollGrayEyeColorsList];
    // eye color: green
    let greenEyeColorsList = ['celadon', 'emerald', 'green', 'dark green', 'light green', 'jade', 'viridian', 'bottle green', 'chartreuse',
                          'forest green', 'sea green', 'olive green'];
    let rollGreenEyeColorsList = Math.floor( Math.random() * greenEyeColorsList.length );
    let greenEyeColorsListRndChoice = greenEyeColorsList[rollGreenEyeColorsList];
    // eye color: violet
    let violetEyeColorsList = ['amethyst', 'lavendar', 'magenta', 'violet'];
    let rollVioletEyeColorsList = Math.floor( Math.random() * violetEyeColorsList.length );
    let violetEyeColorsListRndChoice = violetEyeColorsList[rollVioletEyeColorsList];

    // get random eye color; percent used based on actually population statistics
    let eyeColorTuples = [ [blackEyeColorsListRndChoice, 0.15], [blueEyeColorsListRndChoice, 0.27], [brownEyeColorsListRndChoice, 0.30], [grayEyeColorsListRndChoice, 0.08], [greenEyeColorsListRndChoice, 0.15], [violetEyeColorsListRndChoice, 0.05] ];
    let rndCharEyeColor = getRandomValueFromTuples(eyeColorTuples);  // THIS IS THE RANDOM EYE COLOR
    console.log("Eye color is:", rndCharEyeColor)
    console.log("___________________________________________");
    
    return rndCharEyeColor;
};

// ************************************************************************************************************************ //
// ***                                          BODY TYPE                                                               *** //
function randomBodyTypeGeneration() {
  // CharBodyType... typically a single-word descriptor describing a person's body
  let bodyDescriptorList = ['athletic', 'beefy', 'big', 'brawny', 'broad', 'buff', 'built', 
                            'burly', 'coltish', 'compact', 'curvy', 'defined', 'diminuative', 'fit', 'fluffy',
                            'full', 'full-bodied', 'gangly', 'giant', 'heavy', 'heavy-set', 'herculean/amazonian', 
                            'husky', 'lanky', 'large', 'lean', 'leggy', 'musclebound', 'muscular', 
                            'paunchy', 'petite', 'plain', 'rough', 'short', 'skinny', 'slender', 
                            'slight', 'slim', 'slouched', 'soaring', 'statuesque', 'stocky', 'stooped',
                            'stout', 'strapping', 'tall', 'taut', 'thickset', 'towering', 'well-built', 
                            'willowy', 'wiry', 'wispy' 
                            ];
  let rollBodyDescriptorList = Math.floor( Math.random() * bodyDescriptorList.length );

  let rndCharBodyType = bodyDescriptorList[rollBodyDescriptorList];  // THIS IS THE RANDOM BODY DESCRIPTOR
  console.log("Body/Build descriptor:", rndCharBodyType);
  console.log("___________________________________________");
  return rndCharBodyType;
};

// ************************************************************************************************************************ //
// ***                                 POLOR OPPOSITE PERSONALITY DESCRIPTOR                                            *** //
function randomPersonalityPolarOppGeneration() {
  // CharPersonalityPolarOpp... Polar opposites personality descriptor
  let polarOppositesList = ['pessemistic', 'optimistic', 'arrogant', 'humble', 'witty', 'dry', 'pleasant', 'unpleasant', 'friendly', 'unfriendly',
                        'modest', 'conceited', 'patient', 'impatient', 'overachiever', 'underachiever', 'polite', 'impolite', 'graceful', 'clumsy', 'misanthrope', 'philanthrope', 'relaxed', 'uptight', 'egocentric', 'selfless', 'night owl', 'early bird', 'lucky', 'unlucky', 'gullable', 'skeptical', 'ill-tempered', 'even-tempered'
                      ];
  let rollPolarOpposites = Math.floor( Math.random() * polarOppositesList.length );
  let rndCharPersonalityPolarOpp = polarOppositesList[rollPolarOpposites];  // THIS IS THE RANDOM POLOR OPPOSITE DESCRIPTOR
  console.log("Personality with polar opposite:", rndCharPersonalityPolarOpp);
  console.log("___________________________________________");
  return rndCharPersonalityPolarOpp;
};

// ************************************************************************************************************************ //
// ***                                          PERSONALITY DESCRIPTOR                                                  *** //
function randomPersonalityDescriptorGeneration() {
  // CharPersonalityDescriptor... a personality descriptor
  let personalityDescriptorsList = ['adventurous', 'ambitious', 'calm', 'cautious', 'cheerful', 'curious', 'cynical', 'delightful', 'difficult', 
                                'draconian', 'easy-going', 'exhuberent', 'funny', 'generous', 'gruff', 'happy', 'hard', 'intense', 'irrepressible', 
                                'judgemental', 'kind', 'laid-back', 'mean-spirited', 'melancholy', 'miserable', 'moody', 'nice', 'passive-aggressive', 
                                'sarcastic', 'scientific', 'sensible', 'serious', 'stoic', 'tense', 'tough', 'vengeful', 'well-mannered'
                              ];
  let rollpersonalityDescriptorsList = Math.floor( Math.random() * personalityDescriptorsList.length );
  let rndCharPersonalityDescriptor = personalityDescriptorsList[rollpersonalityDescriptorsList];  // THIS IS THE RANDOM PERSONALITY DESCRIPTOR
  console.log("Personality descriptor:", rndCharPersonalityDescriptor);
  console.log("___________________________________________");
  return rndCharPersonalityDescriptor;
};

// ************************************************************************************************************************ //
// ***                                          PERSONALITY QUIRK                                                       *** //
function randomPersonalityQuirkGeneration() {
  // CharPersonalityQuirk... a single oddity or quirk in the personality
  let personalityQuirksList = ['acrophobia', 'agoraphobia', 'always carries binoculars for bird-watching', 'always cold', 'always too warm', 'always formally introduces self', 'amazing credit score', 'ambidextrous', 'animal lover', 'arachnophobia', 'artistic talent', 'awful driver', 'bad acne', 'beautiful, flourished handwriting', 'blinks slowly', 'brave and fearless', 'brutally honest', 'caffeinoholic', 'calls soft drinks "soda pop"', 'can read minds', 'can recite the alphabet backwards quickly', 'can sleep pretty much anywhere', "can't remember faces", "can't remember names", "can't stand eggs", 'carries a notebook and constantly takes notes', 'celebrates an entirely personal holiday', 'celebrates obscure holidays', 'charmingly naive', 'must check appearance when passing a mirror', 'chews fingernails', 'chronic reader', 'chronically checks the time', 'class clown', 'has collection of celebrity-look-a-like potato chips', 'collects rocks', 'compulsive liar', 'constantly subreferences when speaking', 'coulrophobia', 'curses like a sailor', 'daydreamer', 'defensive when disagreed with', 'distinctive clothing accessory', "doesn't know the lyrics, but sings anyway", 'drags feet', 'easily distracted', 'easily makes friends with pets', 'easily startled', 'eats baby food for lunch', 'eats one item at a time when dining', 'eats peanut butter with a spoon', 'eats butter', 'extremeties are always cold', 'falsely believes is mechanically inclined', 'fantastic cook', 'fast-talker', 'has a favorite pair of socks', 'fidgetty', 'fine with just four hours of sleep a day', 'fond of malapropisms', 'forgetful', 'freckles', 'friendly wink', 'friends with everyone', 'frowning expression', 'gifts amazing homemade presents', 'gives pet names', 'goth', 'gravelly voice', 'guilty conscience', 'hamburgers are round, NEVER square', 'has a catch phrase', 'has a pet lizard', 'has and still wears a Swatch', 'has difficult with scale', 'has eyewear', 'has perfect color coordination', 'has perfect pitch', "couldn't carry a tune in a bucket", 'has an unusual or exotic pet', 'hates getting wet', 'hates a quiet pause in conversation', 'hates lint', 'hates sand', 'heavily salts food, even before tasting it', 'heavy breather', 'high pain threshold', 'just hilarious to be around', 'history buff', 'horrible sense of direction', 'huge child-like grin', 'hums the Imperial Theme from Star Wars when annoyed', 'illegible handwriting', 'incessant complainer', 'insists on blue ink, NEVER black', 'intense stare', 'itchy', 'jumps into bed so nothing can grab you', 'keeps wristwatch in pocket', 'ketchup goes on everything', 'has memorized pi to the thousandth decimal', 'knows the Thriller dance, beginning to end', 'large hands', 'laughs easily', 'leaves editorial notes in library books', 'leering smile', 'left-handed', 'lives in a haunted house', 'loves to drink', 'loves to eat', 'loves to sing', 'luddite', 'lumbering walk', 'maintains an uncomfortable level of eye contact', 'maintains an uncomfortably neat desk', 'militant vegan', 'mindlessly doodles', 'tunelessly hums', 'morbid sense of humor', 'mumbles', 'musical talent', 'musical voice', 'mutters under breath', 'neatly trimmed facial hair', 'needs more pepper!', 'nervous', 'nervous habit', 'never met a stranger', 'refuses to use contractions when speaking', 'nocturnal lifestyle', 'noticeable birthmark', 'noticeable mole', 'noticeable scar', 'obsessed with a certain holiday', 'obsessed with personal hygiene', 'obsession with symmetry', 'OCD', 'odd sense of humor', 'uses English spelling (e.g. humour, colour, civilisation, calibre, centre, devise, etc.)', 'only drinks soft drinks with a straw', 'drinks beer with straw', 'only drinks sparkling water, never still', 'only uses a pocket watch', 'only watches badly reviewed movies', 'overthinks to the point of confusion', 'paces', 'passionate about a sport', 'passionate about art', 'passionate about music', 'perfect enunciation', 'photographic memory', 'many piercings', 'pizza is a food group', 'plays with hair', 'poor posture', 'most clothing owned is one primary color', 'prone to vague, noncommital answers', 'prone to exaggeration when telling stories', 'pumps gass to an even numbered dollar amount', 'quirky sense of humor', 'rarely speaks unless spoken to', 'raspy voice', 'creeky voice', 'deep voice', 'husky voice', 'refers to all older women as "mother"', 'refrains from vulgarity', 'regularly quotes Shakespeare', 'regularly speaks in hypotheticals', 'regularly speaks in metaphors, analogies and similies', 'replaces curse words with silly substitutes', 'always rheumy due to allergies', 'ridiculous grin', 'rolls eyes', 'says, "uhhhhh..." a lot while talking', 'self-destructive', 'shuffles feet', 'sings old pop songs in a ridiculous voice', 'skilled fisherman', 'amataur taxidermist', 'knows sleight-of-hand magic', 'slight tic', 'small feet', 'smells like hot buttered popcorn', 'smokes clove cigarettes', 'sneezes in threes', 'snorts when laughing', 'socially awkward', 'self-references in the third person', 'speaks pig-Mandarin', 'speaks slowly and deliberately', 'speaks with an indiscernable accent', 'speaks with poetic flair', 'squints', 'stiff posture', 'perfect posture', 'strong preference for being barefoot', 'sunburns easily', 'surprisingly strong', 'talks to inanimate objects', 'talks to mom/dad every day', 'many tatoos', 'teetotaler', 'wears a Timex calculator watch', 'types aggressively', 'unblinking stare', 'unusual pronunciation of own name', 'unusually hairy', 'ventriloquist', 'very superstitious (traditional)', "very superstitious (other culture's)", 'very superstitious (weird personal)', 'vulgar sense of humor', 'walks toe to heel', 'walks with a limp', 'regularly wears a dickey', 'wears a strong, uncommon - not unpleasant - scent', 'always wears a baseball cap', 'wears watch on inside of wrist', 'whistles tunelessly', 'will only do a crossword puzzle in pen', 'withdrawn in large groups', "won't eat in front of others", "reluctant to make eye contact", 'writes in block, capital letters'];
  let rollPersonalityQuirksList = Math.floor( Math.random() * personalityQuirksList.length );
  let rndCharPersonalityQuirk = personalityQuirksList[rollPersonalityQuirksList];  // THIS IS THE RANDOM PERSONALITY QUIRK
  console.log("Personality quirk:", rndCharPersonalityQuirk);
  console.log("___________________________________________");
  return rndCharPersonalityQuirk;
};

// ************************************************************************************************************************ //
// ***                                          RELATIONSHIP STATUS                                                     *** //
function randomRelationshipStatusGeneration() {

  let ageCohort = rndAgeTableRow[3]; // This is pulled from the Age Table a public variable

  // CharRelationshipStatus... a single oddity or quirk in the personality
  let rndCharRelationshipStatus="";

  // Single
  let singleRelationshipStatusTuples = [ ["single", 0.30], ["bachelor/bachelorette", 0.20], ["significant other", 0.20], ["cohabitating", 0.15], ["committed relationship", 0.15] ];
  let singleRelationshipStatus = getRandomValueFromTuples(singleRelationshipStatusTuples);

  // Married
  let marriedRelationshipStatusTuples = [ ["married", 0.60], ["divorced", 0.20], ["separated", 0.15], ["engaged", 0.05]];
  let marriedRelationshipStatus = getRandomValueFromTuples(marriedRelationshipStatusTuples);

  let relationshipStatusTuples = [ [singleRelationshipStatus, 0.40], [marriedRelationshipStatus, 0.50], ["widow/widower", 0.05], ["it's complicated", 0.5] ];
  if (ageCohort > 0) {
    rndCharRelationshipStatus = getRandomValueFromTuples(relationshipStatusTuples);  // THIS IS THE RELATIONSHIP STATUS or
  } else {
    rndCharRelationshipStatus = "single";  // THIS IS THE RELATIONSHIP STATUS
  };
  console.log("Relationship status:", rndCharRelationshipStatus);
  console.log("___________________________________________");
  return rndCharRelationshipStatus;
};

// ************************************************************************************************************************ //
// ***                                          NUMBER OF CHILDREN                                                      *** //
function randomNumberOfChildrenGeneration() {

  let ageCohort = rndAgeTableRow[3]; // This is pulled from the Age Table a public variable

  // Modified tuple function that takes a modifier
  function getQtyOfChildrenFromTuples( tuples, rollMod ){
    let roll = Math.random() + rollMod;
    if (roll > .99) {roll = .999999999};
    for(let i=0; i < tuples.length; i++ ){
        roll = roll - tuples[i][1];
        if( roll < 0 ){
          return tuples[i][0]; }
    }
  }

  // Children Declarations
  let rndCharChildren = ""
  let hasTwins = "";
  let rndAddonsToChildren = "";

  // CharChildren... the number of children (nothing about them other than there was a pregnancy)
  let childrenQtyModifier = ((ageCohort -1 ) * 0.10 )

  // Chance of twins
  let rndChanceOfTwins = Math.floor( Math.random() * 100 );
  if (rndChanceOfTwins <= 1) {        // Average has been increasing, now in the 2-3% range
    hasTwins = " (a set of twins)"
  };

  // Additional details about children
  let childrenAddonsTuples = [ [", but expecting!", 0.10], [", but hopeful", 0.10], [" and planning", 0.10], [", but surprise!", 0.10], ["", 0.60] ];
  if (ageCohort === 1) {    //  Only checks if age is greater than 'teen'
    rndAddonsToChildren = getRandomValueFromTuples(childrenAddonsTuples);
  } else {
    rndAddonsToChildren = "";
  };

  //                          qty       twins        other details             %
  let qtyChlildrenList = [ [ ["none",   "",         rndAddonsToChildren],     0.3],
                          [ ["1",      "",         rndAddonsToChildren],     0.3],
                          [ ["2",      hasTwins,   rndAddonsToChildren],     0.25],
                          [ ["3",      hasTwins,   rndAddonsToChildren],     0.08],
                          [ ["4",      hasTwins,   rndAddonsToChildren],     0.05],
                          [ ["5+",     hasTwins,   rndAddonsToChildren],     0.02] ];

  if (ageCohort > 0 ) {   //  Contrary to reality, the persona may only have children if age is older than 'teen'
    let rndQtyChildren = getQtyOfChildrenFromTuples(qtyChlildrenList, childrenQtyModifier); // THIS IS THE # OF CHILDREN or
    let qtyOfChildren = rndQtyChildren[0];
    let childrenTwinsStatement = rndQtyChildren[1];
    let addtionalChildrenDetails = rndQtyChildren[2];
    rndCharChildren = `${qtyOfChildren}${childrenTwinsStatement}${addtionalChildrenDetails}`
  } else {
    rndCharChildren = "none"; // THIS IS THE # OF CHILDREN
  };

  console.log("Number of children:", rndCharChildren);
  console.log("___________________________________________");

  return rndCharChildren;
};


// ************************************************************************************************************************ //
// ***                                          PERSONALITY TYPE                                                        *** //
function randomPersonalityTypeGeneration() {
  let MyersBriggsList = [ [ [ "ISTJ", "Introverted-Sensing-Thinking-Judging", "often called 'inspectors', they have a have a keen sense of right and wrong, especially in their area of interest and/or responsibility. They are noted for devotion to duty; Punctuality is their watchword."], 0.12],
  [ [ "ISTP", "Introverted-Sensing-Thinking-Perceiving", "fundamentally peformers, their interests tend to be mechanical, rather than artistic, and rarely present an impression of constant activity.  They typically lay dormant, saving energy for a worthy project in which they then launch themselves."], 0.05],
  [ [ "ESTP", "Extraverted-Sensing-Thinking-Perceiving", "spontaneous, active folk, they get great satisfaction from acting on their impulses.  Activities involving great power, speed, thrill and risk are the most attractive and chronically stifling these impulses will make them feel 'dead inside'."], 0.05],
  [ [ "ESTJ", "Extraverted-Sensing-Thinking-Judging", "often called 'supervisors', they thrive on order and continuity, and being extraverts, their focus involves organization of people.  They enjoy organizing and mobilizing people according to their own theories and agendas, but are content to enforce 'the rules' handed down to them."], 0.09],
  [ [ "ISFJ", "Introverted-Sensing-Feeling-Judging", "characterized above all by their desires to serve others and their need to be needed.  Typically bound by social conventions, their form of service will tend to exclude moral/political controversy and intead be local, personal and practical."], 0.11],
  [ [ "ISFP", "Introverted-Sensing-Feeling-Perceiving", "are the first to hear the different drummer and eagerly plunge into new fashions, avant garde experience and hip trends - some even being trend setters themselves.  They tend to be impulsive and those who continually repress those impulses feel 'dead inside'."], 0.06],
  [ [ "ESFP", "Extraverted-Sensing-Feeling-Perceiving", "are people who love people, excitement, telling stories and having fun.  Their spontaneity and impulsivenature is almost always entertaining.  They love to entertain, be it on stage, at work or in the home.  Social gatherings are their energy booster."], 0.05],
  [ [ "ESFJ", "Extraverted-Sensing-Feeling-Judging", "are the guardians of birthdays, holidays and celebrations.  They are generous entertainers who enjoy and joyfully observe traditions, and are liberal in giving, especially where custom prescribes.  All things being equal, they prefer to be in charge.  They see problems clearly and delegate easily.  They work and play hard.  However, they do respect the rights of seniority and willing provide it service, while expecting the same from others."], 0.10],
  [ [ "INFJ", "Introverted-Intuitive-Feeling-Judging", "are distinguished by both the complexity of their character and the unusual range and depth of their talents.  Strongly humanitarian, they tend to be idealists with a preference for closure and completion; as such, they are generally doers and dreamers.  This rare combination often results in them taking on a disproportioinate amount of responsibility."], 0.04],
  [ [ "INFP", "Introverted-Intuitive-Feeling-Perceiving", "seeing life through rose-colored glasses, they never seem to lose their sense of wonder.  The mundane world of objects come to life for them and they have the ability to see the good in almost anyone or anything."], 0.05],
  [ [ "ENFP", "Extraverted-Intuitive-Feeling-Perceiving", "a combination of idea-people and people-people, they see everyone and everything as part of a cosmic whole.  They want to both help and to be liked and admired by other people, on both an individual and a humanitarian level.  They are outgoing, warm and genuinely like other people and often have the kind of zany charm that even stodgy types will enjoy and appreciate."], 0.07],
  [ [ "ENFJ", "Extraverted-Intuitive-Feeling-Judging", "the benevolent 'pedagogues' of humanity, they have tremendous charm which draw many into their grand schemes and under their tutelage.  Helpers and enablers, they have tremendous power to manipulate others with their phenomenal skills and unique salesmanship.  They are also global learners who see the big picture.  They can juggle an amazing number of responsibiities and have great entrepreneurial ability."], 0.04],
  [ [ "INTJ", "Introverted-Intuitive-Thinking-Judging", "typically appear to project an aura of self-confidence that can be mistaken for arrogance by the less decisive, their 'definiteness' is quite specific, its source lies in the specialized knowledge systems that most people of this type start building at an early age.  When it comes to their own areas of expertise, they can tell you almost immediately whether or not they can be of assistance.  They know what they know, and more importantly, know what they don't know.  Typically perfectionists, they have a seemingly endless capacity for improving upon anything that takes their interest."], 0.05],
  [ [ "INTP", "Introverted-Intuitive-Thinking-Perceiving", "are pensive, analytical folk.   They often venture so deeply into thought that they seem detached and oblivious to the world around them.  Precise with language and description, they often correct (or want to) others if the shade of meaning is even a little off.  Usually easy-going and amenable to nearly anything, whenl their principles are violated, they can become inflexible and outspoken."], 0.04],
  [ [ "ENTP", "Extraverted-Intuitive-Thinking-Perceiving", "usually labeled as 'clever', they can juggle a half dozen ideas in their minds while delivering a lecture on the most obstuse topic.  Verbally and cerebrally quick, they generally love to argue, for both the sake of argument and to display their debating skills... often playing the devil's advocate.  This will often confuse and upset those who do not understand the concept of argument as sport."], 0.04],
  [ [ "ENTJ", "Entraverted-Intuitive-Thinking-Judging", "requiring little encouragement to make a plan, they have a natural tendency to marshall and direct others.  They are compelled to plan and carry out their plans, often 'larger than life' in the description of their projects."], 0.04]
  ];
  let rndMyersBriggsChoice = getRandomValueFromTuples(MyersBriggsList);
  let finalMyersBriggs = `${rndMyersBriggsChoice[0]} - ${rndMyersBriggsChoice[1]}: ${rndMyersBriggsChoice[2]}`;


  let DiSCList = [  [ [ "DC", "The Challenger", "resolute and strong-willed; tend to be leaders and are often achievers with the motivation to succeed.  However, they could benefit from slowing down and taking time to listen to and understand the other players on the team."], 0.03],
                    [ [ "D", "The Winner", "forceful and direct; focused and inspirational, they tend to have a big-picture mindset; looking for results and then identifying the next best step.  Typically, they delegate tasks and, as they are confident, tend to find themselves in management positions."], 0.04],
                    [ [ "Di", "The Seeker", "convincing and daring; a dominant, fast-paced personality, they bring creativity and innovation to their team and are always looking for new, fresh ideas.  They are focused and tend to work well in teams, having a sense of urgency and appreciation of directness."], 0.03],
                    [ [ "iD", "The Risk Taker", "animated and inspiring; with a tendency towards innovation, they are passionate and work best when they are awarded some freedom to take risks.  They will gravitate towards less traditional environments like remote work and outside sales.  If you have one on your team, engage them daily by encouraging them to share bold ideas and innovations."], 0.06],
                    [ [ "i", "The Enthusiast", "high sociable and lively; tend to be highly social and may seek recognition by verbal approval.  They are full of energy for things they enjoy and have the ability to highlight the positive in difficult situations.  They are great problem solvers, especially when the solution is social and are likely to increase morale."], 0.08],
                    [ [ "S", "The Buddy", "upbeat and lighthearted; a combination of influence and steadiness, they are great listeners and very empathetic.  They value peace, harmony and want every situatioin to be win-win.  However, with a strong focus on helping others, they can lose focus on the work scenario.  Keep them engaged  by socializing the solution.  They are great collaborators and need such opportunities to keep them engaged."], 0.06],
                    [ [ "Si", "The Collaborator", "supportive and agreeable; tend to be team players who are great at identifying the strengths of others; exceling at bringing teams together to work effectively and efficiently.  They tend to be very empathetic, great listeners and truly care about team members feel heard and recognized.  They are strong in a team environment and can develop into great leaders."], 0.16],
                    [ [ "S", "The Peacekeeper", "pleasantly calm and accommadating of others; often a bridge between the leaders and the followers, because they embody sincerity and dependability.  As they have the ability to understand all sides, they can help come to a compromised solution that benefits all parties.  Thoughtful and deliberate in action, they are no likely to take big risks no matter the payoff.  Their cautious perspective may balance a team with riskier personalities."], 0.18],
                    [ [ "SC", "The Technician", "modest and unassuming; typically a very logical person who is focused on getting things done the right way the first time.  They may not be savvy with technology, but they will be technically proficient with the work for which they are responsible.  Less social than other personalities, the usually content to get their work done and often described as even-tempered and reliable."], 0.16],
                    [ [ "CS", "The Bedrock", "quiet and self-controlled; defined by reliability, they love being prepared for situations and never want to let a teammate down.  They are responsible and thrive on routine.  They can be too shy for leadership roles, and even to reach out with questions, so they will need thorough instructions.  They should consider developing public speaking and communication skills, at least within their team."], 0.06],
                    [ [ "C", "The Analyst", "analytical and private; striving for accuracy, they are data-driven and may come off as highly organized, detail-oriented perfectionists.  They are logical and not easily swayed by emotions.  They are focused and insightful, but must be given something to develop and hold their interest.  Whether researching a new topic or analyzing important data, they can be very productive and thorough, especially when they love what they do."], 0.08],
                    [ [ "CD", "The Perfectionist", "unsetimental and matter of fact; typically detail-oriented, they are highly organized and enjoy doing things to completion.  They are not likely to be timid and will be assertive in the workplace.  As leaders, they will have high standards.  They are best as leaders when they use their energy to consider how to best solve problems."], 0.06]
  ];
  let rndDiSCChoice = getRandomValueFromTuples(DiSCList);
  let finalDiSC = `${rndDiSCChoice[0]} - ${rndDiSCChoice[1]}: ${rndDiSCChoice[2]}`;

  let personalityTypeTuples = [ [finalMyersBriggs, 0.75], [finalDiSC, 0.25] ];
  let rndCharPersonalityType = getRandomValueFromTuples(personalityTypeTuples);  // THIS IS PERSONALITY TYPE
  console.log("Personality type:", rndCharPersonalityType);
  console.log("___________________________________________");
  return rndCharPersonalityType;
};


// ************************************************************************************************************************ //
// ***                                          RANDOM NAMES                                                            *** //
function randomNameGeneration() {

  let ageCohort = rndAgeTableRow[3]; // This is pulled from the Age Table a public variable
  // *** FIRST NAME ***
  // Top Names Over the Last 100 Years - Social Security Administration
  let mostCommonFirstNamesInLastCentury = [ "James / Mary", "John / Patricia", "Robert / Jennifer", "Michael / Linda", "William / Elizabeth", "David / Barbara", "Richard / Susan", "Joseph / Jessica", "Thomas / Sarah", "Charles / Karen", "Christopher / Nancy", "Daniel / Lisa", "Matthew / Margaret", "Anthony / Betty", "Donald / Sandra", "Mark / Ashley", "Paul / Dorothy", "Steven / Kimberly", "Andrew / Emily", "Kennth / Donna", "Joshua / Michelle", "Kevin / Carol", "Brian / Amanda", "George / Melissa", "Edward / Deborah", "Ronald / Stephanie", "Timothy / Rebecca", "Jason / Laura", "Jeffrey / Sharon", "Ryan / Cynthia", "Jacob / Kathleen", "Gary / Amy", "Nicholas / Shirley", "Eric / Angela", "Johnathan / Helen", "Stephen / Anna", "Larry / Brenda", "Justin / Pamela", "Scott / Nicole", "Brandon / Samantha", "Benjamin / Katherine", "Samuel / Emma", "Frank / Ruth", "Gregory / Christine", "Raymond / Catherine", "Alexander / Debra", "Patrick / Rachel", "Jack / Carolyn", "Dennis / Janet", "Jerry / Virginia", "Tyler / Maria", "Aaron / Heather", "Jose / Diane", "Henry / Julie", "Adam / Joyce", "Douglas / Victoria", "Nathan / Kelly", "Peter / Christina", "Zachary / Lauren", "Kyle / Joan", "Walter / Evelyn", "Harold / Olivia", "Jermey / Judith", "Ethan / Megan", "Carl / Cheryl", "Keith / Martha", "Roger / Andrea", "Gerald / Frances", "Christian / Hannah", "Terry / Jacqueline", "Sean / Anna", "Arthur / Gloria", "Austin / Jean", "Noah / Kathryn", "Lawrence / Alice", "Jesse / Teresa", "Joe / Sara", "Bryan / Janice", "Billy / Doris", "Jordan / Madison", "Albert / Julia", "Dylan / Grace", "Bruce / Judy", "Willie / Abigail", "Gabriel / Marie", "Alan / Denise", "Juan / Beverly", "Logan / Amber", "Wayne / Theresa", "Ralph / Marilyn", "Roy / Danielle", "Eugene / Diana", "Randy / Brittany", "Vincent / Natalie", "Russell / Sophia", "Louis / Rose", "Philip / Isabella", "Bobby / Alexis", "Johnny / Kayla", "Bradley / Charlotte" ];
  let rndMostCommonFirstNamesInLastCentury = mostCommonFirstNamesInLastCentury[rndDieRoll(100)];  //  Most popular name pair of last century

  // 1920-1950
  let mostCommonNamesCohort3 = [ "Larry / Sadie", "Emil / Regina", "Antonio / Victoria", "Wilfred / Henrietta", "Elbert / Della", "Juan / Bettie", "Alan / Lila", "Allan / Fern", "Lonnie / Faye", "Nelson / Johnnie", "Forrest / Jeanette", "Oscar / Ellen", "Gene / Lucy", "Jerry / Minnie", "Douglas / Sylvia", "Johnnie / Donna", "Claude / Leona", "Don / Rosemary", "Eddie / Stella", "Roland / Mattie", "Everett / Margie", "Maurice / Genevieve", "Charlie / Julia", "Warren / Rosemary", "Jerome / Jeanette", "Jesse / Marian", "Patrick/ Willie", "Stephen / Beatrice", "Curtis / Margie", "Arnold / Billie", "Gilbert / Vivian", "Elmer / Eva", "Lester / Kathryn", "Benny Genevieve", "Clifton / Cynthia", "Archie / Nina", "Oliver / Patty", "Clinton / Fannie", "Barry / Diana", "Juan / Jennie", "Salvatore / Hilda", "Nelson / Marguerite", "Jon / Johnnie", "Alex / Daisy", "Keith / Anita", "Clifford / Dianne", "Rodney / Ruby", "Gordon / Irene", "Jimmie / Juanita", "Jesse / Maureen", "Vincent / Loretta", "Warren / Jeannette", "Lloyd / Constance", "Leon / Lynn", "Jerome / Marlene", "Virgil / Marianne", "Morris / Stephanie", "Matthew / Jill", "Earnest / Mattie", "Lyle / Minnie", "Max / Caroline", "Bennie / Michele", "Wendell / Veronica", "Kent / Patty", "JJonathan / Rosie", "Fredrick / Stella" ];
  let rndMostCommonNamesCohort3 = mostCommonFirstNamesInLastCentury[rndDieRoll(mostCommonNamesCohort3.length)];  //  Cohort 3 random name pair

  // 1950-1980
  let mostCommonNamesCohort2 = [ "Vincent / Doris", "Tommy / Maureen", "Francis / Wendy", "Marvin / Michelle", "Dean / Anna", "Rick / Marsha", "Victor / Angela", "Norman / Sarah", "Early / Sylvia", "Jose / Jill", "Calvin / Dawn", "Freddie / Rachel", "Brent / Shelia", "Harvey / Roxanne", "Gerard / Carole", "Stuart / Lillian", "Johnnie / Josephine", "Herman / Carrie", "Lynn / Patty", "Rex / Sherri", "Arnold / Doreen", "Kelly / Grace", "Greg / Tamara", "Albert / Gloria", "Jack / Betty", "Darren / Stacey", "Ronnie / Penny", "Ralph / Shirley", "Joel / Victoria", "Louis / Jean", "Jim / Peggy", "Michael / Melanie", "Marc / Joan", "Stuart / Shelia", "Rickey / Marcia", "Shane / Doris", "Franklin / Kristen", "Leon / Audrey", "Gregg / Karla", "Bob / Jody", "Darin / Glenda", "Leslie / Patty", "Herbert / Amanda", "Gene / Pam", "Jimmy / Anna", "Victor / Margaret", "Lawrence / Victoria", "Dustin / Cindy", "Gerald / Jodi", "Walter / Natalie", "Alexander / Brandi", "Joel / Kristi", "Christian / Suzanne", "Christopher / Samantha", "Alan / Beth", "Duane / Gloria", "Trevor / Mindy", "Jeff / Tracie", "Geoffrey / Angie", "Hector / Kellie", "Terrence / Claudia", "Terrance / Ruth", "Oscar / Wanda", "Jaime / Jeanette", "Clifford / Cathy", "Harry / Adrienne" ];
  let rndMostCommonNamesCohort2 = mostCommonNamesCohort2[rndDieRoll(mostCommonNamesCohort2.length)];  //  Cohort 2 random name pair

  // 1980-2000
  let mostCommonNamesCohort1 = [ "Christian / Misty", "Curtis / Katrina", "Jeffery / Tracy", "Randy / Casey", "Jeremiah / Kelsey", "Adrian / Kara", "Jesus / Nichole", "Luke / ALison", "Alan / Heidi", "Trevor / Alexis", "Russel / Molly", "Omar / Audrey", "Brad / Katelyn", "Reginal / Regina", "Fernando / Carla", "Darrell / Cheryl", "Sergio / Olivia", "Frederick / Autumn", "Julian / Claudia", "Jaime / Jordan", "Jermaine / Nina", "Geoffrey / Taylor", "Seth / Monica", "Mitchell / Sabrina", "Adrian / Madeline", "Victor / Caroline", "Miguel / Molly", "Shane / Erika", "Chase / Mackenzie", "Isaac / Leah", "Spencer / Diana", "Lucas / Whitney", "Jack / Cheyenne", "Tanner / Bailey", "Angel / Christine", "Vincent / Meghan", "Isaiah / Lindsay", "Dalton / Angelica", "Marco / Isabel", "Allen / Ashlee", "Ruben / Felicia", "Calvin / Marisa", "Mathew / Mercedes", "Randy / Mckenzie", "Berny / Jasmin", "Jerry / Kirsta", "Hayden / Yesenia", "Alexis / Diamond", "Parker / Evelyn", "Brady / Cindy", "Tony / Selena", "Pedro / Brandy", "Craig / Gina", "Larry / Mia", "Andre / Faith", "Maxwell / Audrey", "Ivan / Angelica", "Philip / Nancy", "Levy / Dana", "Sergio / Krystal", "Roberto / Alejandra", "Darius / Ariana", "Andres / Summer", "Cristian / Mikayla", "Hector / Raven", "Drew / Lydia" ];
  let rndMostCommonNamesCohort1 = mostCommonNamesCohort1[rndDieRoll(mostCommonNamesCohort1.length)];  //  Cohort 1 random name pair

  // 2000-2020
  let mostCommonNamesCohort0 = [ "Jacob / Emily", "Michael / Madison", "Joshua / Emma", "Matthew / Olivia", "Daniel / Hannah", "Gabriel / Julia", "Jose / Morgan", "Austin / Destiny", "Kevin / Rachel", "Elijah / Ella", "Caleb / Kaitlyn", "Sebastian / Evelyn", "Xavier / Maya", "Timothy / Claire", "Carter / Autumn", "Wyatt / Jocelyn", "Brayden / Ariana", "Tristan / Molly", "Alejandro / Isabelle", "Henry / Madelyn", "Victor / Melissa", "Trevor / Jacqueline", "Bryce / Marissa", "Wesley / Angelica", "Oliver / Hope", "Trenton / Chelsea", "Hector / Alana", "Malachi / Liliana", "Jalen / Brittany", "Raymond / Camila", "Gregory / Makenzie", "Abraham / Lilly", "Elias / Veronica", "Leonardo / Abby", "Sergio / Jazmin", "Donovan / Adrianna", "Colby / Delaney", "Marco / Karina", "Bryson / Jasmin", "Noah / Emma", "Liam / Olivia", "Jacob / Sophia", "William / Isabella", "Mason / Ava", "Thomas / Mila", "Eli / Nora", "Jaxon / Ellie", "Connor / Bella", "Nicholas / Alexa", "Jeremiah / Lucy", "Abraham / Rebecca", "Brady / Michelle", "Sean / Alina", "Jake / Catherine", "Tucker / Londyn", "Nicolas / Summer", "Rowan / Izabella", "Amir / Jayla", "Avery / Katelyn", "King / Daniela", "Gael / Harmony", "Kenneth / Alana", "Bradley / Amaya", "Cayden / Emerson", "Xander / Julianna", "Graham / Cecilia" ];
  let rndMostCommonNamesCohort0 = mostCommonNamesCohort0[rndDieRoll(mostCommonNamesCohort0.length)];  //  Cohort 0 random name pair


  // Get the appropriate age cohort of popular names
  let cohortsRndPopularName = "";

  switch (ageCohort) {
    case 0:
      cohortsRndPopularName = rndMostCommonNamesCohort0;
      break;
    case 1:
      cohortsRndPopularName = rndMostCommonNamesCohort1;
      break;
    case 2:
      cohortsRndPopularName = rndMostCommonNamesCohort2;
      break;
    case 3:
      cohortsRndPopularName = rndMostCommonNamesCohort3;
  };


  let firstNameTuples = [ [rndMostCommonFirstNamesInLastCentury, 0.5], [cohortsRndPopularName, 0.5] ];
  let rndFirstNamePairs = getRandomValueFromTuples(firstNameTuples);  //  First name of full name (CharName)


  // *** MIDDLE NAME ***
  let maleMiddleInitialList = [ ["A", 0.09], ["B", 0.02], ["C", 0.03], ["D", 0.05], ["E", 0.08], ["F", 0.02], ["G", 0.02], ["H", 0.03], ["I", 0.02], ["J", 0.16], ["K", 0.02], ["L", 0.08], ["M", 0.05], ["N", 0.02], ["O", 0.02], ["P", 0.03], ["Q", 0.01], ["R", 0.07], ["S", 0.02], ["T", 0.03], ["U", 0.01], ["V", 0.01], ["W", 0.08], ["X", 0.01], ["Y", 0.01], ["Z", 0.01] ];
  let rndMaleMiddleInitial = getRandomValueFromTuples(maleMiddleInitialList);


  let femaleMiddleInitialList = [ ["A", 0.11], ["B", 0.02], ["C", 0.03], ["D", 0.02], ["E", 0.07], ["F", 0.03], ["G", 0.03], ["H", 0.02], ["I", 0.02], ["J", 0.05], ["K", 0.03], ["L", 0.12], ["M", 0.15], ["N", 0.04], ["O", 0.02], ["P", 0.02], ["Q", 0.01], ["R", 0.08], ["S", 0.03], ["T", 0.02], ["U", 0.01], ["V", 0.03], ["W", 0.01], ["X", 0.01], ["Y", 0.01], ["Z", 0.01] ];
  let rndFemaleMiddleInitial = getRandomValueFromTuples(femaleMiddleInitialList);

  let rndMiddleInitialPairs = `${rndMaleMiddleInitial}. / ${rndFemaleMiddleInitial}.`;  //  This is the random middle initial pair


  // *** SURNAME ***
  // Using sets taken from namecensus.com; using the top 100 as well middle and last from the top 1000 most common surnames in the U.S.
  let top100SurnamesInUS = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Mooris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes' ];
  let chosenTop100SurnamesInUS = top100SurnamesInUS[rndDieRoll(top100SurnamesInUS.length)];

  let middle100SurnamesInUS = [ 'Atkins', 'Wilcox', 'Pitts', 'Conley', 'Marquez', 'Burnett', 'Richard', 'Cochran', 'Chase', 'Davenport', 'Hood', 'Gates', 'Clay', 'Ayala', 'Sawyer', 'Roman', 'Vazquez', 'Dickerson', 'Hodge', 'Acosta', 'Flynn', 'Espinoza', 'Nicholson', 'Monroe', 'Wolf', 'Morrow', 'Kirk', 'Randall', 'Anthony', 'Whitaker', "O'Connor", 'Skinner', 'Ware', 'Molina', 'Kirby', 'Huffman', 'Bradford', 'Charles', 'Gilmore', 'Dominguez', "O'Neal", 'Bruce', 'Lang', 'Combs', 'Kramer', 'Heath', 'Hancock', 'Gallagher', 'Gaines', 'Shaffer', 'Short', 'Wiggins', 'Mathews', 'Mcclain', 'Fischer', 'Small', 'Melton', 'Hensley', 'Bond', 'Dyer', 'Camerson', 'Grimes', 'Contreras', 'Christian', 'Wyatt', 'Baxter', 'Snow', 'Mosley', 'Shepherd', 'Larsen', 'Hoover', 'Beasley', 'Glenn', 'Petersen', 'Whitehead', 'Meyers', 'Keith', 'Garrison', 'Vincent', 'Shields', 'Horn', 'Savage', 'Olsen', 'Schroeder', 'Hartman', 'Woodard', 'Mueller', 'Kemp', 'Deleon', 'Booth', 'Patel', 'Calhoun', 'Wiley', 'Eaton', 'Cline', 'Navarro', 'Harrell', 'Lester', 'Humpphrey', 'Parrish' ];
  let chosenMiddle100SurnamesInUS = middle100SurnamesInUS[rndDieRoll(middle100SurnamesInUS.length)];

  let lowest100SurnamesInUS = [ 'Cote', 'Reilly', 'Compton', 'Raymond', 'Mooney', 'Mcgowan', 'Craft', 'Cleveland', 'Clemons', 'Wynn', 'Nielsen', 'Baird', 'Stanton', 'Snider', 'Rosales', 'Bright', 'Witt', 'Stuart', 'Hays', 'Holden', 'Rutledge', 'Kinney', 'Clements', 'Castaneda', 'Slater', 'Hahn', 'Emerson', 'Conrad', 'Burks', 'Delaney', 'Pate', 'Lancaster', 'Sweet', 'Justice', 'Tyson', 'Sharpe', 'Whitfield', 'Talley', 'Marcias', 'Irwin', 'Burris', 'Ratliff', 'Mccray', 'Madden', 'Kaufman', 'Beach', 'Goff', 'Cash', 'Bolton', 'McFadden', 'Levine', 'Good', 'Byers', 'Kirkland', 'Kidd', 'Workman', 'Carney', 'Dale', 'Mcleod', 'Holcomb', 'England', 'Finch', 'Head', 'Burt', 'Hendrix', 'Sosa', 'Haney', 'Franks', 'Sargent', 'Nieves', 'Downs', 'Rasmussen', 'Bird', 'Hewitt', 'Lindsay', 'Le', 'Foreman', "O'Neil", 'Delacruz', 'Vinson', 'Dejesus', 'Hyde', 'Forbes', 'Gilliam', 'Guthrie', 'Wooten', 'Huber', 'Barlow', 'Boyle', 'Mcmahon', 'Buckner', 'Rocha', 'Puckett', 'Langley', 'Knowles', 'Cooke', 'Velazquez', 'Whitley', 'Noel', 'Vang' ];
  let chosenLowest100SurnamesInUS = lowest100SurnamesInUS[rndDieRoll(lowest100SurnamesInUS.length)];


  let surnamesTupleList = [ [chosenTop100SurnamesInUS, 0.5], [chosenMiddle100SurnamesInUS, 0.3], [lowest100SurnamesInUS, 0.2] ];
  let rndSurname = getRandomValueFromTuples(surnamesTupleList);


  let rndCharName = `${rndFirstNamePairs}  ${rndMiddleInitialPairs}  ${rndSurname}`; //  THIS IS THE NAME
  console.log("Random full name is:", rndCharName);
};

//*********************************************************************************************************** */

// GETTERS FOR RANDOM PERSONA QUALITIES

// *****  AGE  *****
function getRandomAge() {
  let CharAge = rndAgeTableRow[1];    
  return CharAge;
};

// *****  HAIR COLOR  *****
function getRandomHairColor() {
  let CharHair = randomHairColorGeneration();
  return CharHair;
};

// *****  NAME  *****
function getRandomName() {
  let CharName = randomNameGeneration();
  return CharName;
};

// *****  RELATIONSHIP  *****
function getRandomRelationshipStatus() {
  let CharRelationshipStatus = randomRelationshipStatusGeneration();
  return CharRelationshipStatus;
}

// *****  CHILDREN  *****
function getRandomNumberOfChildren() {
  let CharChildren = randomNumberOfChildrenGeneration();
  return CharChildren;
};

// *****  BODY  *****
function getRandomBodyType() {
  let CharBodyType = randomBodyTypeGeneration();
  return CharBodyType;
};

// *****  EYE COLOR  *****
function getRandomEyeColor() {
  let CharEyeColor = randomEyeColorGeneration();
  return CharEyeColor;
};

// *****  PERSONALITY TYPE  *****
function getRandomPersonalityType() {
  let CharPersonalityType = randomPersonalityTypeGeneration();
  return CharPersonalityType;
};

// *****  PERSONALITY POLAR OPPOSITE  *****
function randomPersonalityPolarOpposite() {
  let CharPersonalityPolarOpp = randomPersonalityDescriptorGeneration();
  return CharPersonalityPolarOpp;
};

// *****  PERSONALITY DESCRIPTOR  *****
function getRandomPersonalityDescription() {
  let CharPersonalityDescription = randomPersonalityDescriptorGeneration();
  return CharPersonalityDescription;
};

// *****  PERSONALITY QUIRK  *****
function getRandomPersonalityQuirk() {
  let CharPersonalityQuirk = randomPersonalityQuirkGeneration();
  return CharPersonalityQuirk;
};


export default {
  getRandomAge: getRandomAge,
  getRandomHairColor: getRandomHairColor,
  getRandomName: getRandomName,
  getRandomRelationshipStatus: getRandomRelationshipStatus,
  getRandomNumberOfChildren: getRandomNumberOfChildren,
  getRandomBodyType: getRandomBodyType,
  getRandomEyeColor: getRandomEyeColor,
  getRandomPersonalityType: getRandomPersonalityType,
  randomPersonalityPolarOpposite: randomPersonalityPolarOpposite,
  getRandomPersonalityDescription: getRandomPersonalityDescription,
  getRandomPersonalityQuirk: getRandomPersonalityQuirk
};