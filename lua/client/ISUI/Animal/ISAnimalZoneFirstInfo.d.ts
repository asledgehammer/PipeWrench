/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISAnimalZoneFirstInfo:new */
    export class ISAnimalZoneFirstInfo extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      okBtn: any;

      rich: any;

      constructor(x: any, y: any);

      onClickOk(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static showUI: (force: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISAnimalZoneFirstInfo {}
}
