
import { Observable } from 'rx';
import { Lambda } from 'aws-sdk';

class LambdaService {

  updateSSIP = () => {
    const param = {
      FunctionName: 'update-ss-ip'
    };
    return this.rxInvoke(param)
  };

  rxInvoke = (param) => {
    const lambda = new Lambda();
    return Observable.fromNodeCallback(lambda.invoke.bind(lambda))(param)
  }
}

export default LambdaService;