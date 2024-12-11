/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      isSpecial(_char: any, ...__args: never[]): any;

      printChar(_pos: any, _char: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderBackground(_r: any, _g: any, _b: any, _a: any, ...__args: never[]): any;

      renderChar(_pos: any, _index: any, _r: any, _g: any, _b: any, _a: any, ...__args: never[]): any;

      setDoScroll(_b: any, ...__args: never[]): any;

      setText(_text: any, ...__args: never[]): any;

      setTextMode(_b: any, ...__args: never[]): any;

      toggleOn(_b: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISLcdBar {}
}
