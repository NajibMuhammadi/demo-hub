interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    gradient: string;
}

export default function ProjectCard({
    title,
    category,
    description,
    gradient,
}: ProjectCardProps) {
    return (
        /* The parent must be marked as a container */
        <div className="@container group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/5 p-1 transition-all hover:border-white/20">
            {/* Background Gradient Effect */}
            <div
                className={`absolute inset-0 opacity-20 blur-3xl transition-opacity group-hover:opacity-40 ${gradient}`}
            />

            <div className="relative flex h-full flex-col justify-between rounded-2xl bg-gray-950/80 p-6 backdrop-blur-sm">
                <div>
                    <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-secondary backdrop-blur-md">
                        {category}
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">
                        {title}
                    </h3>

                    <p className="text-gray-400">{description}</p>
                </div>

                {/* Container Query Magic: 
          When this card is wide (e.g. spans 2 columns), the button gets larger.
          Syntax: @lg:class-name 
        */}
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-xs text-gray-500 font-mono">
                        v4.0.0
                    </span>
                    <button className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 @lg:px-8 @lg:py-3 @lg:text-base">
                        View Demo &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}
