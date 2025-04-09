import {ICloner} from "@spt/utils/cloners/ICloner";
import {Mod} from "../../mod";
import {StructuredCloner} from "@spt/utils/cloners/StructuredCloner";
import {ImporterUtils} from "./ImporterUtils";


export class IClone implements ICloner {

    private modpath: string;
    private structuredCloner: StructuredCloner;
    private importerUtils:ImporterUtils;

    constructor(mod:Mod) {
        this.modpath = mod.modpath;
        this.structuredCloner = mod.container.resolve<ICloner>("StructuredCloner");
        this.importerUtils = new ImporterUtils(mod);
    }

    public clone<T>(value: object|string) {

        if (typeof (value) === "object" && value !== null) {
            return this.structuredCloner.clone(value);
        } else if (typeof value === "string") {
            // on this condition, value is the relative path
            const data:T = this.importerUtils.loadFolders(this.modpath + value);

            return this.structuredCloner.clone(data);
        }
    }


}