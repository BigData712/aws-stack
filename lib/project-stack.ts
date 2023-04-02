import {Construct} from "constructs";
import {Domain} from "aws-cdk-lib/aws-opensearchservice";
import {Stack, StackProps} from "aws-cdk-lib";
import {SearchProps} from "./config"

export class ProjStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
        const search = new Domain(this, 'CrimeSearch', SearchProps);
    }
}