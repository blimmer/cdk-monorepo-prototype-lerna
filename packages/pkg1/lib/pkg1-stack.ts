import * as cdk from "@aws-cdk/core";
import * as nodelambda from "@aws-cdk/aws-lambda-nodejs";
import { join } from "path";
import { getSomething } from "core-infrastructure";

export class Pkg1Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // some change again

    const entry = join(__dirname, "lambda", "index.ts");
    new nodelambda.NodejsFunction(this, "Lambda", {
      entry,
      environment: {
        SNS_TOPIC: getSomething(this).topicArn,
      },
    });
  }
}
