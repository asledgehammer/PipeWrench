/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    export abstract class AnimalContextMenu {
      static [id: string]: any;

      onKillAnimalConfirm: ((button: any) => any) | any;

      onSetAnimalAgeClick: ((button: any, animal: any, playerObj: any) => any) | any;

      onSetFertilizedTimeClick: ((button: any, animal: any, playerObj: any) => any) | any;

      onSetMilkQtyClick: ((button: any, animal: any, playerObj: any) => any) | any;

      onSetPregnancyPeriodClick: ((button: any, animal: any, playerObj: any) => any) | any;

      onSetStressClick: ((button: any, animal: any, playerObj: any) => any) | any;

      onSetWoolQtyClick: ((button: any, animal: any, playerObj: any) => any) | any;

      /** @noSelf */
      static attachAnimalToObject: (
        attachAnimalTo: any,
        playerObj: any,
        worldobjects: any,
        context: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static clickedAnimals: (player: any, context: any, animals: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doAnimalBodyMenu: (context: any, player: any, animalbody: any, ...__args: never[]) => any;

      /** @noSelf */
      static doAnimalBodyMenuFromInv: (context: any, playerObj: any, animalbody: any, ...__args: never[]) => any;

      /** @noSelf */
      static doDesignationZoneMenu: (context: any, zone: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doFeedFromHandMenu: (playerObj: any, animal: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static doInventoryMenu: (player: any, context: any, animalInv: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doMenu: (player: any, context: any, animal: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doWaterAnimalMenu: (animalSubMenu: any, animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static getAnimalToInteractWith: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static Impregnate: (animal: any, playerObj: any, doIt: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddAnimalBaby: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddBucketMilk: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddEgg: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAnimalBehavior: (animal: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAnimalGenome: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAnimalInfo: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAttachAnimal: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBowtieGold: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBowtieGreen: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onBowtieRed: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onButcherAnimal: (body: any, chr: any, knife: any, ...__args: never[]) => any;

      /** @noSelf */
      static onButcherAnimalDebug: (body: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onButcherAnimalFromInv: (body: any, chr: any, knife: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheckZone: (zone: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugForceEgg: (animal: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugForceHutch: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugForcePoop: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugSetAcceptance: (animal: any, playerObj: any, acceptance: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugSetStress: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDetachAnimal: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDetachAnimalTree: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFeedAnimalFood: (player: any, animal: any, food: any, ...__args: never[]) => any;

      /** @noSelf */
      static onForceAnimalGrowAway: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onForceEatMom: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onForceSit: (animal: any, ...__args: never[]) => any;

      /** @noSelf */
      static onForceWanderNow: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGenerateWorldSound: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGetAnimalBones: (body: any, chr: any, knife: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGetAnimalBonesFromInv: (body: any, chr: any, knife: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGiveWater: (player: any, animal: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKill: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKillAnimal: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLure: (animal: any, playerObj: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMilkAnimal: (animal: any, chr: any, bucket: any, all: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPetAnimal: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPickupAnimal: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRandomHappyAnim: (animal: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRandomIdleAnim: (animal: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveAnimal: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSanta: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSetAnimalAge: (animal: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSetFire: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSetHungry: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSetMilkQty: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSetWoolQty: (animal: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onShearAnimal: (animal: any, chr: any, shear: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleInvincible: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static PickMate: (animal: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static SetFertilized: (animal: any, playerObj: any, doIt: any, male: any, ...__args: never[]) => any;

      /** @noSelf */
      static SetFertilizedTime: (animal: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static SetPregnancyPeriod: (animal: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static showRadialMenu: (playerObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISAnimalContextMenu {}
}
