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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADD:70ac24ac-ab53-4e84-bc42-c18ebabcc1ae",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATE:b5585266-52ff-4aef-bae2-b1beb001dd0d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETE:e589f04c-b34e-4355-8e58-a287573761e4",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADDED:b6070a98-550e-422e-85db-53089026d2df",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADDED:93a3bbec-baed-41d9-9a1c-a4fe4522a58f",
        },
        {
          Service: "BILLING_SERVICE",
          Function: "AddBillPlanForCurrentChannel",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER", "NOTIFICATION_ADD"],
          QueueName: "CHANNEL_ADDED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADDED:dbc95e82-0fea-4dfb-a433-37d5db58da73",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADDED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATED:9a69e9e6-7cf7-44e8-ae9c-54477c1b6ce6",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATED:738cfab1-3278-44e1-be84-e8e1031bb6c1",
        },
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateBillPlanForCurrentChannel",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER", "NOTIFICATION_ADD"],
          QueueName: "CHANNEL_UPDATED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATED:b908cf9c-ab78-485b-9876-e4f043954e66",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETED:8f450319-e679-4e71-8739-1f59602e6c25",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETED:c7a6bc58-a648-4cd2-8dd8-7fce321e6f6f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_ADD:ab27e8c4-9c96-4e40-a384-1a97ebc9ba85",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATE:234b3006-e31d-4586-b96c-e42fa6010687",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_DELETE:47ffd63f-ee15-4172-9206-471949aa88a2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_ADDED:a26f7973-45ee-4deb-ac2b-cfd65220c96a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_ADDED:da3afe36-6800-4578-9a02-d701304d6aa7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_ADDED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATED:f0e33c6a-5e91-4eea-a4b0-46d47223a0c0",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATED:a99f6bee-c6f7-41e2-b9cd-a9423be38d1a",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_DELETED:f4f75861-081d-4cc6-9054-0103ae6652ae",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_DELETED:2439e34b-7609-4480-9e84-ec49bf78ea50",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_DELETED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTION_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTION_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADD:f81c03f1-0e5d-4d61-9dc8-513be61610f5",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADDED:bf2c2921-ad6e-45ec-9f3f-12e508e1af42",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "AcknowledgeToUIForSubscriptionAdded",
          OnSuccessTopicsToPush: ["SUBSCRIPTION_ADDED", "PAYMENT_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADDED:a9159744-73a3-4700-bcc7-791ef19d5074",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADDED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADD:94ef2dce-eddd-461b-bc22-86b332d6412f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED:3d64dc74-c2dc-4cb0-9b76-29d32017096d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "AcknowledgeToUIForPaymentAdded",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED:ee1c2826-bbaa-46b4-b637-e8e29bdfc32b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/ERROR_RECEIVER-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:ERROR_RECEIVER-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:ERROR_RECEIVER:4148756c-7f48-4bad-bfb5-a31e127c1aeb",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:ERROR_RECEIVER",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_ADD:735c1cb7-c00c-4126-b165-569f516d6590",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_UPDATE:af8aa427-6867-4d8b-bccb-321232e5f470",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_DELETE:7bfe8859-d3b5-41fc-9965-ed0a61650c67",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_DELETE",
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
          QueueName: "COMMUNITY_ADDED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_ADDED:a26f7973-45ee-4deb-ac2b-cfd65220c96a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_ADDED:da3afe36-6800-4578-9a02-d701304d6aa7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_ADDED",
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
          QueueName: "COMMUNITY_UPDATED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATED:a26f7973-45ee-4deb-ac2b-cfd65220c96a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_UPDATED:da3afe36-6800-4578-9a02-d701304d6aa7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_UPDATED",
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
          QueueName: "COMMUNITY_DELETED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_DELETED:a26f7973-45ee-4deb-ac2b-cfd65220c96a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_DELETED:da3afe36-6800-4578-9a02-d701304d6aa7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_DELETED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_ADD-GROUP_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:938510084600:USER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_ADD:c3b374ef-a92e-4815-8a37-a78d04921932",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_UPDATE:ba3b9001-e00c-4045-842b-de0545d33949",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_DELETE:01f4f54b-7e68-4fd9-999e-2baa941a6cc0",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_ADDED:51ed4484-355b-45ca-a60f-d1be6ff2dc56",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_ADDED:606f9bf6-9b85-4ac3-b0e6-3d964f966947",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_ADDED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_UPDATED:fd6b120e-5c0b-4367-bf11-958a10878b9d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_UPDATED:7a7a4d16-ddcf-4409-b725-924d4341ffd6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_UPDATED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_DELETED:a16d44b6-ffac-41fb-bd09-10388217e16c",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_DELETED:cdb56f65-19ba-4b12-a97c-29050d8e47a2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_DELETED",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_ADD:18fc7623-9e8f-441a-8b13-69503741e9bc",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_UPDATE:ef929b83-6130-4414-b2a9-73e33166f9d7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_DELETE:387daa33-c017-4ff4-aaf8-176be2169cbb",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADD:65a36909-36d4-4fa6-9581-12f47ec5f478",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATE:6583f911-88d9-4dca-a1ff-85bc903523b0",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETE:29c4a812-45c0-4227-9311-8a7f459a5ed7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_ADD:04c3c55e-37f2-45c8-9cf7-51574f9cacf7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_UPDATE:a35453c1-434d-4496-bd5f-448ceb45d8a0",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_DELETE:e5b9d80d-d9bd-477b-b798-868f6cee0efe",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_ADD:6a8b8ed7-e018-4ac5-b6a4-0d67f8af37c8",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_UPDATE:4b506e7e-52ad-459a-a50d-353688761a71",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_DELETE:11440dce-2a90-48ef-8079-ff8ce61fd432",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_ADD:afc49f1b-c857-4513-911a-a08471a38952",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_UPDATE:24f36013-5647-4192-8b01-6bd9ab226009",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_DELETE:727aa5a6-9898-46be-b3b9-f343b58f8a96",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_ADD:09fc9ef9-31b5-4695-b4e8-42e86a100fb8",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_UPDATE:d37e09fe-8330-407c-97c6-f25533ba1758",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_DELETE:d3c1ab97-6a47-41e2-a131-82c3c39fdb8d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_ADD:8d1ee4f1-9eb5-4a4e-9fc1-8c9132c68830",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_UPDATE:d76e26c9-b4b3-452d-88ff-0ed664c0e531",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_DELETE:9f84b905-f256-4601-a313-3ca1891737e1",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_ADD:20960b86-bcfe-43ce-b632-2a7966c05fe2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_UPDATE:0e5000ab-0c48-4bb3-bb13-b0ff19ec3dc5",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_DELETE:dae2cc9e-5f34-4904-a0a1-c34496522b41",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_ADD:7086bb74-bf07-4495-af93-bfdaac3a891a",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_UPDATE:0e9c9f20-7ac6-46a8-aa42-f44ac117579a",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_DELETE:8c680d0a-cf98-4a7b-bfe8-5ea9d4abdef2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_ADD:6e985692-6f13-4e73-97f0-ef1471eebe28",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_UPDATE:6167a3a6-d3d4-4a18-bac6-17c98d56968d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_DELETE:f293a1ff-7d6a-41a7-bccb-1a7c999d0cc8",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_ADD:8806770f-6f3b-4d49-b900-42bdb69a6d22",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATE:98a047b6-2273-467d-8d97-1c2c0f3d32dc",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETE:5ff5f94a-27b6-4417-be3e-ed428369f5e5",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_ADD:a85456fd-78fb-407e-acf7-7bf320fe8585",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_UPDATE:750493ec-51ff-49b0-b1bb-6e46b29434b0",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_DELETE:c263f03a-28a9-4f54-bdf2-3390d2d34adb",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADD:94ef2dce-eddd-461b-bc22-86b332d6412f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_UPDATE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_UPDATE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_UPDATE:c8fa3cbf-c9af-408a-9b23-5fd3fc916668",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_DELETE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_DELETE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_DELETE:e291b911-dcf6-46a9-a263-d1f672ecf149",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_ADD:30c2e17c-d135-4289-b832-495b536b104f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_UPDATE:7e158739-283b-45b4-b8d1-739cda77f4d7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_DELETE:dca6aad8-f2dd-47ce-ae49-9eaa73849cef",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_DELETE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/MEETINGPROVIDER_ADD-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:MEETINGPROVIDER_ADD-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_ADD:c84caae8-bfe8-4035-840b-b7c40a81f417",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_ADD",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_UPDATE:e51f6d3b-e966-4f88-a1a3-1db4d3cd6493",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_UPDATE",
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
            "https://sqs.us-east-2.amazonaws.com/938510084600/MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_DELETE:11121a85-4942-4e0a-b33d-522a29f7ef92",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_DELETE",
    },
  ],
};
