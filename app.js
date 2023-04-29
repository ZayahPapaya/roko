class Roko {
  name = 'Roko';
  regiment = 'Dragoons';

  maxWounds = 12;
  damage = 0;
  wounds = `${this.maxWounds - this.damage}`;

  movement = `
  Half move: 3m
  Full move: 6m
  Charge: 9m
  Run: 18m
  `;
  armor = 5 + 5 + 6 + 1 + 2 // 19, 17 on head
  implants = 11; // implants benefit to 10
  carry = 6 / 45
  fate = 3 / 3;
  XP = {
    unspent: 0,// 300 remaining budget. 300 for Lore (Admech) +20 while I still have knowledge. Change to Magna for next specialization for shooty and driving.
    total: 7500,
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
    name: 'Shinot',
    type: 'Frontier World',
    command: 'Maverick',
    regimentType: 'Grenadier',
    training: 'Die Hards',
    doctrines: 'Close Order Drill',
    quirk: 'Regimental Rivalry',
  };

  stats = {
    ballistics: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 32,
      bonuses: 3 + 3,
      purchased: 5,
      cost: 250,
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
      cost: 350,
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
      bonuses: 10,
      purchased: 15,
      cost: 550,
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
    reciepts: [
      {
        name: 'Toughness +10',
        cost: 350,
        description: 'N/A',
        isPerk: false,
      },
      {
        name: 'Intelligence +10',
        cost: 550,
        description: 'N/A',
        isPerk: false,
      },
      {
        name: 'Ballistics Skill +5',
        cost: 250,
        description: 'N/A',
        isPerk: false,
      },
    ]
  };

  skills = [
    {
      name: 'Common Lore (Adeptus Mechanicus)',
      tier: 2,
      description: '+10',
    },
    {
      name: `Tech`,
      tier: 1,
      description: `+0`,
    },
    {
      name: 'Forbidden Lore (Adeptus Mechanicus)',
      tier: 1,
      description: '+0',
    },
    {
      name: 'Forbidden Lore (Archaeotech)',
      tier: 1,
      description: '+0',
    },
    {
      name: 'Tech-Use',
      tier: 3, // two tech-use perks
      description: '+20',
      cost: 300,
    },
    {
      name: 'Trade (Armorer)',
      tier: 1,
      description: '+0',
      cost: 100,
    },
    {
      name: 'Commerce',
      tier: 1,
      description: '+0',
      cost: 100,
    },
    {
      name: 'Forbidden Lore(Xeno)',
      tier: 1,
      cost: 100,
      description: '+0',
    },
    {
      name: 'Security',
      tier: 1,
      cost: 100,
      description: '+0',
    },
    {
      name: 'Logic',
      tier: 1,
      cost: 100,
      description: '+0',
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
      name: 'Weapon Training (Las, Power, Launcher)',
      description: `The character can use all weapons with Class: Pistol, Basic, Melee, Throwing, and Vehicle within the group she has selected with this Talent. When a character attempts to use a weapon she does not have the correct Weapon Training Talent for, she suffers a -20 penalty to any relevant Weapon Skill or Ballistic Skill Test. The character can only use weapons with Class: Heavy without suffering the -20 penalty if she has both Weapon Training in the appropriate group and Weapon Training (Heavy).
      This Talent may be taken more than once, each time with a different specialization.`,
    },
    {
      name: 'Technical Knock',
      description: `Either through the ease of long practice, or the proper ritual to appease a weapon's machine spirit, the character can clear stoppages with a simple knock or solid smack of her hand to a weapon. The character may un-jam any gun as a Half Action, but may only use this Talent on one weapon per Round. The character must touch the weapon (often quickly and violently) to make this Talent work.`,
    },
    {
      name: 'Battlefield Tech-Wright',
      description: `Veteran Enginseers who have survived long tours of duty with the Imperial Guard learn to perform their vital tasks in any circumstance, whether welding tank treads in pouring rain or carefully activating a recalcitrant cogitator while an artillery bombardment shakes the ground below their feet.
      The character no longer suffers any penalties to Tech-Use or Repair Tests due to external distractions and reduces all penalties from poor tools or working conditions by a total of 10 (so a Hard (-20) Repair Test to fix a tank mired in a swamp would become Difficult (-10) instead).`,
    },
    {
      name: 'Bombardier',
      description: `Due to many years of training, and an obsession that squad mates might find unnerving, the character is an expert with explosive weapons and has an uncanny control over where projectiles land. This character may make ranged attacks with weapons with the Indirect Quality targeting locations she cannot see as a Half Action instead of a Full Action as normal. When firing a weapon with the Indirect Quality or throwing a grenade, this character rolls twice to determine the direction that her attacks scatters and may choose either result.`,
    },
    {
      name: 'Quick Draw',
      description: 'The character has practised so frequently with her weapons that they practically leap into her hands in response to a simple thought. The character can draw and ready a weapon as a Free Action when the character is armed with a Pistol or Basic class ranged weapon, or a melee weapon that can be wielded in one hand.',
    },
    {
      name: 'Combat Formation',
      description: 'The character makes sure the Squad is constantly alert and prepared for danger, planning out their actions for many contingencies if attacked. All members of the Squad (including the character) add +1 to their Initiative rolls. Any member of the Squad may also choose to use the Intelligence Bonus of this character for their Initiative roll rather than their own Agility Bonus.',
    },
    {
      name: 'Resistance (fear)',
      description: `The character's background, experience, training, exposure or plain stubbornness has developed a resistance within her. Each time the character selects this Talent, choose one area of resistance. The character gains a +10 bonus when making Tests to resist effects of this type. The GM may wish to approve certain choices or have them justified by the character's past.`,
    },
    {
      name: 'Hatred (8th Gavlax Lancers)',
      description: `A group, organisation, or race has wronged the character in the past, fuelling this animosity. When fighting opponents of that group in close combat, the character gains a +10 bonus to all Weapon Skill Tests made against them. The character also finds it difficult to back down from a fight with her hated foe and must make a Willpower Test to retreat or surrender when fighting them, unless massively outnumbered or outclassed.`,
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
    {
      name: 'The Flesh is Weak',
      cost: 400,
      description: `The character's body has undergone significant bionic replacement, trading frail flesh for unyielding metal. The character is more machine than man now, and has the resilience to prove it, though her squad mates might look somewhat sceptically upon her bionically enhanced form.
      This character gains the Machine (X) Trait, where X is equal to half of the number of Cybernetics she possesses (rounded up), to a maximum of an amount equal to her Toughness Bonus. If she gains a new Cybernetic, the value of the Trait increases to reflect the new Cybernetic. Note that this only applies to Cybernetics such as bionic replacement limbs and organ replacements, sub-systems, and mechadendrites (see page 204 of the Only War Core Rulebook), and not to Traits and Talents that grant similar effects.`,
      isPerk: true,
    },
    {
      name: 'Armor-Monger',
      cost: 200,
      description: 'The character is a skilled armourer and constantly tinkers and improves her armour or keeps it in pristine shape by repairing the slightest damage it sustains. With years of training, the character has even learned to enhance the protection afforded by her armour and how to use it to its optimum. The character increases the Armour Points of any armour she wears by 1 on all locations it would normally cover, as long as she has at least an hour each day to clean and repair it or make minor modifications. This bonus applies only to armour when worn by the character, as it combines her training as much as her skill at armoury.',
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
      name: 'Potentia Coil Induction',
      cost: 200,
      descrption: `The Crimson Guard are said to be as relentless as machines on the march, capable of making journeys on foot with full kit that other regiments could not manage unburdened. While much of this claim can be attributed to their fearsome reputation, the veteran warriors of the Adeptus Mechanicus can achieve feats far beyond the endurance of frail human flesh by drawing on external reserves of power.
      The character has learned to feed additional power to her potentia coil through electro inductors and eliminate any weariness or strain she suffers from. When in the presence of a suitable power source, such as a portable generator or the power plant of one of her regiment's fighting vehicles, she may make an Ordinary (+10) Toughness Test and recover from a number of levels of Fatigue equal to the Degrees of Success achieved on the Test.`,
      isPerk: true,
    },
    {
      name: 'Vitality Coils',
      cost: 400,
      description: `The potentia coil implanted in the initiates of the Cult Mechanicus is thoroughly integrated with both the biological
      and mechanical components of their frame. This most sacred implant assists in the regulation of everything from the devotee's
      bioelectric reserves to her heart rate, becoming the lynchpin of her vital functions. In dire circumstances, a hardy servant of the
      Machine God can draw greater power into her potentia coil to supplement these functions and accelerate her body's healing.
      The character has learned to feed additional power to her potentia coil through electoo inductors, and can supercharge
      it to maximum capacity to restore lost Wounds. Once per game session when in the presence of a suitable power source,
      such as a portable generator or the power plant of one of her regiment's fighting vehicles, she may make a Challenging (+0)
      Toughness Test as a Full Action. If she succeeds, she removes 1d5 Wounds, plus 1 Wound per additional Degree of Success she
      scores on the Test. She cannot remove Critical Damage this way. However, the restoration process is potentially volatile, and any
      irregularities in the power feed can have deadly consequences. If she fails the Test, she suffers 1 Damage ignoring armour and
      Toughness Bonus, plus 1 additional Damage for every three Degrees of Failure she scores on the Test.`,
      isPerk: true,
    },
    {
      name: 'Servo-Arm',
      cost: 250,
      description: `The Servitor assists in all repairs the Enginseer performs, acting as a natural extension of her will as she communes with vehicle machine spirits. When assisted by her Servitor, the Enginseer gains a +10 bonus to all Tech-Use Tests to make repairs, and halves the time any repair takes.`,
      isPerk: true,
    },
    {
      name: 'Field Repairs',
      cost: 300,
      description: `On the battlefield, the Enginseer links to her Servitor, relaying complex data and instructions, and the Servitor enacts those commands with precision. As long as her Servitor is within range of communication, the Enginseer may perform Tech-Use Tests on anything next to the Servitor at a -10 penallty.`,
      isPerk: true,
    },
    {
      name: 'Redundant Systems',
      quantity: '6',
      cost: 300,
      description: `The Enginseer Prime gains an extra Servitor. She can select this Advance up to a number of times equal to her Intelligence Bonus.`,
      isPerk: false,
    },
    {
      name: 'Machine Lord',
      cost: 600,
      description: `The Enginseer Prime can assume precise control over her Servitors, using them to strike down her foes. Once during each of her Turns, the Enginseer Prime may make a Challenging (+0) Tech-Use Test as a Half Action. If she succeeds, she can have up to one of her Servitors, plus one additional Servitor per Degree of Success she scores beyond the first, make a Half Action Melee Attack Action or Ranged Attack Action against a target within range. For this attack, the Servitor uses the Enginseer Prime's Weapon Skill or Ballistic Skill in place of its own relevant Characteristic.`,
      isPerk: false,
      roll: `(60 - 1d100 + 20 + 10 + 10)/10`
    },
    {
      name: `Lasgun Volley`,
      cost: 200,
      description: `For each Comrade who is  part of any Ranged Volley Order this character issues, this character deals +1 additional Damage (to a maximum of +3 Damage) with any attack he makes with a las weapon for that Round in addition to the normal benefit.`,
      isPerk: true,
    },
    {
      name: 'Coordination Algorithms',
      cost: 300,
      description: `The Enginseer Prime optimises her Servitors to assist her in tandem, each mechanical minion acting a cog with a greater machine. When two or more Servitors assist her on a Tech-Use Test via the Servo-Arm Comrade Advance, she gains an additional +5 bonus for each Servitor that assists beyond the first.`,
      isPerk: false,
    },
    {
      name: `Attend the Machine Spirit`,
      cost: 300,
      description: `A Character can use this Order when she attempts to activate or operate a piece of technology that requires a Tech-Use Test. The character's Comrade assists her with the Test granting the character a +10 bonus. The character's Comrade must be in Cohesion to enact this Order. This Order is useable with a Servitor Comrade.`,
      isPerk: false,
    },
  ];

  traits = [
    {
      name: 'Mechanicus Implants',
      description: `
      The character is a servant of the Machine-God, and has access to implants beyond other characters.
      
      ELECTRO-GRAFT
      The Electro-graft is a small port that is grafted into the nervous system. Once a recipient has been properly trained, this allows her to interface with machine data ports and certain types of data nets. Electro-grafts can take many forms, such as skull shunts, finger probes, or spine jacks.

      ELECTRO INDUCTORS
      Electro Inductors are palm-sized metal skin grafts that appear much like tattoos to the uninitiated. The electros are wired into the nervous system, where they derive power from the bio-electrical emanations of the flesh and the sacred mysteries of the Potenia Coil. They can be used to emit or siphon power in many ways.

      RESPIRATOR UNIT
      A Respirator Unit implant involves tubes, wires, voxgrills, or other augmetic parts replacing the neck and upper chest. The unit purifies the air supply, granting a +20 bonus to resist airborne toxins and gas weapons. The respirator unit also contains a vox-synthesiser capable of transmitting the voice in a variety of ways.

      CYBER-MANTLE
      The Cyber-mantle is a framework of metal, wires, and impulse transmitters bolted onto the spine and lower ribcage. As the initiate gains further implants, this mantle acts as a sub-dermal anchorage point. Amongst some servants of the Omnissiah, this cyber-mantle is often referred to as "the true flesh."

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
    {
      name: 'Mind Impulse Unit',
      quality: 'Good',
      description: `These devices, also known as sense-links, allow the owner to interface directly with a machine or technological device. MIUs see widespread use among the Adeptus Mechanicus who regard them as objects of divine communion. A basic MIU implant involves a single spinal or cortex connector, while advanced variants include wrist connector probes—and possibly mechadendrite connectors—in addition to the spinal plug.
      Common models impose no modifiers to machine spirit communication and add a +10 bonus to Tech-Use or Operate Tests used in conjunction with devices capable of MIU linking.
      Poor MIU systems require a Willpower Test to use and impose a -10 penalty when attempting to interface with a device.
      Good models grant a +10 bonus to communicate with machine spirits and for Tech-Use, Operate, Logic, Inquiry, and Ballistic Skill Tests made as part of interfacing with the MIU systems.`,
    },
    {
      name: 'Autosanguine',
      quality: 'Good',
      description: `This ancient and blessed technology of the Mechanicus flows through the character's blood. These miniscule machines repair minor injuries and speed healing. When applying healing, the character is always considered Lightly Damaged, and heals at an increased rate, removing 2 points of Damage per day. A Good Craftsmanship autosanguine grants the wearer +20 bonus to tests against toxins, disease, radiation, and the like.`,
    },
    {
      name: 'Servo-Arm',
      quality: 'Good',
      description: `A servo-arm allows a lone Tech-Priest to fulfil the functions of an entire repair bay, allowing her to even lift a Chimera armored transport on its side to repair a broken tread link. A properly constructed implanted servo-arm has stabilization and support systems running throughout the Enginseer's body, allowing her to achieve such feats without harming himself in the process. A servo-arm can extend up to 1.5m from its shoulder or back mounting and has a fixed Strength value of 75 with the Unnatural Strength(7) Trait - the servo-arm always uses this value, regardless of the character's Strength Characteristic or Talents. Though incapable of fine manipulation, the servo-arm's powerful claw can be used to lift heavy objects or tether the user to a suitable anchor as a Free Action. In combat, the character can use the servo-arm to make a Standard Attack Action or strike with it as her Reaction for the Round (so long as she only uses it once per Round). A servo-arm has the following profile: Melee; 2d10+14 I; Pen 10; Unwieldy. Best Craftsmanship servo-arms have a Strength of 85 with the Unnatural Strength(7) Trait (increasing Damage to 2d10+15). To use an installed servo-arm, a character must have the Mechadendrite Use (Utility) Talent. To use it as a weapon, a character must also have the Mechadendrite Use (Weapon) Talent.`,
    },
    {
      name: 'Augur Array',
      quality: 'Normal',
      description: `These implanted devices duplicate the effects of sensor systems that go beyond normal human senses. In all cases, their use requires concentration and a Half Action.
      Common systems function identically to a standard handheld auspex device.
      Poor systems possess only a single detection ability (either heat, radiation, electromagnetics, or very rarely Daemonic taint) and have the limited range of 20 metres. If the augur is set to detect Daemonic taint, it has the possibility to be overwhelmed and malfunction should a Daemon get too close.
      Good systems function as a full auspex but also allow rerolls on all Perception-based Tests when using its functions. In regards to the Daemonic taint detection, as opposed to the Poor system augur, a Good system cannot be overwhelmed and seems to almost filter out any taint it detects instead of getting backed up by it.`,
      special: [
        `Auspex/Scanner: The standard Imperial detection device, these are used to detect energy emissions, motion, biological life-signs, and other information. A character using an auspex gains a +20 bonus to Awareness Tests and may make a Tech-Use Test to use it to spot things that would not normally be possible with human senses, such as invisible gases, nearby signs of life, non-visible radiation, or other things as appropriate. The standard range of an auspex is 50m, though walls more than 50cm thick and certain shielding materials can block the scanner. Good Craftsmanship models increase the bonus to +30, but Poor Craftsmanship models can only penetrate 20cm of material.`,
      ]
    },
    {
      name: 'Sacred Unguents',
      quality: 'Normal',
      description: `Sacred unguents blessed by the Omnissiah are much sought after for their mystical properties when applied to machines. If applied to a weapon - which requires a Full Action - the weapon becomes immune to jamming for a number of shots equal to its Clip Size. If the unguent is applied to an already jammed weapon, it immediately unjams but there is no further effect.`,
    },
    {
      name: 'Dataslate',
      quality: 'Normal',
      weight: 0.5,
      description: `Data-slates are common in the Imperium and are the primary means of storing and reading printed text and other media such as video or audio recordings. They are cheap and easy to make, and many contain a single media recording, such as text, and can only play that single file. Others can re-record new information or transmit and receive data from other devices.`,
    },
    {
      name: 'Omnissian Axe (AT HOME)',
      quality: 'Normal',
      weight: 8,
      description: `Granted to suitably devoted followers of the Omnissiah, this weapon has a long staff-like body tipped with half of the circular Adeptus Mechanicus skull and cog icon. The symbol forms a blade and is sheathed in a power field. Covered with inscribed circuitry designs indicating the sacred nature of the weapon, many a foe has realised far too late that what appeared to be a religious walking staff was really a deadly weapon. The Omnissian axe also functions as a combi-tool. This a two-handed melee weapon.
      Omnissian Axe - Melee - 1d10+4 E, 6 pen, power field, unbalanced`,
      special: [
        `Power Field: A field of power wreathes weapons with this Quality, increasing their Damage and Penetration. Such modifiers are already included in the weapon's profile. When the character successfully use this weapon to Parry an attack made with a weapon that lacks this Quality, she has a 75% chance of destroying her attacker's weapon. Weapons with the Warp Weapon Quality and Natural Weapons are immune to this effect.`,
        `Unbalanced: Heavy and difficult to ready after an attack, these kinds of weapons cannot be used to make Lighting Attack Actions, and impose a -10 when used to Parry.`
      ]
    },
    {
      name: 'Calculus Logi Upgrade',
      quality: 'Normal',
      description: `These bionics are internal cogitator implants which aid in data retention and processing. The user can rapidly sift through stacked data-slates and parchments, applying intuition to vast reams of data far beyond the capabilities of a normal man. This implant grants the user a +10 bonus to Literacy, Logic, or Scholastic Lore Tests.`,
    },
    {
      name: 'Ballistic Mechadendrite',
      quality: 'Normal',
      description: `This solid, shoulder-mounted mechadendrite is designed for selfdefence. This two metre limb may be armed with any Pistol-class weapon with the Compact Upgrade. The character can attack with this weapon as her Reaction. A character must have the appropriate Mechadendrite Use Talent to operate this implant.`,
    },
    {
      name: 'Lathe Laspistol',
      quality: 'Normal',
      description: 'Pistol, 40m range, S/2/- 1d10+6 E, 2 pen, N/A clip, N/A reload, tearing',
    },
    {
      name: 'Auxilary grenade launcher weapon',
      quality: 'Normal',
      description: 'Loaded with Frag grenade',
    },
    {
      name: 'Frag grenade',
      weight: 0.5,
      quantity: 1,
      description: 'anti-infantry',
    },
    {
      name: 'Krak grenade',
      weight: 0.5,
      quantity: 1,
      description: 'anti-tank',
    },
    {
      name: 'Smoke grenade',
      weight: 0.5,
      quantity: 1,
      description: 'Smoke',
    },
    {
      name: 'Fire grenade',
      weight: 0.5,
      quantity: 2,
      description: 'Molotov',
    },
    {
      name: `Demo Charges`,
      quantity: 4,
    },
    {
      name: 'Triplex pattern lasgun',
      weight: 4.5,
      quality: 'Normal',
      description: 'boom',
    },
    {
      name: 'Las pistol',
      weight: 1.5,
      quality: 'Normal',
      description: 'boom',
    },
    {
      name: 'Basic charge pack',
      quantity: 4,
      description: 'Battery',
    },
    {
      name: 'Pistol charge pack',
      quantity: 2,
      description: 'Battery',
    },
    {
      name: 'Knife',
      weight: 1,
      quality: 'Normal',
      description: 'Stabby',
    },
    {
      name: 'Manipulator Mechadendrite',
      quality: 'Normal',
      description: `Possibly the most common form of mechadendrite, this artificial limb is a great aid to Enginseers working to repair vehicles in the heat of battle, allowing them to lift greater weights and more easily operate industrial gear. It can extend out to 1.5m and grants the user +20 to Strength-based Tests; the vicious gripping and crushing pincers can also tether the user to gantries or suitably heavy objects as a Free Action. The heavy metal pincers can be used in combat to make melee attacks. The character can strike with it as her Reaction for the Round or use it to make a Standard Attack (so long as it is only used once per Round). The manipulator mechadendrite deals 1d10+2 I Damage.
      While powerful, the manipulator is not subtle, and attempts to use it for such tasks as data-slate typing, inscribing sacrificial etchings, handling delicate objects, or the like only ends with equipment being dropped, smashed, or otherwise ruined. A character must have the appropriate Mechadendrite Use Talent to operate this implant.`,
    },
    {
      name: 'Utility Mechadendrite',
      quality: 'Normal',
      description: `This two-metre long limb houses a variety of tools and attachments designed to assist a Tech-Priest in the course of her holy duties. The mechadendrite counts as a combi-tool, granting a +10 bonus to all Tech-Use Tests. The limb also houses six injector pistons, each of which may be filled with one dose of sacred unguent. These can be supplied separately. In addition to this, the limb contains an electrically powered censer, which can gust incense fumes over particularly troublesome faults. The censer generates one “blast” of smoke every fifteen minutes. This can be employed in melee combat to distract and choke, imposing a -5 penalty to Weapon Skill Tests made by all living creatures within a two-metre radius for one Round. This is a Half Action. Unless the censer is deactivated, all Perception Tests made to detect the Tech-Priest that rely on a sense of smell gain a +10 bonus. Finally, the mechadendrite contains a cutting blade. This counts as a knife with the Defensive Quality and Mono upgrade. A character must have the appropriate Mechadendrite Use Talent to operate this implant.`,
      special: [
        `Knife: melee/thrown, 5m, 1d5 R, 0 pen`,
        `Defensive: A Defensive weapon, such as a shield, is intended to be used to block attacks and is awkward when used to make attacks. Defensive weapons grant a +15 bonus to Tests made when used to Parry, but impose a -10 penalty when used to make attacks.`,
        `Mono: Mono weapons have specially fashioned blades with superfine edges that can easily cut through armour and never lose their edge. Mono weapons no longer count as Primitive and add a +2 bonus to their Penetration. The mono upgrade can be applied to a power weapon, but it has no effect whilst the power field is active. If the power field is ever lost or deactivated, the mono upgrade's bonuses then apply.`,
      ]
    },
    {
      name: 'Optical Mechadendrite',
      quality: 'Normal',
      description: `This highly flexible mechadendrite, set with pict-capture and sensor devices, is designed to assist in the inspection and detection. This mechadendrite extends to a length of 3 metres and can reduce its width to a pencil thickness. It grants a +10 bonus to all Perception-based Tests. The pict-device mounted on the mechadendrite allow the user to examine surfaces at a microscopic level or may be used as a telescopic sight. This mechadendrite is also mounted with an infra-red torch and sensors. A character using this mechadendrite suffers no penalties due to darkness and gains a +20 bonus to Vision-based Perception Tests at night. Finally, the mechadendrite is fitted with a light that may be tinted a variety of different colours depending on the controller's whim. This mechadendrite may be shoulder or sternum-mounted. A character must have the appropriate Mechadendrite Use Talent to operate this implant.`,
    },
    {
      name: 'Light carapace armor',
      quality: 'Best quality',
      description: 'AP 5, weight 7.5'
    },
    {
      name: `Subskin Armor`,
      quality: `Normal`,
      description: `This carapace plating is inserted under the skin in various locations, giving the user added protection against damage. While not as impressive as most augmentations and sometimes uncomfortable, subskin armor is very reliable. This implant adds +2 Armour Points to the Arms, Body, and Legs locations. The bonus is added  to any other Armour Points for these locations.`,
    },
    {
      name: `Ocular Sight`,
      quality: `Normal`,
      description: `An ocular sight is an implant that grants the same benefits as a cybernetic eye. Until it is activated, this is the only benefit it provides. A character with an ocular sight can activate (or deactivate) its combat mode as a Half Action. When she does, she gains the Unnatural Ballistic Skill (1) Trait but suffers a -20 penalty to Awareness Tests while it is active as her vision tunnels in to focus on her targets. Further, while it is active, she cannot benefit from any sight attached to her gun.`,
    },
    {
      name: `Tau Communicator`,
      quality: `Tau`,
      description: `A Tau communication device gifted by a Pathfinder unit encountered behind Orkish lines.`,
    },
  ];

  orders = [
  ];

  wishlistGear = [
    'Luminen Capacitor',
    'Maglev Coils',
  ];

  wishlistPerks = [
    {
      name: 'Master Engineseer',
      cost: 400,
      description: '+10 to Tech-use, and spend a Fate to auto succeed a Tech-use',
      isPerk: true,
    },
    {
      name: 'True Grit',
      cost: 400,
      description: 'The character is able to shrug off wounds that would fell lesser men. Whenever the character suffers Critical Damage (after reduction for Armour and Toughness), reduce the amount by her Toughness Bonus (to a minimum of 1).',
      isPerk: true,
    },
    {
      name: 'Foresight',
      cost: 300,
      description: `Logic and analysis do for the character what animal entrails and the bones claim to do for the superstitious masses. By careful consideration of all the possible consequences and examination of all evidence and information, the character can identify the best path for success. By spending ten minutes studying or analyzing a problem, the character gains a +10 bonus to her next Intelligence Test or a Skill Test based on Intelligence.`,
      isPerk: true,
    },
    {
      name: 'Iron Jaw',
      cost: 200,
      description: `The character has taken blows from Orks and given back as good as they got. The character can bounce back from most strikes without ill effects. If ever Stunned, a successful Toughness Test allows the character to ignore the effects.`,
      isPerk: true,
    },
    {
      name: 'Cybernetic Boost',
      cost: 300,
      description: `Cybernetics are an important part of life for many members of the Imperial Guard, for soldiers often need to replace lost or crippled limbs and organs of vulnerable flesh and blood with assuredly superior appendages and devices of metal and oil. Though most Guardsmen know better than to tamper with these sacred devices, some enterprising (or foolish) individuals have been known to modify the baseline capacities of these devices, allowing them to get a short burst of power by overloading the device in a semi-controlled fashion.
      As a Half Action, this character may spend a Fate Point and make a Challenging (+0) Tech-Use Test. If she succeeds, she gains either the Unnatural Agility (X) or Unnatural Strength (X) Trait, where X is equal to one, plus one for every two additional Degrees of Success she scores on the Test (or increases existing versions of those Traits by X). These Traits persist for a number of Rounds equal to her Intelligence Bonus. The character may end the effect at any time. At the end of each Round in which the character allows it to persist, she gains 1 level of Fatigue.`,
      isPerk: true,
    },
    {
      name: 'Cybernetic Calibrations',
      cost: 400,
      description: `This character, either through initiation into the mysteries of the Omnissiah or tinkering that would certainly attract negative attention from such individuals, has fine-tuned her cybernetic implants to a point of optimization.
      All of this character's Cybernetics count as being one level of Craftsmanship higher than their base Craftsmanship (so, for instance, a Poor Craftsmanship bionic arm would become Common Craftsmanship, or a Good Craftsmanship limb would become Best Craftsmanship).
      `,
      isPerk: true,
    },
  ];

  starterKit = `
Deadspace earpiece
Uniform
Poor weather gear
Rucksack/sling bag
basic tools
mess kit
water canteen
blanket
sleep bag
rechargable lamp pack
grooming kit
dogtags
Imperial infantrymans' uplifting primer
2 weeks Combat sustenance rations
1 Fluff item
  `
};

class Robot {
  name = undefined;

  health = 'injured';

  gun = [
    {
      owner: `Legs`,
      name: `Roko's Mining Beam`,
      description: 'Heavy, 100m, -/-/10, 1d10+3 E, Pen 1, Clip 50/90, Reload 2 Full, Lance, Felling (2)',
    },
    {
      owner: `Rogue`,
      name: `M41 Multi-Laser`,
      description: `Heavy, 150m, -/-/5, 2d10+10 E, pen 2, Clip 100, Reload 2 Full, Reliable`,
    },
    {
      owner: `Squigsort`,
      name: `Flames of the Blessed Squigsortium`,
      description: `Basic, 20m, S/-/-, 1d10+4 E, pen 2, clip 6, Reload 2 Full, Flame, Spray`,
    },
  ];

  directives = [
    {
      name: 'Heavy Firepower Assault',
      type: 'Attack Order (Full Action)',
      effect: `As part of this order, the character's comrade takes a standard ranged attack action, semi-auto burst action, or full auto burst action with one weapon against a target within range of that weapon. The character must be within cohesion to enact this order.`,
    },
    {
      name: 'Heavy Suppression Barrage',
      type: 'Attack Order (Full Action)',
      effect: `This order can only be issued to servitor comrades outfitted with a weapon capable of semi- or fully automatic  fire. As part of this order, the character designates a kill zone, which is any general area such as a corridor or tree line, that encompasses a 45 degree arc in the direction the comrade is facing. Then, as part of the order, the comrade unleashes suppressing fire.`,
    },
    {
      name: 'Precision Firepower Delivery',
      type: 'Attack Order (Full Action)',
      effect: `This order may only be issued to servitor comrades outfitted with a weapon capable of firing single shots. As part of this order, the character's comrade makes a standard ranged attack action against a target within range with its integrated heavy weapon, which is used for  the attack. The servitor must be within communication range to enact this order.`,
    },
  ] // want Praetorian Servitor Chassis
};