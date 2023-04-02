#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {ProjStack} from "../lib/project-stack";

const app = new cdk.App();
new ProjStack(app, 'ProjectStack', {});

app.synth()