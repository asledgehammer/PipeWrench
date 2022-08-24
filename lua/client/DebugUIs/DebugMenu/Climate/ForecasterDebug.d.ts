/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      drawDayList: ((y: any, item: any, alt: any) => any) | any;

      drawInfoList: ((y: any, item: any, alt: any) => any) | any;

      formatVal: ((_value: any, _func: any, _func2: any) => any) | any;

      onClickClose: (() => any) | any;

      OnDaysListMouseDown: ((item: any) => any) | any;

      populateInfoList: ((_forecast: any) => any) | any;

      populateList: (() => any) | any;

      populateWeatherInfoList: ((_forecast: any, _isOverlap: any) => any) | any;

      printForecastValue: ((_name: any, _value: any, _func: any, _func2: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ForecasterDebug {}
}
