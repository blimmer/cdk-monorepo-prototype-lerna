#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CoreInfrastructureStack } from '../lib/core-infrastructure-stack';

const app = new cdk.App();
const coreInfra = new CoreInfrastructureStack(app, 'CoreInfrastructureStack');
