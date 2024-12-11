/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      getWaveData(_len: any, _minH: any, _maxH: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setWaveParameters(
        _minLen: any,
        _maxLen: any,
        _minHeight: any,
        _maxHeight: any,
        _minUpdFreq: any,
        _maxUpdFreq: any,
        _minScrollSpeed: any,
        _maxScrollSpeed: any,
        ...__args: never[]
      ): any;

      toggleOn(_b: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISSineWaveDisplay {}
}
