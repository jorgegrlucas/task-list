import { Router } from "express";

const routes = new Router();

routes.get('/teste', (req,res)=> {
    return res.json({ ok: true});
});

routes.get("/:universalURL", (req, res) => { 
    res.send("404 URL NÃO ENCONTRADA"); 
 });

export default routes;