# vue-pwa-tutorial

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### SEND POST REQUEST TO "https://fcm.googleapis.com/fcm/send"
  * Header: {"Content-Type":"application/json","Authorization":"key=AAAA...++"}
  * Body:
      -single: {
              "to": "dlU2ob5gafw:APA91bFvVQR29NeFBytT4B1CWqupSKU6ziHK3MPH30KWC6RO_LTiRbApW9gJKB2i0QglxuuihXoMxnLsxSYQYYf2IXvaI4FeYnt48E2rFL-kxaNHoN1u7-aWas0qVmLKd4ieyVcSuO-y"
              "notification": {
                "title": "Test Title",
                "body": "Test body",
                "icon": "./img/icons/android-chrome-192x192.png",
                .
                .
                .
              }
       - Multiple: {
            "registration_ids": ["dlU2ob5gafw:APA91bFvVQR29NeFBytT4B1CWqupSKU6ziHK3MPH30KWC6RO_LTiRbApW9gJKB2i0QglxuuihXoMxnLsxSYQYYf2IXvaI4FeYnt48E2rFL-kxaNHoN1u7-aWas0qVmLKd4ieyVcSuO-y","f7UUam_kqUI:APA91bGQe51jxmL14jfL1d2Jnbr0ZRzGDjke627_YdkXzm1Vq2DLFbhczWHkftO0PzUzCfU6l_JjHwelulZGlFCoxWPlaeuVwfliKQhiYn-WnJZVaG109mTbiJd3zV1VG6KcYDeuf310","dkbIu08daTE:APA91bFn7kyVvaSngw4BIlP9yIxW95c3nbBXJ0UluKaCY_X6PVA_uD6L28S3VgcUF5DlVZy22X_0ostbKufNEwa1WCLzu2qoYQf7iKlypQFynvZWbW0hNmAKCQeV2ZAvWtM-RlrNKh6f"]
            "notification": {
              "title": "Test Title",
                "body": "Test body",
                "icon": "./img/icons/android-chrome-192x192.png",
                .
                .
                .
            }
          }
            }
      
