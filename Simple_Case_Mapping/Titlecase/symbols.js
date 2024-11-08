module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))