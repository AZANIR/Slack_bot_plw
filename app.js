import * as fetch from "node-fetch";

const SLACK_BOT_TOKEN = process.env.SLACK_TOKEN;

const payload = {
  channel: process.env.SLACK_CHANNEL_ID,
  attachments: [
    {
      title: "My first Slack Message",
      text: "Random example message text",
      author_name: "alejandrogonzalez3",
      color: "#00FF00",
    },
  ],
};

fetch("https://slack.com/api/chat.postMessage", {
  method: "POST",
  body: JSON.stringify(payload),
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": payload.length,
    Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    Accept: "application/json",
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Server error ${res.status}`);
    }

    return res.json();
  })
  .catch((error) => {
    console.log(error);
  });