import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/50 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tighter text-brand-primary"
                >
                    DemoHub
                </Link>
                <div className="flex gap-4 text-sm font-medium text-gray-400">
                    <Link
                        href="#"
                        className="hover:text-white transition-colors"
                    >
                        Showcase
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-white transition-colors"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
