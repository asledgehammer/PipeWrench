/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopUserName:new */
    export class CoopUserName extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      backButton: any;

      entry: any;

      fontHgt: any;

      nextButton: any;

      constructor(x: any, y: any, width: any, height: any);

      beforeShow: (() => any) | any;

      clickBack: (() => any) | any;

      clickNext: (() => any) | any;

      createChildren: (() => any) | any;

      getUserName: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      shouldShow: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.CoopUserName {}
}
