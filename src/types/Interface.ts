
    export interface PedometerResult {
      steps: number;
    }
  
    export interface PedometerOptions {
      startDate?: Date;
      endDate?: Date;
    }

    export interface OnboardState {
      // items: string[];
       id: number,
       name: string,
       size: number, 
       genre: string,
       weight: number,
       age: number
     }
     
   export interface TypeState{
        onboard: OnboardState[];
     }