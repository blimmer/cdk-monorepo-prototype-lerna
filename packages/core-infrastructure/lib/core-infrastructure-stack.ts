import * as cdk from '@aws-cdk/core';
import * as sns from '@aws-cdk/aws-sns'

export class CoreInfrastructureStack extends cdk.Stack {
  readonly topic = new sns.Topic(this, 'Topic');

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
  }
}
