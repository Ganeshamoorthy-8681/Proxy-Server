import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";
import { COOKIE, DOMAIN, PORT } from "./Cookie.js";
const app = express();


//Allow CORS and headers as mentioned HERE
const corsOptions = {
  origin: '*',
  methods: ['GET,POST,PUT,DELETE,PATCH,OPTIONS'],
  allowedHeaders: ['Content-Type, Authorization, Content-Range, Cookie,Access-Control-Allow-Origin', "Range", "Accept"],
  exposedHeaders: 'Content-Range',
};
app.use(cors(corsOptions));

app.use('/proxy', (req, res, next) =>
{
  //REQUEST HEADERS
  console.log(`REQUEST RECEIVED ------> ${ req.url }`);
  req.headers["content-type"] = 'application/json';
  req.headers["accept"] = 'application/json';
  req.headers['Cookie'] = COOKIE.replace(/[\r\n\t]/g, '').trim();;
  next();
}, createProxyMiddleware({
  target: DOMAIN,
  changeOrigin: true,
  on: {
    proxyRes: async (proxyRes, res) =>
    {
      if (proxyRes.statusCode === 401)
      {
        console.log("..........................SESSION EXPIRED............................");
      }
    }
  }
}));

app.listen(PORT, () =>
{
  console.log(`...............SERVER IS UP AND RUNNING ON PORT: ${ PORT }..............`);
});

