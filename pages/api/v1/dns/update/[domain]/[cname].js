import { withApiAuth } from '@supabase/auth-helpers-nextjs';
import Cloudflare from "cloudflare";
let cf = new Cloudflare({ token: process.env.CF_TOKEN });

// @todo #update Allow user to update cname record

export default withApiAuth(async function DomainUpdHandler(req, res, supabaseServerClient) {
    const { domain, cname } = req.query;
    const { data, error } = await supabaseServerClient.from('addresses').select('cname').eq('name', domain).single();
    if (error && error.code == 'PGRST116') {
        res.json({code: error.code, msg: `Invalid Domain`});
    }
    else {
        const dnsRecords = await cf.dnsRecords.browse(process.env.CF_ZONE);
        const domainRecord = dnsRecords.result.find(el => el.name == domain);
        if (domainRecord.content == cname || data.cname == (cname || domainRecord.content)) {
            res.json({code: 'INVCNAME', msg: `CNAME is already being used for this domain`});
        } else if(!domainRecord) {
            res.json({code: 'INVDOM', msg: `DOMAIN wasn't found on DNS`});
        }
        res.json(domainRecord);
    }
});
