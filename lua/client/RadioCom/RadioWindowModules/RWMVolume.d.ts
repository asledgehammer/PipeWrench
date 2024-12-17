/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMVolume:new */
    export class RWMVolume extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      earbudsTex: any;

      hasEnabledHeadphones: any;

      headphonesTex: any;

      isMute: any;

      itemDropBox: any;

      speakerButton: any;

      volume: any;

      volumeBar: any;

      constructor(x: any, y: any, width: any, height: any);

      addHeadphone(_items: any, ...__args: never[]): any;

      onSpeakerButton(_ismute: any, ...__args: never[]): any;

      onVolumeChange(_newVol: any, ...__args: never[]): any;

      removeHeadphone(...__args: never[]): any;

      round(num: any, idp: any, ...__args: never[]): any;

      toggleHeaphoneSupport(enable: any, ...__args: never[]): any;

      verifyItem(_item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMVolume {}
}
