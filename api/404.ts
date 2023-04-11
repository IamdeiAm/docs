import url from "url";
import fetch from "node-fetch";
import { redirects } from "./data/redirects";
import type { VercelRequest, VercelResponse } from "@vercel/node";

function getProtocol() {
  const isProd = process.env.VERCEL_ENV === "production";
  if (isProd) return "https://";
  return "http://";
}

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const foundRedirect = redirects.find(
    (redirect) => redirect.source === url.parse(req.url!).pathname
  );

  if (foundRedirect) {
    // If req.url found redirect to destionation
    if (foundRedirect.permanent) {
      res.statusCode = 308;
    } else {
      res.statusCode = 307;
    }
    res.setHeader("location", foundRedirect.destination);
    // Caching headers
    res.setHeader("Cache-Control", "s-maxage=600");
    return res.end();
  } else {
    // If req.url not found show 404 page
    // Get the 404.html file
    process.env.VERCEL_ENV === "production";

    const response = await fetch(
      getProtocol() + process.env.VERCEL_URL + "/404.html"
    );
    const body = await response.text();
    res.statusCode = 404;
    // Caching headers
    res.setHeader("Cache-control", "s-maxage=600");
    return res.end(body);
  }
};
