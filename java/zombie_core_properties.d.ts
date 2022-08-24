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
  }
}
