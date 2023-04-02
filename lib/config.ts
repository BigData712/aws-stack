import {DomainProps, EngineVersion} from "aws-cdk-lib/aws-opensearchservice";

export const SearchProps: DomainProps = {
    version: EngineVersion.OPENSEARCH_2_3,
    capacity: {
        dataNodeInstanceType: "t3.small.search", // free tier!
        dataNodes: 1                             // also free tier!!
    },
    useUnsignedBasicAuth: true
}