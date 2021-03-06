/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      family: {
        required: true,
        isConstant: true,
        serializedName: "family",
        defaultValue: 'A',
        type: {
          name: "String"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "Enum",
          allowedValues: [
            "standard",
            "premium"
          ]
        }
      }
    }
  }
};

export const Permissions: msRest.CompositeMapper = {
  serializedName: "Permissions",
  type: {
    name: "Composite",
    className: "Permissions",
    modelProperties: {
      keys: {
        serializedName: "keys",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      secrets: {
        serializedName: "secrets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      certificates: {
        serializedName: "certificates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      storage: {
        serializedName: "storage",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const AccessPolicyEntry: msRest.CompositeMapper = {
  serializedName: "AccessPolicyEntry",
  type: {
    name: "Composite",
    className: "AccessPolicyEntry",
    modelProperties: {
      tenantId: {
        required: true,
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      },
      objectId: {
        required: true,
        serializedName: "objectId",
        type: {
          name: "String"
        }
      },
      applicationId: {
        serializedName: "applicationId",
        type: {
          name: "Uuid"
        }
      },
      permissions: {
        required: true,
        serializedName: "permissions",
        type: {
          name: "Composite",
          className: "Permissions"
        }
      }
    }
  }
};

export const IPRule: msRest.CompositeMapper = {
  serializedName: "IPRule",
  type: {
    name: "Composite",
    className: "IPRule",
    modelProperties: {
      value: {
        required: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkRule: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkRule",
  type: {
    name: "Composite",
    className: "VirtualNetworkRule",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NetworkRuleSet: msRest.CompositeMapper = {
  serializedName: "NetworkRuleSet",
  type: {
    name: "Composite",
    className: "NetworkRuleSet",
    modelProperties: {
      bypass: {
        serializedName: "bypass",
        type: {
          name: "String"
        }
      },
      defaultAction: {
        serializedName: "defaultAction",
        type: {
          name: "String"
        }
      },
      ipRules: {
        serializedName: "ipRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IPRule"
            }
          }
        }
      },
      virtualNetworkRules: {
        serializedName: "virtualNetworkRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkRule"
            }
          }
        }
      }
    }
  }
};

export const PrivateEndpoint: msRest.CompositeMapper = {
  serializedName: "PrivateEndpoint",
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: msRest.CompositeMapper = {
  serializedName: "PrivateLinkServiceConnectionState",
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionRequired: {
        serializedName: "actionRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionItem: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnectionItem",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionItem",
    modelProperties: {
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultProperties: msRest.CompositeMapper = {
  serializedName: "VaultProperties",
  type: {
    name: "Composite",
    className: "VaultProperties",
    modelProperties: {
      tenantId: {
        required: true,
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      accessPolicies: {
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AccessPolicyEntry"
            }
          }
        }
      },
      vaultUri: {
        serializedName: "vaultUri",
        type: {
          name: "String"
        }
      },
      enabledForDeployment: {
        serializedName: "enabledForDeployment",
        type: {
          name: "Boolean"
        }
      },
      enabledForDiskEncryption: {
        serializedName: "enabledForDiskEncryption",
        type: {
          name: "Boolean"
        }
      },
      enabledForTemplateDeployment: {
        serializedName: "enabledForTemplateDeployment",
        type: {
          name: "Boolean"
        }
      },
      enableSoftDelete: {
        serializedName: "enableSoftDelete",
        defaultValue: true,
        type: {
          name: "Boolean"
        }
      },
      softDeleteRetentionInDays: {
        serializedName: "softDeleteRetentionInDays",
        defaultValue: 90,
        type: {
          name: "Number"
        }
      },
      enableRbacAuthorization: {
        serializedName: "enableRbacAuthorization",
        defaultValue: false,
        type: {
          name: "Boolean"
        }
      },
      createMode: {
        serializedName: "createMode",
        type: {
          name: "Enum",
          allowedValues: [
            "recover",
            "default"
          ]
        }
      },
      enablePurgeProtection: {
        serializedName: "enablePurgeProtection",
        type: {
          name: "Boolean"
        }
      },
      networkAcls: {
        serializedName: "networkAcls",
        type: {
          name: "Composite",
          className: "NetworkRuleSet"
        }
      },
      privateEndpointConnections: {
        readOnly: true,
        serializedName: "privateEndpointConnections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnectionItem"
            }
          }
        }
      }
    }
  }
};

export const VaultPatchProperties: msRest.CompositeMapper = {
  serializedName: "VaultPatchProperties",
  type: {
    name: "Composite",
    className: "VaultPatchProperties",
    modelProperties: {
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      accessPolicies: {
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AccessPolicyEntry"
            }
          }
        }
      },
      enabledForDeployment: {
        serializedName: "enabledForDeployment",
        type: {
          name: "Boolean"
        }
      },
      enabledForDiskEncryption: {
        serializedName: "enabledForDiskEncryption",
        type: {
          name: "Boolean"
        }
      },
      enabledForTemplateDeployment: {
        serializedName: "enabledForTemplateDeployment",
        type: {
          name: "Boolean"
        }
      },
      enableSoftDelete: {
        serializedName: "enableSoftDelete",
        type: {
          name: "Boolean"
        }
      },
      enableRbacAuthorization: {
        serializedName: "enableRbacAuthorization",
        type: {
          name: "Boolean"
        }
      },
      softDeleteRetentionInDays: {
        serializedName: "softDeleteRetentionInDays",
        type: {
          name: "Number"
        }
      },
      createMode: {
        serializedName: "createMode",
        type: {
          name: "Enum",
          allowedValues: [
            "recover",
            "default"
          ]
        }
      },
      enablePurgeProtection: {
        serializedName: "enablePurgeProtection",
        type: {
          name: "Boolean"
        }
      },
      networkAcls: {
        serializedName: "networkAcls",
        type: {
          name: "Composite",
          className: "NetworkRuleSet"
        }
      }
    }
  }
};

export const VaultAccessPolicyProperties: msRest.CompositeMapper = {
  serializedName: "VaultAccessPolicyProperties",
  type: {
    name: "Composite",
    className: "VaultAccessPolicyProperties",
    modelProperties: {
      accessPolicies: {
        required: true,
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AccessPolicyEntry"
            }
          }
        }
      }
    }
  }
};

export const DeletedVaultProperties: msRest.CompositeMapper = {
  serializedName: "DeletedVaultProperties",
  type: {
    name: "Composite",
    className: "DeletedVaultProperties",
    modelProperties: {
      vaultId: {
        readOnly: true,
        serializedName: "vaultId",
        type: {
          name: "String"
        }
      },
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      deletionDate: {
        readOnly: true,
        serializedName: "deletionDate",
        type: {
          name: "DateTime"
        }
      },
      scheduledPurgeDate: {
        readOnly: true,
        serializedName: "scheduledPurgeDate",
        type: {
          name: "DateTime"
        }
      },
      tags: {
        readOnly: true,
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VaultCreateOrUpdateParameters: msRest.CompositeMapper = {
  serializedName: "VaultCreateOrUpdateParameters",
  type: {
    name: "Composite",
    className: "VaultCreateOrUpdateParameters",
    modelProperties: {
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "VaultProperties"
        }
      }
    }
  }
};

export const VaultPatchParameters: msRest.CompositeMapper = {
  serializedName: "VaultPatchParameters",
  type: {
    name: "Composite",
    className: "VaultPatchParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VaultPatchProperties"
        }
      }
    }
  }
};

export const VaultAccessPolicyParameters: msRest.CompositeMapper = {
  serializedName: "VaultAccessPolicyParameters",
  type: {
    name: "Composite",
    className: "VaultAccessPolicyParameters",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VaultAccessPolicyProperties"
        }
      }
    }
  }
};

export const Vault: msRest.CompositeMapper = {
  serializedName: "Vault",
  type: {
    name: "Composite",
    className: "Vault",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "VaultProperties"
        }
      }
    }
  }
};

export const DeletedVault: msRest.CompositeMapper = {
  serializedName: "DeletedVault",
  type: {
    name: "Composite",
    className: "DeletedVault",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeletedVaultProperties"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        readOnly: true,
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VaultCheckNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "VaultCheckNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "VaultCheckNameAvailabilityParameters",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        isConstant: true,
        serializedName: "type",
        defaultValue: 'Microsoft.KeyVault/vaults',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      nameAvailable: {
        readOnly: true,
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        readOnly: true,
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "AccountNameInvalid",
            "AlreadyExists"
          ]
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnection",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResource: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResource",
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      groupId: {
        readOnly: true,
        serializedName: "properties.groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        readOnly: true,
        serializedName: "properties.requiredMembers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PrivateLinkResourceListResult: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResourceListResult",
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LogSpecification: msRest.CompositeMapper = {
  serializedName: "LogSpecification",
  type: {
    name: "Composite",
    className: "LogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSpecification: msRest.CompositeMapper = {
  serializedName: "ServiceSpecification",
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LogSpecification"
            }
          }
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification"
        }
      }
    }
  }
};

export const Attributes: msRest.CompositeMapper = {
  serializedName: "Attributes",
  type: {
    name: "Composite",
    className: "Attributes",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      notBefore: {
        serializedName: "nbf",
        type: {
          name: "UnixTime"
        }
      },
      expires: {
        serializedName: "exp",
        type: {
          name: "UnixTime"
        }
      },
      created: {
        readOnly: true,
        serializedName: "created",
        type: {
          name: "UnixTime"
        }
      },
      updated: {
        readOnly: true,
        serializedName: "updated",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const SecretAttributes: msRest.CompositeMapper = {
  serializedName: "SecretAttributes",
  type: {
    name: "Composite",
    className: "SecretAttributes",
    modelProperties: {
      ...Attributes.type.modelProperties
    }
  }
};

export const SecretProperties: msRest.CompositeMapper = {
  serializedName: "SecretProperties",
  type: {
    name: "Composite",
    className: "SecretProperties",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      },
      secretUri: {
        readOnly: true,
        serializedName: "secretUri",
        type: {
          name: "String"
        }
      },
      secretUriWithVersion: {
        readOnly: true,
        serializedName: "secretUriWithVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretPatchProperties: msRest.CompositeMapper = {
  serializedName: "SecretPatchProperties",
  type: {
    name: "Composite",
    className: "SecretPatchProperties",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "SecretAttributes"
        }
      }
    }
  }
};

export const SecretCreateOrUpdateParameters: msRest.CompositeMapper = {
  serializedName: "SecretCreateOrUpdateParameters",
  type: {
    name: "Composite",
    className: "SecretCreateOrUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SecretProperties"
        }
      }
    }
  }
};

export const SecretPatchParameters: msRest.CompositeMapper = {
  serializedName: "SecretPatchParameters",
  type: {
    name: "Composite",
    className: "SecretPatchParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SecretPatchProperties"
        }
      }
    }
  }
};

export const Secret: msRest.CompositeMapper = {
  serializedName: "Secret",
  type: {
    name: "Composite",
    className: "Secret",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SecretProperties"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionsPutHeaders: msRest.CompositeMapper = {
  serializedName: "privateendpointconnections-put-headers",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionsPutHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionsDeleteHeaders: msRest.CompositeMapper = {
  serializedName: "privateendpointconnections-delete-headers",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionsDeleteHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultListResult: msRest.CompositeMapper = {
  serializedName: "VaultListResult",
  type: {
    name: "Composite",
    className: "VaultListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Vault"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeletedVaultListResult: msRest.CompositeMapper = {
  serializedName: "DeletedVaultListResult",
  type: {
    name: "Composite",
    className: "DeletedVaultListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeletedVault"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceListResult: msRest.CompositeMapper = {
  serializedName: "ResourceListResult",
  type: {
    name: "Composite",
    className: "ResourceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Resource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretListResult: msRest.CompositeMapper = {
  serializedName: "SecretListResult",
  type: {
    name: "Composite",
    className: "SecretListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Secret"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
