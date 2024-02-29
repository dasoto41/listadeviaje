export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        Ya podes empezar a agregar productos a tu lista! 📋
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const porcentaje = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {porcentaje === 100
        ? "ya empacaste todo!🎉"
        : `tienes ${numItems} elementos en tu
        lista y ya empacaste ${numPacked} (${porcentaje} %)`}
    </footer>
  );
}
