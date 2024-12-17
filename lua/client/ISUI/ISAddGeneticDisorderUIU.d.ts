/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISAddGeneticDisorderUI:new */
    export class ISAddGeneticDisorderUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      allele: any;

      cancel: any;

      combo: any;

      comboList: any;

      gdList: any;

      ok: any;

      onclick: any;

      target: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, allele: any);

      create(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      populateComboList(...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISAddGeneticDisorderUIU {}
}
