export function DevIndicator() {
  if (process.env.NODE_ENV !== 'development') return null;
  
  return (
    <div className="fixed bottom-0 left-0 bg-yellow-400 text-black px-2 py-1 text-sm">
      Using Mock DB
    </div>
  );
}