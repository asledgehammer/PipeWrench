/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      clickedOption: any;

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

      mouseDownOverOption: any;

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
        changeOptionArg2: any,
      );

      addOption(name: any, data: any, texture: any, ...__args: never[]): any;

      clearOptions(...__args: never[]): any;

      disableOption(name: any, disable: any, ...__args: never[]): any;

      forceClick(...__args: never[]): any;

      getOptionCount(...__args: never[]): any;

      getOptionData(index: any, ...__args: never[]): any;

      getTextColor(index: any, color: any, ...__args: never[]): any;

      isSelected(index: any, ...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setFont(font: any, ...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setSelected(index: any, selected: any, ...__args: never[]): any;

      setWidthToFit(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISTickBox {}
}
