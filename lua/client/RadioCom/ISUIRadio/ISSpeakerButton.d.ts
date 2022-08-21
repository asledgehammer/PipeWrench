/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISSpeakerButton:new */
    export class ISSpeakerButton extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      enableControls: any;

      hover: any;

      isMute: any;

      muteTexture: any;

      onclick: any;

      onclickTarget: any;

      speakerTexture: any;

      constructor(x: any, y: any, width: any, height: any, onclick: any, onclickTarget: any);

      createChildren: (() => any) | any;

      getEnableControls: (() => any) | any;

      render: (() => any) | any;

      setEnableControls: ((_b: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISSpeakerButton {}
}
