# Cloudflare Workers IP Service

A super-lightweight Cloudflare Worker that returns the client's IP address.  Works with IPv4 and IPv6.
Perfect for use with `curl`.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/lsemenenko/ip-curl-service-cloudflare-worker)

## 🚀 Usage

Deploy:
```bash
npm install
npm run deploy
```

Test locally:
```bash
npm run start
```

Example for IPv4:
```bash
curl -4 https://your-worker.your-subdomain.workers.dev
```

Expected response:
```
203.0.113.25
```

Example for IPv6:
```bash
curl -6 https://your-worker.your-subdomain.workers.dev
```

Expected response:
```
2001:db8:85a3:8d3:1319:8a2e:370:7348
```