import {Mod} from "../../mod";
import {FileSystemSync} from "@spt/utils/FileSystemSync";

export class IFileControl {

    private fileSystemSync:FileSystemSync;

    constructor(mod:Mod) {
        this.fileSystemSync = mod.container.resolve<FileSystemSync>("FileSystemSync");
    }

    public writeFile(filepath: any, data = ""):void {
        this.fileSystemSync.write(filepath, data);
    }

    public removeFile(filepath: string): void{
        this.fileSystemSync.remove(filepath);
    }

    public readFile(filepath: string):string {
        return this.fileSystemSync.read(filepath);
    }

    public exists(filepath: string): boolean {
        return this.fileSystemSync.exists(filepath);
    }

    public getFiles(filepath: string):string[] {
        return this.fileSystemSync.getFiles(filepath);
    }

    public stripExtension(filepath: string):string {
        return FileSystemSync.stripExtension(filepath);
    }
}