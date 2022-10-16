import Cloudflare from "cloudflare";
let cf = new Cloudflare({ token: process.env.CF_TOKEN });

export default async function handler(req, res) {
    console.log(await cf.dnsRecords.browse(process.env.CF_ZONE));
    res.end(`test`)
}  