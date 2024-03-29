/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel.animation.sharedskele {
    /**
     * @customConstructor SharedSkeleAnimationRepository.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationRepository
     */
    export class SharedSkeleAnimationRepository {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (AnimationClip arg0): zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack
       */
      getTrack(arg0: zombie.core.skinnedmodel.animation.AnimationClip): zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack;
      /**
       * Method Parameters: 
       *  - (AnimationClip arg0, SharedSkeleAnimationTrack arg1): void
       */
      setTrack(arg0: zombie.core.skinnedmodel.animation.AnimationClip, arg1: zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack): void;
    }
    /**
     * @customConstructor SharedSkeleAnimationTrack.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack
     */
    export class SharedSkeleAnimationTrack {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, Matrix4f arg1): void
       */
      getBoneMatrix(arg0: number, arg1: org.lwjgl.util.vector.Matrix4f): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumBones(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLooped(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      moveToTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (AnimTrackSampler arg0, float arg1): void
       */
      set(arg0: zombie.core.skinnedmodel.animation.AnimTrackSampler, arg1: number): void;
    }
  }
}
