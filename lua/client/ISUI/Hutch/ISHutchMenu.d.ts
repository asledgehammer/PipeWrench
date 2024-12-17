/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Hutch {
    export abstract class ISHutchMenu {
      static [id: string]: any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (
        player: any,
        context: any,
        worldobjects: any,
        test: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onInfo: (hutch: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPutAnimalInsideHutch: (hutch: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleDoor: (hutch: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleEggHatchDoor: (hutch: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static setDirt: (hutch: any, player: any, perc: any, ...__args: never[]) => any;

      /** @noSelf */
      static setNestDirt: (hutch: any, player: any, perc: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.Hutch.ISHutchMenu {}
}
