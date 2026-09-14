# guybarkan.site - GitHub + Netlify

הגרסה הזו נבנתה כך שיהיה קל מאוד לערוך אותה בעתיד.

## 1. איפה משנים טקסטים וקישורים?
כמעט הכול נמצא בקובץ:
`content.js`

פתח אותו ב-GitHub ולחץ על אייקון העיפרון.

אפשר לשנות:
- כותרת ראשית
- טקסט אודות
- WhatsApp
- Calendly
- Facebook
- טקסט וקישור מכבי קל

## 2. איך מחליפים סרטון YouTube?
ב-`content.js` תראה:

```js
videos: [
  {
    title: "מי אני",
    url: "https://youtu.be/..."
  }
]
```

פשוט מחליפים את הכתובת בשדה `url`.

אפשר להדביק:
- youtube.com/watch?v=...
- youtu.be/...
- youtube.com/shorts/...

אין צורך להכין קישור Embed.

## 3. איך מחליפים תמונה ראשית?
הדרך הכי קלה:

1. העלה תמונה חדשה לתיקיית `assets`.
2. למשל `guy-new.jpg`
3. ב-`content.js` שנה:

```js
heroImage: "assets/guy-new.jpg"
```

## 4. איך מוסיפים או מורידים תמונות המלצה?
מעלים תמונה לתיקיית assets ואז עורכים:

```js
reviewImages: [
  "assets/review1.png",
  "assets/review2.png"
]
```

אפשר להוסיף כמה שרוצים.

## 5. איך מפרסמים?
כאשר GitHub מחובר ל-Netlify:

1. ערוך קובץ.
2. לחץ Commit changes.
3. Netlify יפרסם אוטומטית את הגרסה החדשה.

## מבנה הקבצים

- index.html - מבנה האתר
- styles.css - עיצוב
- content.js - כל התוכן שנוח לעריכה
- app.js - קוד טכני
- assets/ - תמונות


## עדכון עיצוב אחרון
- הכותרת העליונה מציגה רק את לוגו ANIMO, ללא טקסט ANIMO.
- כפתור WhatsApp הוא עיגול ירוק עם אייקון.
- Facebook הוא עיגול כחול עם אייקון.
- Calendly מוצג כ"קביעת פגישה".
- שלושה סרטוני YouTube מוצגים אוטומטית מתוך content.js.
- אזור "נדבר?" שחור.


## באנר מתחלף
מיקום: מיד אחרי אזור הפתיחה ולפני אזור האודות השחור.

כדי להציג:
1. מעלים תמונה חדשה לתיקיית `assets`.
2. פותחים `content.js`.
3. משנים:

```js
banner: {
  enabled: true,
  image: "assets/banner-rosh-hashana.jpg",
  alt: "שנה טובה",
  link: ""
},
```

אם רוצים באנר לחיץ, מוסיפים כתובת ב-`link`.
כדי להסתיר, מחזירים `enabled` ל-`false`.

גודל מומלץ: יחס רחב, למשל 1600×500 או 1600×600.
