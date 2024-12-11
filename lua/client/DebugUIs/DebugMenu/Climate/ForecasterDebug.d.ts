/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ForecasterDebug:new */
    export class ForecasterDebug extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      clim: any;

      daysList: any;

      firstForecast: any;

      forecaster: any;

      infoList: any;

      panelTitle: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren(...__args: never[]): any;

      drawDayList(y: any, item: any, alt: any, ...__args: never[]): any;

      drawInfoList(y: any, item: any, alt: any, ...__args: never[]): any;

      formatVal(_value: any, _func: any, _func2: any, ...__args: never[]): any;

      onClickClose(...__args: never[]): any;

      OnDaysListMouseDown(item: any, ...__args: never[]): any;

      populateInfoList(_forecast: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      populateWeatherInfoList(_forecast: any, _isOverlap: any, ...__args: never[]): any;

      printForecastValue(_name: any, _value: any, _func: any, _func2: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ForecasterDebug {}
}
