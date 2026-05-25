import "@/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Nav } from "@/components/Nav";

import appCss from "../styles.css?url";

const themeInitScript = `(function(){try{var t=localStorage.getItem('av_theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold" style={{ color: "var(--text-primary)" }}>404</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
          this page doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" style={{ color: "var(--accent)", fontSize: 13 }}>
            ← home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
          something went wrong
        </h1>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md px-4 py-2 text-sm"
            style={{ background: "var(--accent)", color: "#0F1117" }}
          >
            try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "artem veklich" },
      { name: "description", content: "Portfolio of artem veklich — networks, transport systems, hardware, applied engineering." },
      { property: "og:title", content: "artem veklich" },
      { name: "twitter:title", content: "artem veklich" },
      { property: "og:description", content: "Portfolio of artem veklich — networks, transport systems, hardware, applied engineering." },
      { name: "twitter:description", content: "Portfolio of artem veklich — networks, transport systems, hardware, applied engineering." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/77d00c76-a335-4530-91f4-e6dfb210d37a/id-preview-1fea9136--69a5b64e-3a81-441a-b0e9-7c1098738fc2.lovable.app-1779715333994.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/77d00c76-a335-4530-91f4-e6dfb210d37a/id-preview-1fea9136--69a5b64e-3a81-441a-b0e9-7c1098738fc2.lovable.app-1779715333994.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ background: "var(--bg-page)" }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ background: "var(--bg-page)", minHeight: "100vh", color: "var(--text-primary)" }}>
        <Nav />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
