module.exports = {
  Topics: [
    {
      TopicName: "CHANNEL_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["CHANNEL_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
    },
    {
      TopicName: "CHANNEL_UPDATE",
      Method: "PUT",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateChannel",
          OnSuccessTopicsToPush: ["CHANNEL_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATE:5653349f-836c-4048-822c-5bf26e1d573f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATE",
    },
    {
      TopicName: "CHANNEL_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteChannel",
          OnSuccessTopicsToPush: ["CHANNEL_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETE:ef7ad505-b5e6-4298-8262-9acab147499f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETE",
    },
    {
      TopicName: "CHANNEL_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendChannelAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_ADDED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADDED:0855ffef-23f5-4a38-adaa-93552bcd5e86",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADDED:467f7f6a-c5f7-49e7-913b-fcd59bc248d9",
        },
        {
          Service: "BILLING_SERVICE",
          Function: "AddBillPlanForCurrentChannel",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER", "NOTIFICATION_ADD"],
          QueueName: "CHANNEL_ADDED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADDED:03962f94-1250-4d94-a85a-3f688de8e6d8",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADDED",
    },
    {
      TopicName: "CHANNEL_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendChannelUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATED:3ba2f0e2-6109-4226-b2ac-a749edf86a53",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATED:0040c895-fc0d-43ba-94e9-fbb78783ba53",
        },
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateBillPlanForCurrentChannel",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER", "NOTIFICATION_ADD"],
          QueueName: "CHANNEL_UPDATED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATED:036832b0-521e-4d45-b2d5-7ffad983bab6",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATED",
    },
    {
      TopicName: "CHANNEL_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendChannelDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_DELETED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETED:24bac9e2-8bb6-43c5-8d7c-788fe4fc8399",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETED:2083c143-abd0-40df-bfe4-1ae5b41c00f0",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETED",
    },
    {
      TopicName: "GROUP_ADD",
      Method: "POST",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "InsertGroup",
          OnSuccessTopicsToPush: ["GROUP_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_ADD:5ae0a3fd-3d13-47fc-aa9e-4bb8c6d17f83",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_ADD",
    },
    {
      TopicName: "GROUP_UPDATE",
      Method: "PUT",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateGroup",
          OnSuccessTopicsToPush: ["GROUP_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATE:dbe485f2-74b1-4bbd-a54e-0c7a67ab9e12",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATE",
    },
    {
      TopicName: "GROUP_DELETE",
      Method: "DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteGroup",
          OnSuccessTopicsToPush: ["GROUP_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_DELETE:268e453b-38f9-475e-a0da-44d2571e0e72",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_DELETE",
    },
    {
      TopicName: "GROUP_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_ADDED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_ADDED:4a1df1d7-b135-441f-9ba2-0ae844c4e074",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_ADDED:ab39deda-35e3-4f27-ae00-a8e16817e57b",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_ADDED",
    },
    {
      TopicName: "GROUP_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_UPDATED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATED:d2ea50ba-94a7-4849-b78a-011d417fc42c",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATED:a2e408b0-1c43-4150-a8f4-8b05e3bb7137",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATED",
    },
    {
      TopicName: "GROUP_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_DELETED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_DELETED:42f86779-12f5-4184-bc1b-6d291112fac1",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_DELETED:03b18528-e72e-4857-9288-0337d204e77a",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_DELETED",
    },
    {
      TopicName: "SUBSCRIPTION_ADD",
      Method: "POST",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddSubscription",
          OnSuccessTopicsToPush: ["SUBSCRIPTION_ADDED", "PAYMENT_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTION_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTION_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADD:9fac1b44-b016-4be8-af66-14e64062abe5",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADD",
    },
    {
      TopicName: "SUBSCRIPTION_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "AddPaymentForGivenSubscription",
          OnSuccessTopicsToPush: ["PAYMENT_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADDED:4386c3f7-86b6-4e7d-b39a-7025f77c00f0",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "AcknowledgeToUIForSubscriptionAdded",
          OnSuccessTopicsToPush: ["SUBSCRIPTION_ADDED", "PAYMENT_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADDED:1b31d1ed-6e43-47ca-90ce-2fc32e9e9394",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADDED",
    },
    {
      TopicName: "PAYMENT_ADD",
      Method: "POST",
      Publishers: ["PAYMENT_SERVICE"],
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "InsertPayments",
          OnSuccessTopicsToPush: ["PAYMENT_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADD-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADD:7f50167b-2a19-4af1-83a4-779e0b035463",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADD",
    },
    {
      TopicName: "PAYMENT_ADDED",
      Publishers: ["PAYMENT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateSubscriptionWithPaymentDetails",
          OnSuccessTopicsToPush: ["SUBSCRIPTION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED:3df134f7-df58-4726-9999-529c9ff569ad",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "AcknowledgeToUIForPaymentAdded",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED:86304c32-aa6a-4521-b05b-229f44158e3c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED",
    },
    {
      TopicName: "ERROR_RECEIVER",
      Publishers: [],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "HandleGenericErrorForServiceIssue",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [],
          QueueName: "ERROR_RECEIVER-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/ERROR_RECEIVER-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:ERROR_RECEIVER-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:ERROR_RECEIVER:bb1b3971-a144-43b6-b221-8af04c1851cf",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:ERROR_RECEIVER",
    },
    {
      TopicName: "COMMUNITY_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddCommunity",
          OnSuccessTopicsToPush: ["COMMUNITY_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADD:4b695e7e-51d7-4e87-820a-f4be81efd784",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADD",
    },
    {
      TopicName: "COMMUNITY_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateCommunity",
          OnSuccessTopicsToPush: ["COMMUNITY_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATE:9c688e9b-02fc-4a45-8fae-7acba9d300d7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATE",
    },
    {
      TopicName: "COMMUNITY_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteCommunity",
          OnSuccessTopicsToPush: ["COMMUNITY_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETE:cf59b090-1d0b-43eb-ab64-5b60f8226998",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETE",
    },
    {
      TopicName: "COMMUNITY_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_ADDED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADDED:67dd54d4-2c99-4c89-80a0-5835aae7298a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADDED:76b755c2-f563-410b-8e9e-d3c849960bf1",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADDED",
    },
    {
      TopicName: "COMMUNITY_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_UPDATED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATED:e1dc1a0b-01d8-4359-b126-6911331ba42d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATED:1ee6dadf-ebea-40d3-b57c-a5d3e34fc673",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATED",
    },
    {
      TopicName: "COMMUNITY_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_DELETED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETED:df4e585e-cb6f-44be-894b-e019bf1e7484",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETED:fc4360fa-8c3c-4335-b93f-6f861756e841",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETED",
    },
    {
      TopicName: "USER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddUser",
          OnSuccessTopicsToPush: ["USER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_ADD-GROUP_SERVICE",
          QueueArn: "arn:aws:sqs:us-west-2:938510084600:USER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_ADD:3a88ddaa-cab4-4a5d-abbb-2b77b72cf338",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_ADD",
    },
    {
      TopicName: "USER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateUser",
          OnSuccessTopicsToPush: ["USER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_UPDATE:c8ac104d-c7d5-4694-99b5-a9060415a2f7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_UPDATE",
    },
    {
      TopicName: "USER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteUser",
          OnSuccessTopicsToPush: ["USER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_DELETE:58561e86-9e16-436f-be85-c8b4ebbe4bcf",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_DELETE",
    },
    {
      TopicName: "USER_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_ADDED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_ADDED:934dfeba-5857-4069-a60f-99c8e2cad21f",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_ADDED:b6557426-5861-4541-803c-ef9296d86a88",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_ADDED",
    },
    {
      TopicName: "USER_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_UPDATED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_UPDATED:1557ffee-6127-433f-91a0-b7f7a36bfd2b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_UPDATED:a0f6fdf9-fe6b-4587-94b6-d421f35a8dfe",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_UPDATED",
    },
    {
      TopicName: "USER_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_DELETED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_DELETED:23f03705-cd1c-4dfe-b3d7-e3b84a8dd66d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_DELETED:b2e92eeb-508a-434c-90a8-30ef653c9dfe",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_DELETED",
    },
    {
      TopicName: "GROUPUSER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddGroupUser",
          OnSuccessTopicsToPush: ["GROUPUSER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_ADD:55778e20-5970-4cb4-ba86-9c65af7697f7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_ADD",
    },
    {
      TopicName: "GROUPUSER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateGroupUser",
          OnSuccessTopicsToPush: ["GROUPUSER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_UPDATE:de883aa2-aeec-4f5e-abae-2d2c048d56ef",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_UPDATE",
    },
    {
      TopicName: "GROUPUSER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteGroupUser",
          OnSuccessTopicsToPush: ["GROUPUSER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_DELETE:c1038017-12c2-4772-8df4-adcfcb454642",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_DELETE",
    },
    {
      TopicName: "CHANNELGROUP_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddChannelGroup",
          OnSuccessTopicsToPush: ["CHANNELGROUP_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADD:d557945b-1e9e-4e0d-b8ad-cc8d28cb27c4",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADD",
    },
    {
      TopicName: "CHANNELGROUP_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateChannelGroup",
          OnSuccessTopicsToPush: ["CHANNELGROUP_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATE:5bd0776a-e1a4-4f41-84e8-53e32e393356",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATE",
    },
    {
      TopicName: "CHANNELGROUP_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteChannelGroup",
          OnSuccessTopicsToPush: ["CHANNELGROUP_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETE:ef75c69e-1690-4b24-9b0c-731f8d506bab",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETE",
    },
    {
      TopicName: "SECTION_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddChannelGroup",
          OnSuccessTopicsToPush: ["SECTION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_ADD:9b16cc4a-9c35-45ae-a12f-23caa8e4f93f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_ADD",
    },
    {
      TopicName: "SECTION_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateSection",
          OnSuccessTopicsToPush: ["SECTION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_UPDATE:5c65b809-e00d-4c38-8ca1-bf84503a57d2",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_UPDATE",
    },
    {
      TopicName: "SECTION_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteSection",
          OnSuccessTopicsToPush: ["SECTION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_DELETE:0bc05d20-8f5e-4591-b00f-d7c86bbaa641",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_DELETE",
    },
    {
      TopicName: "LESSON_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddLesson",
          OnSuccessTopicsToPush: ["LESSON_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_ADD:14f6ea89-1487-4a99-b188-22571a0d2778",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_ADD",
    },
    {
      TopicName: "LESSON_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateLesson",
          OnSuccessTopicsToPush: ["LESSON_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_UPDATE:ee17697f-915d-4139-8fbd-42c79a457076",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_UPDATE",
    },
    {
      TopicName: "LESSON_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteLesson",
          OnSuccessTopicsToPush: ["LESSON_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_DELETE:075093f3-f3cc-49c1-a6b3-1c662a0a8e9b",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_DELETE",
    },
    {
      TopicName: "LESSONDATA_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddLessonData",
          OnSuccessTopicsToPush: ["LESSONDATA_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_ADD:a11918b0-3532-48cb-afaf-2200208edcbd",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_ADD",
    },
    {
      TopicName: "LESSONDATA_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateLessonData",
          OnSuccessTopicsToPush: ["LESSONDATA_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_UPDATE:7fde44f7-8268-42a8-b231-a044d62c530c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_UPDATE",
    },
    {
      TopicName: "LESSONDATA_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteLessonData",
          OnSuccessTopicsToPush: ["LESSONDATA_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_DELETE:4378cddc-1fe7-4c26-9bc9-d9b4dacd6666",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_DELETE",
    },
    {
      TopicName: "LIVECONTENT_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddLiveContent",
          OnSuccessTopicsToPush: ["LIVECONTENT_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_ADD:fd71a3e2-2d78-4f36-a5d3-eb9a6117778e",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_ADD",
    },
    {
      TopicName: "LIVECONTENT_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateLiveContent",
          OnSuccessTopicsToPush: ["LIVECONTENT_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_UPDATE:3f74428d-5610-4a5c-94ed-cfbff4d3cbef",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_UPDATE",
    },
    {
      TopicName: "LIVECONTENT_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteLiveContent",
          OnSuccessTopicsToPush: ["LIVECONTENT_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_DELETE:c29e779c-29b2-4d59-8dd1-38085ddeff17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_DELETE",
    },
    {
      TopicName: "LIVECONTENTUSER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddLiveContentUser",
          OnSuccessTopicsToPush: ["LIVECONTENTUSER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_ADD:31011498-0e07-4f07-b7cc-e83a205054f7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_ADD",
    },
    {
      TopicName: "LIVECONTENTUSER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateLiveContentUser",
          OnSuccessTopicsToPush: ["LIVECONTENTUSER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_UPDATE:d835ddfa-a065-4917-a4bb-d73f408e32fe",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_UPDATE",
    },
    {
      TopicName: "LIVECONTENTUSER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteLiveContentUser",
          OnSuccessTopicsToPush: ["LIVECONTENTUSER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_DELETE:004bbd66-49e8-4bc7-8613-a819ff6b8d79",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_DELETE",
    },
    {
      TopicName: "CHANNELBILLPLAN_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELBILLPLAN_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_ADD:95862389-c3e0-4d97-bc51-ae2a1cc7afba",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_ADD",
    },
    {
      TopicName: "CHANNELBILLPLAN_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELBILLPLAN_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_UPDATE:edac5838-6d48-46b1-889b-96900688b36d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_UPDATE",
    },
    {
      TopicName: "CHANNELBILLPLAN_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELBILLPLAN_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_DELETE:3b0e7078-b792-430c-a30b-81ee4ed97c88",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_DELETE",
    },
    {
      TopicName: "PLAN_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "AddPlans",
          OnSuccessTopicsToPush: ["PLAN_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_ADD-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_ADD:a266ad50-4539-4fde-a563-b26d047351af",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_ADD",
    },
    {
      TopicName: "PLAN_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "UpdatePlans",
          OnSuccessTopicsToPush: ["PLAN_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_UPDATE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_UPDATE:06f03f9a-7bfd-412d-9a19-f51464568ce1",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_UPDATE",
    },
    {
      TopicName: "PLAN_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "DeletePlans",
          OnSuccessTopicsToPush: ["PLAN_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_DELETE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_DELETE:ddbe6026-066f-4424-89dd-6a767d46fa80",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_DELETE",
    },
    {
      TopicName: "COUPON_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "AddCoupons",
          OnSuccessTopicsToPush: ["COUPON_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_ADD-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_ADD:b9925569-6abf-4690-9902-841b3a8e82da",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_ADD",
    },
    {
      TopicName: "COUPON_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateCoupons",
          OnSuccessTopicsToPush: ["COUPON_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_UPDATE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_UPDATE:c6936c4f-1f23-4b8b-847c-a7e6146b8c61",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_UPDATE",
    },
    {
      TopicName: "COUPON_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "DeleteCoupons",
          OnSuccessTopicsToPush: ["COUPON_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_DELETE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_DELETE:4aec2da1-6a0c-486c-9103-e139f8999beb",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_DELETE",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "AddSubscriptionOrders",
          OnSuccessTopicsToPush: ["SUBSCRIPTIONORDER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_ADD:41910efd-2cd8-48e8-aa04-147eb0af2a4c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_ADD",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateSubscriptionOrders",
          OnSuccessTopicsToPush: ["SUBSCRIPTIONORDER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATE:d193f996-87ca-4b77-b2ca-95bee47799ce",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATE",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "DeleteSubscriptionOrders",
          OnSuccessTopicsToPush: ["SUBSCRIPTIONORDER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETE:67bb54d6-aff3-449a-9efc-91539e4d69a8",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETE",
    },
    {
      TopicName: "PAYMENTCOUPON_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "AddPaymentCoupons",
          OnSuccessTopicsToPush: ["PAYMENTCOUPON_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_ADD:5f5a5d4c-237d-41a0-8231-5c065affeb2f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_ADD",
    },
    {
      TopicName: "PAYMENTCOUPON_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "UpdatePaymentCoupons",
          OnSuccessTopicsToPush: ["PAYMENTCOUPON_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_UPDATE:d555ea08-647e-418e-bd32-4e34a9f4c070",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_UPDATE",
    },
    {
      TopicName: "PAYMENTCOUPON_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "DeletePaymentCoupons",
          OnSuccessTopicsToPush: ["PAYMENTCOUPON_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_DELETE:542aeb5a-edca-4333-b79c-f2457839e00d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_DELETE",
    },
    {
      TopicName: "PAYMENT_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "AddPayments",
          OnSuccessTopicsToPush: ["PAYMENT_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADD-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADD:7f50167b-2a19-4af1-83a4-779e0b035463",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADD",
    },
    {
      TopicName: "PAYMENT_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "UpdatePayments",
          OnSuccessTopicsToPush: ["PAYMENT_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_UPDATE-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_UPDATE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_UPDATE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_UPDATE:534f5302-07b5-4c46-9f4b-ba5ef6e4a5a7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_UPDATE",
    },
    {
      TopicName: "PAYMENT_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "DeletePayments",
          OnSuccessTopicsToPush: ["PAYMENT_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_DELETE-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_DELETE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_DELETE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_DELETE:4201246e-b1b5-4ef8-bcb8-fd279948c42a",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_DELETE",
    },
    {
      TopicName: "LESSONDATAREVIEW_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddLessonDataReviews",
          OnSuccessTopicsToPush: ["LESSONDATAREVIEW_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_ADD:1d42ab08-2c9e-4d51-8548-bd04ec768792",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_ADD",
    },
    {
      TopicName: "LESSONDATAREVIEW_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateLessonDataReviews",
          OnSuccessTopicsToPush: ["LESSONDATAREVIEW_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_UPDATE:821309a8-0b52-4aa0-a018-466403a29224",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_UPDATE",
    },
    {
      TopicName: "LESSONDATAREVIEW_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteLessonDataReviews",
          OnSuccessTopicsToPush: ["LESSONDATAREVIEW_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_DELETE:b2a2426e-bfa4-4172-83ae-8bc34bf4b4d3",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_DELETE",
    },
    {
      TopicName: "MEETINGPROVIDER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "AddMeetingProviders",
          OnSuccessTopicsToPush: ["MEETINGPROVIDER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "MEETINGPROVIDER_ADD-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/MEETINGPROVIDER_ADD-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:MEETINGPROVIDER_ADD-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_ADD:d662ff2f-c1e6-448c-8223-f48e381697df",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_ADD",
    },
    {
      TopicName: "MEETINGPROVIDER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "UpdateMeetingProviders",
          OnSuccessTopicsToPush: ["MEETINGPROVIDER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_UPDATE:a0da7fdc-9746-4886-88bf-a9f19f6112c1",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_UPDATE",
    },
    {
      TopicName: "MEETINGPROVIDER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "DeleteMeetingProviders",
          OnSuccessTopicsToPush: ["MEETINGPROVIDER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_DELETE:cfcfd94e-0127-436c-b3ae-bc2d8d606522",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_DELETE",
    },
  ],
};
