class Roko {
  name = 'Roko';
  regiment = 'Dragoons';
  
  maxWounds = 12;
  damage = 0;
  wounds = `${this.maxWounds - this.damage}`;
  
  armor = 5 + 2 + 4 + 6 + 1 // 18
  implants = 7; // implants benefit to 10

  fate = 3;
  // 4 requisition rolls
  XP = {
    base: 2800,
    advanced: 500,// 800 remaining
    total: base + advanced,
  };
  
  aptitudes = [
    'Ballistic Skill',
    'Intelligence',
    'Perception',
    'Knowledge',
    'Tech',
    'Toughness',
    'Willpower',
    'Defense', // This is from double aptitudes from homeworld
  ];
  
  homeworld = {
    type: 'Frontier World',
    shid1: 'Maverick',
    shid2: 'Grenadier',
    shid3: 'Die Hards',
    shid4: 'Close Order Drill',
    shid5: 'Regimental Rivalry',
  };

  stats = {
    ballistics: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 32,
      bonuses: 3 + 3,
      purchased: 5,
    },
    weapons: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 25,
      bonuses: 0,
      purchased: 0,
    },
    strength: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 28,
      bonuses: 0,
      purchased: 0,
    },
    agility: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 32,
      bonuses: 0,
      purchased: 0,
    },
    toughness: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 39,
      bonuses: 3,
      purchased: 10,
    },
    perception: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 32,
      bonuses: 0,
      purchased: 0,
    },
    intelligence: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 35,
      bonuses: 5,
      purchased: 10,
    },
    willpower: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 32,
      bonuses: 0,
      purchased: 0,
    },
    fellowship: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 30,
      bonuses: 0,
      purchased: 0,
    },
  };

  skills = [
    {
      name: 'Common Lore (Adeptus Mechanicus, Tech)',
      tier: 1,
      description: 'string',
    },
    {
      name: 'Forbidden Lore (Adeptus Mechanicus)',
      tier: 1,
      description: 'string',
    },
    {
      name: 'Forbidden Lore(Archaeotech)',
      tier: 1,
      description: 'string',
    },
    {
      name: 'Tech-Use',
      tier: 2, // two tech-use perks
      description: 'string',
    },
  ];

  talents = [
    {
      name: 'Mechadendrite Use (Weapon, Utility)',
      description: `The character is trained in the use of a particular kind of Mechadendrite (extra mechanical arms often sprouting from a cyber mantle mounted on the character's back) in much the same way as Weapon Training allows the use of weapons.
      Though there are many different types of Mechadendrite, this Talent divides them into two categories:
      • Weapon: Mechadendrites of this type end in either ranged or close combat weapons, and have the supplemental support and strength necessary for combat.
      • Utility: Including such varied types as Machine Spirit Interface, Manipulator, Medicae, Utility, Optical, and countless others, these Mechadendrites generally require less hardy mountings, but all interface with the Cyber Mantle in a similar manner.`,
    },
    {
      name: 'Weapon Training (Las, Power)',
      description: 'string',
    },
    {
      name: 'Technical Knock',
      description: `Either through the ease of long practice, or the proper ritual to appease a weapon's machine spirit, the character can clear stoppages with a simple knock or solid smack of his hand to a weapon. The character may un-jam any gun as a Half Action, but may only use this Talent on one weapon per Round. The character must touch the weapon (often quickly and violently) to make this Talent work.`,
    },
    {
      name: 'Battlefield Tech-Wright',
      description: `Veteran Enginseers who have survived long tours of duty with the Imperial Guard learn to perform their vital tasks in any circumstance, whether welding tank treads in pouring rain or carefully activating a recalcitrant cogitator while an artillery bombardment shakes the ground below their feet.
      The character no longer suffers any penalties to Tech-Use or Repair Tests due to external distractions and reduces all penalties from poor tools or working conditions by a total of 10 (so a Hard (-20) Repair Test to fix a tank mired in a swamp would become Difficult (-10) instead).`,
    },
    {
      name: 'Bombardier',
      description: `Due to many years of training, and an obsession that squad mates might find unnerving, the character is an expert with explosive weapons and has an uncanny control over where projectiles land. This character may make ranged attacks with weapons with the Indirect Quality targeting locations he cannot see as a Half Action instead of a Full Action as normal. When firing a weapon with the Indirect Quality or throwing a grenade, this character rolls twice to determine the direction that his attacks scatters and may choose either result.`,
    },
    {
      name: 'Quick Draw',
      description: 'string',
    },
    {
      name: 'Combat Formation',
      description: 'The character makes sure the Squad is constantly alert and prepared for danger, planning out their actions for many contingencies if attacked. All members of the Squad (including the character) add +1 to their Initiative rolls. Any member of the Squad may also choose to use the Intelligence Bonus of this character for their Initiative roll rather than their own Agility Bonus.',
    },
    {
      name: 'Resistance (fear)',
      description: `The character's background, experience, training, exposure or plain stubbornness has developed a resistance within him. Each time the character selects this Talent, choose one area of resistance. The character gains a +10 bonus when making Tests to resist effects of this type. The GM may wish to approve certain choices or have them justified by the character's past.`,
    },
    {
      name: 'Weapon Training (launchers)',
      description: 'string',
    },
    {
      name: 'Hatred (8th Gavlax Lancers)',
      description: `A group, organisation, or race has wronged the character in the past, fuelling this animosity. When fighting opponents of that group in close combat, the character gains a +10 bonus to all Weapon Skill Tests made against them. The character also finds it difficult to back down from a fight with his hated foe and must make a Willpower Test to retreat or surrender when fighting them, unless massively outnumbered or outclassed.`,
    },
    {
      name: 'Enemy (8th Gavlax Lancers)',
      description: 'string',
    },
    {
      name: 'Comrade Cohesion 15m',
      description: 'string',
    },
    {
      name: 'Distrusted Authority',
      description: 'string',
    },
    // {
    //   name: '',
    //   description '',
    // },
  ];

  traits = [
    {
      name: 'Mechanicus Implants',
      description:`
      The character is a servant of the Machine-God, and has access to implants beyond other characters.
      
      ELECTRO-GRAFT
      The Electro-graft is a small port that is grafted into the nervous system. Once a recipient has been properly trained, this allows him to interface with machine data ports and certain types of data nets. Electro-grafts can take many forms, such as skull shunts, finger probes, or spine jacks.

      ELECTRO INDUCTORS
      Electro Inductors are palm-sized metal skin grafts that appear much like tattoos to the uninitiated. The electros are wired into the nervous system, where they derive power from the bio-electrical emanations of the flesh and the sacred mysteries of the Potenia Coil. They can be used to emit or siphon power in many ways.

      RESPIRATOR UNIT
      A Respirator Unit implant involves tubes, wires, voxgrills, or other augmetic parts replacing the neck and upper chest. The unit purifies the air supply, granting a +20 bonus to resist airborne toxins and gas weapons. The respirator unit also contains a vox-synthesiser capable of transmitting the voice in a variety of ways.

      CYBER-MANTLE
      The Cyber-mantle is a framework of metal, wires, and impulse transmitters bolted onto the spine and lower ribcage. As the initiate gains further implants, this mantle acts as a sub-dermal anchorage point. Amongst some servants of the Omnissiah, this cyber-mantle is often referred to as “the true flesh.”

      POTENTIA COIL
      Cradled within the cyber-mantle is a power unit known as the Potentia Coil. This mass can store energy and produce various types of fields. Coils come in many types, from small crystal stack affairs to bulky electrical galvinators.

      CRANIAL CIRCUITRY
      Cranial circuitry is a series of linked processors, implants, and cortical circuits that enhances mental capacities. Most sit within housing bolted onto the skull, whilst others nestle within the brain itself.`
    },
    {
      name: 'Machine(x)',
      description: `A creature with the Machine Trait is fashioned from inorganic materials and is generally more rigorous then fleshy folks. Machines do not breathe, are immune to the effects of a vacuum, extremes of cold, any mind-influencing psychic effect, and their Armour Points apply toward fire Damage.
      Machines have a certain number of Armour Points (indicated by the number in parentheses). This armour stacks with worn armour, but not with the Natural Armour Trait.`,
    },
  ];

  gear = [
    // unless above rare then consume roll without a roll
    // 4 requisition rolls
    // handwave unimportant items within reason
    // Subdermal Armor
    // Luminen Capacitors
    // Maglev Coils
    // Gun
    // Tracer Ammo
    {
      name: 'Mind Impulse Unit',
      quality: 'Good',
      description: 'stats',
    },
    {
      name: 'Autosanguine',
      quality: 'Good',
      description: 'stats',
    },
    {
      name: 'Servo-Arm',
      quality: 'Good',
      description: 'stats',
    },
    {
      name: 'Augur Array',
      quality: 'Normal',
      description: 'stats',
    },
    {
      name: 'Sacred Unguents',
      quality: 'Normal',
      description: 'stats',
    },
    {
      name: 'Dataslate',
      quality: 'Normal',
      description: 'Iphone',
    },
    {
      name: 'Omnissian Axe',
      quality: 'Normal',
      description: 'stats',
    },
    {
      name: 'Calculus Logi Upgrade',
      quality: 'Normal',
      description: 'stats',
    },
    {
      name: 'Ballistic Mechadendrite',
      quality: 'Normal',
      description: 'stats',
    },
    {
      name: 'Manipulator Mechadendrite',
      quality: 'Normal',
      description: 'stats',
    },
    {
      name: 'Utility Mechadendrite',
      quality: 'Normal',
      description: 'stats',
    },
  ];

  wishlistGear = [
    'Utility Mechadendrite #2',
    'Medicae Mechadendrite',
    'Autosanguine',
    'Augur Array',
  ];

  purchases = [
    {
      name: 'Toughness +10',
      cost: 350,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Intelligence +10',
      cost: 350,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'The  Flesh is Weak',
      cost: 400,
      description: `The character's body has undergone significant bionic replacement, trading frail flesh for unyielding metal. The character is more machine than man now, and has the resilience to prove it, though his squad mates might look somewhat sceptically upon his bionically enhanced form.
      This character gains the Machine (X) Trait, where X is equal to half of the number of Cybernetics he possesses (rounded up), to a maximum of an amount equal to his Toughness Bonus. If he gains a new Cybernetic, the value of the Trait increases to reflect the new Cybernetic. Note that this only applies to Cybernetics such as bionic replacement limbs and organ replacements, sub-systems, and mechadendrites (see page 204 of the Only War Core Rulebook), and not to Traits and Talents that grant similar effects.`,
      isPerk: true,
    },
    {
      name: 'Trade (Armorer)',
      cost: 100,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Armor-Monger',
      cost: 200,
      description: 'The character is a skilled armourer and constantly tinkers and improves his armour or keeps it in pristine shape by repairing the slightest damage it sustains. With years of training, the character has even learned to enhance the protection afforded by his armour and how to use it to its optimum. The character increases the Armour Points of any armour he wears by 1 on all locations it would normally cover, as long as he has at least an hour each day to clean and repair it or make minor modifications. This bonus applies only to armour when worn by the character, as it combines his training as much as his skill at armoury.',
      isPerk: true,
    },
    {
      name: 'Infused Knowledge',
      cost: 400,
      description: `The character has been infused with a great wealth of lore and knowledge, either through punishing noetic techniques or by arcane methods kept secret by the guardians of technology and learning. The character counts as having all Common Lore and Scholastic Lore Skills at Rank 1 (Known) (basically they know something about everything). If they wish to later improve their Lore Skills, these advances must be bought using Experience Points (from Rank 1) as normal.
      Such is their skill, they also add one Degree of Success to any successful Common or Scholastic Lore Tests.`,
      isPerk: true,
    },
    {
      name: 'Servo-Arm',
      cost: 250,
      description: `The Servitor assists in all repairs the Enginseer performs, acting as a natural extension of his will as he communes withh vehicle machine spirits. When assisted by his Servitor, the Enginseer gains a +10 bonus to all Tech-Use Tests to make repairs, and halves the time any repair takes.`,
      isPerk: true,
    },
    {
      name: 'Field Repairs',
      cost: 300,
      description: `On the battlefield, the Enginseer links to his Servitor, relaying complex data and instructions, and the Servitor enacts those commands with precision. As long as hhis Servitor is within range of communication, the Enginseer may perform Tech-Use Tests on anything next to the Servitor at a -10 penallty.`,
      isPerk: true,
    },
    {
      name: 'Ballistics Skill +5',
      cost: 250,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Potentia Coil Induction',
      cost: 200,
      descrption: `The Crimson Guard are said to be as relentless as machines on the march, capable of making journeys on foot with full kit that other regiments could not manage unburdened. While much of this claim can be attributed to their fearsome reputation, the veteran warriors of the Adeptus Mechanicus can achieve feats far beyond the endurance of frail human flesh by drawing on external reserves of power.
      The character has learned to feed additional power to his potentia coil through electro inductors and eliminate any weariness or strain he suffers from. When in the presence of a suitable power source, such as a portable generator or the power plant of one of his regiment's fighting vehicles, he may make an Ordinary (+10) Toughness Test and recover from a number of levels of Fatigue equal to the Degrees of Success achieved on the Test.`,
      isPerk: true,
    },
    {
      name: 'Vitality Coils',
      cost: 400,
      description: `The potentia coil implanted in the initiates of the Cult Mechanicus is thoroughly integrated with both the biological
      and mechanical components of their frame. This most sacred implant assists in the regulation of everything from the devotee's
      bioelectric reserves to his heart rate, becoming the lynchpin of his vital functions. In dire circumstances, a hardy servant of the
      Machine God can draw greater power into his potentia coil to supplement these functions and accelerate his body's healing.
      The character has learned to feed additional power to his potentia coil through electoo inductors, and can supercharge
      it to maximum capacity to restore lost Wounds. Once per game session when in the presence of a suitable power source,
      such as a portable generator or the power plant of one of his regiment's fighting vehicles, he may make a Challenging (+0)
      Toughness Test as a Full Action. If he succeeds, he removes 1d5 Wounds, plus 1 Wound per additional Degree of Success he
      scores on the Test. He cannot remove Critical Damage this way. However, the restoration process is potentially volatile, and any
      irregularities in the power feed can have deadly consequences. If he fails the Test, he suffers 1 Damage ignoring armour and
      Toughness Bonus, plus 1 additional Damage for every three Degrees of Failure he scores on the Test.`,
      isPerk: true,
    },
    {
      name: 'Commerce',
      cost: 100,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Security',
      cost: 100,
      description: 'N/A',
      isPerk: false,
    }
  ];

  wishlistPerks = [
    {
      name: 'Cybernetic Boost',
      cost: 300,
      description: `Cybernetics are an important part of life for many members of the Imperial Guard, for soldiers often need to replace lost or crippled limbs and organs of vulnerable flesh and blood with assuredly superior appendages and devices of metal and oil. Though most Guardsmen know better than to tamper with these sacred devices, some enterprising (or foolish) individuals have been known to modify the baseline capacities of these devices, allowing them to get a short burst of power by overloading the device in a semi-controlled fashion.
      As a Half Action, this character may spend a Fate Point and make a Challenging (+0) Tech-Use Test. If he succeeds, he gains either the Unnatural Agility (X) or Unnatural Strength (X) Trait, where X is equal to one, plus one for every two additional Degrees of Success he scores on the Test (or increases existing versions of those Traits by X). These Traits persist for a number of Rounds equal to his Intelligence Bonus. The character may end the effect at any time. At the end of each Round in which the character allows it to persist, he gains 1 level of Fatigue.`,
      isPerk: true,
    },
    {
      name: 'Cybernetic Calibrations',
      cost: 400,
      description: `This character, either through initiation into the mysteries of the Omnissiah or tinkering that would certainly attract negative attention from such individuals, has fine-tuned his cybernetic implants to a point of optimization.
      All of this character's Cybernetics count as being one level of Craftsmanship higher than their base Craftsmanship (so, for instance, a Poor Craftsmanship bionic arm would become Common Craftsmanship, or a Good Craftsmanship limb would become Best Craftsmanship).
      `,
      isPerk: true,
    },
    {
      name: 'Redundant Systems',
      cost: 300,
      description: `The Enginseer Prime gains an extra Servitor. He can seelect this Advance up to a number of times equal to his Intelligence Bonus.`,
      isPerk: false,
    },
    {
      name: 'Coordination Algorithms',
      cost: 300,
      description: `The Enginseer Prime optimises his Servitors to assist him in tandem, each mechanical minion acting a cog with a greater machine. When two or more Servitors assist him on a Tech-Use Test via the Servo-Arm Comrade Advance, he gains an additional +5 bonus for each Servitor that assists beyond the first.`,
      isPerk: false,
    },
    {
      name: 'Machine Lord',
      cost: 600,
      description: `The Enginseer Prime can assume precise control over his Servitors, using them to strike down his foes. Once during eachh of his Turns, the Enginseer Prime may make a Challenging (+0) Tech-Use Test as a Half Action. If he succeeds, he can have up to one of his Servitors, plus one additional Servitor per Degree of Success he scores beyond the first, make a Half Action Melee Attack Action or Ranged Attack Action against a target within range. For this attack, the Servitor uses thhe Enginseer Prime's Weapon Skill or Ballistic Skill in place of its own relevant Characteristic.`,
      isPerk: false,
    },
    {
      name: 'Tech-use +20',
      cost: 300,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Master Engineseer',
      cost: 400,
      description: '+10 to Tech-use, and spend a Fate to auto succeed a Tech-use',
      isPerk: true,
    },
    {
      name: 'True Grit',
      cost: 400,
      description: 'The character is able to shrug off wounds that would fell lesser men. Whenever the character suffers Critical Damage (after reduction for Armour and Toughness), reduce the amount by his Toughness Bonus (to a minimum of 1).',
      isPerk: true,
    },
    {
      name: 'Foresight',
      cost: 300,
      description: `Logic and analysis do for the character what animal entrails and the bones claim to do for the superstitious masses. By careful consideration of all the possible consequences and examination of all evidence and information, the character can identify the best path for success. By spending ten minutes studying or analyzing a problem, the character gains a +10 bonus to his next Intelligence Test or a Skill Test based on Intelligence.`,
      isPerk: true,
    },
    {
      name: 'Xeno-Tech',
      cost: 100,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Iron Jaw',
      cost: 200,
      description: `The character has taken blows from Orks and given back as good as they got. The character can bounce back from most strikes without ill effects. If ever Stunned, a successful Toughness Test allows the character to ignore the effects.`,
      isPerk: true,
    },
    {
      name: 'Weapon Training(Projectile)',
      cost: 0,
      description: `The character can use all weapons with Class: Pistol, Basic, Melee, Throwing, and Vehicle within the group he has selected with this Talent. When a character attempts to use a weapon he does not have the correct Weapon Training Talent for, he suffers a –20 penalty to any relevant Weapon Skill or Ballistic Skill Test. The character can only use weapons with Class: Heavy without suffering the –20 penalty if he has both Weapon Training in the appropriate group and Weapon Training (Heavy).
      This Talent may be taken more than once, each time with a different specialization.`,
      isPerk: false,
    },
    {
      name: 'Weapon Training(Heavy)',
      cost: 0,
      description: `The character can use all weapons with Class: Pistol, Basic, Melee, Throwing, and Vehicle within the group he has selected with this Talent. When a character attempts to use a weapon he does not have the correct Weapon Training Talent for, he suffers a –20 penalty to any relevant Weapon Skill or Ballistic Skill Test. The character can only use weapons with Class: Heavy without suffering the –20 penalty if he has both Weapon Training in the appropriate group and Weapon Training (Heavy).
      This Talent may be taken more than once, each time with a different specialization.`,
      isPerk: false,
    },
  ];
};