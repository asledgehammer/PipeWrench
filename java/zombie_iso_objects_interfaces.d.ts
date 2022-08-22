/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.objects.interfaces {
    /**
     * @customConstructor BarricadeAble.new
     * @
     * [INTERFACE] zombie.iso.objects.interfaces.BarricadeAble
     */
    export class BarricadeAble {
      protected constructor();
      /**
       * Method Parameters:
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoBarricade
       */
      getBarricadeForCharacter(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoBarricade;
      /**
       * Method Parameters:
       *  - (Empty): zombie.iso.objects.IsoBarricade
       */
      getBarricadeOnOppositeSquare(): zombie.iso.objects.IsoBarricade;
      /**
       * Method Parameters:
       *  - (Empty): zombie.iso.objects.IsoBarricade
       */
      getBarricadeOnSameSquare(): zombie.iso.objects.IsoBarricade;
      /**
       * Method Parameters:
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoBarricade
       */
      getBarricadeOppositeCharacter(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoBarricade;
      /**
       * Method Parameters:
       *  - (Empty): boolean
       */
      getNorth(): boolean;
      /**
       * Method Parameters:
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getOppositeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters:
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters:
       *  - (Empty): boolean
       */
      isBarricadeAllowed(): boolean;
      /**
       * Method Parameters:
       *  - (Empty): boolean
       */
      isBarricaded(): boolean;
    }
    /**
     * @customConstructor Thumpable.new
     * @
     * [INTERFACE] zombie.iso.objects.interfaces.Thumpable
     */
    export class Thumpable {
      protected constructor();
      /**
       * Method Parameters:
       *  - (IsoMovingObject arg0): void
       */
      Thump(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters:
       *  - (IsoGameCharacter arg0, HandWeapon arg1): void
       */
      WeaponHit(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters:
       *  - (Empty): number
       */
      getThumpCondition(): number;
      /**
       * Method Parameters:
       *  - (IsoGameCharacter arg0): zombie.iso.objects.interfaces.Thumpable
       */
      getThumpableFor(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.interfaces.Thumpable;
      /**
       * Method Parameters:
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
    }
  }
}
