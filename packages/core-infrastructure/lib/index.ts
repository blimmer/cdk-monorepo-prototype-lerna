import * as cdk from "@aws-cdk/core";
import * as sns from "@aws-cdk/aws-sns";

export function getSomething(scope: cdk.Construct) {
  return sns.Topic.fromTopicArn(scope, "Change2", "arn:aws:sns:us-east-2:444455556666:MyTopic2");
}
