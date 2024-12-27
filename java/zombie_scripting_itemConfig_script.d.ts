/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting.itemConfig.script {
    /**
     * @customConstructor SelectorBucketScript.new
     * @
     * [CLASS] zombie.scripting.itemConfig.script.SelectorBucketScript
     */
    export class SelectorBucketScript {

      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.itemConfig.script.SelectorBucketScript>
       */
      getChildren(): java.util.ArrayList<zombie.scripting.itemConfig.script.SelectorBucketScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRandomizers(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.itemConfig.enums.SituatedType
       */
      getSelectorSituated(): zombie.scripting.itemConfig.enums.SituatedType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSelectorString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.itemConfig.enums.SelectorType
       */
      getSelectorType(): zombie.scripting.itemConfig.enums.SelectorType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSelectorWorldAge(): number;
    }
  }
}
