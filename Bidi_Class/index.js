module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))