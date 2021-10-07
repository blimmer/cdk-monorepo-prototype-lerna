import * as cdk from '@aws-cdk/core'
import * as sns from '@aws-cdk/aws-sns'

export function getSomething(scope: cdk.Construct) {
  return sns.Topic.fromTopicArn(scope, 'foo', 'arn:aws:foo')
}
