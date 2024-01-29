# Send Slack notification with Playwright

## Setup

- Let's setup the 'Slack App' first:
    
    Go to [Slack API Page](https://api.slack.com/apps) and click the "Create New App" button.
    
    ![Slack API Page create](https://i.imgur.com/iVOSPem.png)
    
    Select 'From scratch' and provide a name of your app and then choose the desired workspace.

    Under Basic Information section, under “Add features and functionality” section, click on “Permissions” tab, you will be redirected to "OAuth & Permissions" page under which scroll to "Scopes" section, and select the permissions shown in the screenshot below:

    ![Slack API Page permissions](https://i.imgur.com/lOEKjIZ.png)

    Once those permissions have been added, scroll up to fetch the OAuth token which will be later used in the app for sending the notifications.

    Note: OAuth token is provided after the app has been installed on your workspace (the one which you selected while creating the app.)

    ![Slack API Page OAuth token](https://i.imgur.com/40h7HKd.png)

    ![Slack API Page OAuth token](https://i.imgur.com/trSFMs2.png)

    ![Slack API Page OAuth token](https://i.imgur.com/eCTagjz.png)

    ![Slack API Page OAuth token](https://i.imgur.com/6L3slOx.png)

    Create .env file and put on it the OAuth token:

    ```bash
    SLACK_BOT_TOKEN = ''
    SLACK_CHANNEL = ''
    SLACK_SIGNING_SECRET = ''
    ```
    
    Use the [Block Kit Builder](https://app.slack.com/block-kit-builder) to create Your message. In file ***utils/send-slack.js*** you can see the example of the message.

    ![Slack Block Builder](https://i.imgur.com/1CMtIP8.png)

    This script like example to the send message to Slack channel.

    ![Slack message](https://i.imgur.com/eyu1Scv.png)