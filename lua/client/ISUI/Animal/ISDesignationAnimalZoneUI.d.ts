/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISDesignationZoneAnimalZoneUI:new */
    export class ISDesignationZoneAnimalZoneUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      animalbuttons: any;

      animalLabels: any;

      buttonBorderColor: any;

      infoBtn: any;

      nbOfAnimals: any;

      ok: any;

      player: any;

      reloadBtn: any;

      zone: any;

      constructor(x: any, y: any, width: any, height: any, player: any, zone: any);

      calcFood(...__args: never[]): any;

      calcWater(...__args: never[]): any;

      checkExist(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      reload(...__args: never[]): any;

      updateAnimals(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISDesignationAnimalZoneUI {}
}
