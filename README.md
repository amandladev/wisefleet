
# Wisefleet

Docs for installation.

E-commerce.





## Installation

1. Clone Wisefleet project

```bash
  git clone https://github.com/sreyescurotto/wisefleet.git
  cd wisefleet
```


2. Install node version 18+ or higher.
3. Install PNPM.
4. Install pm2 (See docs based on your Linux Distribution). 
https://www.tecmint.com/install-pm2-to-run-nodejs-apps-on-linux-server/

This is for centos 7 for example.
4.1 There are some alternatives to pm2 on Windows enviroments like:
- forever
- nssm

5.  Add and .env file in the root directory of the project, you can do it using vim or nano.
```bash
MYSQL_HOST= 
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
ENVIAME_API_KEY=
ENVIAME_COMPANY_ID=

OPENPAY_URL_SANDBOX=
OPENPAY_MERCHANT_ID=
OPENPAY_PRIVATE_KEY=
OPENPAY_PUBLIC_KEY=
RESEND_API_KEY=

ENVIAME_URL=
ENVIAME_URL_2=
```

6. Build and start the project (pm2 for Unix enviroments)
```bash
pnpm run build 
pm2 start pnpm --name "wisefleet-app" -- run start --no-daemon

```

