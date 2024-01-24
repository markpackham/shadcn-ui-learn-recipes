import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
  return (
    <main>
    <div className="grid grid-cols-3 gap-8">
      {/* Cycle through array of characters outputting a SkeletonCard for each one (9 in total) */}
        {"abcdefghi".split('').map(i => (<SkeletonCard key={i} />))}
    </div>
    </main>
  )
}
