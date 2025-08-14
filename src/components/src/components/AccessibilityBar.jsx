export default function AccessibilityBar({ toggleTheme, theme }) {
  return (
    <nav aria-label="נגישות">
      <button onClick={toggleTheme}>
        {theme === 'dark' ? "בהיר" : "כהה"}
      </button>
      <button accessKey="h" aria-label="מעבר לכותרת הראשית">ראשי (alt+h)</button>
      <button accessKey="m" aria-label="מעבר לתפריט">תפריט (alt+m)</button>
    </nav>
  );
}
