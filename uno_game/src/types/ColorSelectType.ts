import { ActionOutputType } from "./actionOutputType";

export interface ColorSelectProps {
  playerActiveToggle: (currentState: string) => ActionOutputType;
  botOneActiveToggle: (currentState: string) => ActionOutputType;
  botTwoActiveToggle: (currentState: string) => ActionOutputType;
  botThreeActiveToggle: (currentState: string) => ActionOutputType;
  changeColor: (color: string) => ActionOutputType;
  visible: boolean;
  active: string;
  direction: string;
}
