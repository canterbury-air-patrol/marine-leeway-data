interface LeewayDataInterface {
  description: string
  multiplier: number
  modifier: number
  divergence: number
}

const SearchObjectLeeway: Array<LeewayDataInterface> = [
  {
    description: 'PIW - Unknown',
    multiplier: 0.011,
    modifier: 0.07,
    divergence: 30
  },
  {
    description: 'PIW - Vertical',
    multiplier: 0.005,
    modifier: 0.07,
    divergence: 18
  },
  {
    description: 'PIW - Sitting',
    multiplier: 0.012,
    modifier: 0.0,
    divergence: 18
  },
  {
    description: 'PIW - Horizontal - Survival Suit',
    multiplier: 0.014,
    modifier: 0.1,
    divergence: 30
  },
  {
    description: 'PIW - Horizontal - Scuba Suit',
    multiplier: 0.007,
    modifier: 0.08,
    divergence: 30
  },
  {
    description: 'PIW - Horizontal - Deceased',
    multiplier: 0.015,
    modifier: 0.08,
    divergence: 30
  },
  {
    description: 'Survival Craft - Maritime Life Raft - No Ballast - Unknown',
    multiplier: 0.042,
    modifier: 0.03,
    divergence: 28
  },
  {
    description: 'Survival Craft - Maritime Life Raft - No Ballast - no canopy, no drogue',
    multiplier: 0.057,
    modifier: 0.21,
    divergence: 24
  },
  {
    description: 'Survival Craft - Maritime Life Raft - No Ballast - no canopy, w/drogue',
    multiplier: 0.044,
    modifier: -0.2,
    divergence: 28
  },
  {
    description: 'Survival Craft - Maritime Life Raft - No Ballast - canopy, no drogue',
    multiplier: 0.037,
    modifier: 0.11,
    divergence: 24
  },
  {
    description: 'Survival Craft - Maritime Life Raft - No Ballast - canopy, w/drogue',
    multiplier: 0.03,
    modifier: 0.0,
    divergence: 28
  },
  {
    description: 'Survival Craft - Maritime Life Raft - Shallow Ballast and Canopy - Unknown',
    multiplier: 0.029,
    modifier: 0.0,
    divergence: 22
  },
  {
    description: 'Survival Craft - Maritime Life Raft - Shallow Ballast and Canopy - no drogue',
    multiplier: 0.032,
    modifier: -0.02,
    divergence: 22
  },
  {
    description: 'Survival Craft - Maritime Life Raft - Shallow Ballast and Canopy - w/drogue',
    multiplier: 0.025,
    modifier: 0.01,
    divergence: 22
  },
  {
    description: 'Survival Craft - Maritime Life Raft - Shallow Ballast and Canopy - capsized',
    multiplier: 0.017,
    modifier: -0.1,
    divergence: 8
  },
  {
    description: 'Survival Craft - Maritime Life Raft - Deep Ballast and Canopies',
    multiplier: 0.03,
    modifier: 0.02,
    divergence: 13
  },
  {
    description: 'Survival Craft - Other Maritime Survival Craft - life capsule',
    multiplier: 0.038,
    modifier: -0.08,
    divergence: 22
  },
  {
    description: 'Survival Craft - Other Maritime Survival Craft - USCG Sea Rescue Kit',
    multiplier: 0.025,
    modifier: -0.04,
    divergence: 7
  },
  {
    description: 'Survival Craft - Aviation Life Rafts - no ballast, w/canopy Evac/Slide - 4-6 person no drogue',
    multiplier: 0.037,
    modifier: 0.11,
    divergence: 24
  },
  {
    description: 'Survival Craft - Aviation Life Rafts - no ballast, w/canopy Evac/Slide - 46-person',
    multiplier: 0.028,
    modifier: -0.01,
    divergence: 15
  },
  {
    description: 'Person Powered Craft - Sea Kayak - w/person on aft deck',
    multiplier: 0.011,
    modifier: 0.24,
    divergence: 15
  },
  {
    description: 'Person Powered Craft - Surf Board - w/person',
    multiplier: 0.02,
    modifier: 0.0,
    divergence: 15
  },
  {
    description: 'Person Powered Craft - Wind Surfer - w/person and mast/sail in water',
    multiplier: 0.023,
    modifier: 0.1,
    divergence: 12
  },
  {
    description: 'Sailing Vessel - Mono-hull - Full Keel - Deep Draft',
    multiplier: 0.03,
    modifier: 0.0,
    divergence: 48
  },
  {
    description: 'Sailing Vessel - Mono-hull - Full Keel - Shoal Draft',
    multiplier: 0.04,
    modifier: 0.0,
    divergence: 48
  },
  {
    description: 'Power Vessel - Skiffs - Flat Bottom - Boston Whaler',
    multiplier: 0.034,
    modifier: 0.04,
    divergence: 22
  },
  {
    description: 'Power Vessel - Skiffs - V-hull - std. Configuraton',
    multiplier: 0.03,
    modifier: 0.08,
    divergence: 15
  },
  {
    description: 'Power Vessel - Skiffs - V-hull - Swamped',
    multiplier: 0.017,
    modifier: 0.0,
    divergence: 15
  },
  {
    description: 'Power Vessel - Sports Boat - Cuddy Cabin - Modified V-hull',
    multiplier: 0.069,
    modifier: -0.08,
    divergence: 19
  },
  {
    description: 'Power Vessel - Sports Fisher - Center Console - Open cockpit',
    multiplier: 0.06,
    modifier: -0.09,
    divergence: 22
  },
  {
    description: 'Power Vessels - Commercial Fishing Vessels - Unknown',
    multiplier: 0.037,
    modifier: 0.02,
    divergence: 48
  },
  {
    description: 'Power Vessels - Commercial Fishing Vessels - Sampans',
    multiplier: 0.04,
    modifier: 0.0,
    divergence: 48
  },
  {
    description: 'Power Vessels - Commercial Fishing Vessels - Side-stern Trawler',
    multiplier: 0.042,
    modifier: 0.0,
    divergence: 48
  },
  {
    description: 'Power Vessels - Commercial Fishing Vessels - Longliners',
    multiplier: 0.037,
    modifier: 0.0,
    divergence: 48
  },
  {
    description: 'Power Vessels - Commercial Fishing Vessels - Junk',
    multiplier: 0.027,
    modifier: 0.1,
    divergence: 48
  },
  {
    description: 'Power Vessels - Commercial Fishing Vessels - Gill-netter - w/rear reel',
    multiplier: 0.04,
    modifier: 0.01,
    divergence: 33
  },
  {
    description: 'Power Vessels - Coastal Freighter',
    multiplier: 0.028,
    modifier: 0.0,
    divergence: 48
  },
  {
    description: 'Boating Debris - F/V Debris',
    multiplier: 0.02,
    modifier: 0.0,
    divergence: 10
  },
  {
    description: 'Boating Debris - Bait/wharf box holds a cubic meter of Ice - Unknown',
    multiplier: 0.013,
    modifier: 0.27,
    divergence: 31
  },
  {
    description: 'Boating Debris - Bait/wharf box holds a cubic meter of Ice - lightly loaded',
    multiplier: 0.026,
    modifier: 0.18,
    divergence: 15
  },
  {
    description: 'Boating Debris - Bait/wharf box holds a cubic meter of Ice - fully loaded',
    multiplier: 0.016,
    modifier: 0.16,
    divergence: 33
  }
]

export { SearchObjectLeeway, LeewayDataInterface }
