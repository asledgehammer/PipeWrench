/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRadioOption:new */
    export class ISRadioOption extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      changeOptionMethod: any;

      changeOptionTarget: any;

      choicesColor: any;

      leftMargin: any;

      mouseOverOption: any;

      name: any;

      optionCount: any;

      options: any;

      selected: any;

      tickTexture: any;

      constructor(x: any, y: any, width: any, height: any, name: any, changeOptionTarget: any, changeOptionMethod: any);

      addOption: ((name: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRadioOption {}
}
