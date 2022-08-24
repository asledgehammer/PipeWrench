/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISCharacterProtection:new */
    export class ISCharacterProtection extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      bFemale: any;

      bodyOutline: any;

      bodyPartPanel: any;

      bpAnchorX: any;

      bpAnchorY: any;

      bparts: any;

      bpPanelX: any;

      bpPanelY: any;

      cacheColor: any;

      char: any;

      colorScheme: any;

      maxLabelWidth: any;

      playerNum: any;

      sex: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      create: (() => any) | any;

      createChildren: (() => any) | any;

      initTextures: (() => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISCharacterProtection {}
}
