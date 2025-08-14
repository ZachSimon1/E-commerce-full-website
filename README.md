# E-commerce Full Website

## מבנה הפרויקט
הפרויקט כולל את המבנה הבא:
- `/src`: קבצים מקוריים של הפרויקט.
- `/public`: קבצים ציבוריים כמו תמונות ודפי HTML.
- `/components`: רכיבי React.
- `/styles`: סגנונות CSS.

## הוראות התקנה והרצה מקומית
1. Clone את הריפוזיטורי:
   ```bash
   git clone https://github.com/ZachSimon1/E-commerce-full-website.git
   ```
2. עבור לתיקיית הפרויקט:
   ```bash
   cd E-commerce-full-website
   ```
3. התקן את התלויות:
   ```bash
   npm install
   ```
4. הרץ את הפרויקט:
   ```bash
   npm start
   ```

## הוראות העלאה ל-GitHub
1. הוסף את הקבצים לרפוזיטורי:
   ```bash
   git add .
   ```
2. בצע commit לשינויים:
   ```bash
   git commit -m "Your commit message"
   ```
3. דחוף את השינויים ל-GitHub:
   ```bash
   git push origin main
   ```

## דיפלוי ל-GitHub Pages
1. התקן את חבילת GitHub Pages:
   ```bash
   npm install gh-pages --save-dev
   ```
2. הוסף את ההגדרות הדרושות ל-package.json.
3. דחוף את השינויים עם:
   ```bash
   npm run deploy
   ```

## אופטימיזציה לנגישות ועיצוב
- השתמש ב-ARIA labels כדי לשפר את הנגישות.
- ודא שהצבעים והגופנים נוחים לקריאה.

## תמיכה בתרגום
- השתמש בספריות כמו `react-i18next` לתמיכה בתרגום.
- אפשר להוסיף קבצי תרגום בהתאם לשפות המיועדות.

## המלצות לאבטחה
- השתמש ב-HTTPS לכל ההתקשרויות.
- שמור על עדכניות התלויות שלך.
- בדוק את הקוד שלך עבור פגיעויות פוטנציאליות.
