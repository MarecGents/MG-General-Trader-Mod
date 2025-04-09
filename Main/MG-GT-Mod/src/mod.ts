import {DependencyContainer} from "tsyringe";
import {IPreSptLoadMod} from "@spt/models/external/IPreSptLoadMod";
import {IPostDBLoadMod} from "@spt/models/external/IPostDBLoadMod";
import {IPostSptLoadMod} from "@spt/models/external/IPostSptLoadMod";
import {PreSptModLoader} from "@spt/loaders/PreSptModLoader";
import {loadMod} from "./types/loadMod";
import {Main} from "./custom/Main";

export class Mod implements IPreSptLoadMod, IPostDBLoadMod, IPostSptLoadMod {

    public container: DependencyContainer;
    public modpath: string;
    public modRealpath: string;

    preSptLoad(container: DependencyContainer):void {
        this.container = container;
        const PreSptModLoader:PreSptModLoader = container.resolve<PreSptModLoader>('PreSptModLoader');
        this.modpath = PreSptModLoader.getModPath("MG-GT-Mod");
        this.modRealpath = __dirname + "\\..\\";
    }

    postDBLoad(container: DependencyContainer):void {
        this.container = container;
        const MGLoad:loadMod = new loadMod().load(this);
        (new Main(this,MGLoad));
    }

    postSptLoad(container: DependencyContainer):void {
        this.container = container;
    }
}

module.exports = {mod: new Mod()};