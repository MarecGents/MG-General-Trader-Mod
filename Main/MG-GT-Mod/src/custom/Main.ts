import {ConfigTypes} from "@spt/models/enums/ConfigTypes";
import {OutputService} from "../types/services/OutputService";
import {MGModConfig} from "../types/models/mg/config/IConfig";
import {IClone} from "../types/utils/IClone";
import {PathTypes} from "../types/models/enums/PathTypes";
import {MGBots} from "../types/servers/MGBots";
import {MGConfigs} from "../types/servers/MGConfigs";
import {MGGlobals} from "../types/servers/MGGlobals";
import {MGHideout} from "../types/servers/MGHideout";
import {MGLocations} from "../types/servers/MGLocations";
import {MapChType} from "../types/models/enums/MapChType";
import {MGTemplates} from "../types/servers/MGTemplates";
import {MGLocales} from "../types/servers/MGLocales";
import {MGTraders} from "../types/servers/MGTraders";
import {IProps, ITemplateItem} from "@spt/models/eft/common/tables/ITemplateItem";
import {configContainer} from "../types/models/mg/items/EItems";
import {Mod} from "../mod";
import {ITrader, ITraderBase} from "@spt/models/eft/common/tables/ITrader";
import {IQuest, IQuestCondition} from "@spt/models/eft/common/tables/IQuest";
import {IRepeatableQuestDatabase} from "@spt/models/eft/common/tables/IRepeatableQuests";
import {ILocations} from "@spt/models/spt/server/ILocations";
import {IBossLocationSpawn, IExit} from "@spt/models/eft/common/ILocationBase";
import {IConfig, IGlobals, ISkillsSettings} from "@spt/models/eft/common/IGlobals";
import {IInsuranceConfig} from "@spt/models/spt/config/IInsuranceConfig";
import {IInventoryConfig} from "@spt/models/spt/config/IInventoryConfig";
import {ILocationConfig} from "@spt/models/spt/config/ILocationConfig";
import {IRagfairConfig} from "@spt/models/spt/config/IRagfairConfig";
import {ITraderConfig} from "@spt/models/spt/config/ITraderConfig";
import {IWeatherConfig} from "@spt/models/spt/config/IWeatherConfig";
import {CustomTraderService} from "../types/services/CustomTraderService";
import {CustomItemsService} from "../types/services/CustomItemsService";
import {loadMod} from "../types/loadMod";
import {KeysClassifyService} from "../types/services/KeysClassifyService";
import {SyncMarketService} from "../types/services/SyncMarketService";
import {CustomProfileService} from "../types/services/CustomProfileService";
import {ItemsSpawnService} from "../types/services/ItemsSpawnService";

export class Main{

    private mod: Mod;
    private MGLoad:loadMod;
    private Locales:MGLocales
    private outPut: OutputService;

    constructor(mod:Mod,MGLoad:loadMod){
        this.mod = mod;
        this.MGLoad = MGLoad;
        this.Locales = this.MGLoad.MGLocales;
        this.outPut = this.MGLoad.Output;
        this.start();
    }

    public start():void{
        this.CustomTraderServices();
    }

    private CustomTraderServices():void {
        const customTraderService:CustomTraderService = new CustomTraderService(this.mod, this.MGLoad);
        // 独立商人
        customTraderService.start();
    }

    private ItemsSpawnServices():void {
        const itemsSpawnService:ItemsSpawnService = new ItemsSpawnService(this.mod, this.MGLoad)
    }

}