import { motion } from "framer-motion";

export function BlogSkeleton() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Skeleton */}
            <div className="text-center mb-16">
                <div className="h-14 sm:h-16 w-32 bg-muted/50 rounded-lg mx-auto mb-6 animate-pulse" />
                <div className="space-y-3 max-w-2xl mx-auto">
                    <div className="h-6 bg-muted/50 rounded-lg w-full animate-pulse" />
                    <div className="h-6 bg-muted/50 rounded-lg w-3/4 mx-auto animate-pulse" />
                </div>
            </div>

            {/* Tag Filter Skeleton */}
            <div className="mb-12">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="h-9 w-20 bg-muted/50 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        />
                    ))}
                </div>
            </div>

            {/* Blog Cards Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                    <BlogCardSkeleton key={index} delay={index * 0.1} />
                ))}
            </div>
        </div>
    );
}

function BlogCardSkeleton({ delay }: { delay: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.3 }}
            className="bg-card border rounded-lg overflow-hidden h-full flex flex-col"
        >
            {/* Cover Image Skeleton */}
            <div className="relative h-48 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-lg bg-muted/40" />
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="p-4 flex-1 flex flex-col">
                {/* Meta Info Skeleton */}
                <div className="flex items-center gap-4 mb-3 justify-between">
                    <div className="flex items-center gap-4">
                        {/* Date */}
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-muted/50 rounded animate-pulse" />
                            <div className="h-4 w-20 bg-muted/50 rounded animate-pulse" />
                        </div>
                        {/* Read Time */}
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-muted/50 rounded animate-pulse" />
                            <div className="h-4 w-16 bg-muted/50 rounded animate-pulse" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Views */}
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-muted/50 rounded animate-pulse" />
                            <div className="h-4 w-8 bg-muted/50 rounded animate-pulse" />
                        </div>
                        {/* Likes */}
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-muted/50 rounded animate-pulse" />
                            <div className="h-4 w-8 bg-muted/50 rounded animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Title Skeleton */}
                <div className="space-y-2 mb-3">
                    <div className="h-7 bg-muted/50 rounded-lg w-full animate-pulse" />
                    <div className="h-7 bg-muted/50 rounded-lg w-4/5 animate-pulse" />
                </div>

                {/* Excerpt Skeleton */}
                <div className="space-y-2 mb-4 flex-1">
                    <div className="h-4 bg-muted/50 rounded w-full animate-pulse" />
                    <div className="h-4 bg-muted/50 rounded w-full animate-pulse" />
                    <div className="h-4 bg-muted/50 rounded w-3/4 animate-pulse" />
                </div>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="h-6 w-16 bg-muted/50 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        />
                    ))}
                </div>
            </div>
        </motion.article>
    );
}
