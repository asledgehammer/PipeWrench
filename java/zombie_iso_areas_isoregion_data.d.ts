/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.areas.isoregion.data {
    /**
     * @customConstructor DataCell.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.data.DataCell
     */
    export class DataCell {

    }
    /**
     * @customConstructor DataChunk.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.data.DataChunk
     */
    export class DataChunk {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChunkX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChunkY(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.areas.isoregion.regions.IsoChunkRegion
       */
      getIsoChunkRegion(arg0: number, arg1: number, arg2: number): zombie.iso.areas.isoregion.regions.IsoChunkRegion;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastUpdateStamp(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       *  - (int arg0, int arg1, int arg2, boolean arg3): number
       */
      getSquare(arg0: number, arg1: number, arg2: number, arg3?: boolean): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): boolean
       */
      selectedHasFlags(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDirtyAllActive(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setLastUpdateStamp(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, byte arg3): void
       */
      setRegion(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setSelectedFlags(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      squareGetFlags(arg0: number, arg1: number, arg2: number): number;
    }
  }
}
