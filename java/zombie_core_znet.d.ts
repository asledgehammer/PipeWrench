/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.znet {
    /**
     * @customConstructor SteamFriend.new
     * @
     * [CLASS] zombie.core.znet.SteamFriend
     */
    export class SteamFriend {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, long arg1)
       */
      constructor(arg0?: string, arg1?: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getAvatar(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getState(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSteamID(): string;
    }
    /**
     * @customConstructor SteamUGCDetails.new
     * @
     * [CLASS] zombie.core.znet.SteamUGCDetails
     */
    export class SteamUGCDetails {
      /**
       * Constructors: 
       *  - (long arg0, String arg1, long arg2, long arg3, int arg4, long[] arg5)
       */
      constructor(arg0: number, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number[]);
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getChildID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getChildren(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFileSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIDString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumChildren(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getState(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeCreated(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeUpdated(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
    }
    /**
     * @customConstructor SteamWorkshopItem.new
     * @
     * [CLASS] zombie.core.znet.SteamWorkshopItem
     */
    export class SteamWorkshopItem {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      create(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getChangeNote(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getContentFolder(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getExtendedErrorInfo(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFolderName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPreviewImage(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSubmitDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string[]
       */
      getSubmitTags(): string[];
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTags(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): boolean
       */
      getUpdateProgress(arg0: se.krka.kahlua.vm.KahluaTable): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUpdateProgressTotal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getVisibility(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVisibilityInteger(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      readWorkshopTxt(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setChangeNote(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setID(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setTags(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTitle(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setVisibility(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setVisibilityInteger(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      submitUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      validateContents(): string;
      /**
       * Method Parameters: 
       *  - (Path arg0): string
       */
      validatePreviewImage(arg0: java.nio.file.Path): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      writeWorkshopTxt(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getAllowedTags(): java.util.ArrayList<string>;
    }
    /** [ENUM] zombie.core.znet.SteamWorkshopItem$ItemState */
    export class SteamWorkshopItem$ItemState {
      protected constructor();
      static readonly DownloadPending: zombie.core.znet.SteamWorkshopItem$ItemState;
      static readonly Downloading: zombie.core.znet.SteamWorkshopItem$ItemState;
      static readonly Installed: zombie.core.znet.SteamWorkshopItem$ItemState;
      static readonly LegacyItem: zombie.core.znet.SteamWorkshopItem$ItemState;
      static readonly NeedsUpdate: zombie.core.znet.SteamWorkshopItem$ItemState;
      static readonly None: zombie.core.znet.SteamWorkshopItem$ItemState;
      static readonly Subscribed: zombie.core.znet.SteamWorkshopItem$ItemState;
      name(): string;
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       *  - (ItemState arg0): boolean
       */
      and(arg0: number | zombie.core.znet.SteamWorkshopItem$ItemState): boolean;
      /**
       * Method Parameters: 
       *  - (Enum arg0): number
       *  - (Object arg0): number
       */
      compareTo(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Optional<java.lang.Enum$EnumDesc<E>>
       */
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.znet.SteamWorkshopItem$ItemState>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.znet.SteamWorkshopItem$ItemState>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      name(): string;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      not(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): string
       */
      static toString(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.znet.SteamWorkshopItem$ItemState
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.znet.SteamWorkshopItem$ItemState | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.znet.SteamWorkshopItem$ItemState[]
       */
      static values(): zombie.core.znet.SteamWorkshopItem$ItemState[];
    }
    /**
     * @customConstructor ZNetStatistics.new
     * @
     * [CLASS] zombie.core.znet.ZNetStatistics
     */
    export class ZNetStatistics {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
  }
}
