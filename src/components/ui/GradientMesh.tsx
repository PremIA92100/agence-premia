"use client";

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - Rose */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full animate-blob opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
        }}
      />
      {/* Blob 2 - Bleu */}
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full animate-blob-reverse opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      {/* Blob 3 - Violet */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-blob opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />
      {/* Grid overlay subtil */}
      <div className="absolute inset-0 bg-grid opacity-50" />
    </div>
  );
}

export function GradientMeshDark() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full animate-blob opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full animate-blob-reverse opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />
      {/* Grain */}
      <div className="absolute inset-0 grain-overlay" />
    </div>
  );
}
