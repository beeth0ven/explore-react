import { Observable, ReplaySubject } from 'rx';

export default class RxFeedback {

  static system(
    initialState,
    reduce,
    feedbackLoops
  ) {
    const _subject = new ReplaySubject(1);
    const evens = Observable.merge(feedbackLoops.map(feedback => feedback(_subject)));
    return evens.scan(reduce, initialState)
      .doOnNext(_subject.onNext.bind(_subject))
      .startWith(initialState);
  }
}