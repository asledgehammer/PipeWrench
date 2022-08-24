/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISLcdBar:new */
    export class ISLcdBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      charH: any;

      charW: any;

      doScroll: any;

      greyCol: any;

      gridColor: any;

      isOn: any;

      lcdback: any;

      lcdfont: any;

      lcdwidth: any;

      ledColor: any;

      ledTextColor: any;

      pos: any;

      posCounter: any;

      text: any;

      textCache: any;

      textMode: any;

      constructor(x: any, y: any, charWidth: any);

      createChildren: (() => any) | any;

      isSpecial: ((_char: any) => any) | any;

      printChar: ((_pos: any, _char: any) => any) | any;

      render: (() => any) | any;

      renderBackground: ((_r: any, _g: any, _b: any, _a: any) => any) | any;

      renderChar: ((_pos: any, _index: any, _r: any, _g: any, _b: any, _a: any) => any) | any;

      setDoScroll: ((_b: any) => any) | any;

      setText: ((_text: any) => any) | any;

      setTextMode: ((_b: any) => any) | any;

      toggleOn: ((_b: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISLcdBar {}
}
