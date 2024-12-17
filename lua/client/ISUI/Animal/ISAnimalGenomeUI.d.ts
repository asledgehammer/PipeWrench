/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISAnimalGenomeUI:new */
    export class ISAnimalGenomeUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      allGenes: any;

      animal: any;

      animalName: any;

      chr: any;

      genomeList: any;

      mainPanel: any;

      playerNum: any;

      constructor(x: any, y: any, width: any, height: any, animal: any, player: any);

      changeValue(button: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      onAddGb(button: any, gd: any, allele: any, ...__args: never[]): any;

      onChangeDominant(modal: any, allele: any, ...__args: never[]): any;

      onChangeValue(button: any, allele: any, ...__args: never[]): any;

      reinit(...__args: never[]): any;

      subPanelPreRender(...__args: never[]): any;

      subPanelRender(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISAnimalGenomeUI {}
}
