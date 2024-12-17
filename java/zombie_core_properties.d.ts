/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.properties {
    /**
     * @customConstructor PropertyContainer.new
     * @
     * [CLASS] zombie.core.properties.PropertyContainer
     */
    export class PropertyContainer {
      /** java.util.List<java.lang.Object> */
      static sorted?: java.util.List<any>;
      /** zombie.core.Collections.NonBlockingHashMap<zombie.iso.SpriteDetails.IsoFlagType, zombie.core.properties.PropertyContainer$MostTested> */
      static test?: zombie.core.Collections.NonBlockingHashMap<zombie.iso.SpriteDetails.IsoFlagType, zombie.core.properties.PropertyContainer$MostTested>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (PropertyContainer arg0): void
       */
      AddProperties(arg0: zombie.core.properties.PropertyContainer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CreateKeySet(): void;
      /**
       * Method Parameters: 
       *  - (Double arg0): boolean
       *  - (String arg0): boolean
       *  - (IsoFlagType arg0): boolean
       */
      Is(arg0: number | string | zombie.iso.SpriteDetails.IsoFlagType): boolean;
      /**
       * Method Parameters: 
       *  - (IsoFlagType arg0): void
       *  - (String arg0, String arg1): void
       *  - (IsoFlagType arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       */
      Set(arg0: zombie.iso.SpriteDetails.IsoFlagType | string, arg1?: string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (IsoFlagType arg0): void
       */
      UnSet(arg0: string | zombie.iso.SpriteDetails.IsoFlagType): void;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      Val(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.SpriteDetails.IsoFlagType>
       */
      getFlagsList(): java.util.ArrayList<zombie.iso.SpriteDetails.IsoFlagType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPropertyNames(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getSlopedSurfaceDirection(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSlopedSurfaceHeightMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSlopedSurfaceHeightMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStackReplaceTileOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurface(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSurfaceOffset(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTableTop(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      valueEquals(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      valueEqualsIgnoreCase(arg0: string, arg1: string): boolean;
    }
    /**
     * @customConstructor MostTested.new
     * @
     * [CLASS] zombie.core.properties.PropertyContainer$MostTested
     */
    export class PropertyContainer$MostTested {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor RoofProperties.new
     * @
     * [CLASS] zombie.core.properties.RoofProperties
     */
    export class RoofProperties {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): boolean
       */
      hasPossibleSeamLevelBelow(arg0: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): boolean
       */
      hasPossibleSeamSameLevel(arg0: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (RoofProperties arg0): boolean
       */
      isJoinedLevelBelowEast(arg0: zombie.core.properties.RoofProperties): boolean;
      /**
       * Method Parameters: 
       *  - (RoofProperties arg0): boolean
       */
      isJoinedLevelBelowSouth(arg0: zombie.core.properties.RoofProperties): boolean;
      /**
       * Method Parameters: 
       *  - (RoofProperties arg0): boolean
       */
      isJoinedSameLevelEast(arg0: zombie.core.properties.RoofProperties): boolean;
      /**
       * Method Parameters: 
       *  - (RoofProperties arg0): boolean
       */
      isJoinedSameLevelSouth(arg0: zombie.core.properties.RoofProperties): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoSprite arg0): zombie.core.properties.RoofProperties
       */
      static initSprite(arg0: zombie.iso.sprite.IsoSprite): zombie.core.properties.RoofProperties;
    }
  }
}
