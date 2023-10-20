import { GERepositoryService } from './services/ge-repository.service';
import { Component, OnInit } from '@angular/core';
import { ItemPriceSummary } from './interfaces/item';

const ITEMS_TO_TRACK = [
  554, // Fire rune
  7936, // Pure essence
  314, // Feather
  556, // Air rune
  555, // Water rune
  562, // Chaos rune
  565, // Blood rune
  27616, // Ancient essence
  12934, // Zulrah's scales
  557, // Earth rune
  560, // Death rune
  21820, // Revenant ether
  561, // Nature rune
  558, // Mind rune
  2, // Cannonball
  453, // Coal
  566, // Soul rune
  563, // Law rune
  564, // Cosmic rune
  9075, // Astral rune
  890, // Adamant arrow
  444, // Gold ore
  888, // Mithril arrow
  892, // Rune arrow
  53, // Headless arrow
  809, // Mithril dart
  1779, // Flax
  1987, // Grapes
  810, // Adamant dart
  822, // Mithril dart tip
  559, // Body rune
  227, // Vial of water
  2357, // Gold bar
  21326, // Amethyst arrow
  823, // Adamant dart tip
  1517, // Maple logs
  1937, // Jug of water
  1777, // Bow string
  52, // Arrow shaft
  2353, // Steel bar
  21880, // Wrath rune
  8778, // Oak plank
  440, // Iron ore
  385, // Shark
  855, // Yew longbow
  4696, // Dust rune
  383, // Raw shark
  1939, // Swamp tar
  229, // Vial
  1515, // Yew logs
  4699, // Lava rune
  8782, // Mahogany plank
  884, // Iron arrow
  25849, // Amethyst dart
  447, // Mithril ore
  2361, // Adamantite bar
  449, // Adamantite ore
  1993, // Jug of wine
  21350, // Amethyst arrowtips
  6332, // Mahogany logs
  9144, // Runite bolts
  1775, // Molten glass
  1521, // Oak logs
  1761, // Soft clay
  1513, // Magic logs
  66, // Yew longbow (u)
  4697, // Smoke rune
  9244, // Dragonstone bolts (e)
  2359, // Mithril bar
  21555, // Numulite
  25853, // Amethyst dart tip
  536, // Dragon bones
  11230, // Dragon dart
  811, // Rune dart
  442, // Silver ore
  11212, // Dragon arrow
  859, // Magic longbow
  886, // Steel arrow
  21930, // Dragon bolts (unf)
  313, // Fishing bait
  1783, // Bucket of sand
  21944, // Ruby dragon bolts (e)
  13439, // Raw anglerfish
  9143, // Adamant bolts
  21905, // Dragon bolts
  10034, // Red chinchompa
  4694, // Steam rune
  3142, // Raw karambwan
  62, // Maple longbow (u)
  1734, // Thread
  9243, // Diamond bolts (e)
  19582, // Dragon javelin heads
  1603, // Ruby
  70, // Magic longbow (u)
  3144, // Cooked karambwan
  1391, // Battlestaff
  9341, // Dragonstone bolts
  9193, // Dragonstone bolt tips
  5418, // Empty sack
  11232, // Dragon dart tip
  1619, // Uncut ruby
  19580, // Rune javelin heads
  13441, // Anglerfish
  8780, // Teak plank
  231, // Snape grass
  573, // Air orb
  21622, // Volcanic ash
  12640, // Amylase crystal
  1519, // Willow logs
  8013, // Teleport to house (tablet)
  1623, // Uncut sapphire
  10143, // Marrentill tar
  567, // Unpowered orb
  1941, // Swamp paste
  5305, // Barley seed
  808, // Steel dart
  882, // Bronze arrow
  10144, // Tarromin tar
  1660, // Ruby necklace
  824, // Rune dart tip
  1607, // Sapphire
  821, // Steel dart tip
  24607, // Blighted ancient ice sack
  391, // Manta ray
  9192, // Diamond bolt tips
  21946, // Diamond dragon bolts (e)
  1605, // Emerald
  13573, // Dynamite
  1654, // Gold necklace
  4695, // Mist rune
  1621, // Uncut emerald
  1935, // Jug
  4698, // Mud rune
  1601, // Diamond
  1397, // Air battlestaff
  807, // Iron dart
  1617, // Uncut diamond
  8882, // Bone bolts
  13421, // Saltpetre
  1745, // Green dragon leather
  6306, // Trading sticks
  41, // Steel arrowtips
  1753, // Green dragonhide
  9340, // Diamond bolts
  1925, // Bucket
  223, // Red spiders' eggs
  5307, // Hammerstone seed
  13431, // Sandworms
  1656, // Sapphire necklace
  377, // Raw lobster
  13391, // Lizardman fang
  451, // Runite ore
  9191, // Ruby bolt tips
  7946, // Monkfish
  7944, // Raw monkfish
  11875, // Broad bolts
  851, // Maple longbow
  1539, // Steel nails
  9242, // Ruby bolts (e)
  2505, // Blue dragon leather
  22124, // Superior dragon bones
  2509, // Black dragon leather
  11959, // Black chinchompa
  6333, // Teak logs
  5318, // Potato seed
  2363, // Runite bar
  2351, // Iron bar
  379, // Lobster
  221, // Eye of newt
  19584, // Javelin shaft
  24613, // Blighted entangle sack
  373, // Swordfish
  1436, // Rune essence
  11260, // Impling jar
  371, // Raw swordfish
  11237, // Dragon arrowtips
  5974, // Coconut
  2434, // Prayer potion(4)
  1747, // Black dragonhide
  225, // Limpwurt root
  1751, // Blue dragonhide
  1658, // Emerald necklace
  9245, // Onyx bolts (e)
  9339, // Ruby bolts
  1511, // Logs
  6685, // Saradomin brew(4)
  1749, // Red dragonhide
  99, // Ranarr potion (unf)
  3024, // Super restore(4)
  3002, // Toadflax potion (unf)
  19669, // Redwood logs
  2970, // Mort myre fungus
  10145, // Harralander tar
  6034, // Supercompost
  21969, // Diamond dragon bolts
  2507, // Red dragon leather
  11248, // Eclectic impling jar
  9142, // Mithril bolts
  3004, // Snapdragon potion (unf)
  243, // Blue dragon scale
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public geRepositoryService: GERepositoryService) {}

  async ngOnInit() {
    await this.geRepositoryService.createItemMapping();
    ITEMS_TO_TRACK.forEach(async val => {
      await this.geRepositoryService.addItemToSummary(val);
    })
  }

  getItemSummaries(): Map<number, ItemPriceSummary> {
    return this.geRepositoryService.itemPriceSummaries;
  }
}
