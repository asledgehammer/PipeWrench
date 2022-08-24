/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand.ISUI {
    /** @customConstructor ISChallenge2PlayerUpWindow:new */
    export class ISChallenge2PlayerUpWindow extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttons: any;

      char: any;

      playerId: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      create: (() => any) | any;

      loadJoypadButtons: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      reloadButtons: (() => any) | any;

      render: (() => any) | any;

      updateButtonLevel: (() => any) | any;
    }
  }
  export namespace lua.client.LastStand.ISUI.ISChallenge2PlayerUpWindow {}
}
