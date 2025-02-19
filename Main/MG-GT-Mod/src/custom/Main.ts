import {OutputService} from "../types/services/OutputService";
import {MGLocales} from "../types/servers/MGLocales";
import {Mod} from "../mod";
import {CustomTraderService} from "../types/services/CustomTraderService";
import {loadMod} from "../types/loadMod";
import {ItemsSpawnService} from "../types/services/ItemsSpawnService";

export class Main{

    private mod: Mod;
    private MGLoad:loadMod;
    private Locales:MGLocales
    private outPut: OutputService;

    constructor(mod:Mod, MGLoad:loadMod){
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