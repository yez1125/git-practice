const https = require("https");

exports.handler = async (event) => {
  const webhookURL =
    "https://discord.com/api/webhooks/1308094453315010590/GjLqW1krng_MC5AwyVURsKCTXbs6ncmcvtNmVF1RVjkvGSaGCviTKWfHE-7L_KMm-0S2"; // Replace with your Discord Webhook URL

  const message = {
    content: "注意!CPU 使用率超過60%!!!",
  };

  const payload = JSON.stringify(message);

  const options = {
    hostname: "discord.com",
    path: "/api/webhooks/1308094453315010590/GjLqW1krng_MC5AwyVURsKCTXbs6ncmcvtNmVF1RVjkvGSaGCviTKWfHE-7L_KMm-0S2", // Update with your webhook path
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(payload),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(`Status: ${res.statusCode}`);
        console.log(`Headers: ${JSON.stringify(res.headers)}`);
        console.log(`Body: ${data}`);
        resolve({
          statusCode: res.statusCode,
          body: data,
        });
      });
    });

    req.on("error", (e) => {
      reject({
        statusCode: 500,
        body: `Error: ${e.message}`,
      });
    });

    req.write(payload);
    req.end();
  });
};
