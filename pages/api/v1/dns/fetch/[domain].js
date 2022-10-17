import Cloudflare from "cloudflare";
let cf = new Cloudflare({ token: process.env.CF_TOKEN });

// @todo #fetch Make sure the person owns it in the DB and then fetch the record info for the provided domain

export default async function handler(req, res) {
    res.end(`test`)
}  
