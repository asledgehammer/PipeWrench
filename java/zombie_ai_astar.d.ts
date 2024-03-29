/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.ai.astar {
    /**
     * @customConstructor AStarPathFinderResult.new
     * @
     * [CLASS] zombie.ai.astar.AStarPathFinderResult
     */
    export class AStarPathFinderResult {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Mover.new
     * @
     * [INTERFACE] zombie.ai.astar.Mover
     */
    export class Mover {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathFindIndex(): number;
    }
    /**
     * @customConstructor Path.new
     * @
     * [CLASS] zombie.ai.astar.Path
     */
    export class Path {
      /** java.util.Stack<zombie.ai.astar.Path$Step> */
      static stepstore?: java.util.Stack<zombie.ai.astar.Path$Step>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      appendStep(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      contains(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      costPerStep(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLength(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.ai.astar.Path$Step
       */
      getStep(arg0: number): zombie.ai.astar.Path$Step;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getZ(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      prependStep(arg0: number, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.astar.Path$Step
       */
      static createStep(): zombie.ai.astar.Path$Step;
    }
    /**
     * @customConstructor Step.new
     * @
     * [CLASS] zombie.ai.astar.Path$Step
     */
    export class Path$Step {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0, int arg1, int arg2)
       */
      constructor(arg0?: number, arg1?: number, arg2?: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
    }
  }
}
