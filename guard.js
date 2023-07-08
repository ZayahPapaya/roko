class Guard {
  name = `Nyatasha`;
  regiment = undefined;

  maxWounds = 10;
  damage = 0;
  wounds = `${this.maxWounds - this.damage}`;

  movement = `
  Half move: 4m
  Full move: 8m
  Charge: 12m
  Run: 24m
  `;
  armor = 6 + 1 + 4; // 11
  carry = 36.5 / 36; // 59 total -18 plasma on comrade, -5 lascutter & concertina on bike = 36 carried
  fate = 1 / 4;
  XP = 9800;// 600 left

  aptitudes = [
    {
      specialty: `Weapon Specialist`,
      current: false, // stayed the course for +5 Agility
      aptitudes: [`Agility`, `Ballistic Skill`, `Fellowship`, `Fieldcraft`, `Finesse`, `Weapon Skill`]
    },
    {
      specialty: `Breacher`,
      current: false,
      aptitudes: [`Agility`, `Finesse`, `Intelligence`, `Tech`, `Toughness`, `Willpower`]
    },
    {
      specialty: `Operator`,
      current: true,
      aptitudes: [`Agility`, `Ballistics Skill`, `Fellowship`, `Fieldcraft`, `Intelligence`, `Tech`]
    },
  ];

  homeworld = {
    name: `Ascen`,
    type: `
    Penal Colony
    +3 to Agility & Toughness
    Intimidate*
    Linguistics (Low Gothic)
    Peer (Underworld)
    +10 to Logistics Tests acquiring illegal or contraband items
    +1 starting Wound
    `,
    command: `
    Maverick
    Resistance (Fear)
    `,
    regimentType: `
    Mechanised Reconnaissance
    +3 Perception
    -3 Toughness
    Awareness
    Lightning Reflexes
    Magnoculars & my motorcycle
    `,
    training: `
    Anti-Armour
    Common Lore (Tech)
    Tank Hunter
    Add Penetration to weapons equal to DoS on attacks against vehicles

    Demolitionists
    +2 Intelligence
    Tech-Use
    Operate (Surface)
    Nerves of Steel
    Cyclops Demolitions Vehicle
    Respirator
    1kg Demolitions Charge
    +10 to Demolitions Tech-Use
    `,
    doctrines: `
    Scavengers
    May gain +10 to any Logistics Test. If I do, doubles (22, 33, 44) piss off authorities due to stealing or scavenging.
    `,
    quirk: `
    The Few
    (-20) Logistics Test to replace comrades if regiment is actively deployed, or (+10) if not deployed
    `,
    favoredWeapons: `
    Plasma Gun
    Plasma Cannon
    `
  };

  stats = {
    ballistics: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased, // 50
      base: 45,
      bonuses: 0,
      purchased: 5,
      cost: 100,
    },
    weapons: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 20,
      bonuses: 0,
      purchased: 0,
      cost: 0,
    },
    strength: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 20,
      bonuses: 0,
      purchased: 0,
      cost: 0,
    },
    agility: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased, // 50
      base: 40,
      bonuses: 5,
      purchased: 5,
      cost: 250,
    },
    toughness: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 40,
      bonuses: 0,
      purchased: 0,
      cost: 0,
    },
    perception: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased, // 38
      base: 33,
      bonuses: 0,
      purchased: 5,
      cost: 250,
    },
    intelligence: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 40,
      bonuses: 0,
      purchased: 0,
      cost: 0,
    },
    willpower: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 35,
      bonuses: 0,
      purchased: 0,
      cost: 0,
    },
    fellowship: {
      mod: Math.floor(total / 10),
      total: base + bonuses + purchased,
      base: 20,
      bonuses: 0,
      purchased: 0,
    },
    reciepts: [],
  };

  skills = [
    // {
    //   name: undefined,
    //   tier: undefined,
    //   description: undefined,
    //   cost: undefined,
    // },
    {
      name: `Intimidate`,
      tier: `Known`,
      description: `+0`,
      cost: null,
    },
    {
      name: `Linguistics (Low Gothic)`,
      tier: `Known`,
      description: `+0`,
      cost: null,
    },
    {
      name: `Awareness`,
      tier: `Known`,
      description: `+0`,
      cost: null,
    },
    {
      name: `Survival`,
      tier: `Known`,
      description: `+0`,
      cost: null,
    },
    {
      name: `Tech-Use`,
      tier: `Trained`,
      description: `+10`,
      cost: null,
    },
    {
      name: `Operate (Surface)`,
      tier: `Trained`,
      description: `+10`,
      cost: null,
    },
    {
      name: `Navigate (Surface)`,
      tier: `Trained`,
      description: `+10`,
      cost: null,
    },
    {
      name: `Common Lore (Tech)`,
      tier: `Known`,
      description: `+0`,
      cost: null,
    },
    {
      name: `Common Lore (Imperial Guard, War)`,
      tier: `Known`,
      description: `+0`,
      cost: null,
    },
    {
      name: `Commerce`,
      tier: `Known`,
      description: `+0`,
      cost: 200,
    },
    {
      name: `Common Lore (Adeptus Mechanicus)`,
      tier: `Trained`,
      description: `+10`,
      cost: 300,
    },
    {
      name: `Dodge`,
      tier: `Known`,
      description: `+0`,
      cost: 200,
    },
    {
      name: `Medicae`,
      tier: `Known`,
      description: `+0`,
      cost: 100,
    },
    {
      name: `Operate (Air)`,
      tier: `Known`,
      description: `+0`,
      cost: 100,
    },
    {
      name: `Operate (Voidcraft)`,
      tier: `Known`,
      description: `+0`,
      cost: 100,
    },
    {
      name: `Security`,
      tier: `Known`,
      description: `+0`,
      cost: 100,
    },
    {
      name: `Trade (Armourer)`,
      tier: `Known`,
      description: `+0`,
      cost: 100,
    },
    {
      name: `Trade (Cook)`,
      tier: `Trained`,
      description: `+10`,
      cost: 300,
    },

  ];

  talents = [
    // {
    //   name: undefined,
    //   description: undefined,
    //   cost: undefined,
    // },
    {
      name: `Rapid Reload`,
      description: `The character halves all reload times, rounding down. Thus, a Half Action reload becomes a Free Action, a Full Action reload becomes a Half Action, and so on.`,
      cost: null,
    },
    {
      name: `Weapon Training (Las, Solid, Low-Tech, Plasma, Launcher, Heavy)`,
      description: `The character can use all weapons with Class: Pistol, Basic, Melee, Throwing, and Vehicle within the group he has selected with this Talent. When a character attempts to use a weapon she does not have the correct Weapon Training Talent for, she suffers a -20 penalty to any relevant Weapon Skill or Ballistic Skill Test. The character can only use weapons with Class: Heavy without suffering the -20 penalty if she has both Weapon Training in the appropriate group and Weapon Training (Heavy). This Talent may be taken more than once, each time with a different specialization.`,
      cost: 200,
    },
    {
      name: `Technical Knock`,
      description: `The character may un-jam any gun as a Half Action, but may only use this Talent on one weapon per Round. The character must touch the weapon (often quickly and violently) to make this Talent work.`,
      cost: null,
    },
    {
      name: `Modify Payload`,
      description: `When preparing a grenade, missile, or round that has the Blast or Smoke Quality, this character may make a Challenging (+0) Tech-Use Test using the Demolitions Special Use of the Skill. If she succeeds, the weapon increases Damage (if it deals Damage normally) and its Blast or Smoke Quality by 1, plus 1 for every three additional Degrees of Success beyond the first that she scores on the Test. If she fails by a number of Degrees of Failure greater than her Intelligence Bonus, however, she accidentally triggers the device, causing it to detonate immediately.`,
      cost: null, // Adds half the bonus damage rounding up against formations
    },
    {
      name: `Peer (Underworld)`,
      description: `The character knows how to deal with a particular social group or organisation. The character gains a +10 bonus to all Fellowship Tests when interacting with this chosen group and at the GM's discretion may call upon them for favours from time to time. The GM and player may agree to award this Talent when appropriate to the adventure or campaign, though the character must still pay the experience cost for the Talent as normal. This Talent may be awarded multiple times for the same group, in which case it should be listed as Peer (X), with X equalling the number of times the Talent has been awarded. This can be used to represent groups who particularly like the character and may even be staunch allies. In game terms, the bonus to Fellowship Tests increases to +10 times X.`,
      cost: null,
    },
    {
      name: `Resistance (Fear)`,
      description: `The character gains a +10 bonus when making Tests to resist effects of this type.`,
      cost: null,
    },
    {
      name: `Lightning Reflexes`,
      description: `The character always expects trouble, even in the most innocuous situations, allowing them to act quickly when needed. When making an Initiative roll, the character may roll twice and add the higher of the two dice results to her Agility Bonus.`,
      cost: null,
    },
    {
      name: `Tank Hunter`,
      description: `The character has faced enemy war machines on numerous occasions, whether the corrupted battle tanks of rebels and traitors or the strange grav vehicles of the xenos. From these experiences, the character has learned where to place her shots to inflict the most damage, targeting fuel reserves, weak points in armour, or firing slits. Making a ranged attack against a vehicle, the character adds her Ballistic Skill Bonus to the Penetration value of her weapon. Members of Anti-Armour regiments add an additional amount to the Penetration of their weapons equal to their Degrees of Success on the attack roll when attacking vehicles.`,
      cost: null,
    },
    {
      name: `Nerves of Steel`,
      description: `The character may re-roll failed Willpower Tests to avoid or recover from Pinning. In addition, she is seldom impressed by the aggressive displays of his enemies and gains a +10 to Willpower Tests when resisting the effects of enemy Intimidation Skill attempts.`,
      cost: null,
    },
    {
      name: `Excellent Cook`,
      description: `Though the clerks of the Departmento Munitorum seemingly refuse to recognise the fact, a good meal can provide a great boost to morale for weary troops. A well-fed squad usually takes to the field in higher spirits. Additionally, simply having a good meal to look forward to can give a soldier the necessary drive to fight on, where others might lose all hope. Preparing a proper meal, of course, requires a minimum of certain ingredients, which can be procured legitimately or pilfered from the regiment's larder. Once per game session, this character may make a Challenging (+0) Trade (Cook) Test. This Action requires at least several minutes. At the Game Master's discretion, the character might gain a bonus to this Test for acquiring certain ingredients to truly enhance the meal. If she succeeds, all members of the Squad gain a +5 bonus to Willpower Tests to resist the effects of Fear and Pinning until the end of the next encounter. If the cook succeeds by five or more Degrees of Success, the first time each member of the Squad uses a Fate Point before the end of the next encounter, that character rolls 1d10. On a result of 10, that character still gains the benefit of using the Fate Point, but the Fate Point does not count as having been expended.`,
      cost: 200,
    },
    {
      name: `Battlefield Tech-Wright`,
      description: `The character no longer suffers any penalties to Tech-Use or Repair Tests due to external distractions and reduces all penalties from poor tools or working conditions by a total of 10 (so a Hard (-20) Repair Test to fix a tank mired in a swamp would become Difficult (-10) instead).`,
      cost: 300,
    },
    {
      name: `Ambidextrous`,
      description: `This Talent does not represent true ambidexterity so much as sufficient training with both hands to make the distinction moot. The character may use either hand equally well for any task, and does not suffer the -20 penalty for actions using their off hand. When combined with Two-Weapon Wielder Talent, the penalty for making attacks with both weapons in the same Turn drops to -10.`,
      cost: 200,
    },
    {
      name: `Catfall`,
      description: `Gymnastic ability and natural balance enables the character to fall great distances without harm. The character automatically reduces the distance of all falls by a number of metres equal to her Agility Bonus, ignoring this distance as if it did not exist. In addition, the character adds +20 to their Acrobatics Skill Tests when using the Jump Special Skill Use as it pertains to reducing Damage from falling.`,
      cost: 200,
    },
    {
      name: `Deadeye Shot`,
      description: `The character's rock-steady hand and hawk-like eyesight make him a dreaded marksman. No target, however agile or small, can escape his crosshairs. When making a Called Shot (see page 244) ranged attack, the character reduces the penalty by 10 (so a -20 becomes a -10 instead).`,
      cost: 200,
    },
    {
      name: `Push the Limit`,
      description: `Once per Round as part of a Vehicle Movement Action, the character may choose to add a +10 bonus to the associated Test. However, if she fails the Test, her vehicle loses 1 point of Structural Integrity (ignoring Armour) per Degree of Failure.`,
      cost: 200,
    },
    {
      name: `Armour-Monger`,
      description: `The character increases the Armour Points of any armour she wears by 1 on all locations it would normally cover, as long as she has at least an hour each day to clean and repair it or make minor modifications. This bonus applies only to armour when worn by the character, as it combines her training as much as her skill at armoury.`,
      cost: 300,
    },
    {
      name: `Hotshot Pilot`,
      description: `The character can pilot or drive vehicles as if they were extensions of her own body and has a natural understanding of anything that needs steering. The character counts as having all Operate Skills at Rank 1 (Known) (basically they can drive or fly anything). If they wish to later improve their Operate Skills, these Advances must be bought using Experience Points (from Rank 1) as normal. Such is their skill they also add one Degree of Success to any successful Operate Tests.`,
      cost: 300,
    },
    {
      name: `Hip Shooting`,
      description: `The character's prowess with ranged weapons is such that they can still fire accurately without their eye behind the sights. As a Full Action, the character may both move up to their Full Move rate and make a single attack with a ranged weapon. This attack can only be a single shot and may not be a semi- or full-automatic ranged attack. Characters with the Two-Weapon Fighting Talent may use this Talent with Hip Shooting to make two single shots, if they are armed with a ranged weapon in either hand.`,
      cost: 300,
    },
    {
      name: `Independent Targeting`,
      description: `The character has developed their situational awareness to a point where they can fire in two directions within a split second. When firing two weapons as part of a single action (using the Two-Weapon Fighting Talent, for example), the targets do not have to be within 10 metres of each other.`,
      cost: 300,
    },
    {
      name: `Marksman`,
      description: `The character's steady hand and eagle eye allows her to keep crosshairs steady on any target, regardless of range. Distance is no protection against the character's marksmanship and she suffers no penalties for Ballistic Skill Tests at long or extreme range.`,
      cost: 300,
    },
    {
      name: `Initiated Maintenance`,
      description: `Although the deepest mysteries of technology are reserved for those in the ranks of the Red Priesthood of Mars, it is possible for a soldier dedicated to the Cult Mechanicus to learn a number of secrets appropriate to her station. In the Crimson Guard, it is common for the common troopers to learn advanced maintenance rites beyond those disseminated by the Departmento Munitorum. This character has mastered the secrets of the maintenance rites for all weapons within the arsenal of the Imperial Guard. The machine spirits of lasgun and flamer respond to her, and even the volatile war-spirit of plasma weaponry acknowledges her touch.
      Weapons this character wields only Jam on a result of 100, and weapons with the Overheat Quality that she wields only Overheat on a result of 96-100.`,
      cost: 100,
    },
    {
      name: `Sharpshooter`,
      description: `The character's steady hand and eagle eye allow her to place shots or strikes exactly where she wants. When making a Called Shot, the character reduces the penalty by 10 (so a -20 becomes a -10 instead). When combined with Deadeye Shot, this reduces the penalty to 0.`,
      cost: 300,
    },
    {
      name: `Two-Weapon Wielder (Ranged)`,
      description: `Intensive training allows the character to use a weapon in each hand when needed. When armed with two one-handed weapons (ether melee or ranged weapons), after making a Half Action Attack (this can be a Single Attack, a Swift Attack, or a Lightning Attack with a melee weapon, or a single shot, semi-auto burst, or full auto burst with a ranged weapon), she may make a single additional Half Action Attack following the same restrictions with the other weapon. (In effect, this allows the character to attack twice in a Round; once from each of their weapons). Both of these Attacks count as being part of the same Half Action, and both Tests made to attack with the weapons suffer a -20 penalty.`,
      cost: 300,
    },
    {
      name: `Gunslinger`,
      description: `When armed with two pistol class weapons that she can use single handedly, the character reduces the penalty for Two-Weapon Fighting by 10 (so -20 would drop to -10). If taken with the Ambidextrous Talent, this drops the penalty to +0.`,
      cost: 400,
    },
    {
      name: `Target Selection`,
      description: `The character's dread gaze marks out her chosen victim and not even the riotous confusion of close combat interferes. The character may shoot into melee with no penalty. If she aims beforehand, she can avoid any chance of hitting friendly targets.`,
      cost: 400,
    },
    {
      name: `Versatile Shooter`,
      description: `When firing a single shot from a single Pistol, Heavy, or Vehicle weapon with the Accurate Quality and while benefitting from an Aim Action, this character treats that weapon as if it was a Basic weapon for the purposes of inflicting additional Damage for additional Degrees of Success on her Ballistic Skill Test.`,
      cost: 400,
    },
    {
      name: `Leap Up`,
      description: `A combination of athletic ability and speed allow the character to spring to their feet in virtually any circumstance. The character may stand up as a Free Action.`,
      cost: 200,
    },
    {
      name: `Steady Hand`,
      description: `So long as her Comrade is within Cohesion, the Breacher reduces her Degrees of Failure on any failed Tech-Use Test for the Demolitions Special Use by an amount equal to her own Agility Bonus (to a minimum of 1 Degree of Failure on a Failed Test).`,
      cost: 300,
    },
    {
      name: `Gunner`,
      description: `When the Operator is driving a multi-passenger vehicle, her Comrade can jump in and man one of the guns, firing upon the Operator's command. If the Operator spends her Turn driving a vehicle, she may also make a Ranged Attack Action using whatever gun her Comrade is manning, if she were stationed at it herself. This uses the Comrade's Full Action for the Turn.`,
      cost: 250,
    },
    {
      name: `Armsman`,
      description: `The Weapons Specialist is a master in the use of many weapons, and often needs different ones for different situations. Her Comrade carries all of the necessary weapons with them, keeping them ready for the Weapons Specialist when the time comes. As long as her Comrade is in Cohesion, the Weapon Specialist may switch to any of her weapons as a Free Action.`,
      cost: 250,
    },
    {
      name: `Hail of Fire`,
      description: `With just a look, the Weapon Specialist signals her Comrade to lay down a coordinated hail of fire. If the Weapon Specialist's Comrade is in Cohesion, all of the targets of the Weapon Specialist's attacks this Turn must take a Challenging (+0) Pinning Test or become Pinned`,
      cost: 300,
    },
    {
      name: `Inescapable Attack`,
      description: `After succeeding on an All Out Attack, Called Shot, Charge, Standard Attack or Stun action, the character imposes a penalty on all Evasion tests (dodge and parry) equal to 10x their DoS on the attack test.`,
      cost: 400,
    },
    {
      name: `Sprint`,
      description: `The character can move at great speeds. When taking a Full Move Action, the character can move an extra number of metres equal to their Agility Bonus. When taking the Run Action, the character may double their movement for one Round. The character gains one level of Fatigue if they use this Talent two Turns in a row.`,
      cost: 400,
    },
  ];

  traits = [];

  gunReferences = [
    {
      name: `Concertina-Pattern Hand Cannon`,// 5/5 shots
      quantity: 1,
      quality: `Common`,
      description: `
      -10 to BS unless two-handed or wearing Recoil Gloves
      Pistol, 45m, S/-/-, 1d10+4 I, pen 2, clip 5, reload 2 full, Crippling (2), Accurate 3kg
      Red Dot Sight: +10 to BS when firing single shot
      Concertina Pattern: Long Barrel, Lethal
      Custom Grip: +5 to BS
      Quick-Release: reload reduced by half action
      Sacred Inscription: +10 against Pinning
      Modified Stock: Aim grants additional +2/+4 depending on half / full action
      `,
      weight: 3,
    },
    {
      name: `Concertina-Pattern Hand Cannon`,// 5/5 shots
      quantity: 1,
      quality: `Common`,
      description: `
      -10 to BS unless two-handed or wearing Recoil Gloves
      Pistol, 45m, S/-/-, 1d10+4 I, pen 2, clip 5, reload 2 full, Crippling (2), Accurate 3kg
      Red Dot Sight: +10 to BS when firing single shot
      Concertina Pattern: Long Barrel, Lethal
      Quick-Release: reload reduced by half action
      Sacred Inscription: +10 against Pinning
      `,
      //retry next session for custom grip and modified stock
      weight: 3,
    },
    {
      name: `Plasma Gun`,
      quantity: 1,
      quality: `Common`,
      description: `Basic, 90m, S/2/-, 1d10+7 E, pen 6, clip 40, reload 5 full, Maximal, Overheats`,
      weight: 18,
    },
    {
      name: `Pawb Gun`,
      quantity: 1,
      quality: `Common`,
      description: `
      Basic, 100m, S/4/0, 1d10+4 I, pen 2, clip 4, reload 2 full, Reliable
      Auxiliary Shotgun: Basic, 30m, S/-/0, 1d10+4 I, pen 0, clip 1, reload 2 full, Scatter
      (Scatter: Point Black Range gets +10 to hit and +3 damage. Short Range gets +10 to hit. Longer ranges -3 to Damage.)
      Sawn-Off: reduced weight by 25%, +2 damage in short range
      Quick-Release: reload reduced by half action
      Custom Grip: +5 to BS
      Reduced-Weight: Reduced weight by 1kg, melee has 10% chance to break it
      `,
      weight: 4,
    },
  ];

  gear = [
    {
      name: undefined,
      quantity: 1,
      quality: undefined,
      description: undefined,
      weight: undefined,
    },
    // // // Tools // // //
    {
      name: `Combi-Tool`,
      quantity: 1,
      quality: `Common`,
      description: `+10 to Tech-Use`,
      weight: 1,
    },
    {
      name: `Magnoculars`,
      quantity: 1,
      quality: `Common`,
      description: `See far away`,
      weight: 0.5,
    },
    {
      name: `Mind Impulse Unit (MIU)`,
      quantity: 1,
      quality: `Common`,
      description: `+10 to Tech-Use and Operate with MIU devices`,
      weight: null,
    },
    {
      name: `Auspex Scanner`,
      quantity: 1,
      quality: `Common`,
      description: `+20 to Awareness. May make Tech-Use to spot things beyond normal such as invisible gases, lifesigns, radiation, or other. Range 50m, through walls up to 50cm thick.`,
      weight: 0.5,
    },
    {
      name: `Dataslate`,
      quantity: 1,
      quality: `Common`,
      description: `Ipad`,
      weight: 0.5,
    },
    {
      name: `Lascutter`,
      quantity: 1,
      quality: `Common`,
      description: `Welding / cutting mining laser. Can be used against stationary targets:
      Heavy, 2m, 2d10+16 E, pen 10, clip 5, reload 2 full`,
      weight: 4,
    },
    {
      name: `Concertina Wire`,
      quantity: 2,
      quality: `Common`,
      description: `Any character attempting to cross deployed concertina wire must make (-20) Acrobatics or suffer 1d5 rending + 1 for each DoF.`,
      weight: 0.5 * quantity,
    },
    {
      name: `Multikey`,
      quantity: 1,
      quality: `Common`,
      description: `+30 to Security against locks`,
      weight: null,
    },
    // // // Guns // // //
    {
      name: `Concertina-Pattern Hand Cannon`,
      quantity: 2,
      quality: `Common`,
      description: `
      -10 to BS unless two-handed or wearing Recoil Gloves
      Pistol, 45m, S/-/-, 1d10+4 I, pen 2, clip 5, reload 2 full, Crippling (2), Accurate 3kg
      Red Dot Sight: +10 to BS when firing single shot
      Concertina Pattern: Long Barrel, Lethal
      Custom Grip: +5 to BS
      Quick-Release: reload reduced by half action
      Sacred Inscription: +10 against Pinning
      Modified Stock: Aim grants additional +2/+4 depending on half / full action
      `,
      weight: 3,
    },
    {
      name: `Plasma Gun`,
      quantity: 1,
      quality: `Common`,
      description: `
      Basic, 90m, S/2/-, 1d10+7 E, pen 6, clip 40, reload 5 full, Maximal, Overheats
      Quick-Release: reload reduced by half action
      `,
      weight: 18,
    },
    {
      name: `M79 Grenade Launcher`,
      quantity: 1,
      quality: `Common`,
      description: `Basic, 80m, S/-/-, clip 1, reload 1 full`,
      weight: 5,
    },
    {
      name: `Pawb Gun`,
      quantity: 1,
      quality: `Common`,
      description: `
      Basic, 100m, S/4/0, 1d10+4 I, pen 2, clip 4, reload 2 full, Reliable
      Auxiliary Shotgun: Basic, 30m, S/-/0, 1d10+4 I, pen 0, clip 1, reload 2 full, Scatter
      (Scatter: Point Black Range gets +10 to hit and +3 damage. Short Range gets +10 to hit. Longer ranges -3 to Damage.)
      Sawn-Off: reduced weight by 25%, +2 damage in short range
      Quick-Release: reload reduced by half action
      Custom Grip: +5 to BS
      Reduced-Weight: Reduced weight by 1kg, melee has 10% chance to break it
      `,
      weight: 4,
    },
    // // // Bombs // // //
    // Bonus refers to damage & blast / smoke. Kill 3 + half damage bonus rounding up against formations, or 3 + blast rating on a righteous fury
    {
      name: `Frag Grenade`,
      quantity: 5,
      quality: `Common`,
      description: `SBx3, S/-/-, 2d10 X, pen 0, clip 1, Blast (3), Ogryn-Proof`,
      weight: 0.5 * quantity,
    },// three +1s, one +2s, one normal
    {
      name: `Krak Grenade`,
      quantity: 10,
      quality: `Common`,
      description: `
      SBx3, S/-/-, 2d10+4, pen 6, clip 1, Concussive (0)
      Righteous Fury on a 9 or 10 against vehicles
      `,
      weight: 0.5 * quantity,
    },
    {
      name: `Snare Mine`,
      quantity: 2,
      quality: `Common`,
      description: `Placing mine (+20) Tech-Use and one grenade or other explosive. When a creature >= Size (3)  approaches within your choice of 1-3m the detonator triggers with a delay of your choice of 0-5 Rounds. Detecting mine takes (+0) Awareness with -10 per DoS on the Tech-Use to plant.`,
      weight: 1 * quantity,
    },
    {
      name: `Choke Bomb`,
      quantity: 2,
      quality: `Common`,
      description: `SBx3, S/-/-, clip 1, Blast (1d10+3)
      Each turn a character is caught in the blast radius of the choke gas, they must (+0) Toughness. Failed gets a level of Fatigue cumulatively. The harmful effects linger on a character for 1d10 Rounds. If a character has 4 or more DoF, they also take 1d10 toughness damage for 1d5-1 hours. Choke cloud lingers for 1d5x3 minutes.`,
      weight: 0.5,
    },// one +1, one normal
    {
      name: `Smoke Grenade`,
      quantity: 2,
      quality: `Common`,
      description: `SBx3, S/-/-, clip 1, Smoke (6)
      When a hit is scored from a weapon with the Smoke Quality, it creates a smokescreen a number of metres in diameter from the point of impact equal to the number in parentheses (X). This screen lasts for 1d10+10 Rounds, or less in adverse weather conditions`,
      weight: 0.5 * quantity,
    },// one +2, one normal
    {
      name: `Fire Bomb`,
      quantity: 2,
      quality: `Common`,
      description: `SBx3, S/-/-, 1d10+3 E, pen 6, clip 1, Blast (3) Flame`,
      weight: 0.5 * quantity,
    },// one +2, one +1
    {
      name: `Demolitions Charge`,
      quantity: 2,
      quality: `Common`,
      description: `
      3d10 + 2 per kg
      blast(5 * kg)
      `,
      weight: 1 * quantity,
    },// one +2, one +1
    // // // Ammo // // //
    {
      name: `Inferno Shells`,
      quantity: 2,
      quality: `Common`,
      description: `Refills Shotgun (8 per)
      A weapon using inferno shells gains Flame (If a target is hit [even if they suffer no damage], they must succeed on an Agility Test or be set on fire.)`,
      weight: null,
    },
    {
      name: `Plasma Flask`,
      quantity: 3,
      quality: `Common`,
      description: `Refills Plasma Gun (40 per)`,
      weight: null,
    },
    {
      name: `Hand Cannon Rack`,
      quantity: 2,
      quality: `Common`,
      description: `Refills Hand Cannon (5 per)`,
      weight: null,
    },
    {
      name: `Pawb Rounds`,
      quantity: 2,
      quality: `Common`,
      description: `Refills Pawb Gun (4 per)`,
      weight: null,
    },
    {
      name: `Shotgun Shells`,
      quantity: 2,
      quality: `Common`,
      description: `Refills Shotgun (8 per)`,
      weight: null,
    },
    // // // Armor // // //
    {
      name: `Light Carapace`,
      quantity: 2,
      quality: `Best`,
      description: `AP: 6`,
      weight: 7.5,
    },
    {
      name: `Respirator`,
      quantity: 1,
      quality: `Common`,
      description: `+30 to Toughness against gas and reroll failed results.`,
      weight: null,
    },
    {
      name: `Recoil Gloves`,
      quantity: 1,
      quality: `Common`,
      description: `Can fire basic weapons or two-handed pistols with one hand without the -20 penalty.`,
      weight: null,
    },
    // // // Other // // //
    {
      name: `Motorcycle`,
      quantity: 1,
      quality: `Kickass`,
      description: `It's my motorcycle`,
      weight: undefined,
    },
    {
      name: `Cyclops Demolitions Vehicle`,
      quantity: 1,
      quality: `Common`,
      description: `Bomb-Squig`,
      weight: undefined,
    },
    {
      name: `Red Dot Laser Sight`,
      quantity: 2,
      quality: `Common`,
      description: `+10 to BS when firing single shot`,
      weight: null,
    },
    {
      name: `Comm Beads`,
      quantity: 1,
      quality: `Common`,
      description: `Radio`,
      weight: null,
    },
  ];

  medals = [
    {
      name: `Ribbon Intrinsic`,
      description: `+10 to any Battlefield Awareness and  Battlefield Maneuvering Tests.`
    },
    {
      name: `Squigsort's Great Medal`,
      description: `Unknown`,
    },
  ];

  itemsInStorage = [
  ];

  orders = [];

  vehiclActions = [
    {
      name: `Evasive Manoeuvring`,
      action: `Full Action`,
      description: `Must move at Tactical Speed (+0) Operate. -10 penalty on attacks against the vehicle for every DoS. If 5 DoF, vehicle loses control / crashes / falls over.`
    },
    {
      name: `Floor It!`,
      action: `Full Action`,
      description: `Move twice Tactical Speed and turn up to once. (-10) Operate to move an additional 5m + 5 per DoS. -20 to shooting at or from the vehicle till start of turn. If 5 DoF, vehicle loses control / crashes. Walkers cannot Floor It!`
    },
    {
      name: `Hit & Run`,
      action: `Full Action`,
      description: `Open-Topped vehicles only. Driver + 1 passenger benefit. Move up to Tactical Speed and (-10) Weapon Skill. Hit once on success with a melee weapon. Can choose to stay in combat or move up to Tactical Speed away. If 3 DoF, vehicle loses control / crashes. Walkers cannot Hit & Run. No Attacks of Opportunity against you.`
    },
    {
      name: `Jink`,
      action: `Reaction`,
      description: `Must have moved at least Tactical Speed last turn. Walkers can always Jink. Operate Test (-10 equal to size modifier). Each DoS avoids one shot, as with Evasive Reaction. If 5 DoF, vehicle loses control / crashes / falls over.`
    },
    {
      name: `Ram!`,
      action: `Full Action`,
      description: `Must move Tactical Speed in a line, (+0) Operate. Hits on a success, dealing Damage equal to the AP on the facing that hit + 1d10, and if it moved twice Tactical Speed, +1d10 for every additional 10m. If ramming another vehicle or something equally large and solid, it also takes Damage equal to the AP of the vehicle it hit +1d5. For each Damage you inflict, the target is moved 1m. Can be Dodged, can't be Parried. Force Fields can protect from the Damage, but will be pushed.`
    },
    {
      name: `Tactical Manoeuvering`,
      action: `Half / Full Action`,
      description: `Basic movement. Move up to Tactical Speed (Half Action), or twice its Tactical Speed (Full Action). Must move forward or backward its length before turning 90 degrees in any direction but may turn more than once provided it moves enough each time.`
    },
  ];

  wishlistGear = [
    `Second Concertina-pattern Hand Cannon`,
    `Deadspace Earbuds`,
    `Manstopper Rounds`,
    `Second Red Dot Laser Sight`,
  ];

  wishlistPerks = [
    `300xp Put That Out!`,
    //`250xp +5 Agi`
    `300xp Ace Operator (Operate +10) Agi + Tech tier 2`,
    `200xp Weapon-Tech (Tech Use +10, Int 40) Intelligence + Tech, tier 1`,
    `300xp Plasma Weapon Expertise (BS 40, plasma), BS + Tech, tier 2`,
    `400xp Plasma Weapon Mastery (BS 50, Expertise), BS + Tech, tier 3`,
    //`400xp Sprint Agi + Field, tier 3`,
    // ^ while Operator this is 2250xp, probably can't get anything else 
    // v won't easily be cheap
    `900xp Step Aside (Agi 40, Dodge), Agi + Defence, tier 3`, // additional dodge react
    `450xp Hard Target (Agi 40), Agi + Def, tier 2`, // -20 to hit while running
    `600xp Mighty Shot (BS 40), BS + Offence, tier 3`, // 1/2 BS as bonus to damage
    // `300xp Spotter // comrade aims
    // 350 remaining xp as Sharpshooter then change to something for these talents below
    `600-1200xp Infused Knowledge (Int 40, Lore), Int + Knowledge, tier 3`, // +all the knowledge
    `600-1200xp Fearless (Nerves of Steel), Will + Defence, tier 3`, // immune to fear and pinning
    // `??? xp Tireless (T 40, WP 35), Tgh, WP, tier 2`, // ignore fatigue
  ];

  standardKit = `
  Recoil Gloves
  Hand Cannon
  Uniform
  Poor weather gear
  Rucksack
  Mess kit
  Water canteen
  Blanket
  Sleeping bag
  Rechargable lamp pack
  Grooming kit
  Dogtags
  Imperial Infantryman's Uplifting Primer
  2 weeks sombat sustenance rations
  `

  NPCS = [
    {
      name: undefined,
      description: undefined,
    },
  ]
};
// Volunteer Kojak
// WS    BS    S    T    AG     INT    PER    WP    FEL
// 33    36    32    32    37    33    36    28    28
// Armor: 3        Total TB: 3
// Move: 3/6/9/18        Squad Strength: 8
// Skills: Awareness, Athletics, Dodge, Common Lore(Imperium, Lore), Linguistics (Low Gothic), Navigate (Surface), Survival, Stealth, Tech use
// Talents: Anti Armor, Tank hunters, Rapid Reload, etc etc

// Concertina Pattern Hand Cannon:  76 BS before range modifiers
// Pistol | 45m | S/-/- | 1d10+4 | Pen 2 | Clip 5 | Reload 2 Full | Accurate, Overheats, Crippling(2) | 3 kg | Very Rare
// Effect on mobs: Orks do not get their toughness save vs. crippling ammo

// Laspistol: As above
// Pistol     30m     S/2/–     1d10+2 E     0     30     Half     Reliable     1.5kg     Common

// Sgt Petrovich
// WS    BS    S    T    AG     INT    PER    WP    FEL
// 35    39    34    34    42    36    38    38    38
// Armor: 3        Total TB: 3
// Move: 8/16/24/48        Wounds: 12
// Talents: Hard Target, Hardy, Sprint, Rapid Reload, all of the dual wielding thingies
// Skills: Awareness, Athletics, Common Lore(Imperium, Lore), Linguistics (Low Gothic), Navigate (Surface), Survival, Tech use, Command +10

// Chainsword: 
// Melee     —     1d10+5 R     2     Tearing, Balanced     6kg     Average

// Concertina Pattern Hand Cannon:
// Pistol | 45m | S/-/- | 1d10+4 | Pen 2 | Clip 5 | Reload 2 Full | Accurate, Overheats, Crippling(2) | 3 kg | Very Rare
// Effect on mobs: Orks do not get their toughness save vs. crippling ammo

// Naval Pistol:
// Pistol     20m     S/3/–     1d10+4 I     0     6     Full     Tearing     3 kg     Rare

// Inferno pistol: 
// Pistol     10m     S/–/–     2d10+10 E     12     3     Full     Melta     3kg     Near Unique