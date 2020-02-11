import { AssetCode, LayerVersion, Runtime } from "@aws-cdk/aws-lambda";

import { Construct } from "@aws-cdk/core";

export class NodeJwtLayer extends LayerVersion {
  constructor(scope: Construct, id: string = "NodeJwtLayer") {
    super(scope, id, {
      code: new AssetCode(__dirname + "/nodejs.zip"),
      compatibleRuntimes: [
        Runtime.NODEJS_8_10,
        Runtime.NODEJS_10_X,
        Runtime.NODEJS_12_X
      ],
      license: "MIT",
      description: "Lambda Layer for Node.js with jsonwebtoken package"
    });
  }
}

export default NodePostgresLayer;
