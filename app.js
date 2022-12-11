class Roko {
  name = 'Roko';
  regiment = 'Dragoons';
  
  maxWounds = 12;
  damage = 0;
  wounds = `${this.maxWounds - this.damage}`;
  
  armor = 5 + 2 + 4 + 6 + 1 // 18
  implants = 7; // implants benefit to 10

  fate = 3;

  XP = {
    base: 2800,
    advanced: 500,//300 remaining
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
      description: 'string',
    },
    {
      name: 'Weapon Training (Las, Power)',
      description: 'string',
    },
    {
      name: 'Technical Knock',
      description: 'string',
    },
    {
      name: 'Battlefield Tech-Wright',
      description: 'string',
    },
    {
      name: 'Bombardier',
      description: 'string',
    },
    {
      name: 'Quick Draw',
      description: 'string',
    },
    {
      name: 'Combat Formation',
      description: 'string',
    },
    {
      name: 'Resistance (fear)',
      description: 'string',
    },
    {
      name: 'Weapon Training (launchers)',
      description: 'string',
    },
    {
      name: 'Hatred (8th Gavlax Lancers)',
      description: 'string',
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
        Electro-Graft: Bio-mech interface port,
        Electro Inductors: Power transmission tattoos,
        Respirator Unit: +20 against airborn toxins and gas, built-in vox-synth,
        Cyber-Mantle: Exoskeleton frame,
        Potentia Coil: Power core,
        Cranial Circuitry: Brain processing assist,`
    },
    {
      name: 'Machine(x)',
      description: 'Immune to the vacuum of space, extreme cold, mind-influencing psychic effects, armor applies to fire, and gain armor equal to X',
    },
  ];

  gear = [
    {
      name: 'Mind Impulse Unit',
      quality: 'Good',
      description: 'stats',
    },
    {
      name: 'Subdermal Armor', // Might be Autosanguine or Utility Mechadendrite
      quality: 'Good',
      description: 'stats',
    },
    {
      name: 'Servo-Arm',
      quality: 'Good',
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

  purchases = [ // 300xp remaining
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
    { // Hardy may be refunded if I have Autosanguine
      name: 'Hardy',
      cost: 300,
      description: 'Always considered Lightly Wounded',
      isPerk: true,
    },
    {
      name: 'The  Flesh is Weak',
      cost: 400,
      description: 'Machine(x) trait where X is half the number of cybernetics rounded up to an Intelligence mod max',
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
      description: '+1 Armor',
      isPerk: true,
    },
    {
      name: 'Infused Knowledge',
      cost: 400,
      description: 'Bard',
      isPerk: true,
    },
    {
      name: 'Servo-Arm',
      cost: 250,
      description: '+10 to repairs and half repair time when Servitor helps',
      isPerk: true,
    },
    {
      name: 'Field Repairs',
      cost: 300,
      description: 'Ranged tech-use through servitor at -10',
      isPerk: true,
    },
    {
      name: 'Ballistics Skill +5',
      cost: 250,
      description: 'N/A',
      isPerk: false,
    }
  ];

  wishlistPerks = [
    {
      name: 'Cybernetic Boost',
      cost: 300,
      description: 'Half-action & fate to Tech-use + 0 to gain Unnatural Agi/Str(x) x = 1+1(DoS*0.5) for Int rounds. 1 fatigue per round',
      isPerk: true,
    },
    {
      name: 'Cybernetic Calibrations',
      cost: 400,
      description: 'All cybernetics count as +1 craftmanship quality higher',
      isPerk: true,
    },
    {
      name: 'Redundant Systems',
      cost: 300,
      description: '+1 Servitor. Take advancement up to Intelligence bonus times',
      isPerk: false,
    },
    {
      name: 'Coordination Algorithms',
      cost: 300,
      description: 'When two or more servitors assist with tech-use, gain a +5 bonus per servitor beyond the first assisting',
      isPerk: false,
    },
    {
      name: 'Machine Lord',
      cost: 600,
      description: 'Challenging (+0) Tech-use as a half-action to have one + DoS Servitors shoot as half action using my stat',
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
      description: 'Double toughness against critical damage',
      isPerk: true,
    },
    {
      name: 'Foresight',
      cost: 300,
      description: '10 minutes prep-time for +10 to next test',
      isPerk: true,
    },
    {
      name: 'Xeno-Tech',
      cost: 100,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Commerce',
      cost: 100,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Iron Jaw',
      cost: 200,
      description: 'If stunned, toughness test to not be stunned',
      isPerk: true,
    },
    {
      name: 'Weapon Training(Projectile)',
      cost: 0,
      description: 'N/A',
      isPerk: false,
    },
    {
      name: 'Weapon Training(Heavy)',
      cost: 0,
      description: 'N/A',
      isPerk: false,
    },
  ];
};