/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTickBox:new */
    export class ISTickBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      _textColor: any;

      boxSize: any;

      changeOptionArgs: any;

      changeOptionMethod: any;

      changeOptionTarget: any;

      choicesColor: any;

      disabledOptions: any;

      enable: any;

      font: any;

      fontHgt: any;

      isTickBox: any;

      itemGap: any;

      itemHgt: any;

      joypadFocused: any;

      joypadIndex: any;

      leftMargin: any;

      mouseOverOption: any;

      name: any;

      optionCount: any;

      optionData: any;

      options: any;

      optionsIndex: any;

      selected: any;

      textGap: any;

      textures: any;

      tickTexture: any;

      tooltip: any;

      tooltipUI: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        name: any,
        changeOptionTarget: any,
        changeOptionMethod: any,
        changeOptionArg1: any,
        changeOptionArg2: any
      );

      addOption: ((name: any, data: any, texture: any) => any) | any;

      clearOptions: (() => any) | any;

      disableOption: ((name: any, disable: any) => any) | any;

      forceClick: (() => any) | any;

      getOptionCount: (() => any) | any;

      getOptionData: ((index: any) => any) | any;

      getTextColor: ((index: any, color: any) => any) | any;

      isSelected: ((index: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setFont: ((font: any) => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setSelected: ((index: any, selected: any) => any) | any;

      setWidthToFit: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTickBox {}
}
