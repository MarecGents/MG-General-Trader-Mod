/**
 * Build
 */
import {MinMax} from "@spt/models/common/MinMax";

// export interface MGModConfig {
//     MGTrader: any;
//     extra: any;
//     bots: any;
//     configs: any;
//     globals: any;
//     hideout: any;
//     items: any;
//     locations: any;
//     request: any;
//     traders: any;
//     saveTime: any;
// }

export interface MGModConfig {
    Bot: MGModConfig_Bot;
    Config: MGModConfig_Config;
    Globals: MGModConfig_Globals;
    Hideout: MGModConfig_Hideout;
    Locations: MGModConfig_Locations;
    Templates: MGModConfig_Templates;
    Traders: MGModConfig_Traders;
    MGCustom: MGModConfig_MGCustom;
    saveTime: string;
}

export interface MGModConfig_Bot {
    AIHealth: string | number;
}

export interface MGModConfig_Config {
    AirdropType: string;
    AISpawnNumber: number;
    RaidDefault: MGModConfig_Config_RaidDefault;
    ReturnChance: string | number;
    BuyFoundInRaid: boolean;
    LootMultiple: MGModConfig_Config_LootMultiple;
    RandomContainer: boolean;
    USECRate: number;
    Sell100: boolean;
    SellFast: boolean;
    SellOptimize: boolean;
    SellNew: boolean;
    NoBlackList: boolean;
    Buffs: MGModConfig_Config_Buffs;
    UpdateTime: string | number;
    WeatherSettings: MGModConfig_Config_WeatherSettings;
}

export interface MGModConfig_Config_RaidDefault {
    aiAmount: string;
    aiDifficulty: string;
    bossEnabled: boolean;
    scavWars: boolean;
    taggedAndCursed: boolean;
    enablePve: boolean;
    randomWeather: boolean;
    randomTime: boolean;
}

export interface MGModConfig_Config_LootMultiple {
    Container: number;
    Ground: number;
}

export interface MGModConfig_Config_Buffs {
    BuffsWeapon: boolean;
    BuffsArmor: boolean;
}

export interface MGModConfig_Config_WeatherSettings {
    mode: string;
    clouds: MGModConfig_Config_Weather;
    windSpeed: MGModConfig_Config_Weather;
    rainIntensity: MinMax;
    rain: MGModConfig_Config_Weather;
    fog: MGModConfig_Config_Weather;
}

export interface MGModConfig_Config_Weather {
    type: string;
    values: number[];
    weights: number[];
}

export interface MGModConfig_Globals {
    EscapeNoTimeLimit: boolean,
    FleaMarketOpenLevel: boolean,
    TakeLimit: boolean,
    ScavOptimize: boolean,
    LowTaxRate: boolean,
    SellNumber: number,
    LoadSpeed: MGModConfig_Globals_LoadSpeed,
    SuperHero: boolean,
    LootMultiplier: MGModConfig_Globals_LootMultiplier,
    ArmorRepairPerfect: boolean,
    Buffs: MGModConfig_Globals_Buffs,
    ExpOptimize: boolean
}

export interface MGModConfig_Globals_LoadSpeed {
    mode: string,
    BaseLoadTime: number,
    BaseUnloadTime: number
}

export interface MGModConfig_Globals_LootMultiplier {
    Value: number,
    Global: number
}

export interface MGModConfig_Globals_Buffs {
    BuffsWeapon: boolean,
    BuffsArmor: boolean
}

export interface MGModConfig_Hideout {
    BuildTime: string | number;
    ProductTime: string | number;
    ScavCaseTime: string | number;
}

export interface MGModConfig_Locations {
    RaidTime: string | number;
    BOSSSpwanChance: string | number;
    Pass100: boolean;
    Escape100: boolean;
    MapInsurance: MapsBoolean;
}

export interface MapsBoolean {
    bigmap: boolean,
    factory4_day: boolean,
    factory4_night: boolean,
    interchange: boolean,
    laboratory: boolean,
    lighthouse: boolean,
    rezervbase: boolean,
    sandbox: boolean,
    sandbox_high: boolean,
    shoreline: boolean,
    tarkovstreets: boolean,
    woods: boolean
}

export interface MGModConfig_Templates {
    Examined: boolean;
    WeaponFilter: boolean;
    AmmoStack: number;
    AmmoInfo: boolean;
    ContainerExpand: {
        [key: string]: MGModConfig_Templates_ContainerExpands;
    }
    Safes: MGModConfig_Templates_Safes;
    MoneyStack: number;
    Backpack: MGModConfig_Templates_Backpack;
    Armor: MGModConfig_Templates_ArmorHelmet;
    Helmet: MGModConfig_Templates_ArmorHelmet;
    KeysDurability: boolean;
    MedcDurability: number;
    WeaponNoLost: boolean;
    WeaponRepairPerfect: boolean;
    MagazineCapacity: number;
    T7ThermalImaging: boolean;
    ResetFree: boolean;
    QuestOptimize: boolean;
}

export interface MGModConfig_Templates_ContainerExpands {
    enable: boolean;
    Name: string;
    cellsH: number;
    cellsV: number;
    Weight: boolean;
    Filter: boolean;
}

export interface MGModConfig_Templates_Safes {
    SizeExpand: boolean;
    Filter: boolean;
    NoWeight: boolean;
}

export interface MGModConfig_Templates_Backpack {
    Filter: boolean;
    SmallSize: boolean;
    NoBuff: boolean;
    NoWeight: boolean;
}
export interface MGModConfig_Templates_ArmorHelmet {
    Durability: number;
    Filter: boolean;
    NoBuff: boolean;
    NoWeight: boolean;
}

export interface MGModConfig_Traders {
    InsuranceTime: string | number;
    InsuranceCost: string | number;
}

export interface MGModConfig_MGCustom {
    CustomTrader: boolean;
    CustomItem: boolean;
    CustomAssort: boolean;
    CustomProfile: boolean;
    AmmoInfo: boolean;
    KeyClassfy: boolean;
    SyncFlea: boolean;
}

