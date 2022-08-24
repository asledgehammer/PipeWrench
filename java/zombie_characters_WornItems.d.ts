/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.characters.WornItems {
    /**
     * @customConstructor BodyLocation.new
     * @
     * [CLASS] zombie.characters.WornItems.BodyLocation
     */
    export class BodyLocation {
      /**
       * Constructors: 
       *  - (BodyLocationGroup arg0, String arg1)
       */
      constructor(arg0: zombie.characters.WornItems.BodyLocationGroup, arg1: string);
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      addAlias(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isExclusive(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isHideModel(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isID(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiItem(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      setExclusive(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      setHideModel(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.characters.WornItems.BodyLocation
       */
      setMultiItem(arg0: boolean): zombie.characters.WornItems.BodyLocation;
    }
    /**
     * @customConstructor BodyLocationGroup.new
     * @
     * [CLASS] zombie.characters.WornItems.BodyLocationGroup
     */
    export class BodyLocationGroup {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      checkValid(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.WornItems.BodyLocation>
       */
      getAllLocations(): java.util.ArrayList<zombie.characters.WornItems.BodyLocation>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      getLocation(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.WornItems.BodyLocation
       */
      getLocationByIndex(arg0: number): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      getLocationNotNull(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      getOrCreateLocation(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      indexOf(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isExclusive(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isHideModel(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isMultiItem(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      setExclusive(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      setHideModel(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setMultiItem(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
    }
    /**
     * @customConstructor BodyLocations.new
     * @
     * [CLASS] zombie.characters.WornItems.BodyLocations
     */
    export class BodyLocations {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocationGroup
       */
      static getGroup(arg0: string): zombie.characters.WornItems.BodyLocationGroup;
    }
    /**
     * @customConstructor WornItem.new
     * @
     * [CLASS] zombie.characters.WornItems.WornItem
     */
    export class WornItem {
      /**
       * Constructors: 
       *  - (String arg0, InventoryItem arg1)
       */
      constructor(arg0: string, arg1: zombie.inventory.InventoryItem);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLocation(): string;
    }
    /**
     * @customConstructor WornItems.new
     * @
     * [CLASS] zombie.characters.WornItems.WornItems
     */
    export class WornItems {
      /**
       * Constructors: 
       *  - (WornItems arg0)
       *  - (BodyLocationGroup arg0)
       */
      constructor(arg0: zombie.characters.WornItems.WornItems | zombie.characters.WornItems.BodyLocationGroup);
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      addItemsToItemContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      contains(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (WornItems arg0): void
       */
      copyFrom(arg0: zombie.characters.WornItems.WornItems): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<zombie.characters.WornItems.WornItem>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.WornItems.WornItem
       */
      get(arg0: number): zombie.characters.WornItems.WornItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.WornItems.BodyLocationGroup
       */
      getBodyLocationGroup(): zombie.characters.WornItems.BodyLocationGroup;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getItem(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getItemByIndex(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0): void
       */
      getItemVisuals(arg0: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): string
       */
      getLocation(arg0: zombie.inventory.InventoryItem): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      remove(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0): void
       */
      setFromItemVisuals(arg0: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (String arg0, InventoryItem arg1): void
       */
      setItem(arg0: string, arg1: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
    }
  }
}
