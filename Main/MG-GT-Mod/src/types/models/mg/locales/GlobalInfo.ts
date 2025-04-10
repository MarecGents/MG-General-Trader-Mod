export interface GeneralInfo {
    _id: string;
    desc: string;
}

export interface ItemsInfo {
    _id: string;
    desc: ItemsDesc;
}

export interface TraderInfo {
    _id: string;
    desc: TraderDesc;
}

export interface QuestInfo {
    _id: string;
    desc: QuestDesc;
}

export interface ItemsDesc {
    Name: string;
    ShortName: string;
    Description: string;
}

export interface TraderDesc {
    FullName: string;
    FirstName: string;
    Nickname: string;
    Location: string;
    Description: string;
}

export interface QuestDesc {
    name: string;
    description: string;
    startedMessageText?: string;
    successMessageText?: string;
    failMessageText?: string;
    changeQuestMessageText?: string;
    acceptPlayerMessage?: string;
    completePlayerMessage?: string;
    declinePlayerMessage?: string;
    other?: {
        [key: string]: string;
    }
}

export interface AnyInfo {
    [key: string]: string;
}
