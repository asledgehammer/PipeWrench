/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.areas.isoregion.regions {
    /**
     * @customConstructor IChunkRegion.new
     * @
     * [INTERFACE] zombie.iso.areas.isoregion.regions.IChunkRegion
     */
    export class IChunkRegion {
      protected constructor();
    }
    /**
     * @customConstructor IWorldRegion.new
     * @
     * [INTERFACE] zombie.iso.areas.isoregion.regions.IWorldRegion
     */
    export class IWorldRegion {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoWorldRegion>
       */
      getDebugConnectedNeighborCopy(): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoWorldRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>
       */
      getDebugIsoChunkRegionCopy(): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoWorldRegion>
       */
      getNeighbors(): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoWorldRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoofCnt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSquareSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFogMask(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullyRoofed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayerRoom(): boolean;
    }
    /**
     * @customConstructor IsoChunkRegion.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.regions.IsoChunkRegion
     */
    export class IsoChunkRegion {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addChunkBorderSquaresCnt(): void;
      /**
       * Method Parameters: 
       *  - (IsoChunkRegion arg0): void
       */
      addConnectedNeighbor(arg0: zombie.iso.areas.isoregion.regions.IsoChunkRegion): void;
      /**
       * Method Parameters: 
       *  - (IsoChunkRegion arg0): void
       */
      addNeighbor(arg0: zombie.iso.areas.isoregion.regions.IsoChunkRegion): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addRoof(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addSquareCount(): void;
      /**
       * Method Parameters: 
       *  - (IsoChunkRegion arg0): boolean
       */
      containsConnectedNeighbor(arg0: zombie.iso.areas.isoregion.regions.IsoChunkRegion): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      containsConnectedNeighborID(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChunkBorderSquaresCnt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.regions.IsoChunkRegion
       */
      getConnectedNeighborWithLargestIsoWorldRegion(): zombie.iso.areas.isoregion.regions.IsoChunkRegion;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>
       */
      getConnectedNeighbors(): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>
       */
      getDebugConnectedNeighborCopy(): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsEnclosed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.regions.IsoWorldRegion
       */
      getIsoWorldRegion(): zombie.iso.areas.isoregion.regions.IsoWorldRegion;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNeighborCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoofCnt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSquareSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getzLayer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetRoofCnt(): void;
      /**
       * Method Parameters: 
       *  - (byte arg0, boolean arg1): void
       */
      setEnclosed(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoWorldRegion arg0): void
       */
      setIsoWorldRegion(arg0: zombie.iso.areas.isoregion.regions.IsoWorldRegion): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.regions.IsoWorldRegion
       */
      unlinkFromIsoWorldRegion(): zombie.iso.areas.isoregion.regions.IsoWorldRegion;
    }
    /**
     * @customConstructor IsoWorldRegion.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.regions.IsoWorldRegion
     */
    export class IsoWorldRegion {

      /**
       * Method Parameters: 
       *  - (IsoChunkRegion arg0): void
       */
      addIsoChunkRegion(arg0: zombie.iso.areas.isoregion.regions.IsoChunkRegion): void;
      /**
       * Method Parameters: 
       *  - (IsoChunkRegion arg0): boolean
       */
      containsIsoChunkRegion(arg0: zombie.iso.areas.isoregion.regions.IsoChunkRegion): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoWorldRegion>
       */
      getDebugConnectedNeighborCopy(): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoWorldRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>
       */
      getDebugIsoChunkRegionCopy(): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoWorldRegion>
       */
      getNeighbors(): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoWorldRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoofCnt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoofedPercentage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSquareSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnclosed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFogMask(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullyRoofed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayerRoom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      linkNeighbors(): void;
      /**
       * Method Parameters: 
       *  - (IsoWorldRegion arg0): void
       */
      merge(arg0: zombie.iso.areas.isoregion.regions.IsoWorldRegion): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>
       */
      swapIsoChunkRegions(arg0: java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>): java.util.ArrayList<zombie.iso.areas.isoregion.regions.IsoChunkRegion>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unlinkNeighbors(): void;
    }
  }
}
