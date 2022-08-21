/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISSineWaveDisplay:new */
    export class ISSineWaveDisplay extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      doGridLines: any;

      greyCol: any;

      gridColor: any;

      gridHorzSpacing: any;

      gridVertSpacing: any;

      hasChanged: any;

      isOn: any;

      offset: any;

      offsetCntr: any;

      offsetUpdInt: any;

      wave: any;

      waveCntr: any;

      waveParams: any;

      waveUpdInt: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      getWaveData: ((_len: any, _minH: any, _maxH: any) => any) | any;

      render: (() => any) | any;

      setWaveParameters:
        | ((
            _minLen: any,
            _maxLen: any,
            _minHeight: any,
            _maxHeight: any,
            _minUpdFreq: any,
            _maxUpdFreq: any,
            _minScrollSpeed: any,
            _maxScrollSpeed: any
          ) => any)
        | any;

      toggleOn: ((_b: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISSineWaveDisplay {}
}
