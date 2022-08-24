/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTradingUI:new */
    export class ISTradingUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static tradeQuestionUI: any;

      acceptDeal: any;

      blockingMessage: any;

      blockingMessage2: any;

      hisOffer: any;

      hisOfferDatas: any;

      historic: any;

      historical: any;

      historicalUI: any;

      historyMessage: any;

      historyMessageCD: any;

      infoBtn: any;

      infoRichText: any;

      listHeaderColor: any;

      no: any;

      otherPlayer: any;

      otherSealedOffer: any;

      pendingRequest: any;

      player: any;

      remove: any;

      sealOffer: any;

      selectedItem: any;

      toolRender: any;

      yourOffer: any;

      yourOfferDatas: any;

      constructor(x: any, y: any, width: any, height: any, player: any, otherPlayer: any);

      addItemToYourOffer: ((item: any) => any) | any;

      drawOffer: ((y: any, item: any, alt: any) => any) | any;

      finalizeDeal: (() => any) | any;

      onAnswerTradeRequest: ((button: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onSealOffer: ((clickedOption: any, enabled: any) => any) | any;

      populateList: (() => any) | any;

      removeItem: ((item: any) => any) | any;

      render: (() => any) | any;

      setHistoryMessage: ((message: any, publishInHistorical: any, add: any, remove: any) => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;

      updateTooltip: (() => any) | any;

      yourOfferMouseUp: ((x: any, y: any) => any) | any;

      /** @noSelf */
      static AcceptedTrade: (accepted: any) => any;

      /** @noSelf */
      static OtherAddNewItem: (player: any, item: any) => any;

      /** @noSelf */
      static ReceiveTradeRequest: (requester: any) => any;

      /** @noSelf */
      static RemoveItem: (player: any, index: any) => any;

      /** @noSelf */
      static UpdateState: (player: any, state: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISTradingUI {}
}
