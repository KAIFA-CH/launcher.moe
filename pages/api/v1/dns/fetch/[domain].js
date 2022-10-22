import { withApiAuth } from '@supabase/auth-helpers-nextjs';

export default withApiAuth(async function DomainHandler(req, res, supabaseServerClient) {
    const { domain } = req.query;
    const { data, error } = await supabaseServerClient.from('addresses').select('cname').eq('name', domain).single();
    if (error && error.code == 'PGRST116')
        res.json({code: error.code, msg: `Invalid Domain`});
    else
        res.json(data);
});
