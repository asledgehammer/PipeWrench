/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISVehicleAnimal3DModel:new */
    export class ISVehicleAnimal3DModel extends lua.client.ISUI.ISUI3DModel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor ISVehicleAnimalUI:new */
    export class ISVehicleAnimalUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static ui: any;

      addBtn: any;

      animalCount: any;

      avatarBackgroundTexture: any;

      avatarHeight: any;

      avatarWidth: any;

      btnBorder: any;

      btnHeight: any;

      btnWidth: any;

      character: any;

      playerNum: any;

      progressBar: any;

      scrollPanel: any;

      vehicle: any;

      constructor(vehicle: any, player: any);

      checkCanAddAnimal(...__args: never[]): any;

      create(reset: any, ...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onAddAnimal(...__args: never[]): any;

      onAnimalInfo(button: any, x: any, y: any, ...__args: never[]): any;

      onGrabAnimal(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onRemoveAnimal(button: any, x: any, y: any, ...__args: never[]): any;

      onRightMouseUpScrollPanel(x: any, y: any, ...__args: never[]): any;

      prerenderScrollPanel(...__args: never[]): any;

      reset(panel: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onKillAnimalDebug: (animal: any, player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISVehicleAnimalUI {}
}
