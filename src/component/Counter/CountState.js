import { Subject } from 'rx'
import RxFeedback from '../../framework/rxfeedback/rxfeedback';

class CountState {

  action = new CountAction();

  initialState = { value: 0 };

  reduce = (state, event) => {
    switch (event.type) {
      case 'increase':
        return { value: state.value + 1 };
      case 'decrease':
        return { value: state.value - 1 };
      default:
        return state
    }
  };

  system = () => {
    return RxFeedback.system(
      this.initialState,
      this.reduce,
      [(rxState) => this.action.eventSubject]
    )
  };

}

class CountAction {

  eventSubject = new Subject();

  onIncrease = () => {
    console.log('CountAction onIncrease');
    this.eventSubject.onNext({ type: 'increase' });
  };

  onDecrease = () => {
    console.log('CountAction oDecrease');
    this.eventSubject.onNext({ type: 'decrease' });
  };

}

export { CountState, CountAction };