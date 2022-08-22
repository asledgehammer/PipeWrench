/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.ai.permission {
    /**
     * @customConstructor IStatePermissions.new
     * @
     * [INTERFACE] zombie.ai.permission.IStatePermissions
     */
    export class IStatePermissions {
      protected constructor();
      /**
       * Method Parameters:
       *  - (IsoGameCharacter arg0): boolean
       */
      isDeferredMovementAllowed(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters:
       *  - (IsoGameCharacter arg0): boolean
       */
      isPlayerInputAllowed(arg0: zombie.characters.IsoGameCharacter): boolean;
    }
  }
}
