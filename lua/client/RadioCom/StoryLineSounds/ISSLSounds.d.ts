/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.StoryLineSounds {
    /** @customConstructor ISSLSounds:new */
    export class ISSLSounds extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      columns: any;

      filterEntry: any;

      filterText: any;

      lastText: any;

      playSoundButton: any;

      soundList: any;

      constructor(x: any, y: any, width: any, height: any);

      addSoundItem: ((_sound: any) => any) | any;

      createChildren: (() => any) | any;

      loadSounds: ((_filter: any) => any) | any;

      onResize: (() => any) | any;

      playSoundFromMainList: (() => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.StoryLineSounds.ISSLSounds {}
}
