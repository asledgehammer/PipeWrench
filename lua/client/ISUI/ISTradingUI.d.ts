/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addItemToYourOffer(item: any, ...__args: never[]): any;

      drawOffer(y: any, item: any, alt: any, ...__args: never[]): any;

      finalizeDeal(...__args: never[]): any;

      getIndexFromItemId(itemId: any, ...__args: never[]): any;

      onAnswerTradeRequest(button: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onSealOffer(clickedOption: any, enabled: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      removeItem(item: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setHistoryMessage(message: any, publishInHistorical: any, add: any, remove: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      updateTooltip(...__args: never[]): any;

      yourOfferMouseUp(x: any, y: any, ...__args: never[]): any;

      /** @noSelf */
      static AcceptedTrade: (accepted: any, ...__args: never[]) => any;

      /** @noSelf */
      static OtherAddNewItem: (player: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static ReceiveTradeRequest: (requester: any, ...__args: never[]) => any;

      /** @noSelf */
      static RemoveItem: (player: any, itemId: any, ...__args: never[]) => any;

      /** @noSelf */
      static UpdateState: (player: any, state: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISTradingUI {}
}
